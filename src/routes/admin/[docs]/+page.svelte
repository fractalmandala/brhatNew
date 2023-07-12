<script lang="ts">
	import { onMount } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import Prism from 'prismjs';
	import '$lib/styles/prism.css';
	export let data;

	$metaTitle = data.title;
	$metaDescription = 'Internal Admin Links';
	$metaUrl = `https://www.brhat.in${data.url.pathname}`;
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
	$metaType = 'webpage';

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="doc-bar">
	<h2 class="bord-bot p-bot-16 m-bot-16">{data.title}</h2>
	<div class="doc-in">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="sass">

.doc-bar
	padding-top: 128px
	padding-bottom: 128px

.doc-bar
	@media screen and (min-width: 1024px)
		display: flex
		flex-direction: column
		align-items: center
		h2
			font-size: 48px
			width: 640px
		.doc-in
			width: 640px
	@media screen and (max-width: 1023px)
		padding-left: 32px
		padding-right: 32px
		display: flex
		flex-direction: column
		align-items: center
		h2
			font-size: 36px
			width: 640px
		.doc-in	
			width: 640px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px
		display: flex
		flex-direction: column
		align-items: center
		h2
			font-size: 28px
			width: 100%
		.doc-in
			width: 100%

</style>
