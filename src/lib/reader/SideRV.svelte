<script lang="ts">
	import { rvrishis } from '$lib/filed/rvrshis';
	import '$lib/styles/reader.sass'
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Drop from '$lib/ridunits/RD-Drop.svelte';
	import Drop2 from '$lib/ridunits/RD-Drop.svelte';
	import Search from '$lib/reader/SearchRV.svelte';
	import { page } from '$app/stores';
	import { SuktasofMandala, RcasofSukta } from '$lib/utils/synaptic';

	let sidefilter: any;
	let expand: boolean[] = Array(10).fill(false);
	let filterMandala: number;
	let filterSukta: number;
	let filteredRcas: any;
	let linkingMandala: any;
	let linkingSukta: any;
	let linkingRca: any;
	let navigate: any;

	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleField(index: number) {
		expand[index] = !expand[index];
		for (let i = 0; i < expand.length; i++) {
			if (i !== index && expand[i] === true) {
				expand[i] = false;
			}
		}
	}

	$: if (filterMandala) {
		(async () => {
			sidefilter = await SuktasofMandala(filterMandala);
		})();
	}

	$: if (filterSukta) {
		(async () => {
			filteredRcas = await RcasofSukta(filterMandala, filterSukta);
		})();
	}

	function goToRca() {
		window.location.href = `/openlibrary/reconnect/sections/rigveda/${filterMandala}/${filterSukta}/${navigate}`;
	}

	$: linkingMandala = $page.url.pathname.substr(40, 1);
	$: linkingSukta = $page.url.pathname.substr(42, 1);
	$: linkingRca = $page.url.pathname.substr(45, 3);
</script>

<div
	class="rta-column rowgap200 bol-sidebar"
	class:dark={!$themeMode}
	class:light={$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<h5>
		<a href="/openlibrary/reconnect/sections/rigveda"> ऋग्वेद संहिता </a>
	</h5>
	<div class="rta-column rta-search">
		<Search />
	</div>
	<form class="side formgrids rta-row">
		<div class="label1">Maṇḍala:</div>
		<div class="label2">Sūkta:</div>
		<div class="label3">Ṛca:</div>
		<select bind:value={filterMandala}>
			<option value="0">{linkingMandala}</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
		</select>
		<select bind:value={filterSukta}>
			<option value="0">{linkingSukta}</option>
			{#if sidefilter && sidefilter.length > 0}
				{#each sidefilter as item, i}
					<option value={i}>{item.sukta}</option>
				{/each}
			{/if}
		</select>
		<select bind:value={navigate} on:change={goToRca}>
			<option value="0">{linkingRca}</option>
			{#if filteredRcas && filteredRcas.length > 0}
				{#each filteredRcas as item, i}
					<option value={i}>{item.rca}</option>
				{/each}
			{/if}
		</select>
	</form>
	<div>
		<div class="rta-column col-row">
			<Drop>
				<p slot="visible">Maṇḍalas</p>
				<div slot="invisible" class="rta-column rowgap100 fullW p-top-8">
					<a href="/openlibrary/reconnect/sections/rigveda/{1}">Maṇḍala 1</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{2}">Maṇḍala 2</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{3}">Maṇḍala 3</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{4}">Maṇḍala 4</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{5}">Maṇḍala 5</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{6}">Maṇḍala 6</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{7}">Maṇḍala 7</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{8}">Maṇḍala 8</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{9}">Maṇḍala 9</a>
					<a href="/openlibrary/reconnect/sections/rigveda/{10}">Maṇḍala 10</a>
				</div>
			</Drop>
			<Drop2>
				<p slot="visible">Draṣṭās</p>
				<div slot="invisible" class="rta-column rowgap100 p-top-8">
					{#each rvrishis as item}
						<p>{item}</p>
					{/each}
				</div>
			</Drop2>
		</div>
	</div>
</div>
