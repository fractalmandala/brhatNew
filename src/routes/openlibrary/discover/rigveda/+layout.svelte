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
	import { dbRigveda } from '$lib/utils/synaptic';
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
			.from('db-rigveda')
			.select()
			.textSearch('iast', input)
			.order('primvalue');
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
			purs = await dbRigveda(limit);
		})();
	}

	onMount(async () => {
		purs = await dbRigveda(limit);
	});
</script>

<Discover>
	<h3 slot="sectiontitle">Vālmīki Rāmāyaṇa</h3>
	<slot />
	<div slot="listhindi" class="list">
		<p><a href="/openlibrary/discover/rigveda/1">मंडल १</a></p>
		<p><a href="/openlibrary/discover/rigveda/2">मंडल २</a></p>
		<p><a href="/openlibrary/discover/rigveda/3">मंडल ३</a></p>
		<p><a href="/openlibrary/discover/rigveda/4">मंडल ४</a></p>
		<p><a href="/openlibrary/discover/rigveda/5">मंडल ५</a></p>
		<p><a href="/openlibrary/discover/rigveda/6">मंडल ६</a></p>
		<p><a href="/openlibrary/discover/rigveda/7">मंडल ७</a></p>
		<p><a href="/openlibrary/discover/rigveda/8">मंडल ८</a></p>
		<p><a href="/openlibrary/discover/rigveda/9">मंडल ९</a></p>
		<p><a href="/openlibrary/discover/rigveda/10">मंडल १०</a></p>
	</div>
	<div slot="listenglish" class="list">
		<p><a href="/openlibrary/discover/rigveda/1">Maṇḍala 1</a></p>
		<p><a href="/openlibrary/discover/rigveda/2">Maṇḍala 2</a></p>
		<p><a href="/openlibrary/discover/rigveda/3">Maṇḍala 3</a></p>
		<p><a href="/openlibrary/discover/rigveda/4">Maṇḍala 4</a></p>
		<p><a href="/openlibrary/discover/rigveda/5">Maṇḍala 5</a></p>
		<p><a href="/openlibrary/discover/rigveda/6">Maṇḍala 6</a></p>
		<p><a href="/openlibrary/discover/rigveda/7">Maṇḍala 7</a></p>
		<p><a href="/openlibrary/discover/rigveda/8">Maṇḍala 8</a></p>
		<p><a href="/openlibrary/discover/rigveda/9">Maṇḍala 9</a></p>
		<p><a href="/openlibrary/discover/rigveda/10">Maṇḍala 10</a></p>
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
						<a href="/openlibrary/discover/rigveda/{item.mandala}/{item.suktacorrected}/{item.rca}"
							>{item.index}</a
						>
					</p>
				{/each}
			</div>
		{/if}
	</div>
</Discover>
