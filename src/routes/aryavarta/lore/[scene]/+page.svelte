<script lang="ts">

	export let data
	import { onMount } from 'svelte'
	import { loreAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let lores:any

	onMount(async() => {
		lores = await loreAll()
	})

</script>

<div class="type aryatext">
	<div class="x0 plain-one">
		<ParallaxImage --parallax="url('{data.image}')"></ParallaxImage>
	</div>
	<div class="x1 plain-one pads">
		<div class="mainstory">
			<h1>
				{data.title}
			</h1>
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/quotemark.png" alt="{data.title}"/>
			<svelte:component this={data.content}/>
		</div>
		<div class="box" id="stories">
			{#if lores && lores.length > 0}
				{#each lores as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href={item.path}>{item.meta.title}</a></h6>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.card-image
	img
		object-fit: cover !important
		height: 100% !important
		width: 100% !important

.card-body h6
	text-transform: capitalize

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
		grid-template-columns: 1fr 1fr 1fr 1fr
		gap: 32px 16px
		.card-row
			flex-direction: column
			h6
				font-size: 16px

.mainstory
	@media screen and (min-width: 1024px)
		padding-right: 128px

</style>