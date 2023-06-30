<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
	let tooltip = false;
	let iW: number;
	let breakPoint: boolean;
	let flyX: number;
	let flyY: number;

	$: if (iW <= 1023) {
		breakPoint = true;
		flyX = 0;
		flyY = 24;
	} else {
		breakPoint = false;
		flyX = -24;
		flyY = 0;
	}

	function toggleTooltip() {
		tooltip = !tooltip;
	}

	function onEnter() {
		tooltip = true;
	}

	function onLeave() {
		tooltip = false;
	}

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:innerWidth={iW} />

<div
	class="rta-row"
	class:light={$themeMode}
	class:dark={!$themeMode}
	on:mouseenter={onEnter}
	on:mouseleave={onLeave}
>
	{#if tooltip}
		<div
			class="tooltip"
			transition:fly={{ duration: 100, x: flyX, y: flyY, easing: backOut }}
			class:modile={breakPoint}
		>
			Toggle Light/Dark Mode
		</div>
	{/if}
	<div class="icc">
		{#if $themeMode}
			<Moon />
		{:else if !$themeMode}
			<Sun />
		{/if}
	</div>
</div>

<style lang="sass">

.rta-row
	justify-content: center
	align-items: center
	position: relative
	.icc
		height: 16px
		width: 16px

.tooltip
	position: absolute
	bottom: 0
	left: -144px
	font-size: 12px
	min-width: 120px
	text-align: center
	padding: 2px 8px
	border-radius: 2px
	font-weight: 400
	font-family: 'Authentic Sans', sans-serif

.tooltip.modile
	left: 0
	bottom: -32px

.light
	.tooltip
		background: white
		color: #272727
		border: 1px solid #d7d7d7

.dark
	.tooltip
		background: #272727
		color: #FFFFFF
		border: 1px solid #FFFFFF


</style>
