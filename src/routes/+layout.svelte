<script lang="ts">
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/components/MetaTag.svelte';
	import RIDSidebar from '$lib/ridunits/RIDSidebar.svelte';
	import type { LayoutData } from './$types';
	import {
		breakZero,
		breakOne,
		breakTwo,
		themeMode,
		innerWidth,
		sideMode,
		chipStore,
		showChip
	} from '$lib/stores/globalstores';
	import { dev } from '$app/environment';
	import Chip from '$lib/components/Chip.svelte';
	import { inject } from '@vercel/analytics';
	import Lenis from '@studio-freight/lenis';
	import '$lib/styles/types.sass';
	import '$lib/styles/tokens.sass';
	import Footer from '$lib/components/Footer.svelte';

	let breakPointOn: boolean;
	let fake = false;

	inject({ mode: dev ? 'development' : 'production' });

	function fauxfake() {
		fake = !fake;
	}

	$: ({ supabase, session } = data);

	$: if ($innerWidth <= 1023) {
		breakPointOn = true;
	} else {
		breakPointOn = false;
	}

	onMount(() => {
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
	});

	export let data: LayoutData;
</script>

<svelte:window bind:innerWidth={$innerWidth} />

<svelte:head>
	<HeadComponent />
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6NPMDTQVDE"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-6NPMDTQVDE');
	</script>
</svelte:head>

<main
	id="appbox"
	class="themer"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<slot />
	<RIDSidebar />
	<Chip />
	<Footer />
</main>

<style lang="sass">

#appbox
	width: 100vw
	box-sizing: border-box
	position: relative
	height: 100%
	display: flex
	flex-direction: column

</style>
