<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import PageProgress from '$lib/components/PageProgress.svelte';
	import tippy, { animateFill } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/animations/shift-away.css';
	import { mandalaAll } from '$lib/utils/localpulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';

	let fractals: any;
	let wide: number;
	let mobileView: boolean = false;
	let lightMode = false;
	let fake = false;
	let pageImage: any;
	let pageTitle: any;
	let ref: HTMLElement;

	function toggleLightMode() {
		lightMode = !lightMode;
	}

	function fauxfake() {
		fake = !fake;
	}

	$: if (wide <= 1023) {
		mobileView = true;
	} else {
		mobileView = false;
	}

	export let data;

	$metaUrl = 'https://www.brhat.in' + $page.url.pathname;
	$metaTitle = data.title;
	$metaDescription = 'An essay at Fractal Maṇḍala';
	$metaImage = data.image;
	$metaType = 'article';

	onMount(async () => {
		fractals = await mandalaAll();
		tippy('#single', {
			content: 'Toggle Dark/Light Mode.',
			duration: 300,
			arrow: true,
			animateFill: true,
			plugins: [animateFill],
			placement: 'right',
			theme: 'light'
		});
	});

	afterUpdate(() => {
		pageImage = data.image;
		pageTitle = data.title;
	});
</script>

<svelte:window bind:innerWidth={wide} />

<PageProgress --thispagebackground="#10C56D" --thispageheight="2px" />
<div class="rta-column">
	<div class="x0">
		<ParallaxImage --parallax="url('{pageImage}')" --parallaxresp="url('{pageImage}')" />
	</div>
	<div class="p-top-128 minH stout rta-column" bind:this={ref}>
		<div class="instout rta-column rowgap200 pagila2 green">
			<h2 class="p-bot-64">
				{pageTitle}
			</h2>
			<svelte:component this={data.content} />
		</div>
	</div>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden
	width: 100vw
	@media screen and (max-width: 1023px)
		height: 50vh




</style>
