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



<div class="bol-page" class:calibrated={alignGrid}>
{#if varskand && varskand.length > 0}
	{#each varskand as item, i}
		<a class="bolbox dev" in:scale={{ duration: 300, delay: i * 50}} out:scale={{ duration: 50, delay: 0}} href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}">
			<small>{item.sarga} - {item.verse} - {item.pada}</small>
			<h5 class="dev">
					{item.devanagari}
			</h5>
			<h6 class="thin">{item.iast}</h6>
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

</style>



