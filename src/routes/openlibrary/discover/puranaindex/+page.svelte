<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Puranic Index at Bṛhat Open Library';
	$metaDescription = 'Explore Puranic Index at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/puranaindex';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<p>
	The Puranic Encyclopaedia is a meticulously put together text by Shri Vettam Mani. It is a
	comprehensive dictionary with special reference to the Itihāsa-Purāṇa corpus. We find here an
	index of each proper noun in the corpus- names, places, rivers, entities, and more.
</p>
