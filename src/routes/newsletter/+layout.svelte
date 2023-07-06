<script lang="ts">
	import type { LayoutData } from './$types';
	import type { ActionData } from './$types';
	import Header from '$lib/components/NewsHead.svelte';
	import Logout from '$lib/icons/logout.svelte';
	import Login from '$lib/icons/login.svelte';
	import AuthModal from '$lib/components/AuthModal.svelte';
	import { showAuth, authState } from '$lib/stores/globalstores';

	export let data: LayoutData;
	export let form: ActionData;
	let checker: boolean;
	let logoutModal = false;
	let closeDimension = 24;
	let closeColor = '#272727';
	let loading = false;
	let logColor = '#a7a7a7';

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

<Header>
	<div slot="allbuttons" class="allbuttons">
		{#if $authState}
			<button on:click={toggleLogout}><Logout color={logColor} /></button>
		{:else}
			<button on:click={toggleLogin}><Login color={logColor} /></button>
		{/if}
	</div>
</Header>
<div class="minH">
	<slot />
</div>
<AuthModal {form} />

<style lang="sass">


.allbuttons
	height: 16px
	button
		padding: 0
		background: none
		border: none
		cursor: pointer

</style>
