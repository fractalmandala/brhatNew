<script lang="ts">
	import { onMount } from 'svelte';
	import { dynamicTable } from '$lib/utils/synaptic';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';

	export let data;

	let name = data.name;
	let text: any;
	let limit = 9;

	$: name = data.name;

	function loadMore() {
		limit += 10;
		(async () => {
			text = await dynamicTable(name, limit);
		})();
	}

	onMount(async () => {
		text = await dynamicTable(name, limit);
	});
</script>

<div
	class="rta-column"
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="rta-row topstrips null bord-bot p-bot-8">
		<h5 class="authentic tt-c oppositer"><b>{data.name} | {data.iast} | {data.devanagari}</b></h5>
	</div>
	<div class="rta-column mainstrips p-top-16 rowgap400">
		{#if text && text.length > 0}
			{#each text as item}
				<div class="rta-column pagelineitem">
					<div class="rta-row indexing">
						<small>{item.mainindexhelp}</small>
					</div>
					<h6 class="thin">
						{item.line1devanagari} | {item.line1iast} | {item.line1romanized}
					</h6>
					<p>
						{item.line2devanagari} | {item.line2iast} | {item.line2romanized}
					</p>
				</div>
			{/each}
		{/if}
		<div class="rta-row xcenter-m bord-top p-top-16">
			<button class="newbutton" on:click={loadMore}>Load More</button>
		</div>
	</div>
</div>

<style lang="sass">

.lzero
	.mainstrips
		padding-right: 24vw


</style>
