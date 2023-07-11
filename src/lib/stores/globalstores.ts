import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const storedSideMode = browser ? JSON.parse(localStorage.getItem('sideMode') || 'false') : false;

export const sideMode = writable(storedSideMode);

const storedsecondsidemode = browser ? JSON.parse(localStorage.getItem('sideMode') || 'false') : false;

export const secondSide = writable(storedsecondsidemode);

export function toggleSecondSide() {
	if (browser) {
		secondSide.update((mode) => {
			const newMode = !mode;
			localStorage.setItem('secondSide', JSON.stringify(newMode));
			return newMode;
		});
	}
}

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

const storedAuthState = browser ? JSON.parse(localStorage.getItem('authState') || 'false') : false;

export const authState = writable(storedAuthState)

const storedThemeMode = browser ? JSON.parse(localStorage.getItem('themeMode') || 'false') : false;

export const themeMode = writable(storedThemeMode);

const storedReadingMode = browser
	? JSON.parse(localStorage.getItem('readingMode') || 'false')
	: false;

export const readingMode = writable(storedReadingMode);

const initialWidth = browser ? window.innerWidth : 1024;
export const innerWidth = writable(initialWidth);

export const breakOne = derived(innerWidth, ($innerWidth) => $innerWidth <= 1023 && $innerWidth > 768);

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

const initialAuth = {
	isShown: false,
	type: false
}

export const authStore = writable(initialAuth)

export function showAuth(type: boolean){
	authStore.update((state) => ({ ...state, isShown: true, type}))
}

export function hideAuth(){
	authStore.update((state) => ({ ...state, isShown: false}))
}

const iniModal = {
	isShown: false,
	ifPDF: false,
}

export const modalStore = writable(iniModal)

export function showModal(ifPDF:boolean){
	modalStore.update((state) => ({ ...state, isShown: true, ifPDF}));
}

export function hideModal(ifPDF:boolean){
	modalStore.update((state) => ({ ...state, isShown: false, ifPDF}));
}