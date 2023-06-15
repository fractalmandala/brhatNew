<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import IconLoading from '$lib/icons/IconLoading.svelte';
	import { padasofRamayana, verseSlug, rmLemma } from '$lib/utils/synaptic';
	import GenCard from '$lib/reader/GenCard.svelte';
	import ReaderNav from '$lib/reader/ReaderNav.svelte';
	let url: any;
	let url2: any;
	let nextID: any;
	let prevID: any;
	let currentKanda: any;
	let currentSarga: any;
	let currentVerse: any;
	let pads: any;
	let newID: any;
	let prevData: any;
	let nextData: any;
	let fake = false;
	let lemmas: any;

	function fauxfake() {
		fake = !fake;
	}

	$: url = $page.url.pathname;
	$: url2 = $page.url.pathname.substr(41, 20);
	$: newID = data.id;
	$: currentKanda = data.kanda;
	$: currentSarga = data.sarga;
	$: currentVerse = data.verse;
	$: nextID = data.id + 1;
	$: prevID = data.id - 1;
	$: (async () => {
		pads = await padasofRamayana(currentKanda, currentSarga, currentVerse);
		prevData = await verseSlug(prevID);
		nextData = await verseSlug(nextID);
		lemmas = await rmLemma(url2);
	})();

	onMount(async () => {
		url = $page.url.pathname;
		url2 = $page.url.pathname.substr(41, 20);
		newID = data.id;
		currentKanda = data.kanda;
		currentSarga = data.sarga;
		currentVerse = data.verse;
		pads = await padasofRamayana(currentKanda, currentSarga, currentVerse);
		nextID = data.id + 1;
		prevID = data.id - 1;
		prevData = await verseSlug(prevID);
		nextData = await verseSlug(nextID);
		lemmas = await rmLemma(url2);
	});

	export let data;
</script>

<div class="rta-row colgap200 forlegend p-bot-16 bord-bot">
	<small
		><a href="/openlibrary/ramayana/{data.kanda}">Kāṇḍa {data.kanda}</a> |
		<a href="/openlibrary/ramayana/{data.kanda}/{data.sarga}">Sarga {data.sarga}</a></small
	>
	<h3 class="hindiadobe">Pāda {data.verse}</h3>
</div>

<div class="rta-column rowgap300 p-top-16 thekey">
	{#if pads && pads.length > 0}
		{#each pads as item, i}
			<GenCard>
				<div slot="small">
					{item.kanda} - {item.sarga} - {item.verse} - {item.pada}
				</div>
				<div slot="header5">
					{item.devanagari}
				</div>
				<div slot="header6">
					{item.iast}
				</div>
			</GenCard>
		{/each}
	{:else}
		<IconLoading />
	{/if}
</div>
