<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';
	import BOLSidebar from '$lib/reader/BOLSidebar.svelte';
	import '$lib/styles/discover.sass';

	let y: number;
	let mouseY: number;
	let latestScrollY: number;
	let isInvisible = false;
	let expandSub = false;

	function toggleSub() {
		expandSub = !expandSub;
	}

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		} else {
			isInvisible = false;
		}
		latestScrollY = y;
	}

	onMount(() => {
		const handleMouse = (event: { clientY: number }) => {
			mouseY = event.clientY;
			if (mouseY <= 128) {
				isInvisible = false;
			}
		};
		window.addEventListener('mousemove', handleMouse);
		return () => {
			window.removeEventListener('mousemove', handleMouse);
		};
	});
</script>

<svelte:window bind:scrollY={y} />

<div
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
	class:light={!$themeMode}
	class:dark={$themeMode}
 class="documentationer" 
>
 <div class="doc-side rta-column">
  <p class="small onlyblack">ALL TEXTS:</p>
  <p class="small soft"><a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a></p>
  <p class="small soft"><a href="/openlibrary/discover/puranaindex">Puranic Index</a></p>
  <p class="small soft"><a href="/openlibrary/discover/rigveda">Ṛgveda Saṃhitā</a></p>
  <p class="small soft"><a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a></p>
  <p class="small soft"><a href="/openlibrary/discover/concordance">Vedic Concordance</a></p>
 </div>
 <div class="doc-main rta-column">
	 <slot />
 </div>
</div>

<style lang="sass">

.onlyblack
 color: var(--texttwo)

.documentationer
 display: grid
 grid-auto-flow: row
 grid-template-rows: auto
 grid-template-columns: 300px 1fr
 grid-template-areas: "side main"
 column-gap: 0
 width: 100vw
 padding: 64px 32px
 box-sizing: border-box
 .doc-side
  grid-area: side
  height: calc(100vh - 64px)
  padding-top: 64px
  row-gap: 16px
 .doc-main
  grid-area: main
  padding-left: 64px
  padding-top: 64px
 @media screen and (max-width: 900px) and (min-width: 769px)
  grid-template-columns: 280px 1fr
 @media screen and (max-width: 768px)
  grid-template-columns: 1fr
  grid-template-areas: "main"
  .doc-side
   display: none  
  .doc-main
   padding-left: 0 

</style>
