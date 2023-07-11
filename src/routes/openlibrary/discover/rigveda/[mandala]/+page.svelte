<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { SuktasofMandalaFull, SuktasofMandala } from '$lib/utils/synaptic';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import GenCard from '$lib/reader/GenCard.svelte';
	import ReaderNav from '$lib/reader/ReaderNav.svelte';

	let linking: any;
	let suktas: any;
	let linkingNumber: number;
	let suktasformenu: any;
	let visSuktas = false;
	let start = 0;
	let end = 10;

	function isNext() {
		start += 10;
		end += 10;
	}

	function isPrev() {
		start -= 10;
		end -= 10;
	}

	function showSuktas() {
		visSuktas = !visSuktas;
	}
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	$: linking = $page.url.pathname.slice(40, 100);
	$: linkingNumber = parseInt(linking, 10);

	$: if (data.mandala) {
		(async () => {
			suktasformenu = await SuktasofMandala(data.mandala);
		})();
	}

	$: if (start || end) {
		(async () => {
			suktas = await SuktasofMandalaFull(data.mandala, start, end);
		})();
	}

	onMount(async () => {
		suktas = await SuktasofMandalaFull(data.mandala, start, end);
		suktasformenu = await SuktasofMandala(data.mandala);
	});

	export let data;
</script>

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<small on:click={showSuktas} on:keydown={fauxfake}>Show Sūktas</small>
		{#if visSuktas}
			{#if suktasformenu && suktasformenu.length > 0}
				<div class="rta-grid grid2" use:clickOutsideAction on:clickOutside={showSuktas}>
					{#each suktasformenu as item}
						<p>
							<a href="/openlibrary/discover/rigveda/{item.mandala}/{item.sukta}">{item.sukta}</a>
						</p>
					{/each}
				</div>
			{/if}
		{/if}
		<div class="rta-column rowgap300 p-top-16 thekey">
			{#if suktas && suktas.length > 0}
				{#each suktas as item, i}
					<GenCard>
						<div slot="small">
							{item.msr}
						</div>
						<div slot="header5">
							{item.devanagari}
						</div>
						<div slot="header6">
							{item.iast}
						</div>
					</GenCard>
				{/each}
			{/if}
		</div>
	</div>

	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/dhatupatha"><button class="newbutton">Previous</button></a>
		<a href="/openlibrary/discover/dhatupatha"><button class="newbutton">Next</button></a>
	</div>
</div>

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

.rta-row
	small
		cursor: pointer
		&:hover
			color: var(--opposite)

</style>
