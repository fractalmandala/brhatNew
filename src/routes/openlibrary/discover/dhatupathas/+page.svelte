<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Dhātupāṭhaḥ at Bṛhat Open Library';
	$metaDescription = 'Explore Dhātupāṭhaḥ at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/dhatupatha';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<p>
	The Dhātupāṭha is a key text associated with Pāṇini's Aṣṭadhyāyī. It is a lexicon of verbal roots-
	dhātus- with their properties and meanings. Pāṇini lists around ~2300 dhātus, and organizes them
	into 10 classes of 'present tense'. These dhātus are listed here in the order they occur. Click on
	any to navigate to its respective page. You could also use the search bar.
</p>
<small>
	All Dhātupāṭha data is credited to Ashtadhyayi.com, through their repository at <a
		href="https://github.com/ashtadhyayi"
		target="_blank"
		rel="noreferrer">Github.</a
	>
</small>

<style lang="sass">

a
	color: #fe4a49

</style>
