<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { themeMode } from '$lib/stores/globalstores'
	import Search from '$lib/ridunits/CompSearch.svelte'
  import type { SearchItem } from '$lib/types/SearchItem'
	import { searchitems } from '$lib/filed/searchindex'

	let fake = false
	let inputElement: HTMLInputElement
	let inputValue = ''
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
	let sidebar = false

</script>


<Header sidebar={sidebar}>
</Header>

<div class="pageglobals" class:light={$themeMode} class:dark={!$themeMode}>
	<h6 class="thin p-bot-32">
		Sorry, this page does not exist. Please use the search below to find what you are looking for.
	</h6>
	<form class="rta-row colgap200 xstart">
		<input type="text" placeholder="Search..."
			bind:value={inputValue}
			bind:this={inputElement}
			on:blur={handleBlur}
    	on:input={handleInput}
    	on:focus={handleFocus}
		/>
			<!--
			<button type="submit" class="blank-button">
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.8301 11.3222C14.8301 13.2552 13.2631 14.8222 11.3301 14.8222C9.39706 14.8222 7.83006 13.2552 7.83006 11.3222C7.83006 9.38925 9.39706 7.82225 11.3301 7.82225C13.2631 7.82225 14.8301 9.38925 14.8301 11.3222Z" fill="#676767"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0.830078 12.8223C0.830078 6.20539 6.2132 0.822266 12.8301 0.822266C19.447 0.822266 24.8301 6.20539 24.8301 12.8223C24.8301 19.4391 19.447 24.8223 12.8301 24.8223C6.2132 24.8223 0.830078 19.4391 0.830078 12.8223ZM14.4457 15.8523L17.8301 19.2366L19.2445 17.8223L15.8601 14.4379C16.6385 13.3067 16.966 11.9255 16.7785 10.5653C16.5909 9.2051 15.9018 7.96407 14.8464 7.08576C13.7909 6.20746 12.4454 5.75528 11.0737 5.81797C9.70205 5.88066 8.40334 6.45369 7.43242 7.42461C6.4615 8.39553 5.88848 9.69424 5.82579 11.0659C5.7631 12.4376 6.21527 13.7831 7.09358 14.8386C7.97188 15.894 9.21291 16.5831 10.5731 16.7706C11.9333 16.9582 13.3146 16.6306 14.4457 15.8523Z" fill="#676767"/>
			</svg>
			</button>
			-->
	</form>
	
  {#if searchResults.length}
    <div class="search-results rta-column all-p-16 rowgap100">
			<h6>Results:</h6>
      	{#each searchResults as result}
				<a href={result.url}>
        <p class="tt-c ta-r">
					{result.heading}
				</p>
				</a>	
      {/each}
    </div>
  {/if}
</div>


<style lang="sass">

.pageglobals
	height: 100vh
	padding-top: 128px
	padding-left: 32px
	padding-right: 32px

form
	input
		padding: 2px 8px
		border-radius: 10px
		font-size: 14px
		border: 1px solid var(--borderline)

.search-results
	list-style: none
	margin: 0
	left: 0
	padding-top: 32px
	@media screen and (max-width: 1023px)
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 32px

.search-results
	p
		margin: 0
		font-size: 16px
		cursor: pointer
		&:hover
			color: #fe4a49
	h6
		color: #fe4a49
		padding-bottom: 8px

</style>