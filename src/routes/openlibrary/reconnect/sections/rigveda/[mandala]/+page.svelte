<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { scale } from 'svelte/transition'
	import { RcasofMandala, SuktasofMandalaFull } from '$lib/utils/synaptic'
	import ReaderCard from '$lib/reader/ReaderCard.svelte'


	let linking:any
	let suktas:any
	let currentSukta = 1
	let linkingNumber:number
	let alignGrid = false
	let area:any = Array(100).fill(false)


	function toggleArea(index:number) {
		area[index] = !area[index]
		for ( let i = 0; i < area.length; i ++ ) {
			if ( i !== index && area[i] === true ) {
				area[i] = false
			}
		}
		if ( alignGrid === false ) {
			alignGrid = true
		}
	}

	let fake = false

	function fauxfake(){
		fake = !fake
	}



	onMount(async() => {
		linking = $page.url.pathname.slice(40,100)
		linkingNumber = parseInt(linking, 10)
		suktas = await SuktasofMandalaFull(data.mandala)
	})

	export let data

</script>

<div class="gridof3" class:calibrated={alignGrid}>
	{#if suktas && suktas.length > 0}
		{#each suktas as item, i}
			{#if area[i]}
			<div class="bolbox opentab dev" in:scale={{ duration: 300, delay: 200 }} out:scale={{ duration: 200, delay: 0}}>
				<h4 class="dev" style="color: #272727">{item.devanagari}</h4>
				<h5>{item.iast}</h5>
			</div>
			{:else}
			<div class="bolbox dev" on:click={() => toggleArea(i)} on:keydown={fauxfake} in:scale={{ duration: 200, delay: i * 50 }} out:scale={{ duration: 200, delay: 0}}>
				<small>{item.msr}</small>
				<p class="dev" style="color: #272727; font-size: 16px">{item.devanagari}</p>
			</div>
			{/if}
		{/each}
	{/if}
</div>

<style lang="sass">

.gridof3
	gap: 16px 16px

.gridof3.calibrated
	grid-template-areas: "opentab opentab opentab" ". . ."
	grid-template-rows: auto auto
	.bolbox.opentab
		padding: 32px
		grid-area: opentab
		border: 1px solid #ececec
		&:hover
			background: white



.bolbox
	box-sizing: border-box
	cursor: pointer
	display: flex
	flex-direction: column
	padding: 16px
	border-radius: 4px
	&:hover
		background: #f7f7f7
	small
		font-size: 12px
		color: #878787
	p
		font-weight: 700
		padding-top: 5px
		

</style>