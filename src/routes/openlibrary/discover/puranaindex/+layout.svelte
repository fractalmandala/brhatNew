<script lang="ts">
	import { onMount } from 'svelte';
	import {
		breakZero,
		breakOne,
		breakTwo,
		langMode,
		changeLanguage
	} from '$lib/stores/globalstores';
	import { dbPuranaindex } from '$lib/utils/synaptic';
	import supabase from '$lib/utils/db';

	let purs: any;
	let limit = 99;
	let isSearch = false;
	let input = '';
	let searchResults: any;
	let searching = false;

	async function searchPuranas() {
		searching = true;
		const { data, error } = await supabase
			.from('db-puranaindex')
			.select()
			.textSearch('iast', input)
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

	function loadMore() {
		limit += 100;
	}

	function loadLess() {
		limit -= 100;
	}

	$: if (limit) {
		(async () => {
			purs = await dbPuranaindex(limit);
		})();
	}

	onMount(async () => {
		purs = await dbPuranaindex(limit);
	});
</script>

<div class="official" class:lzero={$breakZero} class:lone={$breakOne} class:ltwo={$breakTwo}>
	<div class="p-bot-32 rta-column rowgap300">
		<h3 class="bord-bot p-bot-16">Puranic Index</h3>
		<slot />
	</div>
	<div class="pagesider" data-lenis-prevent>
		<div class="rta-row colgap200 stripsticky">
			<button class="blank-button" on:click={setEnglish} class:selected={!$langMode && !isSearch}
				>English</button
			>
			<button class="blank-button" on:click={setEnglish} class:selected={$langMode && !isSearch}
				>Hindi</button
			>
			<button class="blank-button" on:click={toggleSearch} class:selected={isSearch}>Search</button>
		</div>
		<div class="list p-top-16 rta-column rowgap50">
			{#if $langMode && !isSearch}
				{#if purs && purs.length > 0}
					{#each purs as item}
						<p>
							<a href="/openlibrary/discover/puranaindex/{item.id}">{item.hindi}</a>
						</p>
					{/each}
				{/if}
				<div class="rta-row ycenter colgap200 bord-top bord-bot p-top-8 p-bot-8">
					<button class="blank-button" on:click={loadLess}>Less</button>
					<button class="blank-button" on:click={loadMore}>More</button>
				</div>
			{:else if !$langMode && !isSearch}
				{#if purs && purs.length > 0}
					{#each purs as item}
						<p>
							<a href="/openlibrary/discover/puranaindex/{item.id}">{item.iast}</a>
						</p>
					{/each}
				{/if}
				<div class="rta-row ycenter colgap200 bord-top bord-bot p-top-8 p-bot-8">
					<button class="blank-button" on:click={loadLess}>Less</button>
					<button class="blank-button" on:click={loadMore}>More</button>
				</div>
			{/if}

			{#if isSearch}
				<div class="rta-column rowgap50">
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
									<a href="/openlibrary/discover/puranaindex/{item.id}">{item.iast}</a>
								</p>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.searcher
	input
		border: none
		outline: none
		border-radius: 6px
		padding: 2px 8px
		font-size: 14px

h3
	color: var(--opposite)

.blank-button
	color: var(--onlyblack)
	&:hover
		color: #fe4a49

.blank-button.selected
	font-weight: bold
	color: var(--opposite)

.official
	display: flex
	p
		line-height: 1.4
		color: var(--textone)

.list
	p
		font-size: 16px
		color: var(--contraster2)
		text-transform: capitalize
		&:hover
			a
				color: var(--opposite)

.official.lzero, .official.lone
	flex-direction: row

.official.lzero
	.pagesider
		width: 320px
		padding-left: 48px
		height: calc(100vh - 160px)
		overflow-y: scroll
		position: sticky
		top: 128px
		.stripsticky
			position: sticky
			top: 0
			background: var(--background)
			padding-bottom: 16px
	>.rta-column
		width: calc(100% - 320px)
		border-right: 1px solid var(--contraster)
		padding-right: 64px

.official.lone
	.pagesider
		max-width: 240px
		min-width: 200px
		padding-left: 32px
	>.rta-column
		max-width: calc(100% - 240px)
		min-width: calc(100% - 200px)
		border-right: 1px solid var(--contraster)
		padding-right: 48px

.official.ltwo
	flex-direction: column-reverse
	padding-top: 80px
	.pagesider
		display: none
	>.rta-column
		width: 100%
	.p-bot-32.rta-column.rowgap300
		padding-bottom: 0
		h3
			margin-top: 0
			padding-top: 0

</style>
