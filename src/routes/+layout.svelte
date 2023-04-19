<script lang="ts">

	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import Lenis from '@studio-freight/lenis'
	import '$lib/styles/global.sass'
	import '$lib/styles/types.sass'
	import Footer from '$lib/components/Footer.svelte'

	let innerW:number

	let breakPointOn:boolean

	$: if ( innerW <= 1023 ) {
		breakPointOn = true
 	} else {
		breakPointOn = false
	}

	onMount(() => {
		let url = $page.url.pathname
		if ( innerW <= 1023 ) {
			breakPointOn = true
		} else {
			breakPointOn = false
		}
		const lenis = new Lenis({
			duration: 2.6,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 1,
			infinite: false,
		})
		function raf(time: any){
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	})

</script>


<svelte:window bind:innerWidth={innerW}/>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
</svelte:head>

<div id="appbox">
	<slot></slot>
	<Footer></Footer>
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

