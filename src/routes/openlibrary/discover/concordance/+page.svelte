<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Vedic Concordance at Bṛhat Open Library';
	$metaDescription =
		'Explore Vedic Concordance at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/concordance';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<p>
	The Vedic Concordance is an index by Maurice Bloomfield of the principal words used in the Vedic
	Sanskrit texts.
</p>
