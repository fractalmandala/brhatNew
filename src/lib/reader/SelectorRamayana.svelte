<script lang="ts">

	import { onMount } from 'svelte'
	import '$lib/styles/reader.sass'
	import { scale } from 'svelte/transition'
	import { page } from '$app/stores'
	import supabase from '$lib/utils/db'
	import { sargasofRamayana, versesofRamayana } from '$lib/utils/synaptic'

	let fake = false
	let vars:any
	let filteredKanda:any
	let filteredSarga:any
	let filteredVerse:any
	let startat = 0
	let showingSargas:any

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

</script>

<div class="rta-row between">
	<form class="selector formgrids rta-row">
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

</div>