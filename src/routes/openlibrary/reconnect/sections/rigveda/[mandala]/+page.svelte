<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	import { SuktasofMandalaFull } from '$lib/utils/synaptic'

	let linking:any
	let suktas:any
	let linkingNumber:number
	let alignGrid = false
	let area:any = Array(100).fill(false)
	let limit = 20


	function toggleArea(index:number) {
		area[index] = !area[index]
		for ( let i = 0; i < area.length; i ++ ) {
			if ( i !== index && area[i] === true ) {
				area[i] = false
			}
		}
	}

	let fake = false

	function fauxfake(){
		fake = !fake
	}

	$: linking = $page.url.pathname.slice(40,100)
	$: linkingNumber = parseInt(linking, 10)

	onMount(async() => {
		suktas = await SuktasofMandalaFull(data.mandala, limit);

	})

	export let data

</script>

<div class="bol-page" class:calibrated={alignGrid}>
	{#if suktas && suktas.length > 0}
		{#each suktas as item, i}
			<div class="bolbox dev" on:click={() => toggleArea(i)} on:keydown={fauxfake} class:opentab={area[i]}>
				<small>{item.msr}</small>
				<h5 class="dev">{item.devanagari}</h5>
				{#if area[i]}
					<div class="bolbox-expand" transition:slide>
						<h6 class="thin">{item.iast}</h6>
						<h6 class="thin">{item.griffith}</h6>
						<div class="rta-row">
						</div>
						<a class="cleanbutton" href="/openlibrary/reconnect/sections/rigveda/{item.mandala}/{item.suktacorrected}/{item.rca}">
							Go to Page
						</a>
					</div>
				{/if}
			</div>
		{/each}
	{/if}
</div>
