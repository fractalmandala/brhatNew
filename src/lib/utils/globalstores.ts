import type { Readable, Writable } from "svelte/store"
import { get_current_component, onDestroy } from "svelte/internal";


export function writableToReadable<T>({ subscribe }: Writable<T>): Readable<T> {
	return { subscribe: subscribe };
}

export function tryOnDestroy(fn: () => void) {
	try {
		get_current_component();
		onDestroy(fn);
	} catch {
		// fail silently
	}
}

export function resizeObserverStore(
	target: Element,
	callback: (entries: ResizeObserverEntry[]) => void
) {
	let observer: ResizeObserver | null = null;

	function cleanUp() {
		if (observer !== null) {
			observer.disconnect();
			observer = null;
		}
	}

	function connect() {
		cleanUp();
		observer = new ResizeObserver(callback);
		observer.observe(target);
	}

	function stop() {
		cleanUp();
	}

	tryOnDestroy(cleanUp);

	connect();

	return {
		stop,
	};
}

