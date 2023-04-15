<script lang="ts">

	import { onMount } from 'svelte'
	import { RcasofMandala } from '$lib/utils/synaptic'
	import ReaderCard from '$lib/reader/ReaderCard.svelte'

	let rcas:any
	let currentMandala:any
	let sukta = '1'
	let ms:any

	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function nextSukta(){
		sukta += 1
	}


	onMount(async() => {
		currentMandala = data.mandala
		ms = '`${currentMandala}` - sukta'
		rcas = await RcasofMandala(ms)
	})

	export let data

</script>


<div class="mainmain">
	<h6>Sūkta {sukta}</h6>
	<div class="gridinmain">
	{#if rcas && rcas.length > 0}
		{#each rcas as item}
			<div class="readingcard">
				<cite>Sūkta - {item.suktanum}</cite>
				<h5 class="dev">
					<a href="/openlibrary/reconnect/sections/rigveda/{item.mandala}/{item.suktanum}/{item.rca}">
						{item.devanagari}
					</a>
				</h5>
				<p>{item.iast}</p>
			</div>
		{/each}
	{/if}
	</div>
	<div class="navbuttons">
		<button on:click={nextSukta} on:keydown={fauxfake}>Next Sūkta</button>
	</div>
</div>

<style lang="sass">


.gridinmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". . ."
		gap: 32px 32px
		margin-top: 32px

</style>
