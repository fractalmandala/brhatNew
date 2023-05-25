<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import type { PageData } from './$types';
	import { getDescription } from '$lib/utils/supapulls'
	import { scale } from 'svelte/transition'
	let y:number
	let url:string
	let deets:any

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

	onMount(() => {
		url = $page.url.pathname;

		(async() => {
			deets = await getDescription(url)
		})();

	})
	

</script>


<svelte:window bind:scrollY={y}/>

<div class="mainpage">
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
	{#if deets && deets.length > 0}
		{#each deets as item}
			<h2>{item.name}</h2>
		{/each}
	{/if}

</div>

<style lang="sass">

.mainpage
	min-height: 100vh
	padding-top: 128px

.mainpage
	display: flex
	flex-direction: column

</style>


