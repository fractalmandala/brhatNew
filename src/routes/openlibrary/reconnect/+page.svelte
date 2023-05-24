<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { getDescription } from '$lib/utils/supapulls'
	import { scale } from 'svelte/transition'
	let y:number
	let url:string
	let deets:any

	onMount(() => {
		url = $page.url.pathname;

		(async() => {
			deets = await getDescription(url)
		})();

	})
	

</script>


<svelte:window bind:scrollY={y}/>

<div class="mainpage">
	{url}
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


