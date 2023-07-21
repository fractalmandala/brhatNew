import type { Responsive, Transition, RevealOptions, Easing, CustomEasing, Devices, IDevice } from '$lib/reveal/types';
import { isPositiveInteger } from '$lib/reveal/validation';
import { markRevealNode } from '$lib/reveal/dom';
import seedrandom from 'seedrandom';
import { defOpts } from '$lib/reveal/config';
import { config } from '$lib/reveal/config';
import { clean } from '$lib/reveal/utils';

/**
 * Checks whether the breakpoints overlap.
 * @param responsive An object that instructs the library how to handle responsiveness for a given set of devices.
 * @returns Whether the breapoints overlap.
 */
export const hasOverlappingBreakpoints = (responsive: Responsive): boolean => {
	const { mobile, tablet, laptop, desktop } = responsive;

	return (
		mobile.breakpoint > tablet.breakpoint ||
		tablet.breakpoint > laptop.breakpoint ||
		laptop.breakpoint > desktop.breakpoint
	);
};

/**
 * Checks whether the breakpoints are valid or not.
 * @param responsive An object that instructs the library how to handle responsiveness for a given set of devices.
 * @returns Whether the breakpoints are valid.
 */
export const hasValidBreakpoints = (responsive: Responsive): boolean => {
	const breakpoints = Object.values(responsive).map((device) => device.breakpoint);

	const breakpointsOverlap = hasOverlappingBreakpoints(responsive);
	const allBreakpointsPositive = breakpoints.every((breakpoint) => isPositiveInteger(breakpoint));

	return !breakpointsOverlap && allBreakpointsPositive;
};

/**
 * Creates the CSS classes needed to add the transitions to the target element.
 * @param ref A reference name that will be prefixed in the class name.
 * @param transition The transition name to be prefixed in the class name.
 * @returns A tuple with the final CSS classes in the form of: [transitionDeclaration, transitionProperties]. The transition declaration class is used to declare a transition css rule to the target element. The transition properties class is used to create the actual transition.
 */
export const getRevealClassNames = (ref: string, transition: Transition): [string, string] => {
	const createClassNameTokens = (tokensArray: string[]) =>
		tokensArray
			.filter((token) => token && token !== '')
			.map((token) => token.replace(/\s/g, '-'))
			.join('__');

	const createClassName = (tokens: string, uid: string) => `sr__${tokens}__${uid}`;

	const tokens = {
		transition: [ref, 'transition', transition],
		properties: [ref, 'properties', transition]
	};

	const transitionClassTokens = createClassNameTokens(tokens.transition);
	const propertiesClassTokens = createClassNameTokens(tokens.properties);

	const seed = document.querySelectorAll('[data-action="reveal"]').length.toString();
	const uid = seedrandom(seed)().toString().slice(2);

	const transitionDeclaration = createClassName(transitionClassTokens, uid);
	const transitionProperties = createClassName(propertiesClassTokens, uid);

	return [transitionDeclaration, transitionProperties];
};

/**
 * Generates the CSS rule for the transition declaration of the target element.
 * @param className - The transition declaration CSS class of the target element.
 * @param options - The options to be used when creating the CSS for the transition declaration.
 * @returns The transition declaration CSS for the target element.
 */
export const createTransitionDeclarationCSS = (className: string, options: Required<RevealOptions>) => {
	const duration = options.duration / 1000;
	const delay = options.delay / 1000;
	const easingFunction = getEasingFunction(options.easing, options.customEasing);

	return `
		.${className} {
			transition: all ${duration}s ${delay}s ${easingFunction};
		}
	`;
};

/**
 * Generates the CSS rules for the start of the transition of the target element.
 * @param className - The transition properties CSS class of the target element.
 * @param options - The options to be used when creating the CSS for the transition properties.
 * @returns The transition properties CSS for the target element.
 */
export const createTransitionPropertiesCSS = (className: string, options: Required<RevealOptions>) => {
	const { transition } = options;
	const transitionPropertiesRules = getTransitionPropertiesCSSRules(transition, options);

	return `
		.${className} {
			${transitionPropertiesRules}
		}
	`;
};

/**
 * Creates the query for a set of devices whose breakpoints are within the range defined by the `start` and `end` breakpoints.
 * @param devices The devices used to generate the queries from.
 * @param previousDevice The (smaller) device right before the range defined by the `start` and `end` breakpoints. In other words: previousDevice --> startDevice (@start) --> endDevice(@end).
 * @param start The breakpoint that starts the range to consider to generate the query.
 * @param end The breakpoint that ends the range to consider to generate the query.
 * @returns The final optimal query to target the devices found within the [`start`-`end`] breakpoints range.
 */
