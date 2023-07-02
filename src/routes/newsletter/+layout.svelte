<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/NewsHead.svelte';

	export let data: LayoutData;
	let checker: boolean;

	$: ({ supabase, session } = data);

	$: if (data.session && data.session.user.aud === 'authenticated') {
		checker = true;
	} else checker = false;
</script>

<Header>
	<div slot="allbuttons">
		{#if checker}
			<form class="thisform" method="post" action="?/signout">
				<button class="newbutton"> Log Out </button>
			</form>
		{/if}
	</div>
</Header>

<div class="minH">
	<slot />
</div>
