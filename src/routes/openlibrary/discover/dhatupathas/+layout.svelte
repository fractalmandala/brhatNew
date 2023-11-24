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
			.from('db-dhatupathafixed')
			.select()
			.textSearch('dhatuiast', input)
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
	<h3 slot="sectiontitle">Dhātupāṭhaḥ</h3>
	<slot />
	<div slot="listhindi" class="list">
		{#if purs && purs.length > 0}
			{#each purs as item}
				<p>
					<a href="/openlibrary/discover/dhatupatha/{item.id}">{item.dhatu}</a>
				</p>
			{/each}
		{/if}
		<div class="rta-row ycenter colgap200 bord-top bord-bot p-top-8 p-bot-8">
			<button class="blank-button" on:click={loadLess}>Less</button>
			<button class="blank-button" on:click={loadMore}>More</button>
		</div>
	</div>
	<div slot="listenglish" class="list">
		{#if purs && purs.length > 0}
			{#each purs as item}
				<p>
					<a href="/openlibrary/discover/dhatupatha/{item.id}">{item.dhatuiast}</a>
				</p>
			{/each}
		{/if}
		<div class="rta-row ycenter colgap200 bord-top bord-bot p-top-8 p-bot-8">
			<button class="blank-button" on:click={loadLess}>Less</button>
			<button class="blank-button" on:click={loadMore}>More</button>
		</div>
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
						<a href="/openlibrary/discover/concordance/{item.uid}">{item.word}</a>
					</p>
				{/each}
			</div>
		{/if}
	</div>
</Discover>
