<script lang="ts">
	import { fly } from 'svelte/transition';
	import supabase from '$lib/utils/db';
	import { onMount } from 'svelte';
	import { quintIn } from 'svelte/easing';
	export let flytime: boolean;
	let allSite: any;

	export async function Drashtas() {
		const { data, error } = await supabase
			.from('brhatindex')
			.select()
			.eq('sitemap', true)
			.eq('names', 'drashta')
			.order('seq');
		if (error) throw new Error(error.message);
		return data;
	}

	onMount(async () => {
		allSite = await Drashtas();
	});
</script>

{#if flytime}
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 10, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta">Draṣṭā Home</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 30, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/schools">Schools of Thought</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 50, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/shriramswarup">Shri Ram Swarup</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 70, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/sitaramgoel">Sita Ram Goel</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 90, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/hinduiconography">Hindu Iconography</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/valmikiramayana">Vālmīki Rāmāyaṇa</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/yogasutra">Patañjali's Yoga Sūtras</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/comparativecivilisations">Civilizations - an Indic View</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/mahabharataparayana">Mahābhārata Pārāyaṇa</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/drashta/course/ancientindianhistory">Ancient Indian History</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 110, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/bhairavadharana">Bhairava Dhāraṇā</a
	>
{/if}
