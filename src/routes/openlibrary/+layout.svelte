<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import Header from '$lib/components/SubHeader.svelte'
 	import { page } from '$app/stores'
	import { themeMode } from '$lib/stores/globalstores'
import HeadLocal from '$lib/components/HeadLocal.svelte'

	let dropdown = false
	let fake = false
	let link:any
	let sidebar = false


	let title = 'Bṛhat Open Library'
	let content:string = 'IKS Repository'
	let url = 'https://www.brhat.in/openlibrary'
	let type = 'webpage'
	let description = 'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.'
	let imagelink = 'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp'



	function toggleVisibility() {
	  if (browser) {
	    themeMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('themeMode', JSON.stringify(newMode));
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
<HeadLocal title={title} content={content} url={url} type={type} description={description} imagelink={imagelink}/>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>


<Header sidebar={sidebar}>
</Header>

<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot></slot>
</div>

<style lang="sass">


.light
	background: #FFFFFF

.dark
	background: #171717

</style>