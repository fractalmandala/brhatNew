<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'
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

<div class="mainmain">
	<div class="gridinmain">
	{#if pads && pads.length > 0}
		{#each pads as item, i}
			<ReaderCard query={item.devanagari} i={i}>
			<cite slot="cite">{item.sarga} - {item.verse} - {item.pada}</cite>
			<div class="dev" slot="title">
				<h5>
				<a href="/openlibrary/reconnect/sections/ramayana/{data.kanda}/{item.sarga}/{item.verse}">
					{item.devanagari}
				</a>
				</h5>
			</div>
			<h6 class="iast" slot="iast">{item.iast}</h6>
			</ReaderCard>
		{/each}
	{/if}
	</div>
	<div class="navbuttons">
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
</div>


<style lang="sass">

.mainmain
	display: flex
	flex-direction: column
	min-height: 100vh

.navbuttons
	padding-top: 32px
	display: flex
	flex-direction: row
	gap: 16px

.gridinmain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". ."
		gap: 32px 32px
		align-items: start
		align-content: start

.navbuttons
	width: 100%
	justify-content: center
	button
		background: white
		border: 1px solid #878787 !important
		color: #878787
		outline: none
		border-radius: 2px
		font-size: 12px
		width: 80px
		text-align: center
		padding: 4px
		text-transform: uppercase
		cursor: pointer
		transform-origin: center center
		transition: 0.1s ease
		&:hover
			transform: scale(0.9)
			background: var(--strong)
			color: white
			border: 1px solid #fe4a49 !important

</style>