<script lang="ts">

    import { onMount } from 'svelte'
    import type { Dictionary } from '$lib/types/SearchItem'
    import { allDictionary } from '$lib/utils/supapulls'
    
    let inputElement: HTMLInputElement;
    let inputValue = '';
    let searchResults: Dictionary[] = [];
    let searchitems: any = [];
    let isFocused = false;
    let resultsWindow = false;
    
    async function loadItems(){
        searchitems = await allDictionary();
    }

    loadItems();

	async function handleInput() {
		if (inputValue.length > 2) {
			searchResults = searchitems.filter((item: any) =>
				item.word.toLowerCase().includes(inputValue.toLowerCase())
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

	$: if (searchResults.length > 0) {
		resultsWindow = true;
	} else {
		resultsWindow = false;
	}

</script>

<form>
	<input
		type="text"
		placeholder="dictionary search"
		bind:value={inputValue}
		bind:this={inputElement}
		on:blur={handleBlur}
		on:input={handleInput}
		on:focus={handleFocus}
	/>
</form>

{#if searchResults.length && resultsWindow}
	
	<div class="rta-column rowgap100 null p-top-32 searchresults">
		{#each searchResults as result}
		<p class="tt-c white">
            <a href="/openlibrary/reconnect/dictionary/{result.id}">
			    {result.word}
            </a>
		</p>
		{/each}
	</div>
{/if}

<style lang="sass">

input
    border: 1px solid var(--borderline)
    padding: 4px
    font-size: 14px
    border-radius: 4px

.searchresults p
    word-break: break-word


</style>