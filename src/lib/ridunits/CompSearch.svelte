<script lang="ts">

	import { Search } from 'lucide-svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
  import type { SearchItem } from '$lib/types/SearchItem'
	import { searchitems } from '$lib/filed/searchindex'
	let fake = false
	let inputElement: HTMLInputElement
	let inputValue = ''
  let query = ""
  let searchResults: SearchItem[] = []
  let isFocused = false

 async function handleInput() {
    if (inputValue.length > 2) {
      searchResults = searchitems.filter((item) =>
        item.heading.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      searchResults = [];
    }
  }

  function handleFocus() {
    isFocused = true;
  }

	function handleBlur(){
		inputValue = ''
		isFocused = false
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<div class="rta-column comp-search" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<form class="rta-row row-y-cent colgap-8">
		<input type="text"
			bind:value={inputValue}
			bind:this={inputElement}
			on:blur={handleBlur}
    	on:input={handleInput}
    	on:focus={handleFocus}
		/>
		<button type="submit" class="blank-button">
			<Search size="20"/>
		</button>
	</form>
</div>
  {#if isFocused && searchResults.length}
    <div class="search-results all-p-16">
      {#each searchResults as result}
        <p class="tt-c ta-r">
					<a href={result.url}>
					{result.heading}
					</a>
				</p>
      {/each}
    </div>
  {/if}

<style lang="sass">

.comp-search
	position: relative
	input
		padding: 4px
		border-radius: 10px
		font-size: 14px

.comp-search
	input
		border: none

.blank-button
	transform-origin: center center
	&:active
		transform: scale(1.2)

.search-results
	list-style: none
	margin: 0
	left: 0
	min-width: 400px
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)

.search-results
	p
		margin: 0
		font-size: 21px
		cursor: pointer
		&:hover
			color: white

</style>