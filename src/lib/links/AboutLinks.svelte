<script lang="ts">

	import { fly } from 'svelte/transition'
	import supabase from '$lib/utils/db'
	import { onMount } from 'svelte'
	import { quintIn } from 'svelte/easing'
	export let flytime:boolean
	let allSite:any

	export async function Anveshis(){
		const { data, error } = await supabase
		.from('brhatindex')
		.select()
		.eq('sitemap',true)
		.eq('names','about')
		.order('seq')
		if (error) throw new Error(error.message)
		return data
	}

	onMount(async() => {
		allSite = await Anveshis()
	})

</script>

{#if flytime}
	<a class="insidelink" in:fly={{ duration: 150, delay: 0, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/svatahsiddha">Svataḥsiddha</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 30, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/anatomy">Civilizational Moment</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 60, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 90, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/namelogo">Nāmarūpa - Name and Logo</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 120, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/values">Pratijñā - Values</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 150, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/#advisors">Advisors</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 180, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/#partners">Partners</a>
	<a class="insidelink" in:fly={{ duration: 150, delay: 210, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/#team">Team</a>
{/if}

