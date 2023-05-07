import { writable } from 'svelte/store'
export const innerWidth = writable(0)
export const outerHeight = writable(0);
export const scrollY = writable(0);