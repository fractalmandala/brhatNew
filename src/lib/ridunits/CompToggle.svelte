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
	let dim = 20;

	$: if (iW <= 1023) {
		breakPoint = true;
		flyX = 0;
		flyY = 24;
	} else {
		breakPoint = false;
		flyX = -24;
		flyY = 0;
	}

	function toggleEnter() {
		if (tooltip === false) {
			tooltip = true;
		}
	}

	function toggleLeave() {
		if (tooltip === true) {
			tooltip = false;
		}
	}

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:innerWidth={iW} />

<div
	class="rta-row ycenter mainner"
	class:light={$themeMode}
	class:dark={!$themeMode}
	on:mouseenter={toggleEnter}
	on:mouseleave={toggleLeave}
>
	{#if $themeMode}
		<Moon dimension={dim} />
	{:else}
		<Sun dimension={dim} />
	{/if}

	{#if tooltip && $themeMode}
		<div
			class="rta-column tooltip"
			transition:fly={{ duration: 100, x: flyX, y: flyY, easing: backOut }}
			class:modile={breakPoint}
		>
			Toggle Dark Mode
		</div>
	{/if}
	{#if tooltip && !$themeMode}
		<div
			class="rta-column tooltip"
			transition:fly={{ duration: 100, x: flyX, y: flyY, easing: backOut }}
			class:modile={breakPoint}
		>
			Toggle Light Mode
		</div>
	{/if}
</div>

<style lang="sass">

.mainner
	position: relative
	width: 24px
	justify-content: flex-end

.tooltip
	position: absolute
	bottom: 0
	left: -128px
	font-size: 12px
	min-width: 120px
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

</style>
