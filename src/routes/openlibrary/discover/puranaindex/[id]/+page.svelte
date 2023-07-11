<script lang="ts">
	import Breaker from '$lib/components/Breaker.svelte';
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	export let data;

	let prevID = data.id - 1;
	let nextID = data.id + 1;

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

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.iast} | {data.hindi}</h5>
		<Breaker text={data.about} />
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/puranaindex/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/puranaindex/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>

<style lang="sass">

.conts
	border: 1px solid var(--contraster)
	padding: 24px
	border-radius: 6px

</style>
