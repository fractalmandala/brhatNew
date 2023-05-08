<script lang="ts">

	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { clickOutsideAction } from "svelte-legos"
	import { goto } from '$app/navigation'
	import visibilityMode from '$lib/stores/visibility'
	import WindowBinder from '$lib/components/WindowBinder.svelte'
	import { innerWidth, outerHeight, scrollY } from '$lib/stores/windows'
	import siteTour from '$lib/stores/sitetour'
	import Lenis from '@studio-freight/lenis'
	import '$lib/styles/types.sass'
	import '$lib/styles/tokens.sass'
	import Footer from '$lib/components/Footer.svelte'
	import { lenisStore as lenis, setLenisStore } from '$lib/stores/lenis'
	import { useScroll } from '$lib/utils/lenisscroll'
	import { useFrame } from '$lib/utils/lenisframe'
	import { raf } from '$lib/stores/tempus'

	let breakPointOn:boolean
	let innerW:number
	let showFooter = true
	let link:any
	let firstVisit = false
	let hash:any
	let beginTour = false
	let currentPage = 1
	const totalPages = 7
	let tourPage = Array(7).fill(false)
	let isMessageOpen = true

	function toggleMessage(){
		isMessageOpen = !isMessageOpen
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

	function toggleTourPage(index:number){
		tourPage[index] = !tourPage[index]
		for ( let i = 0; i < tourPage.length; i++) {
			if ( i !== index && tourPage[i] === true) {
				tourPage[i] = false
			}
		}
		if (beginTour === true) {
			beginTour = false
		}
	}

	function siteStartTour() {
	  if (browser) {
	    siteTour.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('siteTour', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}
		
	function initiateModal(){
		beginTour = !beginTour
		if ( firstVisit === true) {
			firstVisit = false
		}
	}

	function closeFirstVisitToast(){
		if ( firstVisit === true) {
			firstVisit = false
		}
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
</svelte:head>

<div id="appbox" class="themer" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<WindowBinder/>
	<slot></slot>
	{#if isMessageOpen}
	<div class="globaltoast rta-column">
		<div class="rta-row">
			<button class="blank-button" on:click={toggleMessage}>
			<svg class="closeguy point" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 10.3032L8.6064 6.9084L6.9084 8.6064L10.3032 12L6.9084 15.3936L8.6064 17.0916L12 13.6968L15.3936 17.0916L17.0916 15.3936L13.6968 12L17.0916 8.6064L15.3936 6.9084L12 10.3032Z" fill="white"/>
			</svg>
			</button>
		</div>
		<p>
			Namaste,
		</p>
		<p>
			Welcome to Bṛhat. We are currently transferring our site hosting server and moving to a new framework.
		</p>
		<p>
			You may experience some bugs, dead-links or accessibility bugs over the next 24-odd hours. Please forgive us for the inconvenience. All systems should be normal very soon!
		</p>
		<p>
			-8 May 2023 1200 hours.
		</p>
	</div>
	{/if}
	{#if showFooter}
	<Footer></Footer>
	{/if}
</div>

<style lang="sass">

.closeguy
	object-fit: contain
	width: 20px
	border-radius: 12px
	height: 20px
	&:hover
		path
			fill: #fe4a49

.globaltoast
	.rta-row
		justify-content: flex-end

.globaltoast.rta-column
	position: fixed
	z-index: 1000
	background-color: hsla(0,0%,5%,1)
	background-image: radial-gradient(at 64% 81%, hsla(99,100%,13%,1) 0px, transparent 50%), radial-gradient(at 70% 16%, hsla(0,64%,25%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(38,85%,39%,1) 0px, transparent 50%)
	p
		color: white
		line-height: 1.2
		margin-bottom: 12px
	@media screen and (min-width: 1024px)
		padding: 16px
		border-radius: 8px
		box-shadow: 4px 6px 7px #d7d7d7
		bottom: 32px
		right: 32px
		width: 360px
		height: 240px
		p
			font-size: 14px
	@media screen and (max-width: 1023px)
		padding: 8px
		box-shadow: none
		bottom: 0px
		right: 0px
	
		width: 100%
		height: max-content
		p
			font-size: 12px

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

