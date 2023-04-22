<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { fly } from 'svelte/transition'
	import AutoComplete from 'simple-svelte-autocomplete'

	import { dbDhatus } from '$lib/utils/synaptic'
	let limit = 30
	let ddhatus:any
	let selectedColorObject:any
	let level1 = Array(30).fill(false)
	let fake = false
	let alignGrid = false


	function fauxfake(){
		fake = !fake
	}

	function toggleL1(index:number){
		level1[index] = !level1[index]
		for (let i = 0; i < level1.length; i++) {
			if ( i !== index && level1[i] === true ) {
				level1[i] = false
			}
		}
		if ( alignGrid === false) {
			alignGrid = true
		}
	}


	onMount(async() => {
		ddhatus = await dbDhatus(limit)
	})

</script>

<div class="plain-one x0 type pads">
	<div class="a-title" data-lenis-prevent>
		<AutoComplete
			items={ddhatus}
			bind:selectedItem={selectedColorObject}
			labelFieldName="dhatuiast"
			className="dhatusearch"
			placeholder="search dhātu"
			/>
	</div>
	<div class="gridof5 x1" class:calibrated={alignGrid}>
	{#if ddhatus && ddhatus.length > 0}
		{#each ddhatus as item, i}
			<div class="box basic" on:click={() => toggleL1(i)} on:keydown={fauxfake} class:opentab={level1[i]}>
				<h5 class="dev">√{item.dhatu}</h5>
				<p>√{item.dhatuiast}</p>
			</div>
			{#if level1[i]}
			<div class="basicl2" in:fly={{ duration: 200, x: 0, y: 200}}>
				<h5 class="dev">{item.artha}</h5>
				<p>{item.arthaiast}</p>
				<p>{item.artha_english}</p>
			</div>
			{/if}
		{/each}
	{/if}
	</div>
</div>

<style lang="sass">


.basic
	border: 1px solid transparent
	cursor: pointer
	padding: 16px
	border-radius: 4px

.basicl2
	display: flex
	flex-direction: column
	padding: 16px

.x1
	padding: 32px
	gap: 0

.a-title
	display: flex
	justify-content: flex-end
	border-bottom: 1px solid #d7d7d7

.x0
	padding-top: 120px
	row-gap: 0

</style>