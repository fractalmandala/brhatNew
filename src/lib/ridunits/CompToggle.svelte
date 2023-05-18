<script lang="ts">

	import { onMount } from 'svelte'
	import visibilityMode from '$lib/stores/visibility'
	import { themeMode } from '$lib/stores/globalstores'
	import { fly } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	let tooltip = false
	let iW:number
	let breakPoint:boolean
	let flyX:number
	let flyY:number

	$: if ( iW <= 1023 ) {
		breakPoint = true
		flyX = 0
		flyY = 24
	} else {
		breakPoint = false
		flyX = -24
		flyY = 0
	}

	function toggleTooltip(){
		tooltip = !tooltip
	}

	onMount(() => {
		if ( iW <= 1023 ) {
			breakPoint = true
		}
	})


</script>

<svelte:window bind:innerWidth={iW}/>

<div class="switch rta-column" class:light={$themeMode} class:dark={!$themeMode} on:mouseenter={toggleTooltip} on:mouseleave={toggleTooltip}>
  <div class="slider rta-in-col"></div>
	{#if tooltip && $themeMode}
	<div class="rta-column tooltip" transition:fly={{ duration: 100, x: flyX, y: flyY, easing: backOut }} class:modile={breakPoint}>
		Toggle Dark Mode
	</div>
	{/if}
	{#if tooltip && !$themeMode}
	<div class="rta-column tooltip" transition:fly={{ duration: 100, x: flyX, y: flyY, easing: backOut }} class:modile={breakPoint}>
		Toggle Light Mode
	</div>
	{/if}
</div>

<style lang="sass">

.switch 
	cursor: pointer
	height: 22px
	width: 48px
	border-radius: 11px
	padding-top: 2px
	padding-right: 2px
	padding-left: 2px
	padding-bottom: 2px
	transition: all 0.2s cubic-bezier(0.515, 0.130, 0.295, 0.450)
	position: relative

.tooltip
	position: absolute
	bottom: 0
	left: -128px
	font-size: 12px
	width: 120px
	text-align: center
	padding: 2px 8px 0 8px
	border-radius: 2px
	font-weight: 600

.tooltip.modile
	left: 0
	bottom: -32px

.light
	.tooltip
		background: white
		color: #272727

.dark
	.tooltip
		background: white
		color: #272727

.switch.light
	border: 1px solid #474747
	.slider
		background: #FFFFFF
	&:hover
		.slider
			background: #FFFFFF

.switch.dark
	border: 1px solid #474747
	.slider
		transform: translateX(26px)
	&:hover
		.slider
			background: #FFFFFF

.slider 
	width: 16px
	height: 16px
	border-radius: 8px
	transition: all 0.2s cubic-bezier(0.515, 0.130, 0.295, 0.450)
	background: #474747


</style>