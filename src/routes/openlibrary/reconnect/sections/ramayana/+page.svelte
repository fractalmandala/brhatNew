<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { sargasofRamayana, versesofRamayana } from '$lib/utils/synaptic'
	let fake = false
	let sargs:any
	let vars:any
	let viewSargas = false
	let filteredKanda:any
	let filteredSarga:any

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

	$: if (filteredKanda) {
		(async() => {
			sargs = await sargasofRamayana(filteredKanda)
		})()
	}

	$: if (filteredSarga){
		(async() => {
			vars = await versesofRamayana(filteredKanda, filteredSarga)
		})
	}

	onMount(async() => {
		sargs = await sargasofRamayana(filteredKanda)
		vars = await versesofRamayana(filteredKanda, filteredSarga)
	})

</script>

<div class="mainside" data-lenis-prevent>
	<div class="sideitems {filteredKanda === 1 ? 'kandainview' : ''}" on:click={() => setNewKanda(1)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 1</h5>
	</div>
	<div class="sideitems {filteredKanda === 2 ? 'kandainview' : ''}" on:click={() => setNewKanda(2)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 2</h5>
	</div>
	<div class="sideitems {filteredKanda === 3 ? 'kandainview' : ''}" on:click={() => setNewKanda(3)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 3</h5>
	</div>
	<div class="sideitems {filteredKanda === 4 ? 'kandainview' : ''}" on:click={() => setNewKanda(4)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 4</h5>
	</div>
	<div class="sideitems {filteredKanda === 5 ? 'kandainview' : ''}" on:click={() => setNewKanda(5)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 5</h5>
	</div>
	<div class="sideitems {filteredKanda === 6 ? 'kandainview' : ''}" on:click={() => setNewKanda(6)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 6</h5>
	</div>
	<div class="sideitems {filteredKanda === 7 ? 'kandainview' : ''}" on:click={() => setNewKanda(7)} on:keydown={fauxfake}>
		<h5>Kāṇḍa 7</h5>
	</div>
	{#if viewSargas}
		<div class="sargaitems" transition:fly>
			{#if sargs && sargs.length > 0}
				{#each sargs as item}
					<p>
						<a href="/openlibrary/sections/ramayana/{filteredKanda}/{item.sarga}">
							{item.sarga}
						</a>
					</p>
				{/each}
			{/if}
		</div>
	{/if}
</div>
<div class="mainmain">

</div>

<style lang="sass">

.sideitems
	padding: 4px

.mainside
	position: relative
	.sargaitems
		position: absolute
		top: 0
		right: 0
		background: white
		width: 48px
		text-align: center
		cursor: pointer
		p
			padding: 2px

.sargaitems p
	&:hover
		background: #fe4a49
		color: white

.sideitems.kandainview
	h5
		color: #fe4a49

.mainmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". . . ."
		gap: 24px 24px

</style>