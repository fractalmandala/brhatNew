<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import Header from '$lib/components/SubHeader.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { loreAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let lores:any
	let sidebar = false
	let dropdown = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

	onMount(async() => {
		lores = await loreAll()
	})

	export let data

</script>

<svelte:head>
	<HeadComponent>
		{data.title} | Scrolls of Āryavarta at
	</HeadComponent>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>


<div class="aryatext">
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')"></ParallaxImage>
	</div>
	<div class="x1 rta-grid grid2 right is-padded">
		<div class="mainstory">
			<h1 class="hanken">
				{data.title}
			</h1>
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/quotemark.png" alt="{data.title}"/>
			<svelte:component this={data.content}/>
		</div>
		<div class="rta-in-col rowgap-32" id="stories">
			{#if lores && lores.length > 0}
				{#each lores as item}
					<div class="rta-row colgap-24">
						<div class="rta-image height-20 w32">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col w64">
							<h6 class="hanken tt-c"><a href={item.path}>{item.meta.title}</a></h6>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.hanken
	font-family: 'Hanken Grotesk', sans-serif !important
	font-weight: 400

.rta-image
	img
		object-fit: cover !important
		height: 100% !important
		width: 100% !important

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	h1
		text-transform: capitalize
		margin: 0
	img
		object-fit: contain
		height: 48px
		width: 48px
		margin-bottom: -48px
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 360px
		grid-template-areas: ". ."
		img
			object-fit: contain
			height: 64px
			width: 64px
			margin-bottom: -64px

#stories
	@media screen and (min-width: 1024px)
		padding-left: 64px
	@media screen and (max-width: 1023px)
		display: grid
		grid-template-columns: 1fr
		gap: 16px 16px
		.card-row
			h6
				font-size: 16px

.mainstory
	@media screen and (min-width: 1024px)
		padding-right: 128px

</style>