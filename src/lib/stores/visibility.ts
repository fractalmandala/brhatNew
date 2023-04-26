import { writable } from 'svelte/store'
import { browser } from '$app/environment' 

const storedVisibilityMode = browser
  ? JSON.parse(localStorage.getItem('visibilityMode') || 'true')
  : true;

// Create a writable store with the storedVisibilityMode or default to false
const visibilityMode = writable(storedVisibilityMode);

export default visibilityMode;