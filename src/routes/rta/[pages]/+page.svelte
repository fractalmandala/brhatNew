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

	$metaUrl = $page.url.pathname;
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
<div class="rta-column outer-box p-top-64 limit">
	<h3>
		{data.title}
	</h3>
</div>
<div class="rta-column">
	<div class="carrier p-bot-64 newrta">
		<svelte:component this={data.content} />
	</div>
	<div
		class="rta-row colgap100 outer-box limit xcenter-d"
		style="padding-top: 16px; border-top: 1px solid #ececec"
	>
		<button class="greenbutton"><a href={data.prev}>Prev</a></button>
		<button class="greenbutton"><a href={data.next}>Next</a></button>
	</div>
</div>

<style lang="sass">

.carrier
	place-self: center

.x0
	height: 100vh
	overflow: hidden

.limit
	h3
		color: var(--opposite)

.greenbutton a
	color: white
	&:hover
		text-decoration: none
	

</style>