const createQuery = (
	devices: Devices,
	previousDevice: [string, IDevice] | undefined,
	start: number,
	end: number
): string => {
	const smallest = Math.min(...devices.map(([, settings]) => settings.breakpoint));
	const largest = Math.max(...devices.map(([, settings]) => settings.breakpoint));

	if (previousDevice === undefined || start === smallest) {
		return `(max-width: ${end}px)`;
	}

	if (end === largest) {
		return `(min-width: ${previousDevice[1].breakpoint + 1}px)`;
	}

	return `(min-width: ${previousDevice[1].breakpoint + 1}px) and (max-width: ${end}px)`;
};

/**
 * Generate a set of optimal queries, given a list of supported devices.
 * @param devices The devices to analyze to create the queries from.
 * @returns A list of optimal queries that can be combined together to create a final media query to provide responsiveness to the elements to transition.
 */
const getOptimalQueries = (devices: Devices): string[] => {
	const queries: string[] = [];

	for (let i = 0; i < devices.length; ) {
		const startDevice = devices[i];

		if (!startDevice || !startDevice[1].enabled) {
			i++;
			continue;
		}

		let j = i;
		let query = '';
		let endDevice = startDevice;

		while (j < devices.length && endDevice[1].enabled) {
			const start = startDevice[1].breakpoint;
			const end = endDevice[1].breakpoint;
			const previous = devices[i - 1];
			query = createQuery(devices, previous, start, end);

			j++;
			endDevice = devices[j] || endDevice;
		}

		queries.push(query);
		i = j;
	}

	return queries;
};

/**
 * Decorates a set of CSS rules with media queries.
 * @param styles The CSS rules to be decorated.
 * @param responsive An object containing all the info on how to create the media queries.
 * @returns The CSS ruleset decorated with the media queries generated from the analysis of the `responsive` object.
 */
export const addMediaQueries = (styles: string, responsive: Responsive = config.responsive): string => {
	if (!hasValidBreakpoints(responsive)) {
		throw new Error('Cannot create media queries due to invalid breakpoints');
	}

	const devices: Devices = Object.entries(responsive);
	const allDevicesEnabled = devices.every(([, settings]) => settings.enabled);
	const allDevicesDisabled = devices.every(([, settings]) => !settings.enabled);

	if (allDevicesEnabled) return styles; // If styles are applied to every device, you don't need media queries

	if (allDevicesDisabled) {
		return clean(`
			@media not all {
				${styles}
			}
		`);
	}

	const query = getOptimalQueries(devices).join(', ');

	return clean(`
		@media ${query} {
			${styles}
		}
	`);
};

/**
 * Extracts the CSS rules of a given style.
 * @param styles The styles to extract the rules from.
 * @returns An array of CSS properties.
 */
export const extractCSSRules = (styles: string): string[] => {
	return clean(styles)
		.split(';')
		.filter((rule) => rule !== '')
		.map((rule) => rule.trim());
};

/**
 * Cleans and minifies CSS styles.
 * @param styles The CSS styles to be sanitized.
 * @returns The sanitized CSS styles.
 */
export const sanitizeStyles = (styles: string): string => {
	return extractCSSRules(styles).join('; ').concat('; ');
};


/**
 * Creates the CSS stylesheet where all the reveal styles are added to.
 */
export const createStylesheet = (): void => {
	const style = document.createElement('style');
	style.setAttribute('type', 'text/css');

	markRevealNode(style);

	const head = document.querySelector('head');
	if (head !== null) head.appendChild(style);
};

/**
 * Decorate CSS rules with vendor prefixes.
 * @param unprefixedStyles The unprefixed styles.
 * @returns The prefixed CSS styles.
 */
export const addVendorPrefixes = (unprefixedStyles: string): string => {
	const rules = extractCSSRules(unprefixedStyles);

	const prefixedStyles = rules.reduce((styles, rule) => {
		const [property, value] = rule
			.trim()
			.split(':')
			.map((r) => r.trim());

		const newStyles = sanitizeStyles(`
			-webkit-${property}: ${value};
			-ms-${property}: ${value};
			${property}: ${value};
		`);

		return styles.concat(newStyles);
	}, '');

	return prefixedStyles.trim();
};

/**
 * Merges any existing reveal styles with the new ones for the current DOM node that is being "activated". This process is necessary because one CSS stylesheet is shared among all the elements in the page.
 * @param existingRevealStyles Any existing reveal styles in the Svelte Reveal stylesheet.
 * @param nodeRevealStyles The CSS of the DOM node to be revealed.
 * @returns The merged CSS reveal styles to be used to update the Svelte Reveal stylesheet.
 */
