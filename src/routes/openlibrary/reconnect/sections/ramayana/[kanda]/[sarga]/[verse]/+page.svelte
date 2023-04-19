<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { scale } from 'svelte/transition'
	import ReaderCard from '$lib/reader/ReaderCard.svelte'
	import { padasofRamayana, verseSlug } from '$lib/utils/synaptic'
	let url:any
	let url2:any
	let nextID:any
	let prevID:any
	let currentKanda:any
	let currentSarga:any
	let currentVerse:any
	let pads:any
	let newID:any
	let prevData:any
	let nextData:any
	let showBreak = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}
	
	function toggleShowBreak(){
		showBreak = !showBreak
	}

	onMount(async() => {
		url = $page.url.pathname
		url2 = $page.url.pathname
		newID = data.id
		currentKanda = data.kanda
		currentSarga = data.sarga
		currentVerse = data.verse
		pads = await padasofRamayana(currentKanda, currentSarga, currentVerse)
		nextID = data.id + 1
		prevID = data.id - 1
		prevData = await verseSlug(prevID)
		nextData = await verseSlug(nextID)
	})

	export let data

</script>


	<div class="gridinmain">
	{#if pads && pads.length > 0}
		{#each pads as item, i}
			<div class="ramabox" in:scale={{ duration: 300, delay: i * 50}} out:scale={{ duration: 50, delay: 0}}>
			<cite>{item.sarga} - {item.verse} - {item.pada}</cite>
			<div class="dev">
				<h5>
					{item.devanagari}
				</h5>
			</div>
			<h6 class="iast">{item.iast}</h6>
			</div>
		{/each}
	{/if}
	</div>
	<div class="boxr readernavigation">
		<button>
			{#if prevData && prevData.length > 0}
				{#each prevData as item}
				<a href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}" target="_self">
					Previous
				</a>
				{/each}
			{/if}
		</button>
		<button>
			{#if nextData && nextData.length > 0}
				{#each nextData as item}
				<a href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}" target="_self">
					Next
				</a>
				{/each}
			{/if}
		</button>
	</div>



<style lang="sass">

.readernavigation
	justify-content: flex-start
	margin-top: 32px

.gridinmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "."
		gap: 32px 32px
		align-items: start
		align-content: start


</style>