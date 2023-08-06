<script lang="ts">
	import Parallax from '$lib/components/ParallaxImage.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';

	$metaUrl = 'https://www.brhat.in/aryavarta';
	$metaTitle = 'Scrolls of Āryavarta';
	$metaDescription =
		'An exploration of the Bhārata that once was and could have been, via AI art and historical fiction.';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/website/soakey.webp';
	$metaType = 'webpage';
</script>

<div class="x000">
	<Parallax
		--parallax="url(https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/website/soakey.webp)"
		--parallaxresp="url(https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/website/soakey.webp)"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<h2 use:reveal>Scrolls of Āryavarta</h2>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			is an exploration of the Bhārata that once was, or could have been, using the media of AI art
			and historical fiction. Each chapter is an imagination into Paurāṇika lore and shared
			civilizational memories. <b
				>The depictions, timelines, and descriptions are all fictionalized.</b
			>
		</h5>
		<div class="onpagelinks rta-column rowgap200 p-top-16">
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 0, opacity: 0, scale: 0 }}>
				<a href="/aryavarta/kashyapaslament">1 - KAŚYAPA'S LAMENT</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 50, opacity: 0, scale: 0 }}>
				<a href="/aryavarta/sutaandsuda">2 - SŪTA AND SUDĀ</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 100, opacity: 0, scale: 0 }}>
				<a href="/aryavarta/places">3 - NAGARA, NADĪ, JANAPADA</a>
			</h3>
		</div>
	</section>
</Shell>

<style lang="sass">

.x000
	height: 100vh
	overflow: hidden

.onpagelinks h3
	transition: 0.15s
	&:hover
		color: #fe4a49

</style>
