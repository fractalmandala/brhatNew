<script lang="ts">
//@ts-nocheck
	import { clickOutsideAction } from "svelte-legos"
	import { slide } from 'svelte/transition'
	import { themeMode } from '$lib/stores/globalstores'
	let fake = false
	let expandMenu = false

	function fauxfake(){
		fake = !fake
	}

	function toggleMenu(){
		expandMenu = !expandMenu
	}

</script>

<div class="rta-column rta-dropdown" class:light={$themeMode} class:dark={!$themeMode}>
	<div class="rta-row ycenter null colgap100" on:click={toggleMenu} on:keydown={fauxfake}>
		<div class="thischev rta-row ycenter" class:rotated={expandMenu}>
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.9992 21.2667L7.19922 12.4667L9.43255 10.2334L15.9992 16.8334L22.5659 10.2667L24.7992 12.5001L15.9992 21.2667Z" fill="#474747"/>
			</svg>
		</div>
		<slot name="visible">
		</slot>
	</div>
	{#if expandMenu}
	<div class="rta-column drops fullW"
		transition:slide={{ duration: 300 }}>
		<slot name="invisible"></slot>
	</div>
	{/if}
</div>

<style lang="sass">

.rta-dropdown
	cursor: pointer
	padding: 8px 0
	border-bottom: 1px solid var(--contraster)
	.drops
		padding-left: 32px
		width: 100%
	&:hover
		svg path
			fill: var(--opposite)

.thischev
	svg path
		transform-origin: center center
		fill: var(--contraster)
		transform: rotate(-90deg)
		transition: 0.08s

.thischev.rotated
	svg path
		transform: rotate(0deg)
		fill: #fe4a49

</style>