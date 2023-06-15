<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { versesByKanda, sargasofRamayana } from '$lib/utils/synaptic';
	import ReaderNav from '$lib/reader/ReaderNav.svelte';
	import GenCard from '$lib/reader/GenCard.svelte';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	let fake = false;
	let varskand: any;
	let thisSargas: any;
	let visSarga = false;
	let start = 0;
	let end = 10;

	function showSargas() {
		visSarga = !visSarga;
	}

	function isNext() {
		start += 10;
		end += 10;
	}

	function isPrev() {
		start -= 10;
		end -= 10;
	}

	function fauxfake() {
		fake = !fake;
	}

	$: if (start || end) {
		(async () => {
			varskand = await versesByKanda(data.kanda, start, end);
		})();
	}

	$: if (data.kanda) {
		(async () => {
			varskand = await versesByKanda(data.kanda, start, end);
			thisSargas = await sargasofRamayana(data.kanda);
		})();
	}

	onMount(async () => {
		varskand = await versesByKanda(data.kanda, start, end);
		thisSargas = await sargasofRamayana(data.kanda);
	});

	export let data;
</script>

<div class="rta-row colgap200 forlegend">
	<h3 class="hindiadobe p-bot-32 bord-bot">Kāṇḍa {data.kanda}</h3>
	<small on:click={showSargas} on:keydown={fauxfake}>Show Sargas</small>
	{#if visSarga}
		{#if thisSargas && thisSargas.length > 0}
			<div class="rta-grid grid2" use:clickOutsideAction on:clickOutside={showSargas}>
				{#each thisSargas as item}
					<p>
						<a href="/openlibrary/ramayana/{data.kanda}/{item.sarga}">{item.sarga}</a>
					</p>
				{/each}
			</div>
		{/if}
	{/if}
</div>
<div class="rta-column rowgap300 p-top-16 thekey">
	{#if varskand && varskand.length > 0}
		{#each varskand as item, i}
			<GenCard>
				<div slot="small">
					{item.sarga} - {item.verse} - {item.pada}
				</div>
				<a slot="header5" href="/openlibrary/ramayana/{item.kanda}/{item.sarga}/{item.verse}">
					{item.devanagari}
				</a>
				<div slot="header6">
					{item.iast}
				</div>
			</GenCard>
		{/each}
	{/if}
</div>
<ReaderNav>
	<button slot="prev" on:click={isPrev}>Prev</button>
	<button slot="next" on:click={isNext}>Next</button>
</ReaderNav>

<style lang="sass">

.forlegend
	position: relative
	.rta-grid
		position: absolute
		top: 24px
		left: 128px
		width: 160px
		background: var(--background)
		border: 1px solid var(--contraster)
		padding: 16px
		text-align: center
		border-radius: 5px
		row-gap: 8px
		a
			&:hover
				color: var(--opposite)

h3
	color: var(--opposite)

.rta-row
	small
		cursor: pointer
		&:hover
			color: var(--opposite)


</style>
