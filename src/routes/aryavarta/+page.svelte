<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { soaChapter1 } from '$lib/utils/supapulls';
	import { fly } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let panels: any;
	let faux: boolean = false;
	let y: number;
	let link: any;
	let movement: number;
	let iW: number;

	let isP = Array(50).fill(false);
	let i = 0;
	isP[i] = true;

	function toggleP(index: number) {
		isP[index] = !isP[index];
	}

	function nextP() {
		i += 1;
	}

	function prevP() {
		i -= 1;
	}

	$: if (i) {
		isP[i] = true;
	}

	$metaUrl = '/aryavarta';
	$metaTitle = `Chapter 1 - Kaśyapa's Lament`;
	$metaDescription = 'A visual tale through the premonitions of an ancient ṛṣī.';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/4.webp';
	$metaType = 'webpage';

	$: if (iW <= 1023) {
		movement = 5;
	} else {
		movement = y;
	}

	function fakefaux() {
		faux = !faux;
	}

	onMount(async () => {
		panels = await soaChapter1();
		link = $page.url.pathname;
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW} />

<div class="rta-column outer-box minH ycenter x1">
	<p style="color: #ff3d00">Chapter 1</p>
	<h2 style="transform: translateY({y}px);">Kaśyapa's Lament</h2>
	<p>
		Our first release in the Scrolls of Āryavarta project. A collaboration with<a
			style="color: #ff3d00;"
			href="https://twitter.com/TheEmissaryCo"
			target="_blank"
			rel="noreferrer">The Emissary</a
		>, who rendered the images in this story and triggered it all to begin with.
	</p>
	<a href="/aryavarta/1" class="genbutton">Start</a>
</div>

<style lang="sass">




.x1
	overflow: hidden
	padding-top: 80px
	@media screen and (min-width: 1024px)
		gap: 16px
		h2
			padding: 16px 0
	@media screen and (max-width: 1023px)
		padding-top: 128px
		padding-bottom: 64px
		gap: 0
		h2
			padding: 16px 0


</style>
