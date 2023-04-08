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

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px

.x2
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	.sidebar
		grid-area: sidebar
	.mainbar
		grid-area: mainbar
	@media screen and (min-width: 1024px)
		grid-template-columns: 280px 1fr
		grid-template-areas: "sidebar mainbar"
		padding: 64px 16vw 64px 4vw
		gap: 0 8vw
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
		transition: var(--snap)
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