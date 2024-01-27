<script lang="ts">

  import type { DhitiPost } from '$lib/types/SearchItem';
  import { slide } from 'svelte/transition'
  import { clickOutsideAction } from '$lib/utils/clickoutside';
  import { breakTwo } from '$lib/stores/globalstores'
  let inputElement: HTMLInputElement;
  export let closeforThin:boolean = false
  export let expandInput:boolean
  let placer = ''
  let inputValue = '';
  let searchResults: DhitiPost[] = [];
  let onHover:boolean = false

  function toggleHovering(){
    onHover = !onHover
  }

  let isFocused = false;

  async function fetchSearchItems() {
    const response = await fetch('/api/dhitisearch');
    const items: DhitiPost[] = await response.json();
    return items;
  }

  async function handleInput() {
    if (inputValue.length > 2) {
      const lowerCaseInput = inputValue.toLowerCase();
      searchResults = (await fetchSearchItems()).filter((item) =>
        item.title.toLowerCase().includes(lowerCaseInput) ||
        (item.category?.toLowerCase().includes(lowerCaseInput) ?? false) ||
        (item.tags?.some(tag => tag.toLowerCase().includes(lowerCaseInput)) ?? false) ||
        (item.author?.some(author => author.toLowerCase().includes(lowerCaseInput)) ?? false)
      );
    } else {
      searchResults = [];
    }
  }

	function handleFocus() {
		isFocused = true;
    placer = '';
	}

	function handleBlur() {
		inputValue = '';
		isFocused = false;
    placer = ''
	}

  function handleclickOut(){
    searchResults = [];
  }

  $: if (closeforThin) {
    handleclickOut();
    handleBlur();
  }

</script>

<div class="column dhitisearchbox">
  <form class="row" on:mouseenter={toggleHovering} on:mouseleave={toggleHovering} class:formhover={onHover}>
    {#if !$breakTwo || expandInput}
	  <input
		  type="text"
		  placeholder={placer}
		  bind:value={inputValue}
		  bind:this={inputElement}
		  on:blur={handleBlur}
		  on:input={handleInput}
		  on:focus={handleFocus}
	  />
    {/if}
  </form>
  {#if searchResults.length}
    <div class="column gap0 dhitisearchresults" transition:slide use:clickOutsideAction on:clickOutside={handleclickOut}>
      {#each searchResults as result}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="hind" on:click={handleclickOut}><a href={result.linkpath}>{result.title}</a></p>
      {/each}
    </div>
  {/if}
</div>

<style lang="sass">

.dhitisearchbox
  position: relative
  .dhitisearchresults
    position: absolute
    right: 0
    top: 48px
    max-height: calc(100vh - 200px)
    overflow-y: scroll
    min-width: 480px
    text-align: right
    padding: 16px
    border: 1px solid var(--contraster)
    backdrop-filter: blur(5px)
    box-shadow: 2px 4px 8px var(--shadowline)
    border-radius: 4px
    p
      font-size: 1rem
      color: var(--opposite)
      a
        text-decoration-color: #fe4a49
      &:hover
        a
          text-decoration: underline
          text-decoration-color: #fe4a49
  @media screen and (max-width: 768px)
    .dhitisearchresults
      top: 64px
      right: -20px
      min-width: calc(100vw - 48px)
      background: var(--background)
      backdrop-filter: blur(10px)
      max-height: calc(100vh - 160px)
      p
        font-size: 1.08rem

form
  align-items: center
  justify-content: flex-end
  height: 32px
  width: 100%
  padding-left: 8px
  input
    outline: none
    border: none
    background: none
    font-family: 'Playfair Display', serif
    font-size: 0.875rem
    color: var(--opposite)
  @media screen and (max-width: 768px)
    border: none
    column-gap: 8px

</style>