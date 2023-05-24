import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment' 

const storedThemeMode = browser
  ? JSON.parse(localStorage.getItem('themeMode') || 'false')
  : false;

export const themeMode = writable(storedThemeMode);

const storedReadingMode = browser
	? JSON.parse(localStorage.getItem('readingMode') || 'false')
	: false;

export const readingMode = writable(storedReadingMode)

const initialWidth = browser ? window.innerWidth : 1024;
export const innerWidth = writable(initialWidth);

export const breakOne = derived(
  innerWidth,
  $innerWidth => $innerWidth <= 1023 && $innerWidth > 768
);

export const breakTwo = derived(
  innerWidth,
  $innerWidth => $innerWidth <= 768
);

export const breakZero = derived(
	innerWidth,
	$innerWidth => $innerWidth > 1023
);

export const breakZeroOne = derived(
	innerWidth,
	$innerWidth => $innerWidth <= 1023
);
	