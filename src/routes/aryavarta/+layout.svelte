<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import autoAnimate from '@formkit/auto-animate'
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

	function offDropdown(){
		if (dropdown === true){
			dropdown = false
		}
	}

	function onDropdown(){
		if (dropdown === false ){
			dropdown = true
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
		<div class="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown} data-lenis-prevent>
			<div class="rta-row colgap100 dropper-visible" class:expanded={dropdown} on:mouseenter={onDropdown}>
				All Lore
				<div class="dropper-chevron" class:rotated={dropdown}>
					<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.6284 0.016602L0.983398 1.6616L7.9834 8.6616L14.9834 1.6616L13.3384 0.0166016L7.9834 5.35993L2.6284 0.016602Z" fill="#FE4A49"/>
					</svg>
				</div>
			</div>
				{#if dropdown}
					<div class="rta-grid grid3 dropper-invisible large" on:mouseleave={offDropdown} use:autoAnimate data-lenis-prevent>
						{#if lores && lores.length > 0}
							{#each lores as item, i}
								<a class="tt-c" href={item.path} in:fly={{ duration: 100, delay: i * 10, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>{item.meta.title}</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
	</div>
</Header>
	
<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>


<style lang="sass">

.dropper
	position: relative

.dropper-invisible
	position: absolute

.light
	background: white

.dark
	background: #171717
	
</style>