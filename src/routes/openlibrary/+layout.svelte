<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import Header from '$lib/components/SubHeader.svelte'
 	import { page } from '$app/stores'
	import visibilityMode from '$lib/stores/visibility'

	let dropdown = false
	let fake = false
	let link:any
	let sidebar = false

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function fauxfake(){
		fake = !fake
	}

	onMount(() => {
		link = $page.url
	})

</script>

<svelte:head>
<title>Discover and Reconnect at Bṛhat Open Library</title>
</svelte:head>


<Header sidebar={sidebar}>
</Header>

<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>

<style lang="sass">


.light
	background: #FFFFFF

.dark
	background: #171717

</style>