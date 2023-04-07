<script lang="ts">

	import { onMount } from 'svelte'
	import { Swipe, SwipeItem } from 'svelte-swipe'
	import { soaChapter1 } from '$lib/utils/supapulls'
	import { scale } from 'svelte/transition'
	import IconPrev from '$lib/icons/IconPrev.svelte'
	import IconNext from '$lib/icons/IconNext.svelte'

	let panels:any
	let SwipeComp:any
	let faux:boolean = false
	let y:number

  function nextSlide(){
   SwipeComp.nextItem()
  }

  function prevSlide(){
    SwipeComp.prevItem()
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
		panels = await soaChapter1()
	})

</script>

<svelte:window bind:scrollY={y}/>
<div class="type">
	<div class="plain-one x1 pads back">
		<p style="color: #ff3d00">Chapter 1</p>
		<h2 style="transform: translateY({y}px); color: white">Kaśyapa's Lament</h2>
	</div>
	<div class="plain-one x2">
		<div class="carousel">
			{#if panels && panels.length > 0}
				<Swipe {...swipeConfig} bind:this={SwipeComp}>
					{#each panels as item, index}
						<SwipeItem>
							<div class="carouselitem" transition:scale>
								<div class="box back" style="background-image: url('{item.image}'); transform: translateY({y/5}px)"></div>
								<div class="box text">
									<div>
										<p>{item.id}</p>
										<h6>{item.text}</h6>
									</div>
								</div>
							</div>
						</SwipeItem>
					{/each}
				</Swipe>
			{/if}
		</div>
		<div class="navguide">
			<div on:click={prevSlide} on:keydown={fakefaux}>
				<IconPrev/>
			</div>
			<div on:click={nextSlide} on:keydown={fakefaux}>
				<IconNext/>		
			</div>
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4 style="color: white">
				Next
			</h4>
		</div>
		<div class="a-box">
			<h2 style="color: white">Sūta and Sudā</h2>
			<h5>or, return to <span style="color: #ff3d00"><a href="/aryavarta" target="_self"> Āryavarta</a></span>  main page.</h5>
		</div>
	</div>
</div>

<style lang="sass">

.type
	background-color: hsla(0,1%,3%,1)
	background-image: radial-gradient(at 10% 21%, hsla(9,79%,7%,1) 0px, transparent 50%), radial-gradient(at 88% 70%, hsla(210,85%,8%,1) 0px, transparent 50%)

.x1, .x2
	height: 100vh

.x1
	@media screen and (max-width: 1023px)
		height: 100vh

.x1
	overflow: hidden
	padding-top: 80px
		
.carousel
	display: flex
	flex-direction: row
	overflow-x: scroll
	height: 100%
	width: 100%

.carouselitem
	display: flex
	flex-shrink: 0
	touch-action: pan-y
	width: 100%
	overflow-x: visible
	flex-direction: row
	height: 800px
	.back
		width: 50%
		height: 100vh
		margin-top: -160px
	.text
		width: 50%
		height: 80%
		justify-content: space-between
		padding-top: 80px
		p
			padding-left: 32px
		h6
			font-weight: 400
			text-align: right
			line-height: 1.5
			color: white
			padding: 32px

.carouselitem
	@media screen and (max-width: 1023px)
		flex-wrap: wrap
		.back
			width: 100%
			height: 60vh
			z-index: 0
		.text
			width: 100%
			z-index: 2
			padding-top: 160px


.x2
	position: relative

.navguide
	position: absolute
	bottom: 64px
	right: 64px
	display: flex
	flex-direction: row
	gap: 24px
	@media screen and (max-width: 1023px)
		display: none

.x3
	padding-top: 64px
	padding-bottom: 64px

</style>