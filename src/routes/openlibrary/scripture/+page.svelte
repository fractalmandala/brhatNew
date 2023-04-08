<script lang="ts">


	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import IconChevron from '$lib/icons/IconChevron.svelte'
	import { fly } from 'svelte/transition'

	let selectexpanded:boolean = false
	let fake:boolean = false

	function toggleExpansion(){
		selectexpanded = !selectexpanded
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap" rel="stylesheet">
</svelte:head>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/14bol/synrec2023.webp')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<h2 style="font-family: 'Newsreader', serif; letter-spacing: 0px">
			The Learning Center
		</h2>
		<div class="selector" class:selectoronexpansion={selectexpanded}>
			<div class="visiblearea" on:click={toggleExpansion} on:keydown={fauxfake}>
				<div class="boxr">
					<div class="chevronicon" class:chevronrotated={selectexpanded}>
						<IconChevron></IconChevron>
					</div>
					<p>Select Area</p>
				</div>
			</div>
			<div class="researchbounds" class:onexpansion={selectexpanded}>
				{#if selectexpanded}
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 20, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}>Amarakośaḥ</h6>
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 60, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}>Dhātupāṭha</h6>
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 120, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}>Rāmāyaṇa</h6>
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 150, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}>Ṛgveda</h6>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 60vh

.x1
	padding-top: 64px
	padding-bottom: 64px

.selector
	border: 1px solid #d7d7d7
	border-radius: 3px
	transition: 0.2s ease
	.boxr
		align-items: center
		gap: 16px
		padding: 6px 8px
		.chevronicon
			height: 15px
			transition: 0.15s ease
		p
			text-transform: uppercase
			font-size: 18px
			margin: 0
			line-height: 1
			padding: 4px 0 0 0

.selectoronexpansion
	padding: 16px

.chevronrotated
	transform: rotate(180deg)

.visiblearea
	cursor: pointer

.researchbounds
	h6
		font-weight: 400
		padding: 8px
		border-bottom: 1px solid #ececec
		line-height: 1
		margin: 0
		transition: var(--snap)
		cursor: pointer
		&:hover
			background: var(--tree)
			color: white

.researchbounds.onexpansion
	padding: 8px 16px

</style>