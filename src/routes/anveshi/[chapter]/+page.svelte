<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		anveshiChapter
	} from '$lib/stores/metastores';
	import autoAnimate from '@formkit/auto-animate';
	import { ChevronDown } from 'lucide-svelte';
	import { chapterItinerary, allFaq } from '$lib/utils/supapulls';
	import { chapterTemples, chapterHighlight } from '$lib/utils/supapulls';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { EventInterface } from '@splidejs/splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/splide/css/core';

	let p: number;
	let alignGrid = false;
	let faqs: string | any[];
	let isFaqOpen: boolean[] = Array(15).fill(false);
	let highlights: any;
	let itins: string | any[];
	let openedDay: boolean[] = Array(5).fill(false);
	let temp: any;
	let area: any = Array(2).fill(false);
	area[1] = true;
	let visibleTemple: any = Array(30).fill(false);
	let fake = false;
	let elementTop: HTMLElement;

	export let data;

	$metaUrl = $page.url.pathname;
	$metaTitle = data.name;
	$metaDescription = data.excerpt;
	$metaImage = data.image;
	$metaType = 'webpage';
	$anveshiChapter = data.chapter;

	function fauxfake() {
		fake = !fake;
	}

	let tempIndex = 0;

	function toggleFaq(index: number) {
		isFaqOpen[index] = !isFaqOpen[index];
		for (let i = 0; i < isFaqOpen.length; i++) {
			if (i !== index && isFaqOpen[i] === true) {
				isFaqOpen[i] = false;
			}
		}
		if (alignGrid === false) {
			alignGrid = true;
		}
	}

	function toggleDay(index: number) {
		openedDay[index] = !openedDay[index];
		for (let i = 0; i < openedDay.length; i++) {
			if (i !== index && openedDay[i] === true) {
				openedDay[i] = false;
			}
		}
		if (alignGrid === false) {
			alignGrid = true;
		}
	}

	function toggleImage(index: number, element: HTMLElement) {
		visibleTemple[index] = !visibleTemple[index];
		for (let i = 0; i < visibleTemple.length; i++) {
			if (i !== index && visibleTemple[i] === true) {
				visibleTemple[i] = false;
			}
		}
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	export function MyTransition(Splide: any, Components: any) {
		const { bind } = EventInterface(Splide);
		const { Move } = Components;
		const { list } = Components.Elements;

		let endCallback: any;

		function mount() {
			bind(list, 'transitionend', (e) => {
				if (e.target === list && endCallback) {
					// Removes the transition property
					cancel();

					// Calls the `done` callback
					endCallback();
				}
			});
		}

		function start(index: any, done: any) {
			// Converts the index to the position
			const destination = Move.toPosition(index, true);

			// Applies the CSS transition
			list.style.transition = 'transform 800ms cubic-bezier(.44,.65,.07,1.01)';

			// Moves the carousel to the destination.
			Move.translate(destination);

			// Keeps the callback to invoke later.
			endCallback = done;
		}

		function cancel() {
			list.style.transition = '';
		}

		return {
			mount,
			start,
			cancel
		};
	}

	$: anyFaqOpen = isFaqOpen.some((item) => item);

	$: if ($anveshiChapter) {
		(async () => {
			itins = await chapterItinerary($anveshiChapter);
			temp = await chapterTemples($anveshiChapter);
			highlights = await chapterHighlight($anveshiChapter);
		})();
	}

	onMount(async () => {
		$anveshiChapter = data.chapter;
		itins = await chapterItinerary($anveshiChapter);
		temp = await chapterTemples($anveshiChapter);
		highlights = await chapterHighlight($anveshiChapter);
		faqs = await allFaq();
	});

	afterUpdate(() => {
		$anveshiChapter = data.chapter;
	});
</script>

<svelte:window bind:scrollY={p} />

<!--heading image-->
<div class="rta-column x0 top-p-64" id="heading-image">
	<img src={data.image} alt={data.name} />
</div>
<!--end-->

<!--header and metadetails-->
<div class="rta-column outer-box limit rowgap100 serif" id="section1">
	<div class="rta-column bord-bot p-bot-64">
		<h3 class="hindiadobe tt-u ta-c-d p-bot-16">{data.name}</h3>
		<em class="tt-u ta-c-d" id="section1line2">{data.status}</em>
		<div class="rta-row iconsrow">
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-dates.png" alt="datesicon" />
				<p>{data.dates}</p>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-duration.png" alt="durationicon" />
				<p>{data.duration}</p>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/icon-rupee.png" alt="priceicon" />
				{#if data.price}
					<p>{data.price}</p>
				{:else}
					<p>Price TBD</p>
				{/if}
			</div>
		</div>
		{#if highlights && highlights.length > 0}
			<div class="rta-column highlightscolumn p-top-64">
				{#each highlights as item}
					{#if item.name === 'temple'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
					{#if item.name === 'activity'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
					{#if item.name === 'person'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
<!--end-->

<!--detailed content and itinerary-->
<div class="rta-column outer-box limit rowgap600">
	<pre class="h5 hindiadobe">
			{data.content}
		</pre>

	<div class="rta-column top-p-32 rowgap300 bot-p-64">
		<h4 class="tt-u ta-c-d p-bot-16 hindiadobe">Itinerary</h4>
		{#if itins && itins.length > 0}
			{#each itins as item, i}
				<div
					class="rta-column rowgap200 accordion-item"
					class:accordionOpen={openedDay[i]}
					on:click={() => toggleDay(i)}
					on:keydown={fauxfake}
					use:autoAnimate
				>
					<div class="rta-row colgap100 xcenter-d" class:opened={openedDay[i]}>
						<div class="rta-column" class:rotated={openedDay[i]}>
							<ChevronDown color="#878787" />
						</div>
						<h6 class="hindiadobe">{item.name}</h6>
					</div>
					{#if openedDay[i]}
						<pre class="h5 ta-c-d hindiadobe">
						{item.content}
					</pre>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>
<!--end-->

<!--temples-->
<div class="rta-column outer-box rowgap100 p-top-64 p-bot-64">
	<div class="rta-column bord-top p-top-32 p-bot-32">
		<h4 class="bot-p-16 tt-u ta-c-d hindiadobe">
			Temples of {data.chapter}
		</h4>
		<small class="ta-c-d" style="color: var(--opposite)"
			>Use arrow keys/buttons to navigate, or drag/swipe</small
		>
	</div>
	{#if temp && temp.length > 0}
		<Splide
			aria-label="midjourneys"
			mount={{ AutoScroll }}
			hasTrack={false}
			options={{
				drag: true,
				keyboard: 'global',
				waitForTransition: true,
				type: 'slide',
				wheelMinThreshold: 1.1,
				speed: 900,
				direction: 'ltr',
				pagination: false,
				autoplay: true,
				pause: false,
				width: '88vw'
			}}
		>
			<SplideTrack>
				{#each temp as item, i}
					<SplideSlide>
						<div class="rta-row templesrow">
							<div class="rta-image">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="rta-column">
								<h6 class="hindiadobe">{item.name}</h6>
								<pre class="hindiadobe">{item.content}</pre>
							</div>
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div class="splide__arrows rta-row p-top-16">
				<button class="splide__arrow splide__arrow--prev genbutton">Prev</button>
				<button class="splide__arrow splide__arrow--next genbutton">Next</button>
			</div>
		</Splide>
	{/if}
</div>
<!--end-->

<!--faq-->
<div class="rta-column outer-box limit rowgap100 serif">
	<h4 class="bord-top p-bot-32 ta-c-d p-top-32 hindiadobe">FAQs</h4>
	<div class="rta-grid rowgap400 colgap600" id="faqgrid" class:calibrated={anyFaqOpen}>
		{#if faqs && faqs.length > 0}
			{#each faqs as item, i}
				<div
					class="rta-column rowgap100"
					class:opentab={isFaqOpen[i]}
					on:click={() => toggleFaq(i)}
					on:keydown={() => toggleFaq(i)}
					use:autoAnimate
				>
					<div class="rta-row fixed ytop colgap100 rowgap400">
						<div class="button-box" class:rotated={isFaqOpen[i]}>
							<ChevronDown size="27" color="#878787" />
						</div>
						<h6 class="hindiadobe faqs">{item.name}</h6>
					</div>
					{#if isFaqOpen[i]}
						<p class="hindiadobe faqs">{item.content}</p>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>

<!--end-->

<style lang="sass">

h6.faqs
	cursor: pointer
	margin: 0

p.hindiadobe.faqs
	font-size: 16px

.highlightsrow
	background: var(--contraster)
	padding: 8px
	border-radius: 8px
	align-items: center
	column-gap: 24px
	.rta-icons
		display: flex
		align-items: center
		width: 27px
		height: 27px
		img
			object-fit: contain
	h6
		margin: 0
		width: calc(100% - 56px)
		font-weight: 400
		line-height: 1.12

.highlightscolumn
	row-gap: 16px

pre
	box-sizing: border-box
	white-space: pre-line
	white-space: -moz-pre-line
	white-space: -pre-line
	white-space: -o-pre-line
	word-wrap: break-word
	word-break: break-word
	overflow: hidden

.splide__arrows
	justify-content: center
	column-gap: 16px

.templesrow
	@media screen and (min-width: 1024px)
		column-gap: 32px
		.rta-image
			width: 32%
			height: 30vh
		.rta-column
			width: 64%
	@media screen and (max-width: 1023px)
		flex-direction: column
		row-gap: 16px
		.rta-image, .rta-column
			width: 100%
		.rta-image
			height: 30vh

.iconsrow
	justify-content: center
	margin-top: 16px
	.rta-icon
		width: 104px

.rta-icon
	text-align: center
	row-gap: 8px
	img
		width: 40px
		height: 40px
		margin: auto
	p
		font-family: 'Space Grotesk', sans-serif
		color: var(--opposite)
		font-size: 12px

#heading-image
	@media screen and (min-width: 1024px)
		img
			border-radius: 16px

#section1line2
	background: #FF9F1C
	color: white
	padding: 2px 0
	@media screen and (max-width: 1023px)
		padding: 4px 8px

.x0
	img
		object-fit: cover
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center
		align-items: center
		img
			width: 80%
			height: 80%
			margin-top: 64px
	@media screen and (max-width: 1023px)
		height: 40vh
		img
			height: 100%

.accordion-item
	border-bottom: 1px solid var(--borderline)
	padding-bottom: 16px
	.rta-row
		cursor: pointer
		.rta-column
			transition: 0.15s
		.rta-column.rotated
			transform: rotate(180deg)




</style>
