<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	export let data;

	let prevID = data.id - 1;
	let nextID = data.id + 1;

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

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.dhatuiast} | {data.dhatu}</h5>
		<p>{data.artha_hindi} | {data.artha_english}</p>
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/dhatupatha/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/dhatupatha/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>
