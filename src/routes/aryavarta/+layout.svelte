<script lang="ts">
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import Header from '$lib/components/NewHeader.svelte';
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}
</script>

<Header isSwitch={false} hasMenu={true}>
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
				<a href="/aryavarta/kashyapaslament">1 - Kaśyapa's Lament</a>
				<a href="/aryavarta/sutaandsuda">2 - Sūta and Sudā</a>
				<a href="/aryavarta/places">3 - Nagara, Nadī, Janapada</a>
				<a href="/aryavarta">Scrolls of Āryavarta Home</a>
			</div>
		{/if}
	</div>
</Header>

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
