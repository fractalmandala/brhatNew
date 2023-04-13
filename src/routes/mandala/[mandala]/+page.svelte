<script lang="ts">

	export let data	
	import { onMount } from 'svelte'
	import { mandalaAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let fractals:any
	let wide:number
	let mobileView:boolean = false

	$: if ( wide <= 1023 ) {
		mobileView = true
	} else {
		mobileView = false
	}

	onMount(async() => {
		fractals = await mandalaAll()
	})
</script>


<svelte:window bind:innerWidth={wide}/>
<div class="type mandalatext">
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<h1>
			{data.title}
		</h1>
	</div>
	<div class="x2">
		<div class="sidebar" class:mobileSidebar={mobileView}>
			<div class="box">
				{#if fractals && fractals.length > 0}
					{#each fractals as item}
						<p><a href={item.path}>{item.meta.title}</a></p>
					{/each}
				{/if}
			</div>
		</div>
		<div class="mainbar">
			<svelte:component this={data.content}/>
		</div>
	</div>
</div>

<style lang="sass">

.mandalatext
	background-color: hsla(0,11%,3%,1)
	background-image: radial-gradient(at 42% 24%, hsla(118,90%,5%,1) 0px, transparent 50%), radial-gradient(at 65% 70%, hsla(222,84%,8%,1) 0px, transparent 50%)

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 50vh

.x1
	padding-top: 64px
	padding-bottom: 64px
	h1
		color: white
		text-shadow: 6px 6px 13px #030303

.x2
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	.sidebar
		grid-area: sidebar
	.mainbar
		grid-area: mainbar
		background: rgba(0,0,0,0.2)
		backdrop-filter: blur(10px)
	@media screen and (min-width: 1024px)
		grid-template-columns: 280px 1fr
		grid-template-areas: "sidebar mainbar"
		padding: 64px 6vw 64px 6vw
		gap: 0 8vw
		.mainbar
			padding: 64px
			border: 1px solid #272727
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "sidebar" "mainbar"
		padding: 64px 6vw
		gap: 32px 0

.sidebar .box
	height: max-content
	position: sticky
	top: 0
	padding-top: 80px
	row-gap: 4px
	p
		color: #b7b7b7
		border: none
		font-size: 16px
		&:hover
			color: #10D56C

.sidebar.mobileSidebar
	position: sticky
	top: 0
	height: 64px
	overflow: hidden
	background: white
	.box
		padding-top: 8px


.mainbar
	padding-top: 80px
	

</style>