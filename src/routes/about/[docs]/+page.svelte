<script lang="ts">

	import { onMount } from 'svelte'
	import { mandalaAll } from '$lib/utils/localpulls'
	import RevealH1 from '$lib/components/RevealH1.svelte'
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
	<RevealH1>
	<h3>
		{data.title}
	</h3>
	</RevealH1>
	<div class="mainbar">
		<svelte:component this={data.content}/>
	</div>
</div>

<style lang="sass">

.type
	@media screen and (min-width: 1024px)
		padding-top: 160px
		padding-bottom: 120px
		h3
			border-left: 104px solid #fe4a49
			padding-left: 16px
			font-weight: 600
		.mainbar
			padding-left: 120px
			padding-right: 32vw
	@media screen and (max-width: 1023px)
		padding-top: 120px
		padding-bottom: 120px
		h3
			border-left: 12px solid #fe4a49
			padding-left: 12px
			font-weight: 600
			margin-bottom: 64px
		.mainbar
			padding-left: 24px
			padding-right: 24px


</style>