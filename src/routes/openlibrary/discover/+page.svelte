<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Cursor from '$lib/anims/Cursor.svelte';

	$metaTitle = 'Discover at Bṛhat Open Library';
	$metaDescription =
		'Explore digitized texts and research tools at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="insidethepage">
		<h3 class="bord-bot p-bot-16">Discover, at Bṛhat Open Library</h3>
		<p class="p-top-16">
			The Open Library provides this space to search, research and explore within Sanskrit texts via
			their digital, modularized forms. For any of the texts here, find words, specific verses, word
			break-downs, dhātu-based etymologies and more. Special texts such as the Puranic Index and the
			Vedic Concordance allow for cross-text searches and discovery.
		</p>
		<div class="onpagelinks p-top-32 rta-column rowgap200">
			<h3><a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a></h3>
			<h3><a href="/openlibrary/discover/puranaindex">Puranic Index</a></h3>
			<h3><a href="/openlibrary/discover/rigveda">Ṛgveda Saṃhitā</a></h3>
			<h3><a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a></h3>
			<h3><a href="/openlibrary/discover/concordance">Vedic Concordance</a></h3>
		</div>
	</div>
</div>

<style lang="sass">

p
	line-height: 1.4

h3
	color: var(--opposite)
	a
		transition: 0.1s
	&:hover
		a
			color: #fe4a49

.levelzero
	.insidethepage
		width: 720px

.levelone
	.insidethepage
		width: 560px

</style>
