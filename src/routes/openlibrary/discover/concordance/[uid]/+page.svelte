<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	export let data;

	let prevID = data.uid - 1;
	let nextID = data.uid + 1;

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

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.word} | {data.hindi}</h5>
		<p>{data.occurence}</p>
		<small class="tt-u">{data.reference}</small>
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/concordance/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/concordance/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>

<style lang="sass">

.conts
	border: 1px solid var(--contraster)
	padding: 24px
	border-radius: 6px

small
	color: var(--contraster2)

</style>
