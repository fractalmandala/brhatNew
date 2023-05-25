<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	import { loreAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let lores:any
	let sidebar = false
	let dropdown = false

	export let data

	$: $metaUrl = $page.url.pathname
	$: $metaTitle = data.title
	$: $metaDescription = data.snip
	$: $metaImage = data.image
	$: $metaType = 'article'


	function toggleDropdown(){
		dropdown = !dropdown
	}

	onMount(async() => {
		lores = await loreAll()
	})


</script>


<div class="aryatext">
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')"></ParallaxImage>
	</div>
	<div class="x1 rta-grid grid2 right0 rowgap400 outer-box p-top-64 colgap600">
		<div class="mainstory rta-column rowgap300">
			<h1 class="serif">
				{data.title}
			</h1>
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/quotemark.png" alt="{data.title}"/>
			<svelte:component this={data.content}/>
		</div>
		<div class="rta-column rowgap400 p-bot-64" id="stories">
			{#if lores && lores.length > 0}
				{#each lores as item}
					<div class="rta-row fixed colgap300">
						<div class="rta-image height-10 w32">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col w64">
							<h6 class="serif tt-c"><a href={item.path}>{item.meta.title}</a></h6>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.serif
	font-family: 'STIX Two Text', serif

.mainstory
	h1
		@media screen and (max-width: 1023px)
			font-size: 2.7rem

.rta-image
	img
		object-fit: cover !important
		height: 100% !important
		width: 100% !important

.x0
	height: 100vh
	overflow: hidden

.x1
	h1
		text-transform: capitalize
		margin: 0
	img
		object-fit: contain
		height: 48px
		width: 48px
		margin-bottom: -48px
	@media screen and (min-width: 1024px)
		img
			object-fit: contain
			height: 64px
			width: 64px
			margin-bottom: -64px

#stories
	img
		filter: saturate(0.1)
		transition: 0.15s
	.rta-row
		&:hover
			img
				filter: saturate(1)


.mainstory
	@media screen and (min-width: 1024px)
		padding-left: 80px
		padding-right: 80px
	img
		width: 32px

</style>