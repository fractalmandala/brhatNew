import { writable } from 'svelte/store'
import { browser } from '$app/environment' 

const storedVisibilityMode = browser
  ? JSON.parse(localStorage.getItem('visibilityMode') || 'false')
  : false;

// Create a writable store with the storedVisibilityMode or default to false
const visibilityMode = writable(storedVisibilityMode);

export default visibilityMode;