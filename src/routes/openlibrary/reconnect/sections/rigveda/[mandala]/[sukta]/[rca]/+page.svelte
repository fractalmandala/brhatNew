<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'	
	import Conllu from '$lib/reader/GetConllu.svelte'
	import IconLoading from '$lib/icons/IconLoading.svelte'
	import { rvRishis, rvDevatas, rvChandas, RVWords, RVPagination } from '$lib/utils/synaptic'
 	let textDev:any
	let breakDev:any
	let joinDev:any
	let textIAST:any
	let breakIAST:any
	let joinIAST:any
	let msr:any
	let dets:any
	let pagination:any
	let allwords:any
	let nextNum:number
	let prevNum:number
	let showPrev = false
	let currentMandala:any
	let currentSukta:any
	let currentRca:any

	$: if ( prevNum > 0 ) {
		showPrev = true
	} else {
		showPrev = false
	}
	
	let rshis:any
	let devas:any
	let chandas:any
	
	export let data:any

	onMount(async() => {
		msr = $page.url.pathname.substr(40,100)
		rshis = await rvRishis(data.mandala,data.suktacorrected,data.rca)
		devas = await rvDevatas(data.mandala,data.suktacorrected,data.rca)
		chandas = await rvChandas(data.mandala,data.suktacorrected,data.rca)
		pagination = await RVPagination(msr)
		dets = data.msr
		nextNum = data.primvalue + 1
		prevNum = data.primvalue - 1
		currentMandala = data.mandala
		currentSukta = data.suktacorrected
		currentRca = data.rca
		allwords = await RVWords(dets)
		textDev = data.devanagari
		breakDev = textDev.split('।')
		joinDev = breakDev.join("<br>")
		textIAST = data.iast
		breakIAST = textIAST.split('|')
		joinIAST = breakIAST.join("<br>")
	})
	

</script>


<div class="box generic readcard" transition:fly>
	{#if joinIAST && joinIAST.length > 0}
	<h5 class="dev">{@html joinDev}</h5>
	<h6>{@html joinIAST}</h6>
	{:else}
		<IconLoading></IconLoading>
	{/if}
	<div class="boxr inside two">
		{#if devas && devas.length > 0}
			{#each devas as item}
				<h6>Devatā<br><span class="datatext">{item.iast}</span></h6>
			{/each}
		{/if}
		{#if rshis && rshis.length > 0}
			{#each rshis as item}
				<h6>Ṛṣī<br><span class="datatext">{item.iast}</span></h6>
			{/each}
		{/if}
		{#if chandas && chandas.length > 0}
			{#each chandas as item}
				<h6>Chanda<br><span class="datatext">{item.iast}</span></h6>
			{/each}
		{/if}
	</div>
	<div class="box english">
		<small>Griffith's Translation:</small>
		<h6>{data.griffith}</h6>
	</div>
	<div class="box extras">

	</div>
	<div class="boxr readernavigation">
		{#if pagination && pagination.length > 0}
		{#each pagination as item}
		{#if showPrev}
		<button><a href="/openlibrary/reconnect/sections/rigveda/{item.prev}" data-sveltekit-reload>Previous</a></button>
		{/if}
		<button><a href="/openlibrary/reconnect/sections/rigveda/{item.next}" data-sveltekit-reload>Next</a></button>
		{/each}
		{/if}
	</div>
</div>


<style lang="sass">

.generic
	justify-content: flex-start
	h5.dev
		color: #272727
		font-size: 32px
	h5
		color: #878787
		margin: 0
	h6
		font-weight: 400
		line-height: 1.5
	@media screen and (min-width: 1024px)
		text-align: left
		padding-top: 32px

.inside
	justify-content: space-between
	border-top: 1px solid #ececec
	border-bottom: 1px solid #ececec
	padding-top: 24px
	padding-bottom: 24px
	h6
		font-size: 12px
		color: #878787
		text-transform: lowercase
	h6
		.datatext
			font-size: 18px
			text-transform: uppercase
			color: #474747
.english
	small
		color: #878787

.readernavigation
	justify-content: flex-start
	gap: 16px
	button
		border: 1px solid #676767
		color: #474747
		background: white
		font-weight: 500
		border-radius: 6px
		padding: 5px 12px
		width: 80px
		transition: 0.18s
		transform-origin: center center
		cursor: pointer
		&:hover
			background: #fe4a49
			border: 2px solid #fe4a49
			color: white
			transform: scale(0.9)
			a
				color: white

</style>
