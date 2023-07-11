<script lang="ts">
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { RcasofSukta } from '$lib/utils/synaptic';
	import GenCard from '$lib/reader/GenCard.svelte';

	export let data: any;
	let thercas: any;
	$metaTitle = 'Ṛgveda Saṃhitā at Bṛhat Open Library';
	$metaDescription =
		'Explore Ṛgveda Saṃhitā at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/rigveda';

	onMount(async () => {
		thercas = await RcasofSukta(data.mandala, data.suktacorrected);
	});
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="rta-row colgap200 forlegend">
	<small><a href="/openlibrary/rigveda/{data.mandala}">Maṇḍala {data.mandala}</a></small>
	<h3 class="hindiadobe p-bot-32 bord-bot">Sūkta {data.suktacorrected}</h3>
</div>
<div class="rta-column rowgap300 p-top-16 thekey">
	{#if thercas && thercas.length > 0}
		{#each thercas as item}
			<GenCard>
				<div slot="small">{item.msr}</div>
				<div slot="header5">
					<a href="/openlibrary/rigveda/{item.mandala}/{item.suktacorrected}/{item.rca}"
						>{item.devanagari}</a
					>
				</div>
				<div slot="header6">{item.iast}</div>
			</GenCard>
		{/each}
	{/if}
</div>
{data.suktacorrected}
