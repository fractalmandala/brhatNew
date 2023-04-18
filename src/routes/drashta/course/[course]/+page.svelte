<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
  import { page } from '$app/stores'
	import { scale } from 'svelte/transition'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { courseContents, courseTakeaways, courseInstructor } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let y:number
	let dynamizer:any
	let conts: any
	let takes: any
	let dhits:any
	let area:any = Array(2).fill(false)
	area[1] = true
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleArea(index:number) {
		area[index] = !area[index]
		for ( let i = 0; i < area.length; i ++ ) {
			if ( i !== index && area[i] === true ) {
				area[i] = false
			}
		}
	}

	onMount(async() => {
		dynamizer = $page.url.pathname.slice(16,50)
		conts = await courseContents(dynamizer)
		takes = await courseTakeaways(dynamizer)
		dhits = await courseInstructor(dynamizer)
		
	})

	afterUpdate(() => {
		dynamizer = $page.url.pathname.slice(16,50)
	})
	export let data

	

</script>

<svelte:window bind:scrollY={y}/>

<svelte:head>
	<HeadComponent>
		Bṛhat Draṣṭā {data.name} at 
	</HeadComponent>
</svelte:head>

<div class="type">
	<div class="box x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')">
			<h1 style="transform: translateY({-y/5}px)">{data.name}</h1>
		</ParallaxImage>
	</div>
	<div class="title-box x1 pads">
		<div class="a-title">
			<h6>{data.status}</h6>
			<h6>{data.datefrom}</h6>
			<h6>{data.ins}</h6>
		</div>
		<div class="a-box secondlevel">
			<h5 style="font-weight: 400; line-height: 1.3">
				{data.content}
			</h5>
		</div>		
	</div>
	<div class="plain-one x2 pads">
		<div class="boxr">
			<h6 on:click={() => toggleArea(1)} on:keydown={fauxfake} class:selectedhead={area[1]}>Contents</h6>
			<h6 on:click={() => toggleArea(2)} on:keydown={fauxfake} class:selectedhead={area[2]}>Takeaways</h6>
			<h6 on:click={() => toggleArea(3)} on:keydown={fauxfake} class:selectedhead={area[3]}>Instructor</h6>
		</div>
		{#if area[1]}
			{#if conts && conts.length > 0}
				<div class="gridof4">
				{#each conts as item, i}
				<div class="card-c" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
					<h6>{item.name}</h6>
					{#if item.content && item.content.length > 0}
					<p>{item.content}</p>
					{/if}
				</div>
				{/each}
				</div>
			{/if}
		{/if}
		{#if area[2]}
			{#if takes && takes.length > 0}
				<div class="gridof2">
				{#each takes as item, i}
				<div class="card-c" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
					<h6>{item.name}</h6>
					<p>{item.content}</p>
				</div>
				{/each}
				</div>
			{/if}
		{/if}
		{#if area[3]}
			{#if dhits && dhits.length > 0}
				<div class="plain-one">
				{#each dhits as item, i}
					<div class="card-row">
						<div class="card-image">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="card-body">
							<h6>{item.name}</h6>
							<p>{item.content}</p>
						</div>
					</div>
				{/each}
				</div>
			{/if}
		{/if}
	</div>
</div>


<style lang="sass">

.x0
	overflow: hidden
	height: 100vh
	h1
		color: white
		background: rgba(0,0,0,0.7)
		padding: 16px 24px
		text-transform: capitalize
		@media screen and (min-width: 1024px)
			width: 80%
			margin-top: 25%
		@media screen and (max-width: 1023px)
			width: 100%
			margin-top: 60%
	@media screen and (max-width: 1023px)
		height: 60vh

.x1
	min-height: 100vh
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		min-height: 100vh
		align-content: center

.x1
	padding-top: 64px
	padding-bottom: 64px
	.a-title
		position: sticky
		top: 0
		padding-top: 80px
		h6
			background: var(--drash)
			color: white
			margin-bottom: 8px
			padding: 8px
			text-align: center
			text-transform: uppercase
	@media screen and (min-width: 1024px)
		min-height: 100vh
		align-content: center

.x2
	padding-bottom: 72px
	.boxr
		gap: 32px
		border-bottom: 1px solid #ececec
		border-top: 1px solid #ececec
		justify-content: center
		width: 100%
		h6
			cursor: pointer
			text-transform: uppercase
			padding: 4px 8px
			&:hover
				background: var(--drash)
				color: white
			@media screen and (max-width: 1023px)
				font-size: 16px
		h6.selectedhead
			background: var(--drash)
			color: white

</style>