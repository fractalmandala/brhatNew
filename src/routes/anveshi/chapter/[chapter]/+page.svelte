<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { scale } from 'svelte/transition'
	import { chapterItinerary } from '$lib/utils/supapulls'
	import { chapterTemples } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let p:number
	let alignGrid = false
	let chapter:string 
	let itins:string|any[]
	let openedDay:boolean[] = Array(5).fill(false)
	let temp:any
	let area:any = Array(2).fill(false)
	area[1] = true
	let imageDetail:any = Array(30).fill(false)
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

	function toggleDay(index:number) {
		openedDay[index] = !openedDay[index]
		for ( let i = 0; i < openedDay.length; i ++ ) {
			if ( i !== index && openedDay[i] === true ) {
				openedDay[i] = false
			}
		}
		if ( alignGrid === false ) {
			alignGrid = true
		}
	}

	function toggleImage(index:number) {
		imageDetail[index] = !imageDetail[index]
		for ( let i = 0; i < imageDetail.length; i ++ ) {
			if ( i !== index && imageDetail[i] === true ) {
				imageDetail[i] = false
			}
		}
		if ( alignGrid === false ) {
			alignGrid = true
		}
	}

	onMount(async() => {
		chapter = data.chapter
		itins = await chapterItinerary(chapter)
		temp = await chapterTemples(chapter)
	})

	afterUpdate(() => {
		chapter = data.chapter
	})

	export let data

</script>

<svelte:window bind:scrollY={p}/>

<svelte:head>
	<HeadComponent>
		Bṛhat Anveṣī {data.name} at 
	</HeadComponent>
</svelte:head>

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
	<div class="plain-one x2 pads">
		<div class="a-title boxr">
			<h3 on:click={() => toggleArea(1)} on:keydown={fauxfake} class:selectedhead={area[1]}>Itinerary</h3>
			<h3 on:click={() => toggleArea(2)} on:keydown={fauxfake} class:selectedhead={area[2]}>Temples</h3>
		</div>
		<div class="a-box box extra">
			{#if area[1]}
				<div class="gridof3" class:calibrated={alignGrid}>
					{#if itins && itins.length > 0}
						{#each itins as item, i}
							{#if openedDay[i]}
							<div class="card-c opentab" on:click={() => toggleDay(i)} on:keydown={() => toggleDay(i)} in:scale={{ duration: 500, delay: 150}} out:scale={{ duration: 100, delay: 0}}>
								<div class="card-body">
									<h5 style="font-weight: 600">{item.name}</h5>
									<pre>{item.content}</pre>
								</div>
							</div>
							{:else}
							<div class="card-c" on:click={() => toggleDay(i)} on:keydown={() => toggleDay(i)} in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
								<div class="card-body">
									<h6>{item.name}</h6>
								</div>
							</div>
							{/if}
						{/each}
					{/if}
				</div>
			{/if}
			{#if area[2]}
				<div class="gridof4" class:calibrated={alignGrid}>
					{#if temp && temp.length > 0}
						{#each temp as item, i}
							{#if imageDetail[i]}
								<div class="card-row opentab" on:click={() => toggleImage(i)} on:keydown={() => toggleImage(i)} in:scale={{ duration: 500, delay: 150}} out:scale={{ duration: 100, delay: 0}}>
									<div class="card-image">
										<img src={item.image} alt={item.id}/>
									</div>
									<div class="card-body">
										<p>{item.content}</p>
									</div>
								</div>
							{:else}
							<div class="card-c" on:click={() => toggleImage(i)} on:keydown={() => toggleImage(i)} in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
								<div class="imagecard">
									<img src={item.image} alt={item.id}/>
								</div>
							</div>
							{/if}
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.gridof3.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab" ". . ."
		grid-template-rows: auto auto
		.opentab
			grid-area: opentab

.gridof4.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab" ". . . ."
		grid-template-rows: auto auto
		.card-row.opentab
			grid-area: opentab

.x2
	.boxr
		border-top: 1px solid #ececec
		justify-content: center
		width: 100%
		gap: 64px
	h3
		padding: 2px 16px
		cursor: pointer
		&:hover
			background: var(--yellow)
			color: white
	h3.selectedhead
		background: var(--yellow)
		color: white
	.gridof3
		.card-c
			cursor: pointer
		.card-c.opentab
			cursor: default
		

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
	.a-title
		position: sticky
		top: 0
		padding-top: 80px
		h6
			background: var(--yellow)
			color: white
			margin-bottom: 8px
			padding: 8px
			text-align: center
	@media screen and (min-width: 1024px)
		min-height: 100vh
		align-content: center

.x2
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		align-content: center
		gap: 32px
		.gridof4
			.card-c
				padding: 0


</style>