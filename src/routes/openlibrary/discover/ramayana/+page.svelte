<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Vālmīki Rāmāyaṇa at Bṛhat Open Library';
	$metaDescription =
		'Explore Vālmīki Rāmāyaṇa at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/ramayana';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>
