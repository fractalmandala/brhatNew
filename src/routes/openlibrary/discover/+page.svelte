<script lang="ts">
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Shell from '$lib/components/PageShell.svelte';

	$metaTitle = 'Discover at Bṛhat Open Library';
	$metaDescription =
		'Explore digitized texts and research tools at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
>
	<section class="rta-column rowgap400 p-top-128">
		<h4>Discover, at Bṛhat Open Library</h4>
		<p class="mid soft">
			The Open Library provides this space to search, research and explore within Sanskrit texts via
			their digital, modularized forms. For any of the texts here, find words, specific verses, word
			break-downs, dhātu-based etymologies and more. Special texts such as the Puranic Index and the
			Vedic Concordance allow for cross-text searches and discovery.
		</p>
		<div class="onpagelinks rta-column rowgap200">
			<h3><a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a></h3>
			<h3><a href="/openlibrary/discover/puranaindex">Puranic Index</a></h3>
			<h3><a href="/openlibrary/discover/rigveda">Ṛgveda Saṃhitā</a></h3>
			<h3><a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a></h3>
			<h3><a href="/openlibrary/discover/concordance">Vedic Concordance</a></h3>
		</div>
	</section>
</Shell>
