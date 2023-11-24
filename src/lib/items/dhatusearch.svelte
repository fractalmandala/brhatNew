<script lang="ts">
	import type { DhatuItem } from '$lib/items/Dhatu';
	import { dhatuitems } from '$lib/filed/dhatuindex';

	let inputElement: HTMLInputElement;
	let inputValue = '';
	let searchResults: DhatuItem[] = [];
	let isFocused = false;

	async function handleInput() {
		if (inputValue.length > 2) {
			searchResults = dhatuitems.filter((item) =>
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
	}
</script>

<form class="pagila p-bot-8">
	<input
		type="text"
		placeholder="search dhātus..."
		bind:value={inputValue}
		bind:this={inputElement}
		on:blur={handleBlur}
		on:input={handleInput}
		on:focus={handleFocus}
	/>
</form>
{#if searchResults.length}
	<div class="pagila rta-column rowgap100 bord-bot p-bot-16">
		<p class="mid"><b>results:</b></p>
		{#each searchResults as result}
			<a href="/openlibrary/dhatupatha/{result.id}">
				<p class="tt-c small">{result.dhatu} | {result.dhatuiast} | {result.dhaturomanized}</p>
			</a>
		{/each}
	</div>
{/if}

<style lang="sass">

a
 &:hover
  color: #fe4a49
  p
   color: inherit

input
 padding: 4px 8px
 border: 1px solid var(--shadowline)  
 border-radius: 4px
 font-size: 14px 

</style>
