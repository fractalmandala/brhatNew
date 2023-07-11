<script lang="ts">
	import { onMount } from 'svelte';
	import {
		breakZero,
		breakOne,
		breakTwo,
		langMode,
		changeLanguage,
		secondSide
	} from '$lib/stores/globalstores';
	import { dbDhatus } from '$lib/utils/synaptic';
	import supabase from '$lib/utils/db';
	import SecondSide from '$lib/reader/SecondSide.svelte';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';
	import Discover from '$lib/reader/DiscoverShell.svelte';

	let purs: any;
	let limit = 99;
	let isSearch = false;
	let input = '';
	let searchResults: any;
	let searching = false;
	let fake = false;

	async function searchPuranas() {
		searching = true;
		const { data, error } = await supabase
			.from('db-ramayana')
			.select()
			.textSearch('ftsmain', input)
			.order('id');
		if (error) throw new Error(error.message);
		searching = false;
		input = '';
		return data;
	}

	function handleSearch() {
		(async () => {
			searchResults = await searchPuranas();
		})();
	}

	function toggleSearch() {
		isSearch = !isSearch;
	}

	function setEnglish() {
		changeLanguage();
	}

	function toggleSecond() {
		$secondSide = !$secondSide;
	}

	function closeSecond() {
		$secondSide = false;
	}

	function fauxfake() {
		fake = !fake;
	}

	function loadMore() {
		limit += 100;
	}

	function loadLess() {
		limit -= 100;
	}

	$: if (limit) {
		(async () => {
			purs = await dbDhatus(limit);
		})();
	}

	onMount(async () => {
		purs = await dbDhatus(limit);
	});
</script>

<Discover>
	<h3 slot="sectiontitle">Vālmīki Rāmāyaṇa</h3>
	<slot />
	<div slot="listhindi" class="list">
		<p><a href="/openlibrary/discover/ramayana/1">काण्ड १</a></p>
		<p><a href="/openlibrary/discover/ramayana/2">काण्ड २</a></p>
		<p><a href="/openlibrary/discover/ramayana/3">काण्ड ३</a></p>
		<p><a href="/openlibrary/discover/ramayana/4">काण्ड ४</a></p>
		<p><a href="/openlibrary/discover/ramayana/5">काण्ड ५</a></p>
		<p><a href="/openlibrary/discover/ramayana/6">काण्ड ६</a></p>
		<p><a href="/openlibrary/discover/ramayana/7">काण्ड ७</a></p>
	</div>
	<div slot="listenglish" class="list">
		<p><a href="/openlibrary/discover/ramayana/1">Kāṇḍa 1</a></p>
		<p><a href="/openlibrary/discover/ramayana/2">Kāṇḍa 2</a></p>
		<p><a href="/openlibrary/discover/ramayana/3">Kāṇḍa 3</a></p>
		<p><a href="/openlibrary/discover/ramayana/4">Kāṇḍa 4</a></p>
		<p><a href="/openlibrary/discover/ramayana/5">Kāṇḍa 5</a></p>
		<p><a href="/openlibrary/discover/ramayana/6">Kāṇḍa 6</a></p>
		<p><a href="/openlibrary/discover/ramayana/7">Kāṇḍa 7</a></p>
	</div>

	<div class="rta-column rowgap50" slot="searchform">
		<form
			class="searcher rta-row ycenter colgap100 p-bot-32"
			on:submit|preventDefault={handleSearch}
		>
			<input type="text" bind:value={input} />
			<button class="blank-button" type="submit">Go</button>
		</form>
		{#if searching}
			<p>Searching...</p>
		{/if}
		{#if searchResults && searchResults.length > 0}
			<div class="results">
				{#each searchResults as item}
					<p>
						<a href="/openlibrary/discover/ramayana/{item.kanda}/{item.sarga}/{item.verse}"
							>{item.index}</a
						>
					</p>
				{/each}
			</div>
		{/if}
	</div>
</Discover>
