<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css'
	import { soaChapter1 } from '$lib/utils/supapulls'
	import { fly } from 'svelte/transition'
	import { quadIn, quadOut } from 'svelte/easing'

	let panels:any
	let faux:boolean = false
	let y:number
	let link:any
	let movement:number
	let iW:number

	$: $metaUrl = $page.url.pathname
	$: $metaTitle = `Chapter 1 - Kaśyapa's Lament`
	$: $metaDescription = 'A visual tale through the premonitions of an ancient ṛṣī.'
	$: $metaImage = 'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/4.webp'
	$: $metaType = 'webpage'

	$: if ( iW <= 1023 ){
		movement = 5 
	} else {
		movement = y
	}

	function fakefaux(){
		faux = !faux
	}

	onMount(async() => {
		panels = await soaChapter1()
		link = $page.url.pathname
	})

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW}/>


<div class="rta-column outer-box minH ycenter x1">
	<p style="color: #ff3d00">Chapter 1</p>
	<h2 style="transform: translateY({y}px);">Kaśyapa's Lament</h2>
	<p>
		Our first release in the Scrolls of Āryavarta project. A collaboration with<a style="color: #ff3d00" href="https://twitter.com/TheEmissaryCo" target="_blank" rel="noreferrer">The Emissary</a>, who rendered the images in this story and triggered it all to begin with. 
	</p>
</div>

	<div class="rta-column x2">
			{#if panels && panels.length > 0}
				<Splide>
					{#each panels as item, i}
					<SplideSlide>
					<div class="carouselitem" in:fly={{ delay: 300, duration: 300, x: 1400, opacity: 0, easing: quadOut}} out:fly={{ delay: 0, duration: 260, x: -1400, easing: quadIn}}>
						<div class="rta-column rta-image">
							<img src=https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/{item.image.substr(92,20)} alt={item.newid}/>
						</div>
						<div class="rta-column text rowgap100">
								<p>{item.newid}</p>
								<em class="serif is-text">{item.text}</em>
						</div>
					</div>
					</SplideSlide>
				{/each}
				</Splide>
			{/if}
	</div>
	<div class="rta-column x3 rowgap400 outer-box limit">
		<div class="rta-column p-bot-64"><div class="line"></div></div>
			<h6>
				Next
			</h6>
		<div class="rta-column p-bot-64">
			<h3><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h3>
			<p>or, return to <span style="color: #ff3d00"><a href="/aryavarta"> Āryavarta</a></span>  main page.</p>
		</div>
	</div>


<style lang="sass">

.serif
	font-family: 'Playfair Display', serif

.x3
	h3 a
		&:hover
			color: #ff3d00

.x1
	overflow: hidden
	padding-top: 80px
	@media screen and (min-width: 1024px)
		gap: 0
		h2
			padding: 16px 0
	@media screen and (max-width: 1023px)
		padding-top: 128px
		padding-bottom: 64px
		gap: 0
		h2
			padding: 16px 0

.carouselitem
	display: flex
	width: 100%
	.text
		justify-content: space-between
	@media screen and (min-width: 1024px)
		height: 800px
		flex-direction: row
		.rta-image
			justify-content: center
			align-items: center
			width: 50%
			img
				width: 80%
				height: 72%
		.text.rta-column
			width: 48%
			height: max-content
			padding-top: 120px
	@media screen and (max-width: 1023px)
		flex-direction: column
		.text
			width: 100%
			z-index: 2
			padding-top: 16px
			height: 100%


.x2
	position: relative

.x3
	padding-top: 64px
	padding-bottom: 64px

</style>
