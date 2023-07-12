<script lang="ts">
	import RIDSidebar from '$lib/ridunits/RIDSidebar.svelte';
	import type { LayoutData } from './$types';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores';
	import { dev } from '$app/environment';
	import Chip from '$lib/components/Chip.svelte';
	import { inject } from '@vercel/analytics';
	import '$lib/styles/types.sass';
	import '$lib/styles/tokens.sass';
	import '$lib/styles/standard.sass';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	let breakPointOn: boolean;
	let fake = false;
	let keyTrigger: any;

	inject({ mode: dev ? 'development' : 'production' });

	$: if ($innerWidth <= 1023) {
		breakPointOn = true;
	} else {
		breakPointOn = false;
	}

	export let data: LayoutData;

	$: keyTrigger = data.url;
</script>

<svelte:window bind:innerWidth={$innerWidth} />

<main
	id="appbox"
	class="themer"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<PageTransition {keyTrigger}>
		<slot />
	</PageTransition>
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
	align-items: stretch

#appbox.light
	background: white

#appbox.dark
	background: #171717

</style>
