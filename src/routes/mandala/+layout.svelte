<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import autoAnimate from '@formkit/auto-animate';
	import { fly } from 'svelte/transition';
	let dropdown = false;
	let isSwitch = false;
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}

	function toggleDropdown() {
		dropdown = !dropdown;
	}

	function onDropdown() {
		if (dropdown === false) {
			dropdown = true;
		}
	}
</script>

<Header {isSwitch} hasMenu={true}>
	<div slot="local" class="boxmidrow">
		{#if $menuMode}
			<div
				class="rta-column rowgap100 pagedropdown"
				in:slide={{ axis: 'y', easing: quintOut, duration: 128 }}
				out:slide={{ axis: 'y', easing: quintIn, duration: 80 }}
				use:clickOutsideAction
				on:clickOutside={offDropdown}
				on:click={offDropdown}
				on:keydown={fauxfake}
			>
				<a href="/mandala/aphorisms">Caturasūtra</a>
				<a href="/mandala/ancestors">Ancestors</a>
				<a href="/mandala/synrec">Synaptic Reconnection</a>
				<a href="/mandala/macrohistoriccase">Macrohistoric Case</a>
				<a href="/mandala/historyvsitihasa">History vs. Itihāsa</a>
				<a href="/mandala/rathaasbija">Ratha as a Bīja</a>
				<a href="/mandala/ramasjourney">Avatāra in You</a>
				<a href="/mandala/indiancivcon">Indian Civilizational Consciousness</a>
			</div>
		{/if}
	</div>
</Header>

<div class="type p-bot-64" class:light={$themeMode} class:dark={!$themeMode}>
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
