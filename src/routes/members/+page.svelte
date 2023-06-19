<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/SubHeader.svelte';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores';
	import ButtonF from '$lib/anims/ButtonFlashes.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: supabase = data.supabase;
	let toggle = false;

	function toggleToggle() {
		toggle = !toggle;
	}

	let loadedData: any[] = [];
	async function loadData() {
		const { data, error } = await supabase.from('test').select('*');

		if (!error) {
			loadedData = data;
		}
	}

	$: if ($page.data.session) {
		loadData();
	}
</script>

<Header />
<div class="p-top-128 rta-column rowgap200">
	<div class="rta-row colgap100 xcenter-d">
		{#if toggle}
			<form method="POST" action="/members?/signup" class="loginform rta-rowcolgap100">
				<div class="rta-row colgap100">
					<input name="email" type="email" placeholder="email" />
					<input name="password" type="password" placeholder="password" />
					<button class="genbutton" on:click={toggleToggle}>Signup</button>
					<button class="transbutton" on:click={toggleToggle}>Login</button>
				</div>
				<div class="rta-row colgap100">
					<!--
					<button class="glass">Sign Up</button>
					-->
				</div>
			</form>
		{:else}
			<form method="POST" action="/members?/login" class="loginform rta-rowcolgap100">
				<div class="rta-row colgap100">
					<input name="email" type="email" placeholder="email" />
					<input name="password" type="password" placeholder="password" />
					<button class="genbutton" on:click={toggleToggle}>Login</button>
					<button class="transbutton" on:click={toggleToggle}>Signup</button>
				</div>
				<div class="rta-row colgap100">
					<!--
					<button class="glass">Sign Up</button>
					-->
				</div>
			</form>
		{/if}
	</div>
	{#if !$page.data.session}
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
	{:else}
		<p>user:</p>
		<pre>{JSON.stringify($page.data.session.user, null, 2)}</pre>
		<p>client-side data fetching with RLS</p>
		<pre>{JSON.stringify(loadedData, null, 2)}</pre>
	{/if}
</div>

<style lang="sass">


.appshell
	display: grid
	grid-auto-flow: row
	min-height: 100vh

.appshell.levelzero
	grid-template-columns: 320px 1fr
	grid-template-areas: "side main"
	padding-left: 48px
	padding-right: 48px
	.rta-side
		grid-area: side
		padding-top: 128px
		position: sticky
		top: 0
	.rta-main
		grid-area: main

.appshell.leveltwo
	grid-template-columns: 1fr
	grid-template-areas: "side" "main"
	padding-top: 88px
	padding-left: 32px
	padding-right: 32px

input
	font-family: 'Space Grotesk', sans-serif

input
	border: 1px solid var(--borderline)
	padding: 4px 8px

.loginform
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
