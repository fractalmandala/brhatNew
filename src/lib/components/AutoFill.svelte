<script lang="ts">

  import type { SearchItem } from '$lib/types/SearchItem'
	import { searchitems } from '$lib/filed/searchindex'

  let query = ""
  let searchResults: SearchItem[] = []
  let isFocused = false

 async function handleInput() {
    if (query.length > 2) {
      searchResults = searchitems.filter((item) =>
        item.heading.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      searchResults = [];
    }
  }

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    setTimeout(() => (isFocused = false), 150);
  }

</script>

<div class="search-container">
  <input
    type="text"
    bind:value="{query}"
    on:input="{handleInput}"
    on:focus="{handleFocus}"
    on:blur="{handleBlur}"
    placeholder="search..."
  />
  {#if isFocused && searchResults.length}
    <div class="search-results">
      {#each searchResults as result}
        <p>
					<a href={result.url}>
					{result.heading}
					</a>
				</p>
      {/each}
    </div>
  {/if}
</div>

<style lang="sass">

.search-container
	position: relative
	input
		height: 24px
		border-radius: 12px
		border: 1px solid #373737
		padding-left: 8px
		background: transparent
		color: white

.search-results
	position: absolute
	background: white
	list-style: none
	padding: 0
	margin: 0
	min-width: 280px
	border: 1px solid #ccc
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)

.search-results
	p
		padding: 6px
		font-size: 14px

.search-results
	p
		&:hover
			background: #f0f0f0
			cursor: pointer

</style>
