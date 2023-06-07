<script lang="ts">
	import { onMount } from 'svelte';
	import { langMode, changeLanguage } from '$lib/stores/globalstores';
	import { breakOne, breakZero, breakTwo, themeMode } from '$lib/stores/globalstores';
	import { getSvarnanjali } from '$lib/utils/supapulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import SvarLogo from '$lib/logos/Svarnanjali2.svelte';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import Youtuber2 from '$lib/components/Youtuber.svelte';
	import P01 from '$lib/svpanels/english/panel01.svelte';
	import P02 from '$lib/svpanels/english/panel02.svelte';
	import P03 from '$lib/svpanels/english/panel03.svelte';
	import P04 from '$lib/svpanels/english/panel04.svelte';
	import P05 from '$lib/svpanels/english/panel05.svelte';
	import P06 from '$lib/svpanels/english/panel06.svelte';

	let fake = false;
	let language = false;
	let y: number;
	let iW: number;
	let idv = 'OeCFCHwSpd0';
	let vids: any;

	function toggleLanguage() {
		language = !language;
	}

	function fauxfake() {
		fake = !fake;
	}

	onMount(async () => {
		vids = await getSvarnanjali();
	});
</script>

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
	<div class="rta-column rowgap300 p-top-64 p-bot-64 ycenter xcenter">
		<div class="video-container">
			<Youtuber youTubeId={idv} />
		</div>
		<div class="rta-row colgap300 xcenter-d ycenter textarea">
			<h5>Continue in English, or</h5>
			<div class="rta-column ta-c-d">
				<a href="/svarnanjali/hindi" class="genbutton-l" on:click={changeLanguage}>
					हिन्दी में पढ़े
				</a>
			</div>
		</div>
	</div>
</div>
<div class="rta-grid grid3 p-top-64 rowgap300 colgap300 outer-box ycenter">
	{#if vids && vids.length > 0}
		{#each vids as item}
			<Youtuber2 youTubeId={item.videoid} />
		{/each}
	{/if}
</div>
<div class="rta-column holdsbutton">
	<a class="genbutton" href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer">
		View on YouTube
	</a>
</div>
<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class:lightmode={$themeMode}
	class:darkmode={!$themeMode}
>
	<P01 />
	<P02 />
	<P03 />
	<P04 />
	<P05 />
</div>

<style lang="sass">

.holdsbutton
	align-items: center

.textarea
	background: rgba(0,0,0,0.8)
	padding: 16px
	h5
		color: white
	

.genbutton-l
	font-size: 24px
	width: max-content
	
.levelzero
	.video-container
		width: 100%
		max-width: 720px
		height: 400px
		border-radius: 24px
	.rta-row.xcenter-d
		width: 720px
		column-gap: 128px
		text-align: center

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


</style>
