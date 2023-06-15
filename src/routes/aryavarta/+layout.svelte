<script lang="ts">
	import { onMount } from 'svelte';
	import autoAnimate from '@formkit/auto-animate';
	import { themeMode } from '$lib/stores/globalstores';
	import { fly } from 'svelte/transition';
	import { loreAll } from '$lib/utils/localpulls';
	import Header from '$lib/components/SubHeader.svelte';
	let dropdown = false;
	let lores: any;
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleDropdown() {
		dropdown = !dropdown;
	}

	function offDropdown() {
		if (dropdown === true) {
			dropdown = false;
		}
	}

	function onDropdown() {
		if (dropdown === false) {
			dropdown = true;
		}
	}

	onMount(async () => {
		lores = await loreAll();
	});
</script>

<Header />

<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

.type
	width: 100vw

</style>
