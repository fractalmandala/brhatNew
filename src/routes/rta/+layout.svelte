<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	let iW = 0;
	let fake = false;

	let isSwitch = false;

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}
</script>

<svelte:window bind:innerWidth={iW} />

<Header {isSwitch} hasMenu={false} />
<div class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717
</style>
