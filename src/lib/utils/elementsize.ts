import { writableToReadable } from '$lib/utils/globalstores'
import { writable } from "svelte/store";
import { resizeObserverStore } from '$lib/utils/globalstores'

export interface ElementSize {
	width: number;
	height: number;
}

/**
 * Reactive size of an HTML element.
 *
 * @param target
 * @param callback
 * @param options
 */
export function elementSizeStore<T extends Element | null>(target: T) {
	const size = writable<ElementSize>({ width: 0, height: 0 });
	if (target !== null) {
		resizeObserverStore(target, ([entry]) => {
			size.set({
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			});
		});
	}

	return writableToReadable(size);
}