<script lang="ts">

	import { fly } from 'svelte/transition'
	import supabase from '$lib/utils/db'
	import { onMount } from 'svelte'
	import { quintIn } from 'svelte/easing'
	export let flytime:boolean
	let allDrashta:any

	export async function Drashtas(){
		const { data, error } = await supabase
		.from('brhatindex')
		.select()
		.eq('sitemap',true)
		.eq('names','drashta')
		.order('seq',{ascending: false})
		if (error) throw new Error(error.message)
		return data
	}

	const LinkNames = [
		"Śrīmad Vālmiki Rāmāyana Pārāyana",
		"hindu iconography",
		"Introduction to Sita Ram Goel",
		"introduction to shri ram swarup",
		"schools of thought",
	]

	onMount(async() => {
		allDrashta = await Drashtas()
	})

</script>

{#if flytime}
{#if allDrashta && allDrashta.length > 0}
{#each allDrashta as name, i}
	<a in:fly={{ duration: 150, delay: i*50, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href={name.url}>{name.heading}</a>
{/each}
{/if}
{/if}

