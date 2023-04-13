<script lang="ts">

	import { onMount } from 'svelte'
	import { mandalaAll } from '$lib/utils/localpulls'
	import HeadComponent from '$lib/components/HeadComponent.svelte'

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

	export let data	

</script>

<svelte:head>
	<HeadComponent>
		{data.title} at 
	</HeadComponent>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:innerWidth={wide}/>

<div class="type brhattext">
	<div class="x2">
		<div class="sidebar" class:mobileSidebar={mobileView}>
			<div class="box">
				<p><a href="/about/svatahsiddha">Svataḥsiddha</a></p>
				<p><a href="/about/anatomy">Anatomy of a Civilizational Moment</a></p>
				<p><a href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></p>
				<p><a href="/about/namelogo">Nāmarūpa - Name and Logo</a></p>
				<p><a href="/about/values">Pratijñā - Values</a></p>
				<p><a href="/about/#advisors">Advisors</a></p>
				<p><a href="/about/#partners">Partners</a></p>
				<p><a href="/about/#team">Team</a></p>
			</div>
		</div>
		<div class="mainbar">
			<h2 style="letter-spacing: -2px; font-weight: 600">
				{data.title}
			</h2>
			<svelte:component this={data.content}/>
		</div>
	</div>
</div>

<style lang="sass">

.type.brhattext
	background-color: hsla(0,100%,97%,1)
	background-image: radial-gradient(at 40% 20%, hsla(27,0%,100%,1) 0px, transparent 50%), radial-gradient(at 80% 78%, hsla(0,92%,58%,1) 0px, transparent 50%)


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
		padding: 0px 16vw 64px 4vw
		gap: 0 8vw
		.mainbar
			padding-top: 80px
			h2
				padding-bottom: 32px
				border-bottom: 1px solid #e1e1e1
				margin-bottom: 64px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "sidebar" "mainbar"
		padding: 64px 6vw
		gap: 32px 0

.sidebar .box
	height: max-content
	position: sticky
	top: 144px
	padding-top: 24px
	row-gap: 4px
	p
		&:hover
			color: #fe4a49

.sidebar.mobileSidebar
	position: sticky
	top: 0
	height: 64px
	overflow: hidden
	background: white
	.box
		padding-top: 8px


</style>