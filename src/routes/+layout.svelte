<script lang="ts">

	import { onMount } from 'svelte'
	import { invalidate } from '$app/navigation';
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { page } from '$app/stores'
	import type { LayoutData } from './$types';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores'
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { browser } from '$app/environment'
	import Lenis from '@studio-freight/lenis'
	import '$lib/styles/types.sass'
	import '$lib/styles/tokens.sass'
	import Footer from '$lib/components/Footer.svelte'
	import { lenisStore as lenis, setLenisStore } from '$lib/stores/lenis'
	import { useFrame } from '$lib/utils/lenisframe'

	let breakPointOn:boolean
	let prelocal = ''
	let precap = ''
	let localpage = ''
	let showFooter = true
	let link:any
	let firstVisit = false
	let fake = false

	inject({ mode: dev ? 'development' : 'production' });

	function fauxfake(){
		fake = !fake
	}

$: ({ supabase, session } = data);

	$: if ( $innerWidth <= 1023 ) {
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
		prelocal = $page.url.pathname.split('/').join(' | ');
		precap = prelocal.slice(2);
		localpage = precap.charAt(0).toUpperCase() + precap.slice(1) + ' | ';
		const lenis = new Lenis({
			duration: 0.6,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			wheelMultiplier: 0.4,
			smoothWheel: true,
			touchMultiplier: 1,
			infinite: false
		});
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		
		firstVisit = localStorage.getItem('firstVisit') === null

		if (firstVisit) {
			localStorage.setItem('firstVisit', 'false')
		}
	});

export let data: LayoutData;

</script>


<svelte:window bind:innerWidth={$innerWidth}/>

<svelte:head>
	<HeadComponent/>
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6NPMDTQVDE"></script>
	<script>
  	window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());

  	gtag('config', 'G-6NPMDTQVDE');
	</script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div id="appbox" class="themer" class:light={$themeMode} class:dark={!$themeMode}>

	<slot></slot>
	{#if showFooter}
	<Footer></Footer>
	{/if}
</div>

<style lang="sass">

#appbox
	width: 100vw
	box-sizing: border-box
	position: relative
	height: 100%
	display: flex
	flex-direction: column

</style>

