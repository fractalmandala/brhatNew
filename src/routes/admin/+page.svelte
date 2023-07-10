<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ActionData } from './$types';
	import Header from '$lib/components/SubHeader.svelte';
	import { adminDocs } from '$lib/utils/localpulls';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores';
	import ButtonF from '$lib/anims/ButtonFlashes.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	$: supabase = data.supabase;
	let toggle = false;
	let expansion = false;
	let loading = false;
	let docs: any;

	function toggleExpand() {
		expansion = !expansion;
	}

	function toggleToggle() {
		toggle = !toggle;
	}

	let loadedData: any[] = [];

	onMount(async () => {
		docs = await adminDocs();
	});
</script>

<Header />
<div class="p-top-128 rta-column rowgap200 minH outer-box">
	<h4>Admin Area</h4>
	<div class="rta-column rowgap200" id="cutform">
		{#if !data.in}
			<form class="thisforms" method="post" action="?/login">
				<div class="rta-column rowgap100 null">
					<input
						id="email"
						name="email"
						value={form?.values?.email ?? ''}
						class="input"
						type="email"
						placeholder="Email"
						required
					/>

					<input
						id="password"
						name="password"
						class="input"
						type="password"
						placeholder="Password"
						required
					/>

					<button disabled={loading} class="newbutton red">Sign in</button>
				</div>
			</form>
			{#if supabase !== undefined}
				<button
					class="blank-button rta-row ycenter colgap100"
					on:click={() => {
						supabase.auth.signInWithOAuth({
							provider: 'google',
							options: { scopes: 'https://www.googleapis.com/auth/userinfo.email' }
						});
					}}
				>
					<p>Sign In with Google</p>
					<img class="iconimage" src="/images/icongoogle.png" alt="google" />
				</button>
			{/if}
		{/if}
	</div>
	{#if data.ems !== 'design@brhat.in'}
		<p>Sorry, this area is for internal admin. Please return to <a href="/">Home.</a></p>
	{/if}
	{#if $page.data.session}
		<form class="thisform" method="post" action="?/signout">
			<button class="newbutton"> Log Out </button>
		</form>
		<button class="newbutton red" on:click={toggleExpand}>
			{#if expansion}
				CONTRACT
			{:else}
				EXPAND
			{/if}
		</button>
		{#if expansion}
			<pre>{JSON.stringify($page.data.session.user, null, 2)}</pre>
			<p>client-side data fetching with RLS</p>
			<pre>{JSON.stringify(loadedData, null, 2)}</pre>
		{/if}
	{/if}
	{#if data.ems === 'design@brhat.in'}
		<div class="rta-column">
			{#if docs && docs.length > 0}
				{#each docs as item}
					<p><a href={item.path}>{item.meta.title}</a></p>
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style lang="sass">

p
	a
		color: #fe4a49

#cutform
	max-width: 320px

input
	font-family: 'Hubot-Sans', sans-serif

input
	border: 1px solid var(--borderline)
	padding: 4px 8px

.thisforms
	input, button
		border-radius: 16px

.blank-button
	border: 1px solid var(--borderline)
	border-radius: 4px
	padding: 2px 8px
	cursor: pointer
	max-width: 200px
	&:hover
		background: var(--opposite)
		p
			color: var(--background)

.iconimage
	object-fit: contain
	width: 24px
	height: 24px

</style>
