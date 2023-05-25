<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css'
	import { soaChapter2 } from '$lib/utils/supapulls'
	import { fly } from 'svelte/transition'
	import { quadIn, quadOut } from 'svelte/easing'
	let panels:any
	let faux:boolean = false
	let y:number
	let link:any
	let movement:number
	let iW:number

	$metaUrl = $page.url.pathname
	$metaTitle = 'Chapter 2 - Sūta and Sudā'
	$metaDescription = 'The great battle before the Great Battle, as remembered by a warrior-bard.'
	$metaImage = 'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/1.webp'
	$metaType = 'webpage'

	$: if ( iW <= 1023 ){
		movement = 5 
	} else {
		movement = y
	}

	function fakefaux(){
		faux = !faux
	}

	const swipeConfig = {
		autoplay: false,
		showIndicators: false,
		transitionDuration: 500,
		defaultIndex: 0
	}

	onMount(async() => {
		panels = await soaChapter2()
		link = $page.url.pathname
	})

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW}/>

<div class="type">
	<div class="plain-one x1 pads back">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/00ridicons/ridicon.png" alt="general icon"/>
		<p style="color: #ff3d00">Chapter 2</p>
		<h2 style="transform: translateY({y}px); color: white">Sūta and Sudā</h2>
	</div>
	<div class="plain-one x2">
			{#if panels && panels.length > 0}
				<Splide>
					{#each panels as item, i}
					<SplideSlide>
					<div class="carouselitem" in:fly={{ delay: 300, duration: 300, x: 1400, opacity: 0, easing: quadOut}} out:fly={{ delay: 0, duration: 260, x: -1400, easing: quadIn}}>
						<div class="box back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/{item.image.substr(92,20)}');"></div>
						<div class="box text">
							<div>
								<p>{item.id}</p>
								<h6>{item.text}</h6>
							</div>
						</div>
					</div>
					</SplideSlide>
				{/each}
				</Splide>
			{/if}
	</div>
	<div class="plain-one x3 pads">
		<div class="a-title pads">
			<h6 style="color: white">
				Next
			</h6>
		</div>
		<div class="a-box pads">
			<h3 style="color: white"><a href="/aryavarta/chapter/03" data-sveltekit-reload>Nasadīya Across Space and Time</a></h3>
			<p>or, return to <span style="color: #ff3d00"><a href="/aryavarta"> Āryavarta</a></span>  main page.</p>
		</div>
	</div>
</div>

<style lang="sass">

.x3
	h3 a
		&:hover
			color: #ff3d00

.type
	padding-top: 64px
	background: #171717

.x1
	overflow: hidden
	padding-top: 80px
	img
		object-fit: cover
		width: 56px
		height: 56px
		margin-bottom: 8px
	@media screen and (min-width: 1024px)
		gap: 0
		h2
			padding: 16px 0
	@media screen and (max-width: 1023px)
		padding-top: 64px
		padding-bottom: 64px
		height: 100vh
		gap: 0
		h2
			padding: 16px 0

.x1, .x2
	@media screen and (min-width: 1024px)
		height: 100vh

.x2
	gap: 8px
	@media screen and (max-width: 1023px)
		min-height: 100vh

.carouselitem
	display: flex
	width: 100%
	.text
		justify-content: space-between
		p
			padding-left: 32px
		h6
			font-weight: 400
			line-height: 1.5
			color: white
	@media screen and (min-width: 1024px)
		height: 800px
		flex-direction: row
		.back
			height: calc(100vh - 80px)
			width: 50vw
		.text
			width: 50%
			height: 80%
			padding-top: 80px
			h6
				text-align: right
				padding: 32px	
	@media screen and (max-width: 1023px)
		flex-direction: column
		.back
			width: 100%
			height: 40vh
			z-index: 2
		.text
			width: 100%
			z-index: 2
			padding-top: 16px
			height: 100%
			h6
				font-size: 16px
				text-align: left
				line-height: 1.6
				padding: 24px


.x2
	position: relative

.x3
	padding-top: 64px
	padding-bottom: 64px

</style>
