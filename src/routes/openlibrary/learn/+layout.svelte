<script lang="ts">

	import IconChevron from '$lib/icons/IconChevron.svelte'
	import { fly } from 'svelte/transition'
	import '$lib/styles/reader.sass'

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
	<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<div class="type">
	<div class="plain-one x1 pads">
		<div class="breadcrumbone">
			<div class="breadcrumbchev">
				<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375L3.81916 7.5L10 1.7625Z" fill="#B7B7B7"/>
				</svg>
			</div>
			<p><a href="/openlibrary" target="_self">Open Library</a></p>
		</div>
		<h2 style="font-family: 'Old Standard TT', serif; letter-spacing: -1px; text-transform: uppercase">
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
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 120, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}><a href="/openlibrary/learn/ramayana" target="_self">Rāmāyaṇa</a></h6>
					<h6 class="researchlink" in:fly={{ duration: 150, delay: 150, x: -64, y: 0}} out:fly={{ duration: 150, delay: 20, x: -64, y: 0}}>Ṛgveda</h6>
				{/if}
			</div>
		</div>
	</div>	
</div>

<slot></slot>

<style lang="sass">


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

.breadcrumbone
	display: flex
	flex-direction: row
	gap: 16px
	svg
		path
			transition: var(--snap)
	&:hover
		svg
			path
				fill: var(--tree)
	p
		transition: var(--snap)
		&:hover
			color: var(--tree)
			text-decoration: underline


</style>