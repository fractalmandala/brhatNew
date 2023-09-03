<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
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

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:innerWidth={iW} />

<div class="mainner" class:light={!$themeMode} class:dark={$themeMode}>
	{#if !$themeMode}
		<Moon dimension={dim} {color} />
	{:else}
		<Sun dimension={dim} {color} />
	{/if}
</div>

<style lang="sass">

.mainner
	position: relative

</style>
