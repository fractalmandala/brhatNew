<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import IconLoading from '$lib/icons/IconLoading.svelte';
	import { padasofRamayana, verseSlug, rmLemma } from '$lib/utils/synaptic';
	import GenCard from '$lib/reader/GenCard.svelte';
	import ReaderNav from '$lib/reader/ReaderNav.svelte';
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

	onMount(async () => {
		newID = data.id;
		pads = await padasofRamayana(data.kanda, data.sarga, data.verse);
		prevData = await verseSlug(data.kanda, data.sarga, data.verse);
		nextData = await verseSlug(data.kanda, data.sarga, data.verse);
		lemmas = await rmLemma(url2);
	});
</script>

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
