<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import Header from '$lib/components/DhitiHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';

	$metaUrl = 'https://www.brhat.in/dhiti';
	$metaTitle = 'Dhīti at Bṛhat';
	$metaDescription =
		'Our blog, Dhīti, is an attempt to decode the aesthetics of culture manifest in art and literature, in the intention they were originally perceived in.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/dhiti.webp';
	$metaType = 'webpage';
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header />
<section class="rta-column conta">
	<section class="rta-row bannerstrip">
		<p>Two Bodhas</p>
		<p>Dharma Today</p>
		<p>IKS</p>
		<p>Culture and Policy</p>
		<p>All</p>
		<p>Writers</p>
	</section>
</section>

<style lang="sass">

.conta
	min-height: 100vh
	@media screen and (min-width: 1024px)
		padding-top: 144px

</style>
