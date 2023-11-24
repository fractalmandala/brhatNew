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
	import { dbPuranaindex } from '$lib/utils/synaptic';
	import '$lib/styles/discover.sass';
	import supabase from '$lib/utils/db';
	import SecondSide from '$lib/reader/SecondSide.svelte';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';

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
		closeSearch();
	}

	function toggleSecond() {
		$secondSide = !$secondSide;
	}

	function closeSecond() {
		if ($breakTwo) {
			$secondSide = false;
		}
	}

	function closeSearch() {
		if (isSearch === true) {
			isSearch = false;
		}
	}

	function fauxfake() {
		fake = !fake;
	}

</script>

<div
	class="official bdr"
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
>
	<div class="p-bot-32 rta-column rowgap300">
		<div class="rta-row ycenter between bord-bot p-bot-16">
			<slot name="sectiontitle" />
			{#if $breakTwo}
				<button class="blank-button" on:click={toggleSecond}><Menu /></button>
			{/if}
		</div>
		<slot />
	</div>
	<div class="pagesider" data-lenis-prevent>
		<SecondSide>
			<div class="rta-row colgap200 stripsticky">
				<button class="blank-button" on:click={setEnglish} class:selected={!$langMode && !isSearch}
					>English</button
				>
				<button class="blank-button" on:click={setEnglish} class:selected={$langMode && !isSearch}
					>Hindi</button
				>
				<button class="blank-button" on:click={toggleSearch} class:selected={isSearch}
					>Search</button
				>
				{#if $breakTwo && $secondSide}
					<button class="blank-button" on:click={toggleSecond}>Close</button>
				{/if}
			</div>
			<div class="list p-top-16 rta-column rowgap50" on:click={closeSecond} on:keydown={fauxfake}>
				{#if $langMode && !isSearch}
					<slot name="listhindi" />
				{:else if !$langMode && !isSearch}
					<slot name="listenglish" />
				{/if}

				{#if isSearch}
					<slot name="searchform" />
				{/if}
			</div>
		</SecondSide>
	</div>
</div>
