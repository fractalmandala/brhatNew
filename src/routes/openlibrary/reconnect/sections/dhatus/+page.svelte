<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
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
	<div class="gridthis" class:calibrated={alignGrid}>
	{#if ddhatus && ddhatus.length > 0}
		{#each ddhatus as item, i}
			<div class="dhaturow" on:click={() => toggleL1(i)} on:keydown={fauxfake} class:opentab={level1[i]}>
				<div class="boxr">
					<h4 class="dev">√{item.dhatu}</h4>
					<h6>√{item.dhatuiast}</h6>
				</div>
				{#if !alignGrid}
				<div class="secondbox">
					<p class="dev">{item.artha} | {item.arthaiast}</p>
					<p>{item.artha_english}</p>
				</div>
				<div class="box">
					<p>{item.settva} | {item.pada} | {item.gana}</p>
				</div>
				{/if}
			</div>
		{/each}
	{/if}
	</div>
</div>

<style lang="sass">

.a-title
	display: flex
	justify-content: flex-end
	border-bottom: 1px solid #d7d7d7

.x0
	padding-top: 120px
	row-gap: 0

.gridthis
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto
	grid-template-areas: "."
	gap: 24px

.gridthis.calibrated
	grid-template-columns: 1fr 1fr 1fr 1fr
	grid-template-rows: auto
	grid-template-areas: "opentab opentab opentab opentab" ". . . ."
	.dhaturow.opentab
		grid-area: opentab
		flex-direction: column
	.dhaturow
		.secondbox
			width: 100%
			padding: 0
		.boxr
			width: 100%
	.dhaturow
		flex-direction: column
		row-gap: 16px
		padding: 24px
		.boxr
			padding-left: 0
			padding-right: 0
			gap: auto
	.box
		width: 64px


.dhaturow
	display: flex
	flex-direction: row
	row-gap: 24px
	border-bottom: 1px solid #ececec
	padding: 48px 32px
	justify-content: stretch
	transition: all 0.15s var(--cubea)
	&:hover
		box-shadow: 4px 5px 12px #f0f0f0, -3px -6px 12px #f6f6f6
	.boxr
		width: 240px
		gap: 32px
		justify-content: space-between
		h4
			font-weight: 800
		h6
			color: #878787
			text-align: right
			font-weight: 400
			font-size: 20px
	.secondbox p
		font-size: 16px
	.secondbox .dev
		font-size: 20px
		color: #272727
	.secondbox
		padding-left: 32px
		width: calc(100% - 360px)
		text-align: right
		border-right: 4px solid var(--yellow)
		padding-right: 32px
	.box
		align-items: flex-end
		text-align: right
		width: 64px
		align-self: flex-end

</style>