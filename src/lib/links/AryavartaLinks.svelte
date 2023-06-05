<script lang="ts">
	import { fly } from 'svelte/transition';
	import supabase from '$lib/utils/db';
	import { onMount } from 'svelte';
	import { quintIn } from 'svelte/easing';
	export let flytime: boolean;
	let allSite: any;

	export async function Aryavartas() {
		const { data, error } = await supabase
			.from('brhatindex')
			.select()
			.eq('sitemap', true)
			.eq('names', 'aryavarta')
			.order('seq');
		if (error) throw new Error(error.message);
		return data;
	}

	onMount(async () => {
		allSite = await Aryavartas();
	});
</script>

{#if flytime}
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 10, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/aryavarta">Scrolls of Āryavarta</a
	>
{/if}
