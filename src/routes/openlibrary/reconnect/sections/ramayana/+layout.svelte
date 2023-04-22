<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import { sargasofRamayana, versesofRamayana } from '$lib/utils/synaptic'
	let fake = false
	let starta:number = 0
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
	let viewSargas = false
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

	function setNewSarga(newSarga:any){
		filteredSarga = newSarga
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


<div class="mainpage type pads">
	<div class="mainside">
		<h5>
			<a href="/openlibrary/reconnect/sections/ramayana">
			वाल्मीकि रामायण 
			</a>
		</h5>
		<form class="formgrid">
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
		<div class="sideitems" on:click={() => toggleKanda(1)} on:keydown={fauxfake} class:kandainview={sargs[1]}>
			<h6>Kāṇḍa 1</h6>
				{#if sargs[1]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas1 && sargas1.length > 0}
							{#each sargas1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/1/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(2)} on:keydown={fauxfake} class:kandainview={sargs[2]}>
			<h6>Kāṇḍa 2</h6>
				{#if sargs[2]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas2 && sargas2.length > 0}
							{#each sargas2 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/2/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}			
		</div>
		<div class="sideitems" on:click={() => toggleKanda(3)} on:keydown={fauxfake} class:kandainview={sargs[3]}>
			<h6>Kāṇḍa 3</h6>
				{#if sargs[3]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas3 && sargas3.length > 0}
							{#each sargas3 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/3/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(4)} on:keydown={fauxfake} class:kandainview={sargs[4]}>
			<h6>Kāṇḍa 4</h6>
				{#if sargs[4]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas4 && sargas4.length > 0}
							{#each sargas4 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/4/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(5)} on:keydown={fauxfake} class:kandainview={sargs[5]}>
			<h6>Kāṇḍa 5</h6>
				{#if sargs[5]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas5 && sargas5.length > 0}
							{#each sargas5 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/5/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(6)} on:keydown={fauxfake} class:kandainview={sargs[6]}>
			<h6>Kāṇḍa 6</h6>
				{#if sargs[6]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas6 && sargas6.length > 0}
							{#each sargas6 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/6/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(7)} on:keydown={fauxfake} class:kandainview={sargs[7]}>
			<h6>Kāṇḍa 7</h6>
				{#if sargs[7]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargas7 && sargas7.length > 0}
							{#each sargas7 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/7/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
	</div>
	<div class="mainmain">
		<div class="boxr" id="pagebar">
			<div class="boxr bread">
				<div class="box">
						Rāmāyaṇa 
					</div>
			<select class="select1" bind:value={filteredKanda}>
				<option value=0>0</option>
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
			</div>
		</div>
		<slot></slot>
	</div>
</div>

<style lang="sass">


.sargatray
	border: 1px solid #ececec
	padding: 16px
	margin: 8px 0
	p
		padding: 2px
		text-align: center
		cursor: pointer
		&:hover
			background: #fe4a49
			color: white


.formgrid
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "label1 label2 label3" "select1 select2 select3"
		gap: 8px 16px
		justify-content: start
		.label1
			grid-area: label1
		.label2
			grid-area: label2
		.label3
			grid-area: label3
		.select1
			grid-area: select1
		.select2
			grid-area: select2
		.select3
			grid-area: select3
		font-size: 12px


</style>