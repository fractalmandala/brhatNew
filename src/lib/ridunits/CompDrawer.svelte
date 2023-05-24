<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { themeMode } from '$lib/stores/globalstores'
	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	let fake = false
	let iW:number
	let breakPoint:boolean
	let expandMenu = false
	export let openDrawer:boolean

	function toggleMenu(){
		expandMenu = !expandMenu
	}

	function toggleVisibility() {
	  if (browser) {
	    themeMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('themeMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	function fauxfake(){
		fake = !fake
	}

	$: if ( iW <= 1023) {
		breakPoint = true 
	} else {
		breakPoint = false
	}

	onMount(() => {
		if ( iW <= 1023) {
			breakPoint = true
		} else {
			breakPoint = false
		}
	})

</script>

<svelte:window bind:innerWidth={iW}/>

<div class="rta-column rowgap100 comp-drawer" class:dark={!$themeMode} class:light={$themeMode} use:autoAnimate>
	<div class="rta-row" id="menu-select" on:click={toggleMenu} on:keydown={fauxfake}>
		<small>
			<slot name="visible"></slot>
		</small>
	</div>
	{#if !breakPoint || expandMenu || openDrawer}
	<div id="drawer-items" on:click={toggleMenu} on:keydown={fauxfake} use:autoAnimate class:relativity={!openDrawer}>
		<slot name="invisibles"></slot>
	</div>
	{/if}
</div>

<style lang="sass">

.comp-drawer
	position: relative

.relativity
	position: absolute
	top: 32px
	left: 0
	min-width: 280px
	z-index: 1000
	display: flex
	flex-direction: column
	row-gap: 8px

.comp-drawer
	.rta-row
		cursor: pointer


</style>