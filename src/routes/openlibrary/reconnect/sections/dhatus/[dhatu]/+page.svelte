<script lang="ts">

	import { onMount } from 'svelte'
	import { dhatuNode, dhatuKartari } from '$lib/utils/synaptic'

	let singleDhatu:any
	let allDhatus:any
	let currentID:any
	let currentWords:any
	let showDetails = false
	let linetosplit:any

	function toggleDetails(){
		showDetails = !showDetails
	}

	function setID(newID:any){
		currentID = newID
		if ( showDetails === false ) {
			showDetails = true
		} else {
			showDetails = false
		}
	}

	$: if (currentID) {
		(async() => {
			currentWords = await dhatuKartari(currentID)
		})()
	}

	onMount(async() => {
		singleDhatu = data.dhatu
		allDhatus = await dhatuNode(singleDhatu)
		currentWords = await dhatuKartari(currentID)
	})

	export let data	

</script>

<div class="mainmain type">
	{#if allDhatus && allDhatus.length > 0}
		<div class="gridinmain">
		{#each allDhatus as item}
			<div class="readingcard">
				<cite>{item.baseindex}</cite>
				<h4 class="dev">{item.dhatu} - <span class="spl"> {item.dhatuiast}</span></h4>
				<h5>{item.arthaiast}</h5>
				<p>{item.artha_english}</p>
				<p class="dev">{item.artha_hindi}</p>
				{currentID}
				<button on:click={() => setID(item.baseindex)}>Explore Words from this Dhātu</button>
					{#if showDetails}
						{#if currentWords && currentWords.length > 0}
							{#each currentWords as word}
							<p>{word.word}</p>
							{/each}
						{/if}
					{/if}
			</div>
		{/each}
		</div>
	{/if}
</div>

<style lang="sass">

.gridinmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". ."
		gap: 32px 32px

.readingcard h5
	margin-bottom: 16px


</style>