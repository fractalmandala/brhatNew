<script lang="ts">
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import Header from '$lib/components/NewHeader.svelte';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';

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
				<a href="/pdf">Open Library</a>
			</div>
		{/if}
	</div>
</Header>

<div class="pagila" class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>
