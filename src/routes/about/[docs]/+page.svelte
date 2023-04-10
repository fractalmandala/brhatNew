<script lang="ts">

	export let data	
	import { onMount } from 'svelte'
	import { mandalaAll } from '$lib/utils/localpulls'

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

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="type brhattext">
	<div class="plain-one x1 pads">
		<h2>
			{data.title}
		</h2>
	</div>
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
			<svelte:component this={data.content}/>
		</div>
	</div>
</div>

<style lang="sass">


.x1
	padding-top: 64px

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