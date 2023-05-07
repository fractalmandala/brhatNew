<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { browser } from '$app/environment'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Header from '$lib/components/SubHeader.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import RtaLinks from '$lib/links/RtaLinks.svelte'

	let sidebar = false
	let flytime = true
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	afterUpdate(() => {
		sidebar = false
		flytime = true
	})

</script>

<svelte:head>
	<HeadComponent>
		Ṛta in Design at
	</HeadComponent>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Varta:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Header sidebar={sidebar}>
</Header>

<div class="pagethemer" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>
