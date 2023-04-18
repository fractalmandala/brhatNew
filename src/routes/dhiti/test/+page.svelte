<script lang="ts">

	import { onMount } from 'svelte'
	import { completeDhiti } from '$lib/utils/localpulls'

	let dhits:any

	onMount(async() => {
		dhits = await completeDhiti()
	})

</script>

<div class="pads">
{#if dhits && dhits.length > 0}
	{#each dhits as item}
	<p>{item.meta.title}</p>
	<small>{item.meta.date}</small>
	{/each}
{/if}
</div>

<style lang="sass">

.pads
	padding-top: 128px

</style>