<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import ReaderCard from '$lib/reader/ReaderCard.svelte'
	import { versesByKanda } from '$lib/utils/synaptic'
	let fake = false
	let varskand:any
	let limit = 9
	let showBreak:any

	function fauxfake(){
		fake = !fake
	}

	onMount(async() => {
		varskand = await versesByKanda(data.kanda, limit)
	})

	export let data

</script>



<div class="mainmain">
{#if varskand && varskand.length > 0}
	{#each varskand as item, i}
		<ReaderCard query={item.devanagari} showBreak={showBreak} i={i}>
			<cite slot="cite">{item.sarga} - {item.verse} - {item.pada}</cite>
			<h5 class="dev" slot="title">
				<a href="/openlibrary/reconnect/sections/ramayana/{data.kanda}/{item.sarga}/{item.verse}">
					{item.devanagari}
				</a>
			</h5>
			<h6 class="iast" slot="iast">{item.iast}</h6>
		</ReaderCard>
	{/each}
{/if}
<div class="navbuttons">
	<button>Prev</button>
	<button>Next</button>
</div>
</div>


<style lang="sass">


.mainmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". . ."
		gap: 24px 24px

</style>



