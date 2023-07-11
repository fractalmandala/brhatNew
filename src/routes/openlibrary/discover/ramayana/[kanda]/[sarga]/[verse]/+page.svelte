<script lang="ts">
	import { onMount } from 'svelte';
	import { padasofRamayana, verseSlug, rmLemma } from '$lib/utils/synaptic';
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	export let data;
	let url: any;
	let url2: any;
	let pads: any;
	let newID: any;
	let prevData: any;
	let nextData: any;
	let fake = false;
	let lemmas: any;

	let prevID = data.id - 1;
	let nextID = data.id + 1;

	function fauxfake() {
		fake = !fake;
	}

	$: newID = data.id;

	$metaTitle = 'Vālmīki Rāmāyaṇa at Bṛhat Open Library';
	$metaDescription =
		'Explore Vālmīki Rāmāyaṇa at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/ramayana';

	onMount(async () => {
		newID = data.id;
		pads = await padasofRamayana(data.kanda, data.sarga, data.verse);
		prevData = await verseSlug(data.kanda, data.sarga, data.verse);
		nextData = await verseSlug(data.kanda, data.sarga, data.verse);
		lemmas = await rmLemma(url2);
	});
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap400">
		{#if pads && pads.length > 0}
			{#each pads as item, i}
				<div class="rta-column rowgap50">
					<small>{item.kanda} - {item.sarga} - {item.verse} - {item.pada}</small>
					<h5 style="color: var(--opposite)">{item.devanagari}</h5>
					<h5 style="color: var(--opposite)">{item.iast}</h5>
				</div>
			{/each}
		{/if}
	</div>

	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/ramayana/{data.prevslug}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/ramayana/{data.nextslug}"
			><button class="newbutton">Next</button></a
		>
	</div>
</div>
