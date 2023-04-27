<script lang="ts">

	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import siteTour from '$lib/stores/sitetour'
	import { scale } from 'svelte/transition'
	import { expoOut } from 'svelte/easing'
	import Lenis from '@studio-freight/lenis'
	import '$lib/styles/global.sass'
	import '$lib/styles/types.sass'
	import '$lib/styles/tokens.sass'
	import Footer from '$lib/components/Footer.svelte'

	let innerW:number
	let breakPointOn:boolean
	let showFooter = true
	let link:any
	let firstVisit = false
	let beginTour = false
	let currentPage = 1
	const totalPages = 7

  function navigate(action: string) {
    if (action === 'visit') {
      // Increment the currentPage counter
      currentPage++;
    } else if (action === 'skip') {
      // Skip the page by incrementing the currentPage counter
      currentPage++;
    }

    // If the journey is over, reset the currentPage counter
    if (currentPage > totalPages) {
      currentPage = 1;
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
		const lenis = new Lenis({
			duration: 3,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			wheelMultiplier: 0.68,
			smoothWheel: true,
			smoothTouch: false,
			touchMultiplier: 0,
			infinite: false,
		})
		function raf(time: any){
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		link = $page.url.pathname
		firstVisit = localStorage.getItem('firstVisit') === null
		if (firstVisit) {
			localStorage.setItem('firstVisit', 'false')
		}
		console.log(firstVisit)
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
	{#key link}
	<slot></slot>
	{/key}
	{#if showFooter}
	<Footer></Footer>
	{/if}
</div>

{#if firstVisit}
<div id="firstVisitToast" class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div class="rta-column rowgap-16 toast">
		<h4>Namaste!</h4>
		<h6>
			We detect that this is your first visit to bṛhat.in
		</h6>
		<h6>
			Would you like to take a quick tour?
		</h6>
		<div class="rta-row colgap-8">
			<button class="basic-button">
				No
			</button>
			<button class="basic-button" on:click={initiateModal}>
				Yes
			</button>
		</div>
	</div>
</div>
{/if}

{#if beginTour}
<div class="rta-in-col cc-all modalclass" in:scale={{ duration: 500, easing: expoOut}} out:scale={{ duration: 300, easing: expoOut}} data-lenis-prevent>
	<div id="inside-modal" class="rta-in-col">
		<div class="rta-row end-row">
			<button class="basic-button" on:click={initiateModal} class:light={$visibilityMode} class:dark={!$visibilityMode}>Close</button>
		</div>
		<div class="rta-in-col rowgap-16 ta-l type">
			<h6>Namaste,</h6>
			<p>Welcome to Bṛhat - the Culture Engine.</p>
			<p>To skip the tour and find some quick links, explore the links in our footer, where every Bṛhat sub-brand and its programs are listed.</p>
			<p>
				To resume or restart the tour at any time, use the link "Site Tour" in the footer.
			</p>
			<p>
				This quick tour will take you through the site's main areas and features in 7 quick steps. Click begin below to start!
			</p>
			<button class="basic-button" class:light={$visibilityMode} class:dark={!$visibilityMode}
				on:click={siteStartTour}
				>
				Begin
			</button>
		</div>
	</div>
</div>
{/if}



<style lang="sass">

#inside-modal
	background: white
	border-radius: 8px
	@media screen and (min-width: 1024px)
		width: 32%
		height: 480px
		padding: 24px
	@media screen and (max-width: 1023px)
		width: calc(100% - 64px)
		height: calc(100% - 128px)		
		padding: 16px

.toast
	border-radius: 4px

#firstVisitToast
	position: fixed
	background: transparent
	border-radius: 4px
	z-index: 900
	h4
		font-weight: 600
	h6
		font-weight: 400
	@media screen and (min-width: 1024px)
		width: 320px
		height: 160px
		bottom: 48px
		right: 24px
		h4
			font-size: 16px
		h6
			font-size: 14px
	@media screen and (max-width: 1023px)
		width: calc(100vw - 64px)
		height: 160px
		top: 72px
		right: 16px
		h4
			font-size: 18px
		h6
			font-size: 16px

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

