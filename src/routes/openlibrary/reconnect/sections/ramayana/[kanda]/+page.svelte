<script lang="ts">

	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import ReaderCard from '$lib/reader/ReaderCard.svelte'
	import { versesByKanda } from '$lib/utils/synaptic'
	let fake = false
	let varskand:any
	let limit = 9
	let verses:any
	let alignGrid = false
	
	function toggleVerse(index:number){
		verses[index] = !verses[index] 
		for ( let i = 0; i < verses.length; i++) {
			if ( i !== index && verses[i] === true) {
				verses[i] = false
			}
		}
		if ( alignGrid === false ) {
			alignGrid = true
		}
	}

	function fauxfake(){
		fake = !fake
	}

	onMount(async() => {
		varskand = await versesByKanda(data.kanda, limit)
	})

	export let data

</script>



<div class="mainmain type" class:calibrated={alignGrid}>
{#if varskand && varskand.length > 0}
	{#each varskand as item, i}
		<a class="ramabox" in:scale={{ duration: 300, delay: i * 50}} out:scale={{ duration: 50, delay: 0}} href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}">
			<cite>{item.sarga} - {item.verse} - {item.pada}</cite>
			<h5 class="dev">
					{item.devanagari}
			</h5>
			<h6 class="iast">{item.iast}</h6>
		</a>
	{/each}
{/if}
</div>
<div class="boxr readernavigation">
	<button>Prev</button>
	<button>Next</button>
</div>


<style lang="sass">

.readernavigation
	justify-content: center
	width: 100%

.ramabox
	display: flex
	flex-direction: column
	padding: 16px
	transition: 0.2s ease
	border-radius: 4px
	cursor: pointer
	cite
		font-style: normal
		text-transform: uppercase
		color: #b7b7b7
	h5
		font-weight: 700
		margin-top: 16px
		margin-bottom: 16px
	h6
		font-weight: 400
		color: #878787
	&:hover
		background: #f7f7f7



.mainmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". . ."
		gap: 32px 32px


</style>



