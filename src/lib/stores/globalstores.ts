import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const storedSideMode = browser ? JSON.parse(localStorage.getItem('sideMode') || 'false') : false;

export const sideMode = writable(storedSideMode);

const storedLanguage = browser ? JSON.parse(localStorage.getItem('langMode') || 'false') : false;

export const langMode = writable(storedLanguage);

export function changeLanguage() {
	if (browser) {
		langMode.update((mode) => {
			const newMode = !mode;
			localStorage.setItem('langMode', JSON.stringify(newMode));
			return newMode;
		});
	}
}

const storedThemeMode = browser ? JSON.parse(localStorage.getItem('themeMode') || 'false') : false;

export const themeMode = writable(storedThemeMode);

const storedReadingMode = browser
	? JSON.parse(localStorage.getItem('readingMode') || 'false')
	: false;

export const readingMode = writable(storedReadingMode);

const initialWidth = browser ? window.innerWidth : 1024;
export const innerWidth = writable(initialWidth);

export const breakOne = derived(
	innerWidth,
	($innerWidth) => $innerWidth <= 1023 && $innerWidth > 768
);

export const breakTwo = derived(innerWidth, ($innerWidth) => $innerWidth <= 768);

export const breakZero = derived(innerWidth, ($innerWidth) => $innerWidth > 1023);

export const breakZeroOne = derived(innerWidth, ($innerWidth) => $innerWidth <= 1023);

const initialChip = {
	isShown: false,
	title: '',
	color: ''
};

export const chipStore = writable(initialChip);

export function showChip(title: string, color: string) {
	chipStore.update((state) => ({ ...state, isShown: true, title, color }));
}
export function hideChip() {
	chipStore.update((state) => ({ ...state, isShown: false, title: '', color: '' }));
}
