<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import Lenis from '@studio-freight/lenis'
	import '$lib/styles/types.sass'
	import '$lib/styles/tokens.sass'
	import Footer from '$lib/components/Footer.svelte'
	import { lenisStore as lenis, setLenisStore } from '$lib/stores/lenis'
	import { useFrame } from '$lib/utils/lenisframe'

	let breakPointOn:boolean
	let innerW:number
	let showFooter = true
	let link:any
	let firstVisit = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	$: if ( innerW <= 1023 ) {
		breakPointOn = true
 	} else {
		breakPointOn = false
	}

	$: if ( link === "/brhat") {
		showFooter = false
	} else {
		showFooter = true
	}

	onMount(() => {
		const lenisInstance = new Lenis();
		setLenisStore(lenisInstance);
		$lenis?.destroy();
		
		firstVisit = localStorage.getItem('firstVisit') === null

		if (firstVisit) {
			localStorage.setItem('firstVisit', 'false')
		}
	});

	useFrame((time) => {
		$lenis?.raf(time);
	});

</script>


<svelte:window bind:innerWidth={innerW}/>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6NPMDTQVDE"></script>
	<script>
  	window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());

  	gtag('config', 'G-6NPMDTQVDE');
	</script>
</svelte:head>

<div id="appbox" class="themer" class:light={$visibilityMode} class:dark={!$visibilityMode}>

	<slot></slot>
	{#if showFooter}
	<Footer></Footer>
	{/if}
</div>

<style lang="sass">

#appbox
	width: 100vw
	box-sizing: border-box
	overflow-x: hidden
	overflow-y: hidden
	position: relative
	height: 100%
	display: flex
	flex-direction: column

</style>

