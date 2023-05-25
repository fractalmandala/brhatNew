<script lang="ts">

	import { page } from '$app/stores';
	import Header from '$lib/components/SubHeader.svelte';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores';
	import ButtonF from '$lib/anims/ButtonFlashes.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: supabase = data.supabase;

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

<Header></Header>
<div
	class="rta-grid grid2 appshell minH"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-side rta-column rowgap200">
		<div class="rta-column">

			<form method="POST" action="/members?/login" class="loginform rta-column rowgap100">
				<div class="rta-column rowgap100">
					<input name="email" type="email" placeholder="email" />
					<input name="password" type="password" placeholder="password" />
				</div>
				<div class="rta-row colgap100">
					<ButtonF>Log In</ButtonF>
					<!--
					<button class="glass">Sign Up</button>
					-->
				</div>
			</form>
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
	<div class="rta-main"></div>
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
	border-radius: 4px
	padding: 5px

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
