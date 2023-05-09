<script lang="ts">
//@ts-nocheck
	import { onMount } from 'svelte'
	import { clickOutsideAction } from "svelte-legos"
	import { fly } from 'svelte/transition'
	import visibilityMode from '$lib/stores/visibility'
	let fake = false
	let iW:number
	let breakPoint:boolean
	let expandMenu = false

	function handleClickOutside() {
	  expandMenu = !expandMenu
	}

	function fauxfake(){
		fake = !fake
	}

	function toggleMenu(){
		expandMenu = !expandMenu
	}

	$: if ( iW <= 1023 ){
		breakPoint = true
	} else {
		breakPoint = false
	}

	onMount(() => {
		if ( iW <= 1023 ) {
			breakPoint = true
		}
	})

</script>

<svelte:window bind:innerWidth={iW}/>

<div class="rta-column rta-dropdown" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div on:click={toggleMenu} on:keydown={fauxfake}>
		<slot name="visible">
		</slot>
	</div>
	{#if expandMenu}
	<div class="rta-column drops modal"
		on:click={toggleMenu}
		on:keydown={fauxfake}
		use:clickOutsideAction
		on:clickoutside={toggleMenu}
		transition:fly={{ duration: 200, y: 80}}>
		<slot name="invisible"></slot>
	</div>
	{/if}
</div>

<style lang="sass">

.rta-dropdown
	position: relative
	z-index: 1000
	.rta-column
		position: absolute
		top: 48px
		right: 0
		min-width: 280px
		text-align: right
		background: var(--dropdownbackground)
		z-index: 1000
		padding-top: 24px
		padding-bottom: 24px
		@media screen and (min-width: 1024px)
			border-radius: 8px

.light
	.drops
		box-shadow: 4px 8px 12px #d7d7d7

.dark
	.drops
		box-shadow: 4px 8px 12px #101010

</style>