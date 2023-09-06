<script lang="ts">
	import { onMount } from 'svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import Shell from '$lib/components/PageShell.svelte';
	import Library from '$lib/components/Library.svelte';
	import { reveal } from '$lib/reveal/exportReveal';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	let dropdownOne = true;
	let dropdownTwo = true;
	let searchHelpOn = false;
	let breakPoint: boolean;
	let bolInput: any;
	let iw: number;
	let responsive: boolean;

	$metaUrl = 'https://www.brhat.in/openlibrary';
	$metaTitle = 'Bṛhat Open Library';
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaType = 'webpage';

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Element;
		if (target && !target.closest('.bolsearch')) {
			bolInput.value = '';
			searchHelpOn = false;
		}
	}

	$: if (iw <= 1023) {
		responsive = true;
	} else {
		responsive = false;
	}

	$: if (iw <= 1023) {
		breakPoint = true;
		dropdownOne = false;
		dropdownTwo = false;
	} else {
		breakPoint = false;
		dropdownOne = true;
		dropdownTwo = true;
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
	});
</script>

<svelte:window bind:innerWidth={iw} />
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mobile-bol.webp')"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 p-top-128" id="intro">
		<h4 use:reveal>
			Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More. It
			is a tribute to the hard labor of people known and unknown that have created for us an
			unbelievable repository of Indian knowledge.
		</h4>
		<h5>
			All material here is sourced from public domains, permitted for resharing, and uploaded under
			the CC0 1.0 Open License. If you find any material that violates this, please write to us at
			contact@brhat.in and we will remove it from the collection.
		</h5>
	</section>
	<Library />
</Shell>

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 100vh


</style>
