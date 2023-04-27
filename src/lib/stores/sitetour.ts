import { writable } from 'svelte/store'
import { browser } from '$app/environment' 

const storedSiteTour = browser
  ? JSON.parse(localStorage.getItem('siteTour') || 'true')
  : true;

// Create a writable store with the storedVisibilityMode or default to false
const siteTour = writable(storedSiteTour)

export default siteTour