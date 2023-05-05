<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	let fake = false
	let iW:number
	let breakPoint:boolean
	let expandMenu = false

	function toggleMenu(){
		expandMenu = !expandMenu
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

<div class="rta-row colgap-24 row-col comp-drawer" class:dark={!$visibilityMode} class:light={$visibilityMode} use:autoAnimate>
	{#if breakPoint}
		<div class="rta-row row-center-m colgap-8" id="menu-select" on:click={toggleMenu} on:keydown={fauxfake}>
			<h6 class="drawer-item non">Expand Menu</h6>
			<div class="rta-in-col" class:rotated={expandMenu}>
				<ChevronDown/>
			</div>
		</div>
	{/if}
	{#if !breakPoint || expandMenu}
	<div class="rta-row row-col colgap-24" id="drawer-items" on:click={toggleMenu} on:keydown={fauxfake} use:autoAnimate>
		<h6 class="drawer-item">Item 1</h6>
		<h6 class="drawer-item">Item 2</h6>
		<h6 class="drawer-item">Item 3</h6>
		<h6 class="drawer-item">Item 4</h6>
		<h6 class="drawer-item">Item 5</h6>
		<h6 class="drawer-item">Item 6</h6>
		<h6 class="drawer-item">Item 7</h6>
		<h6 class="drawer-item">Item 8</h6>
	</div>
	{/if}
</div>

<style lang="sass">

.comp-drawer
	.rta-row
		cursor: pointer
		h6
			margin: 0
		.rta-in-col
			transition: 0.23s ease
		.rta-in-col.rotated
			transform: rotate(180deg)
	@media screen and (max-width: 1023px)
		text-align: center
		#drawer-items h6
			padding-top: 6px
			padding-bottom: 6px

.comp-drawer.dark
	#menu-select
		background: #111111
		padding: 6px

.drawer-item
	cursor: pointer
	position: relative
	padding-bottom: 4px
	transition: 0.16s ease
	margin: 0
	font-weight: 400
	&::after
		position: absolute
		content: ''
		bottom: 0
		left: 50%
		width: 0%
		height: 1px
		background: #10D56C
		transition: 0.2s ease
	&:hover
		color: var(--primary)
		&::after
			left: 0
			width: 100%

</style>