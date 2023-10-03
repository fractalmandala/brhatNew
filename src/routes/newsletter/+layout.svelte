<script lang="ts">
	import type { LayoutData } from './$types';
	import type { ActionData } from './$types';
	import Header from '$lib/components/NewHeader.svelte';
	import AuthModal from '$lib/components/AuthModal.svelte';
	import { showAuth, authState, menuMode } from '$lib/stores/globalstores';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { clickOutsideAction } from '$lib/utils/clickoutside';

	export let data: LayoutData;
	export let form: ActionData;
	let checker: boolean;
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}

	$: ({ supabase, session } = data);

	$: if (data.session && data.session.user.aud === 'authenticated') {
		checker = true;
		$authState = true;
	} else {
		checker = false;
		$authState = false;
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
				<a href="/newsletter">Adya</a>
				<a href="/newsletter/1">Issue 1</a>
				<a href="/newsletter/2">Issue 2</a>
				<a href="/newsletter/3">Issue 3</a>
			</div>
		{/if}
	</div>
</Header>
<div class="minH">
	<slot />
</div>
<AuthModal {form} />

<style lang="sass">

.pagedropdown
	z-index: 2000

</style>
