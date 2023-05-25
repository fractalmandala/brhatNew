<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { versesofRamayana } from '$lib/utils/synaptic'
	let verseSarga:any
	let currentKanda:any
	let url:any
	let startat = 0
	let limit = 9
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function loadNext(){
		startat += 8
	}

	function loadPrev(){
		startat -= 8
	}

	$: if (startat) {
		(async() => {
			verseSarga = await versesofRamayana(startat,currentKanda,data.sarga)
		})()
	}

	onMount(async() => {
		url = $page.url.pathname
		currentKanda = url.substr(41,1)
		verseSarga = await versesofRamayana(startat,currentKanda,data.sarga)
	})

	export let data

</script>


<div class="mainmain">
	<div class="gridinmain">
		{#if verseSarga && verseSarga.length > 0}
		{#each verseSarga as item}
		<div class="readingcard">
			<cite>{item.sarga} - {item.verse} - {item.pada}</cite>
			<h5 class="dev">
				<a href="/openlibrary/reconnect/sections/ramayana/{data.kanda}/{item.sarga}/{item.verse}">
					{item.devanagari}
				</a>
			</h5>
			<h6 class="iast">{item.iast}</h6>
		</div>
		{/each}
		{/if}
	</div>
	<div class="navbuttons">
		<button on:click={loadNext} on:keydown={fauxfake}>{startat}Load Next</button>
		{#if startat > 0}
		<button on:click={loadPrev} on:keydown={fauxfake}>{limit}Load Previous</button>
		{/if}
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

.navbuttons
	padding-top: 32px
	display: flex
	flex-direction: row
	gap: 16px

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