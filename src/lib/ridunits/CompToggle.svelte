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
	export let color = '#d7d7d7';

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
		<Moon dimension={dim} {color} />
	{:else}
		<Sun dimension={dim} {color} />
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
			class="rta-column tooltip rota"
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
	margin-bottom: 2px

.tooltip
	position: absolute
	bottom: 0
	left: -128px
	font-size: 12px
	min-width: 120px
	text-align: center
	padding: 2px
	border-radius: 2px
	font-family: 'Rota'
	text-transform: uppercase
	letter-spacing: 1px
	font-weight: bold

.light
	.tooltip
		color: #a7a7a7

.dark
	.tooltip
		color: #575757

</style>
