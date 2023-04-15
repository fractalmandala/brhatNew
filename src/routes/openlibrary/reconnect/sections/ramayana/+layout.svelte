<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import { sargasofRamayana, versesofRamayana } from '$lib/utils/synaptic'
	let fake = false
	let url:any
	let pageK:any
	let pageS:any
	let pageV:any
	let sargs:boolean[] = Array(7).fill(false)
	let sargs1:any
	let sargs2:any
	let sargs3:any
	let sargs4:any
	let sargs5:any
	let sargs6:any
	let sargs7:any
	let vars:any
	let viewSargas = false
	let filteredKanda:any
	let filteredSarga:any
	let startat = 0

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

	function toggleSargas(){
		viewSargas = !viewSargas
	}

	function setNewKanda(newKanda:any){
		filteredKanda = newKanda
		viewSargas = !viewSargas
	}

	function setNewSarga(newSarga:any){
		filteredSarga = newSarga
	}


	$: if (filteredSarga){
		(async() => {
			vars = await versesofRamayana(startat, filteredKanda, filteredSarga)
		})
	}

	onMount(async() => {
		url = $page.url.pathname
		pageK = url.substr(41,1)
		pageS = url.substr(43,1)
		pageV = url.substr(45,5)
		sargs1 = await sargasofRamayana(1)
		sargs2 = await sargasofRamayana(2)
		sargs3 = await sargasofRamayana(3)
		sargs4 = await sargasofRamayana(4)
		sargs5 = await sargasofRamayana(5)
		sargs6 = await sargasofRamayana(6)
		sargs7 = await sargasofRamayana(7)
		vars = await versesofRamayana(startat, filteredKanda, filteredSarga)
	})


</script>


<div class="subheadtop">
	<div class="toprest">
		<h4>
			<a href="/openlibrary/reconnect/sections/ramayana">
		Vālmīki Rāmāyaṇa</a>
		</h4>
	</div>
	<div class="breadcrumber">	
		<h6>Kāṇḍa {pageK} <span> | </span>Sarga {pageS} <span> | </span>Verse {pageV}</h6>
	</div>
</div>
<div class="mainpage">
	<div class="mainside" data-lenis-prevent>
		<div class="sideitems" on:click={() => toggleKanda(1)} on:keydown={fauxfake} class:kandainview={sargs[1]}>
			<h5>Kāṇḍa 1</h5>
				{#if sargs[1]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/1/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(2)} on:keydown={fauxfake} class:kandainview={sargs[2]}>
			<h5>Kāṇḍa 2</h5>
				{#if sargs[2]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/2/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}			
		</div>
		<div class="sideitems" on:click={() => toggleKanda(3)} on:keydown={fauxfake} class:kandainview={sargs[3]}>
			<h5>Kāṇḍa 3</h5>
				{#if sargs[3]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/3/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(4)} on:keydown={fauxfake} class:kandainview={sargs[4]}>
			<h5>Kāṇḍa 4</h5>
				{#if sargs[4]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/4/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(5)} on:keydown={fauxfake} class:kandainview={sargs[5]}>
			<h5>Kāṇḍa 5</h5>
				{#if sargs[5]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/5/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(6)} on:keydown={fauxfake} class:kandainview={sargs[6]}>
			<h5>Kāṇḍa 6</h5>
				{#if sargs[6]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/6/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
		<div class="sideitems" on:click={() => toggleKanda(7)} on:keydown={fauxfake} class:kandainview={sargs[7]}>
			<h5>Kāṇḍa 7</h5>
				{#if sargs[7]}
					<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
						{#if sargs1 && sargs1.length > 0}
							{#each sargs1 as item}
								<a href="/openlibrary/reconnect/sections/ramayana/7/{item.sarga}">
								<p>{item.sarga}</p>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
		</div>
	</div>
	<slot></slot>
</div>

<style lang="sass">

.toprest h4
	@media screen and (max-width: 1023px)
		font-size: 21px

.sideitems
	padding: 4px

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

.sideitems
	h5
		font-size: 18px
	@media screen and (max-width: 1023px)
		h5
			font-size: 16px

.sideitems.kandainview
	h5
		color: #fe4a49
		font-size: 18px


</style>