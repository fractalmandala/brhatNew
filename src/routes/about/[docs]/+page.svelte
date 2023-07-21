<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { page } from '$app/stores';
	import { mandalaAll } from '$lib/utils/localpulls';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';

	let fractals: any;
	let wide: number;
	let mobileView: boolean = false;
	export let data;

	$metaUrl = 'https://www.brhat.in' + $page.url.pathname;
	$metaTitle = data.title;
	$metaDescription = data.about;
	$metaType = 'webpage';

	$: if (wide <= 1023) {
		mobileView = true;
	} else {
		mobileView = false;
	}

	onMount(async () => {
		$metaUrl = 'https://www.brhat.in' + $page.url.pathname;
		$metaTitle = data.title;
		$metaDescription = data.about;
		fractals = await mandalaAll();
	});
</script>

<svelte:window bind:innerWidth={wide} />

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100 bord-bot" id="intro">
		<div class="rta-column rowgap200">
			<h1 class="titleborder">{data.title}</h1>
			<h5 style="color: var(--grade3)">{data.about}</h5>
		</div>
	</section>
	<section class="rta-column rowgap400 xcenter p-top-64" id="body">
		<article class="textpad rta-column rowgap400" id="text">
			<svelte:component this={data.content} />
			<div class="rta-row colgap200 xstart ycenter bord-top p-top-32">
				<a href={data.prev}><button class="newbutton big">Prev</button></a>
				<a href={data.next}><button class="newbutton big">Next</button></a>
			</div>
		</article>
	</section>
</Shell>

<style lang="sass">

.titleborder
	border-left: 6px solid #fe4a49
	padding-left: 32px
	@media screen and (max-width: 768px)
		padding-left: 20px

.textpad
	@media screen and (min-width: 769px)
		width: 640px
	@media screen and (max-width: 768px) and (min-width: 576px)
		width: 512px
	@media screen and (max-width: 575px)
		width: 100%

</style>
