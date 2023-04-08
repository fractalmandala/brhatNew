<script lang="ts">

	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import '$lib/styles/global.sass'
	import '$lib/styles/types.sass'
	import Footer from '$lib/components/Footer.svelte'

	onMount(() => {
		let url = $page.url.pathname
	})

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
</svelte:head>

<div id="appbox">
	<slot></slot>
	<Footer></Footer>
</div>

