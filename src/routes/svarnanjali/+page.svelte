<script lang="ts">
	import { onMount } from 'svelte';
	import { langMode, changeLanguage } from '$lib/stores/globalstores';
	import { breakOne, breakZero, breakTwo } from '$lib/stores/globalstores';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import SvarLogo from '$lib/logos/Svarnanjali2.svelte';

	let fake = false;
	let language = false;
	let y: number;
	let iW: number;

	function toggleLanguage() {
		language = !language;
	}

	function fauxfake() {
		fake = !fake;
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.css"
	/>
</svelte:head>

<svelte:window bind:innerWidth={iW} bind:scrollY={y} />

<!--hero image-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/krishnaradha.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/krishnaradha.webp')"
	>
		<div class="my-screen rta-column">
			<div class="goaway">
				<SvarLogo dimension={200} />
			</div>
		</div>
	</ParallaxImage>
</div>
<!--end-->
<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class="back"
	style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/522.webp')"
>
	<div class="rta-column rowgap300 minH ycenter xcenter">
		<div class="video-container">
			<video controls>
				<source src="/images/svanim3.mp4" type="video/mp4" />
				<track kind="captions" />
			</video>
		</div>
		<div class="rta-row colgap300 xcenter-d">
			<div class="rta-column ta-c-d">
				<a href="/svarnanjali/english" class="genbutton-l"> Explore in English </a>
			</div>
			<div class="rta-column ta-c-d">
				<a href="/svarnanjali/hindi" class="genbutton-l" on:click={changeLanguage}>
					हिन्दी में पढ़े
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="sass">

.genbutton-l
	font-size: 24px
	width: max-content
	



.levelzero
	.video-container
		width: 100%
		max-width: 720px
		height: 400px
		border-radius: 24px
		video
			object-fit: cover
			border-radius: 24px
			width: 100%
			height: 100%
	.rta-row.xcenter-d
		width: 720px
		column-gap: 128px
		text-align: center

.levelone
	.video-container video
		height: 280px

.leveltwo
	.video-container video
		height: 280px

.my-screen
	height: 100%
	width: 100%
	align-items: center
	justify-content: center
	background: rgba(255, 255, 255, 1)
	animation: fading 1.5s ease 5s forwards

.goaway
	animation: fading2 1s ease 5.5s forwards

@keyframes fading2
	0%
		opacity: 1
	100%
		opacity: 0

@keyframes fading
	0%
		background: rgba(255, 255, 255, 1)
	100%
		background: rgba(255, 255, 255, 0)

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 70vh
		.goaway
			height: 200px

.rta-column
	overflow: hidden

.minH
	height: 100vh


</style>
