<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { getDescription, allDhatus } from '$lib/utils/supapulls';
	import type { DhatuSearch } from '$lib/types/SearchItem';
	import { scale } from 'svelte/transition';
	let y: number;
	let url: string;
	let deets: any;
	let dhats: any;
	let limit = 20;

	function loadMore(){
		limit += 10;
	}

	let inputElement: HTMLInputElement;
	let inputValue = '';
	let searchResults: DhatuSearch[] = [];
	let searchitems: any = [];
	let isFocused = false;
	let resultsWindow = false;

	async function loadItems() {
		searchitems = await allDhatus(limit);
	}

	loadItems();

	async function handleInput() {
		if (inputValue.length > 2) {
			searchResults = searchitems.filter((item: any) =>
				item.dhaturomanized.toLowerCase().includes(inputValue.toLowerCase())
			);
		} else {
			searchResults = [];
		}
	}

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		inputValue = '';
		isFocused = false;
		resultsWindow = false;
	}

	$: if (searchResults.length > 0) {
		resultsWindow = true;
	} else {
		resultsWindow = false;
	}

	onMount(() => {
		url = $page.url.pathname;

		(async () => {
			deets = await getDescription(url);
			dhats = await allDhatus(limit);
		})();
	});
</script>

<svelte:window bind:scrollY={y} />

<div
	class="mainpage"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	{#if deets && deets.length > 0}
		{#each deets as item}
			<h2>{item.description}</h2>
		{/each}
	{/if}
	<div class="rta-column rowgap300">
		{#if dhats && dhats.length > 0}
			<div class="rta-row searchbar">
				<input
					type="text"
					placeholder="search"
					bind:value={inputValue}
					bind:this={inputElement}
					on:blur={handleBlur}
					on:input={handleInput}
					on:focus={handleFocus}
				/>
			</div>
			{#if searchResults.length && resultsWindow}
				{#each searchResults as result}
					<div class="rta-row singlebar">
						<a class="rta-column cola1" href="/openlibrary/reconnect/dhatus/{result.id}">
							<h5>{result.dhaturomanized}</h5>
						</a>
					</div>
				{/each}
			{/if}
			{#each dhats as item}
				<div class="rta-row singlebar">
					<div class="rta-row">
						<a class="rta-column cola1" href="/openlibrary/reconnect/dhatus/{item.id}">
							<h5>{item.dhatu}</h5>
							<h5>{item.dhatuiast}</h5>
						</a>
						<div class="rta-column cola2">
							<h6>{item.artha}</h6>
							<h6>{item.arthaiast}</h6>
						</div>
					</div>
					<div class="rta-column cola3">
						<p>{item.artha_hindi}</p>
						<p>{item.artha_english}</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.levelzero
	.singlebar
		justify-content: space-between
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 16px
		.cola1
			width: 160px
		h6
			font-weight: 400
		.rta-row
			width: 50%
		.cola3
			text-align: right
			width: 45%
			p
				font-size: 18px
		a
			&:hover
				h5
					color: #fe4a49
	.searchbar
		padding-top: 32px
		input
			border-bottom: 1px solid #fe4a49
			border-left: none
			border-right: none
			border-top: none
			padding: 8px
			width: 64%
			margin-bottom: 16px
			color: #fe4a49

.levelzero.mainpage
	width: calc(100vw - 400px)

.mainpage
	min-height: 100vh
	padding-top: 64px
	h2
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 16px
		margin: 0
	h2, h5, h6
		font-family: 'Space Grotesk', sans-serif

.mainpage
	display: flex
	flex-direction: column

</style>
