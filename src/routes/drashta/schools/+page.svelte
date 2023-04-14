<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { fetchDarshanas, fetchDrashtas } from '$lib/utils/supapulls'
	let darshanas:any 
	let drashtas:any
	let selectedDrashta:boolean[] = Array().fill(false)
	selectedDrashta[0] = true


	function toggleGenre(index:number) {
		selectedDrashta[index] = !selectedDrashta[index]
		for ( let i = 0; i < selectedDrashta.length; i++ ) {
			if ( i !== index && selectedDrashta[i] == true ) {
			selectedDrashta[i] = false
			}
		}
	}

	onMount(async() => {
		darshanas = await fetchDarshanas()
		drashtas = await fetchDrashtas()
	})
</script>

<div class="type">
	<div class="container-backimage x0">
		<div class="screen typ">
			<h1>Schools of Thought</h1>
		</div>
	</div>
	<div class="dynamic-title-grid3 pads x1">
		<div class="dyntitle">
			<h5>
				At Bṛhat, we set big goals. And to achieve them we need to build on the foundation built by our great sages and scholars. We draw our vitality from some very important and select ‘Schools of Thought’ which define our identity, inform our views, and guide our actions. These schools of thought come together in the ways in which we think and create and in the ways we seek to guide policy to culture. We seek to forge a unique path of culture-conducive policy in Bhāratavarṣa by building on the inspiration from these schools.<br><br>These schools are:
			</h5>
		</div>
		<div class="gridof3">
			{#if darshanas && darshanas.length > 0}
				{#each darshanas as item}
					<div class="boxc">
						<h6>{item.name}</h6>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="container-title-grid2 x2 pads">
		<div class="gridtitle typ">
			<h2>Draṣṭās</h2>
		</div>
	<div class="gridof2">
		{#if drashtas && drashtas.length > 0}
			{#each drashtas as item, i}
			<div class="sbox1">
				<p on:click={() => toggleGenre(i)} on:keydown={() => toggleGenre(i)}>{item.name}</p>
			</div>
			<div class="sbox2">
				{#if selectedDrashta[i]}
					<p class="grey5" in:fly={{ delay: 150, duration: 350, x: -400, y: 0}} out:fly={{ delay: 0, duration: 100, x: 400, y: 0}}>{item.content}</p>
				{/if}
			</div>
			{/each}
		{/if}
	</div>
</div>
</div>


<style lang="sass">

.x0
	height: 100vh
	background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp')
	.screen
		height: 100%
		width: 100%
		background: rgba(0,0,0,0.88)
		display: flex
		align-items: center
		justify-content: center
		h1
			color: white

.x1
	align-content: center
	justify-content: center
	justify-items: center
	padding-top: 48px
	padding-bottom: 48px
	h5
		text-align: center
	.dynof3
		gap: 32px 48px
		padding-top: 32px
		.boxc
			padding-left: 16px
			padding-right: 16px

.boxc h6
	text-align: center
	border-top: 2px solid #fe4a49
	padding-top: 12px

.x2
	.gridof2
		grid-template-columns: 0.3fr 1fr
		gap: 0 64px
	@media screen and (max-width: 899px)
		.gridof2
			gap: 0 24px
			grid-template-columns: 0.25fr 1fr

.sbox1
	p
		text-transform: uppercase
		font-size: 18px
		padding: 4px 0
		border-bottom: 1px solid #e1e1e1
		cursor: pointer
		position: relative
		&:hover
			background: var(--bol)
			color: white
			padding-left: 4px
		&::after
			position: absolute
			top: 0
			left: 0
			height: 4px
			width: 0
			content: ''
			background: var(--bol)
	@media screen and (max-width: 899px)
		p
			font-size: 14px

.sbox2
	padding-right: 12vw
	margin-left: 4vw
	p
		border-bottom: 1px solid #e1e1e1
		padding-bottom: 16px
	@media screen and (max-width: 899px)
		padding-right: 0
		margin-left: 0

</style>