<script lang="ts">

	import { onMount } from 'svelte'
	import { chapterItinerary } from '$lib/utils/supapulls'
	import { crossfade } from 'svelte/transition'
	import { quartOut } from 'svelte/easing'
	import { chapterTemples } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let p:number
	let chapter:string 
	let itins:string|any[]
	let openedDay:boolean[] = Array(5).fill(false)
	let temp:any

	function toggleDay(index:number) {
		openedDay[index] = !openedDay[index]
		for ( let i = 0; i < openedDay.length; i ++ ) {
			if ( i !== index && openedDay[i] === true ) {
				openedDay[i] = false
			}
		}
	}

	const [send, receive] = crossfade({
		duration: 450,
		easing: quartOut,
		delay: 50
	})

	onMount(async() => {
		chapter = data.chapter
		itins = await chapterItinerary(chapter)
		temp = await chapterTemples(chapter)
	})

	export let data

</script>

<svelte:window bind:scrollY={p}/>

<div class="type">
	<div class="box x0">
		<ParallaxImage --parallax="url('{data.image}')">
			<h1 style="transform: translateY({-p/5}px)">{data.name}</h1>
		</ParallaxImage>
	</div>
	<div class="title-box x1 pads">
		<div class="a-title">
			<h6>{data.duration}</h6>
			<h6>{data.dates}</h6>
			<h6>{data.price}</h6>
		</div>
		<div class="a-box secondlevel">
			<h5 style="font-weight: 400; line-height: 1.3">
				{data.content}
			</h5>
		</div>
	</div>
	<div  class="title-box x2 pads">
		<div class="a-title">
			<h4>Itinerary</h4>
		</div>
		<div class="a-box gridof3">
			{#if itins && itins.length > 0}
				{#each itins as item, i}
					<div class="card-c" on:click={() => toggleDay(i)} on:keydown={() => toggleDay(i)}>
						<div class="card-body">
							<h6>{item.name}</h6>
							{#if openedDay[i]}
								<pre in:send out:receive>{item.content}</pre>
							{/if}
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Temples</h4>
		</div>
		<div class="a-box gridof2">
			{#if temp && temp.length > 0}
				{#each temp as item}
					<div class="card-c">
						<div class="imagecard">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="bodyarea">
							<p>{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.x3
	padding-bottom: 64px
		

.card-c
	flex-shrink: 0
	row-gap: 24px
	img
		object-fit: cover
		width: 100%
		height: 240px


.x0
	overflow: hidden
	height: 100vh

.x0
	h1
		color: white
		background: rgba(0,0,0,0.7)
		padding: 2px 24px
		@media screen and (min-width: 1024px)
			width: max-content
			margin-top: 25%
		@media screen and (max-width: 1023px)
			width: 100%
			margin-top: 60%

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		min-height: 100vh
		align-content: center

.x2
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center
		gap: 32px
		.a-box
			

.x1
	.a-title
		h6
			background: var(--yellow)
			color: white
			margin-bottom: 8px
			padding: 8px
			text-align: center

.x1
	.a-title
		position: sticky
		top: 0
		padding-top: 80px




</style>