<script lang="ts">
	export let data;
	import { onMount } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { mandalaAll } from '$lib/utils/localpulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';

	let fractals: any;
	let wide: number;
	let mobileView: boolean = false;

	$metaUrl = 'https://www.brhat.in' + $page.url.pathname;
	$metaTitle = data.title;
	$metaDescription = 'Essays at Ṛta in Design';
	$metaImage = data.image;
	$metaType = 'webpage';

	$: if (wide <= 1023) {
		mobileView = true;
	} else {
		mobileView = false;
	}

	onMount(async () => {
		fractals = await mandalaAll();
	});
</script>

<svelte:window bind:innerWidth={wide} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="x0">
	<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')" />
</div>
<div class="rta-column stout minH p-top-128">
	<div class="instout rta-column rowgap200 newrta">
		<h3>
			{data.title}
		</h3>
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="sass">


.x0
	height: 100vh
	overflow: hidden



</style>
