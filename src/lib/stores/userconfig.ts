import { writable } from 'svelte/store';
import { archiveFilter, authorName, categoryName, tagName, dateBand, fontSize, newsFilter, userLang } from '$lib/stores/metastores'

export const metaTitle = writable('Bṛhat')
