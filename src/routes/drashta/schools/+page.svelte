<script lang="ts">
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import RevealH1 from '$lib/components/RevealH1.svelte'
	import RevealCard from '$lib/components/RevealCard.svelte'
	import { fetchDarshanas, fetchDrashtas } from '$lib/utils/supapulls'
	let darshanas:any 
	let drashtas:any
	let selectedDrashta:boolean[] = Array().fill(false)
	selectedDrashta[0] = true
	let alignGrid = true


	function toggleGenre(index:number) {
		selectedDrashta[index] = !selectedDrashta[index]
		for ( let i = 0; i < selectedDrashta.length; i++ ) {
			if ( i !== index && selectedDrashta[i] == true ) {
			selectedDrashta[i] = false
			}
		}
		if ( alignGrid === false) {
			alignGrid = true
		}
	}

	onMount(async() => {
		darshanas = await fetchDarshanas()
		drashtas = await fetchDrashtas()
	})
</script>

<div class="type">
	<div class="container-backimage back x0">
		<div class="screen typ pads">
			<h1>Schools of Thought</h1>
		</div>
	</div>
	<div class="plain-one x1 pads">
		<div class="box pads">
			<h5>
				At Bṛhat, we set big goals. And to achieve them we need to build on the foundation built by our great sages and scholars. We draw our vitality from some very important and select ‘Schools of Thought’ which define our identity, inform our views, and guide our actions. These schools of thought come together in the ways in which we think and create and in the ways we seek to guide policy to culture. We seek to forge a unique path of culture-conducive policy in Bhāratavarṣa by building on the inspiration from these schools.<br><br>These schools are:
			</h5>
			<div class="gridof3 by2 pads resp" style="padding-top: 32px; column-gap: 64px">
			{#if darshanas && darshanas.length > 0}
				{#each darshanas as item}
					<div class="boxc">
						<h6>{item.name}</h6>
					</div>
				{/each}
			{/if}
			</div>
		</div>
	</div>
	<div class="plain-one x2 pads">
		<div class="a-title">
			<RevealH1><h3>Draṣṭās</h3></RevealH1>
		</div>
		<div class="gridof4 by2" class:calibrated={alignGrid}>
		{#if drashtas && drashtas.length > 0}
			{#each drashtas as item, i}
				{#if selectedDrashta[i]}
					<div class="box opentab" on:click={() => toggleGenre(i)} on:keydown={() => toggleGenre(i)} in:scale={{ duration: 400, delay: 300}} out:scale={{ duration: 200, delay: 0}}>
						<h6>{item.name}</h6>
						<p>{item.content}</p>
					</div>
				{:else}
				<RevealCard>
					<div class="box" on:click={() => toggleGenre(i)} on:keydown={() => toggleGenre(i)} in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 200, delay: 0}}>
						<h6>{item.name}</h6>
					</div>
				</RevealCard>
				{/if}
			{/each}
		{/if}
		</div>
	</div>
</div>


<style lang="sass">

.x0
	background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp')
	.screen
		height: 100%
		background: rgba(0,0,0,0.88)
		display: flex
		align-items: center
		justify-content: center
		h1
			color: white
			text-align: center
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh
		h1
			line-height: 1.2

.x1
	align-content: center
	justify-content: center
	justify-items: center
	padding-top: 48px
	padding-bottom: 48px
	h5
		text-align: center

.boxc h6
	text-align: center
	border-top: 2px solid #fe4a49
	padding-top: 12px

.x2
	padding-bottom: 72px
	.box
		cursor: pointer

.x2
	padding-top: 64px
	h3
		text-align: center
	.gridof4.calibrated.by2
		@media screen and (min-width: 1024px)
			grid-template-areas: "opentab opentab . ." "opentab opentab . ." "opentab opentab . ." "opentab opentab . ."
			grid-template-rows: auto auto auto auto
			align-items: start
			align-content: start
			.box.opentab
				grid-area: opentab
				border: 1px solid #ececec
				padding: 16px
		@media screen and (max-width: 1023px)
			grid-template-areas: "opentab opentab" ". ."
			grid-template-rows: auto auto
			.box.opentab
				grid-area: opentab

.box h6
	text-transform: capitalize

</style>