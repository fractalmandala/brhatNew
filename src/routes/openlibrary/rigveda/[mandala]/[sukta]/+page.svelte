<script lang="ts">
	import { onMount } from 'svelte';
	import { RcasofSukta } from '$lib/utils/synaptic';
	import GenCard from '$lib/reader/GenCard.svelte';

	export let data: any;
	let thercas: any;

	onMount(async () => {
		thercas = await RcasofSukta(data.mandala, data.suktacorrected);
	});
</script>

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
