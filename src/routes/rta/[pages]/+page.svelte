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
		<div class="mainbar">
			<svelte:component this={data.content}/>
			<div class="boxr" style="column-gap: 16px; padding-top: 16px; border-top: 1px solid #ececec">
				<button class="greenbutton"><a href={data.prev}>Prev</a></button>
				<button class="greenbutton"><a href={data.next}>Next</a></button>
			</div>
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
	.mainbar
		grid-area: mainbar
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 16vw 64px 24vw
		gap: 0 8vw
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 6vw
		gap: 32px 0






.mainbar
	padding-top: 80px

.greenbutton a
	color: white
	&:hover
		text-decoration: none
	

</style>

