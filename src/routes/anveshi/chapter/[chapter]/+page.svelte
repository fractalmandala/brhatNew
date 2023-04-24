<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import StickyCols from '$lib/components/StickyCols.svelte'
	import StickyCols2 from '$lib/components/StickyCols.svelte'
	import { scale } from 'svelte/transition'
	import { chapterItinerary } from '$lib/utils/supapulls'
	import { chapterTemples } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let p:number
	let alignGrid = false
	let isPads = true
	let isRev = false
	let isRev2 = true
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
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')">
			<h1 style="transform: translateY({-p/5}px)">{data.name}</h1>
		</ParallaxImage>
	</div>
	<StickyCols isPads={isPads} isRev={isRev}>
		<div slot="holds" class="box">
			<h6 style="color: var(--yellow)">{data.duration}</h6>
			<h6 style="color: var(--yellow)">{data.dates}</h6>
			<h6 style="color: var(--yellow)">{data.price}</h6>
		</div>
		<div slot="scrolls">
			<h5>
				{data.content}
			</h5>
		</div>
	</StickyCols>
	<StickyCols2 isPads={isPads} isRev={isRev2}>
		<div slot="holds" class="box" id="highlight">
			<h4 on:click={() => toggleArea(1)} on:keydown={fauxfake} class:selectedhead={area[1]}>Itinerary</h4>
			<h4 on:click={() => toggleArea(2)} on:keydown={fauxfake} class:selectedhead={area[2]}>Temples</h4>
		</div>
		<div slot="scrolls">
			{#if area[1]}
				<div class="gridof4 onefour" class:calibrated={alignGrid}>
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
				<div id="templegrid" class="gridof4 by2 twofour" class:calibrated={alignGrid}>
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
	</StickyCols2>
</div>

<style lang="sass">

.type
	padding-bottom: 120px

#highlight h4
	&:hover
		color: var(--yellow)
		cursor: pointer

#highlight
	@media screen and (max-width: 1023px)
		flex-direction: row
		gap: 16px
		border-top: 1px solid #ececec
		padding-top: 4px
		border-bottom: 1px solid #ececec
		padding-bottom: 4px


.onefour
	h6, h5
		cursor: pointer

.onefour.calibrated.gridof4
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab" ". . ."
		grid-template-rows: auto auto
		grid-template-columns: 1fr 1fr 1fr
		.opentab
			grid-area: opentab

.twofour.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab" ". . . ."
		grid-template-rows: auto auto
		.card-row.opentab
			grid-area: opentab


.twofour.by2.calibrated.gridof4
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab" ". . . ."
		grid-template-rows: auto
		.card-row.opentab
			grid-area: opentab
			gap: 48px
			margin-bottom: 32px
			.card-image
				width: 40%
				height: 240px
			.card-body
				width: calc(60% - 48px)
	@media screen and (max-width: 1023px)
		grid-template-areas: "opentab opentab" ". ."
		grid-template-rows: auto auto
		.card-row.opentab
			grid-area: opentab
			flex-direction: column
			.card-image, .card-body
				width: 100%
			.card-image
				height: 240px
				

.twofour.gridof4.by2
	img
		object-fit: cover
		width: 100%
		height: 100%
	.card-c
		padding: 0
		cursor: pointer
	gap: 16px

	

.x2
	.gridof4.onefour
		.card-c
			cursor: pointer
		.card-c.opentab
			cursor: default
			border-bottom: 1px solid #ececec
			padding-bottom: 16px
			h5
				color: var(--yellow)
		

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 40vh

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


</style>