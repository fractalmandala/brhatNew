<script lang="ts">

	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import Lenis from '@studio-freight/lenis'
	import Header from '$lib/components/Header.svelte'
	import '$lib/styles/global.sass'
	import '$lib/styles/types.sass'
	import Footer from '$lib/components/Footer.svelte'
	import Tipper from '$lib/components/Tipper.svelte'

	onMount(() => {
		let url = $page.url.pathname
		const lenis = new Lenis({
			duration: 1.2,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			wheelMultiplier: 0.65,
			smoothWheel: true,
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



<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
</svelte:head>


<Header>
</Header>
<div id="appbox">
	<slot></slot>
	<Footer></Footer>
</div>
<Tipper/>

<style lang="sass">

#appbox
	width: 100vw
	box-sizing: border-box
	overflow-x: hidden

</style>

