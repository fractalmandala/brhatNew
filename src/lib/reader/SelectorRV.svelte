<script lang="ts">
	
	import { themeMode } from '$lib/stores/globalstores'
	import '$lib/styles/reader.sass'
	import { page } from '$app/stores'
	import { SuktasofMandala, RcasofSukta } from '$lib/utils/synaptic'

	let filterMandala:number
	let filterSukta:number
	let filteredRcas:any
	let linkingMandala:any
	let linkingSukta:any
	let linkingRca:any
	let navigate:any
	let sidefilter:any

	$: if ( filterMandala) {
		(async() => {
			sidefilter = await SuktasofMandala(filterMandala)
		})()
	}

	$: if ( filterSukta) {
		(async() => {
			filteredRcas = await RcasofSukta(filterMandala, filterSukta)
		})()
	}

	function goToRca(){
		window.location.href=`/openlibrary/reconnect/sections/rigveda/${filterMandala}/${filterSukta}/${navigate}`
	}


	$: linkingMandala = $page.url.pathname.substr(40,1)
	$: linkingSukta = $page.url.pathname.substr(42,1)
	$: linkingRca = $page.url.pathname.substr(45,3)



</script>

<div class="rta-row between">
	<form class="selector formgrids rta-row">
		<div class="label1">Maṇḍala:</div>
		<div class="label2">Sūkta:</div>
		<div class="label3">Ṛca:</div>
		<select bind:value={filterMandala}>
			<option value=0>{linkingMandala}</option>
			<option value=1>1</option>	
			<option value=2>2</option>	
			<option value=3>3</option>	
			<option value=4>4</option>	
			<option value=5>5</option>	
			<option value=6>6</option>	
			<option value=7>7</option>	
			<option value=8>8</option>	
			<option value=9>9</option>	
			<option value=10>10</option>				
		</select>
		<select bind:value={filterSukta}>
			<option value=0>{linkingSukta}</option>
			{#if sidefilter && sidefilter.length > 0}
				{#each sidefilter as item, i}
					<option value={i}>{item.sukta}</option>
				{/each}
			{/if}
		</select>
		<select bind:value={navigate} on:change={goToRca}>
			<option value=0>{linkingRca}</option>
			{#if filteredRcas && filteredRcas.length > 0}
				{#each filteredRcas as item, i}
					<option value={i}>{item.rca}</option>
				{/each}
			{/if}
		</select>
	</form>
</div>