export const mergeRevealStyles = (existingRevealStyles: string, nodeRevealStyles: string): string => {
	const combinedRevealStyles = [getMinifiedStylesFromQuery(existingRevealStyles), nodeRevealStyles].join(' ');
	return addMediaQueries(combinedRevealStyles).trim();
};

/**
 * Extracts and minifies styles nested inside a media query.
 * @param query The media query to extract the styles from.
 * @returns The nested styles.
 */
export const getMinifiedStylesFromQuery = (query: string): string => {
	const cleanQuery = clean(query.trim());
	const isMediaQuery = cleanQuery.startsWith('@media');

	if (!isMediaQuery) return cleanQuery;

	const separator = '<opening_media_query_brace>';
	const queryFromOpeningBrace = cleanQuery.replace(/{/, separator).split(separator)[1];

	if (!queryFromOpeningBrace) {
		throw new Error('Invalid media query');
	}

	const queryContent = queryFromOpeningBrace.slice(0, -1);

	return queryContent.trim();
};

/**
 * Get the transition properties CSS rules of a given transition.
 * @param transition The name of the transition.
 * @param options The options used by the transition.
 * @returns The CSS rules to be used to create the given transition.
 */
export const getTransitionPropertiesCSSRules = (transition: Transition, options: RevealOptions): string => {
	const { x, y, rotate, opacity, blur, scale } = Object.assign({}, defOpts, options);

	const transitions: Record<Transition, string> = {
		fly: `
			opacity: ${opacity};
			transform: translateY(${y}px);
		`,
		fade: `
			opacity: ${opacity};
		`,
		blur: `
			opacity: ${opacity};
			filter: blur(${blur}px);
		`,
		scale: `
			opacity: ${opacity};
			transform: scale(${scale});
		`,
		slide: `
			opacity: ${opacity};
			transform: translateX(${x}px);
		`,
		spin: `
			opacity: ${opacity};
			transform: rotate(${rotate}deg);
		`
	};

	if (!Object.keys(transitions).includes(transition)) {
		throw new Error('Invalid CSS class name');
	}

	const styles = transitions[transition];
	return addVendorPrefixes(styles);
};

/**
 * Creates a valid CSS easing function.
 * @param easing The easing function to be applied.
 * @param customEasing Optional tuple to create a custom cubic-bezier easing function.
 * @returns A valid CSS easing function.
 */
export const getEasingFunction = (easing: Easing, customEasing?: CustomEasing): string => {
	if (easing === 'custom' && customEasing) {
		return `cubic-bezier(${customEasing.join(', ')})`;
	}

	const weights = {
		linear: [0, 0, 1, 1],
		easeInSine: [0.12, 0, 0.39, 0],
		easeOutSine: [0.61, 1, 0.88, 1],
		easeInOutSine: [0.37, 0, 0.63, 1],
		easeInQuad: [0.11, 0, 0.5, 0],
		easeOutQuad: [0.5, 1, 0.89, 1],
		easeInOutQuad: [0.45, 0, 0.55, 1],
		easeInCubic: [0.32, 0, 0.67, 0],
		easeOutCubic: [0.33, 1, 0.68, 1],
		easeInOutCubic: [0.65, 0, 0.35, 1],
		easeInQuart: [0.5, 0, 0.75, 0],
		easeOutQuart: [0.25, 1, 0.5, 1],
		easeInOutQuart: [0.76, 0, 0.24, 1],
		easeInQuint: [0.64, 0, 0.78, 0],
		easeOutQuint: [0.22, 1, 0.36, 1],
		easeInOutQuint: [0.83, 0, 0.17, 1],
		easeInExpo: [0.7, 0, 0.84, 0],
		easeOutExpo: [0.16, 1, 0.3, 1],
		easeInOutExpo: [0.87, 0, 0.13, 1],
		easeInCirc: [0.55, 0, 1, 0.45],
		easeOutCirc: [0, 0.55, 0.45, 1],
		easeInOutCirc: [0.85, 0, 0.15, 1],
		easeInBack: [0.36, 0, 0.66, -0.56],
		easeOutBack: [0.34, 1.56, 0.64, 1],
		easeInOutBack: [0.68, -0.6, 0.32, 1.6]
	};

	if (easing !== 'custom' && Object.keys(weights).includes(easing)) {
		return `cubic-bezier(${weights[easing].join(', ')})`;
	}

	throw new Error('Invalid easing function');
};