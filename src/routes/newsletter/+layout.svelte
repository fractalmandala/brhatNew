<script lang="ts">
	import type { LayoutData } from './$types';
	import type { ActionData } from './$types';
	import Header from '$lib/components/NewHeader.svelte';
	import Logout from '$lib/icons/logout.svelte';
	import Login from '$lib/icons/login.svelte';
	import AuthModal from '$lib/components/AuthModal.svelte';
	import { showAuth, authState, menuMode } from '$lib/stores/globalstores';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { themeMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';

	export let data: LayoutData;
	export let form: ActionData;
	let checker: boolean;
	let dropdown = false;
	let fake = false;
	let logoutModal = false;
	let closeDimension = 24;
	let closeColor = '#272727';
	let loading = false;
	let logColor = '#a7a7a7';

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}

	function toggleLogout() {
		showAuth(true);
	}

	function toggleLogin() {
		showAuth(false);
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
