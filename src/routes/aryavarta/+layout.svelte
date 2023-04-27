<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import { fly } from 'svelte/transition'
	import { loreAll } from '$lib/utils/localpulls'	
	import Header from '$lib/components/SubHeader.svelte'
	let sidebar = false
	let dropdown = false
	let lores:any
	let fake = false 

	function fauxfake(){
		fake = !fake
	}

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}


	onMount(async() => {
		lores = await loreAll()
	})

</script>

<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/aryavarta">Āryavarta Main</a>
		<a href="/aryavarta/chapter/01">Kaśyapa's Lament</a>
		<a href="/aryavarta/chapter/02">Sūta and Sudā</a>
		<a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}>
			<p class="dropperp">All Lore</p>
				{#if dropdown}
					{#if lores && lores.length > 0}
						<div class="box dropped" data-lenis-prevent>
						{#each lores as item, i}
							<a href={item.path} in:fly={{ duration: 100, delay: i * 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>{item.meta.title}</a>
						{/each}
						</div>
					{/if}
				{/if}
		</div>
	</div>
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>
	
<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>


<style lang="sass">

#dropper
	position: relative
	.dropped
		position: absolute
		text-align: right
		min-width: 200px
		right: 0
		top: 32px
		background: var(--beau)
		padding: 4px 8px
		row-gap: 4px
		height: 40vh
		overflow-y: scroll
		a
			&:hover
				background: #ffffff


</style>