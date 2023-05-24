<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import PageProgress from '$lib/components/PageProgress.svelte'
	import tippy, {animateFill} from 'tippy.js'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/shift-away.css'
	import Animations from 'textify.js'
	import { mandalaAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
import HeadLocal from '$lib/components/HeadLocal.svelte'

	let fractals:any
	let wide:number
	let mobileView:boolean = false
	let lightMode = false
	let fake = false
	let pageImage:any
	let pageTitle:any

	function toggleLightMode(){
		lightMode = !lightMode
	}
	
	function fauxfake(){
		fake = !fake
	}

	$: if ( wide <= 1023 ) {
		mobileView = true
	} else {
		mobileView = false
	}

	export let data	

	let title = data.title
	let content:string = 'indian civilizational consciousness'
	let url = 'https://www.brhat.in' + data.pathname
	let type = 'webpage'
	let description = 'Civilization with multi-level coherence. Research, exploration, and furtherance of Indian civilizational consciousness.'
	let imagelink = data.image



	$: pageImage = data.image
	$: pageTitle = data.title

	onMount(async() => {
		fractals = await mandalaAll()
		const { TextifyTitle } = Animations
		new TextifyTitle({
			selector: '.a-title h2',
			duration: 500,
			stagger: 30,
			fade: true,
			top: false,
			reveal: true,
			threshold: 0.1,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		})
		tippy ('#single', {
			content: 'Toggle Dark/Light Mode.',
			duration: 300,
			arrow: true,
			animateFill: true,
			plugins: [animateFill],
			placement: 'right',
			theme: 'light'
		})
	})


	afterUpdate(() => {
		pageImage = data.image
		pageTitle = data.title
	})
</script>


<svelte:window bind:innerWidth={wide}/>

<svelte:head>

<HeadLocal title={title} content={content} url={url} type={type} description={description} imagelink={imagelink}/>
</svelte:head>

<PageProgress --thispagebackground="#10C56D" --thispageheight="2px"/>
<div class="type mandalatext heightmeasure">
	<div class="x0">
		<ParallaxImage --parallax="url('{pageImage}')" --parallaxresp="url('{pageImage}')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<div class="a-title">
			<h2>
			{pageTitle}
			</h2>
			<div class="toggler" class:togglered={lightMode} id="single" on:click={toggleLightMode} on:keydown={fauxfake}>
				<div class="togglerball" class:toggled={lightMode}></div>
			</div>
		</div>
	</div>
	<div class="x2">
		<div class="mainbar" class:light={lightMode} class:dark={!lightMode}>
			<svelte:component this={data.content}/>
		</div>
	</div>
</div>

<style lang="sass">

.toggler
	height: 32px
	width: 80px
	border-radius: 16px
	background: #373737
	padding-top: 4px
	padding-left: 4px
	margin-top: 24px
	cursor: pointer
	.togglerball
		width: 24px
		height: 24px
		border-radius: 12px
		transition: background 0.09s ease, transform 0.2s ease
	&:hover
		.togglerball
			background: #10D56C
	@media screen and (min-width: 1024px)
		.togglerball.toggled
			transform: translateX(48px)	
		&:hover
			.togglerball.toggled
				background: white
	@media screen and (max-width: 1023px)
		height: 24px
		width: 64px
		padding-top: 2px
		padding-left: 2px
		.togglerball
			width: 20px
			height: 20px
		&:hover
			.togglerball
				background: #10D56C
			.togglerball.toggled
				background: white
		.togglerball.toggled
			transform: translateX(38px)

.togglerball
	background: white

.togglerball.toggled
	background: white

.togglered
	@media screen and (min-width: 1024px)
		background: #10D56C
		

	
.mandalatext
	background: #171717

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 50vh

.x1
	padding-top: 64px
	padding-bottom: 64px
	h2
		color: #474747
		text-align: left

.x2
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	.mainbar
		grid-area: mainbar
		border-radius: 4px
	.mainbar.light
		background: white
	.mainbar.dark
		background: #171717
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 32vw 64px 6vw
		.mainbar
			padding: 64px
			border: 1px solid #272727
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 6vw
		gap: 32px 0
		.mainbar
			padding: 16px

.mainbar
	padding-top: 80px
	

</style>