import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment' 

const initialWidth = browser ? window.innerWidth : 1024;
export const windowWidth = writable(initialWidth);

export const siteName = 'Fractal Maṇḍala'

const storedThemeMode = browser
  ? JSON.parse(localStorage.getItem('themeMode') || 'false')
  : false;

export const themeMode = writable(storedThemeMode);

const storedReadingMode = browser
	? JSON.parse(localStorage.getItem('readingMode') || 'false')
	: false;

export const readingMode = writable(storedReadingMode)

export const breakOne = derived(
  windowWidth,
  $windowWidth => $windowWidth <= 1023 && $windowWidth > 768
);

export const breakTwo = derived(
  windowWidth,
  $windowWidth => $windowWidth <= 768
);

export const breakZero = derived(
	windowWidth,
	$windowWidth => $windowWidth > 1023
);

export const breakZeroOne = derived(
	windowWidth,
	$windowWidth => $windowWidth <= 1023
);
