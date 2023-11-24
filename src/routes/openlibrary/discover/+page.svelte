<script lang="ts">
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Shell from '$lib/components/PageShell.svelte';
 import Head from '$lib/components/HeadComponent.svelte'

	$metaTitle = 'Discover at Bṛhat Open Library';
	$metaDescription =
		'Explore digitized texts and research tools at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover';
</script>

<Head title={$metaTitle} metaDescription={$metaDescription} metaUrl={$metaUrl} metaImage={$metaImage}></Head>

<section class="rta-column rowgap400 bigbox">
	<h3>Discover, at Bṛhat Open Library</h3>
	<p class="mid soft">
		The Open Library provides this space to search, research and explore within Sanskrit texts via
		their digital, modularized forms. For any of the texts here, find words, specific verses, word
		break-downs, dhātu-based etymologies and more. Special texts such as the Puranic Index and the
		Vedic Concordance allow for cross-text searches and discovery.
	</p>
	<div class="onpagelinks rta-column rowgap200">
		<h6 class="title bord-bot p-bot-16"><a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a></h6>
		<h6 class="title bord-bot p-bot-16"><a href="/openlibrary/discover/puranaindex">Puranic Index</a></h6>
  <h6 class="title bord-bot p-bot-16"><a href="/openlibrary/discover/rigveda">Ṛgveda Saṃhitā</a></h6>
  <h6 class="title bord-bot p-bot-16"><a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a></h6>
  <h6 class="title bord-bot p-bot-16"><a href="/openlibrary/discover/concordance">Vedic Concordance</a></h6>
	</div>
</section>

<style lang="sass">

.bigbox
 padding-right: 24%
 @media screen and (max-width: 1023px) and (min-width: 900px)
  padding-right: 20%
 @media screen and (max-width: 899px) and (min-width: 769px)
  padding-right: 12%
 @media screen and (max-width: 768px)
  padding-right: 0  

</style>

