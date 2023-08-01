<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';

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
				<AnveshiLinks />
			</div>
		{/if}
	</div>
</Header>
<div class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>
