import { listen } from "svelte/internal";
import type { ActionReturn } from "svelte/action";

interface Attributes {
	"on:clickOutside": (e: CustomEvent<void>) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function clickOutsideAction(node: HTMLElement): ActionReturn<{}, Attributes> {
	const handleClick = (event: Event) => {
		if (event.target !== null && !node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent("clickOutside"));
		}
	};

	const stop = listen(document, "click", handleClick, true);

	return {
		destroy() {
			stop();
		},
	};
}