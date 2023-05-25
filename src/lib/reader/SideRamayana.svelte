<script lang="ts">

	import { onMount } from 'svelte'
	import { rvrishis } from '$lib/filed/rvrshis';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores'
	import { page } from '$app/stores'
	import Drop from '$lib/ridunits/RD-Drop.svelte'
	import Drop2 from '$lib/ridunits/RD-Drop.svelte'
	import Search from '$lib/reader/SearchRamayana.svelte'
	import { sargasofRamayana, versesofRamayana } from '$lib/utils/synaptic'

	let fake = false
	let url:any
	let pageK:any
	let pageS:any
	let pageV:any
	let sargs:boolean[] = Array(7).fill(false)
	let sargas1:any
	let sargas2:any
	let sargas3:any
	let sargas4:any
	let sargas5:any
	let sargas6:any
	let sargas7:any
	let vars:any
	let filteredKanda:any
	let filteredSarga:any
	let filteredVerse:any
	let startat = 0
	let showingSargas:any

	function toggleKanda(index:number){
		sargs[index] = !sargs[index] 
		for ( let i = 0; i < sargs.length; i++) {
			if ( i !== index && sargs[i] === true) {
				sargs[i] = false
			}
		}
	}

	function fauxfake(){
		fake = !fake
	}


$: if (filteredKanda) {
		(async() => {
			showingSargas = await sargasofRamayana(filteredKanda)
		})()
	}

$: if (filteredSarga){
		(async() => {
			vars = await versesofRamayana(startat, filteredKanda, filteredSarga)
		})()
	}

	function goToVerse(){
		window.location.href=`/openlibrary/reconnect/sections/ramayana/${filteredKanda}/${filteredSarga}/${filteredVerse}`
	}


	onMount(async() => {
		url = $page.url.pathname
		pageK = url.substr(41,1)
		pageS = url.substr(43,1)
		pageV = url.substr(45,5)
		vars = await versesofRamayana(startat, filteredKanda, filteredSarga)
		showingSargas = await sargasofRamayana(filteredKanda)
		sargas2 = await sargasofRamayana(2)
	
	})



</script>


<div class="rta-column rowgap200"
	class:dark={!$themeMode}
	class:light={$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	>
	<h5>
		<a href="/openlibrary/reconnect/sections/ramayana">
			वाल्मीकि रामायण
		</a>
	</h5>
	<div class="rta-column rta-search">
		<Search/>
	</div>
		<form class="side formgrids">
			<div class="label1">Kāṇḍa:</div>
			<div class="label2">Sarga:</div>
			<div class="label3">Verse:</div>
			<select class="select1" bind:value={filteredKanda}>
				<option value=0></option>
				<option value=1>1</option>
				<option value=2>2</option>
				<option value=3>3</option>
				<option value=4>4</option>
				<option value=5>5</option>
				<option value=6>6</option>
				<option value=7>7</option>
			</select>
			<select class="select2" bind:value={filteredSarga}>
				{#if showingSargas && showingSargas.length > 0}
						<option value=0>select</option>
					{#each showingSargas as item, i}	
						<option value={i}>{item.sarga}</option>
					{/each}
				{/if}
			</select>
			<select class="select3" bind:value={filteredVerse} on:change={goToVerse}>
				{#if vars && vars.length > 0}
					<option value=0>select</option>
					{#each vars as item, i}
						<option value={i}>{item.verse}</option>
					{/each}
				{/if}
			</select>
		</form>
	<div class="rta-column col-row">
		<Drop>
			<p slot="visible">Kāṇḍas</p>
			<div slot="invisible" class="rta-column rowgap100 fullW p-top-8">
					<a href="/openlibrary/reconnect/sections/ramayana/1">Kāṇḍa 1</a>
					<a href="/openlibrary/reconnect/sections/ramayana/2">Kāṇḍa 2</a>
					<a href="/openlibrary/reconnect/sections/ramayana/3">Kāṇḍa 3</a>
					<a href="/openlibrary/reconnect/sections/ramayana/4">Kāṇḍa 4</a>
					<a href="/openlibrary/reconnect/sections/ramayana/5">Kāṇḍa 5</a>
					<a href="/openlibrary/reconnect/sections/ramayana/6">Kāṇḍa 6</a>
					<a href="/openlibrary/reconnect/sections/ramayana/7">Kāṇḍa 7</a>				
			</div>
		</Drop>
	</div>
</div>
