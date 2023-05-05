<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	import Accordion from '$lib/ridunits/CompAccordion.svelte'
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

<!--heading image-->
	<div class="rta-column x0 top-p-64">
		<img src="{data.image}" alt={data.name} />
	</div>
<!--end-->

<!--header and metadetails-->
	<div class="rta-column alt-pads rowgap-8 top-p-32" id="section1">
		<h3 class="tt-u ta-c">{data.name}</h3>
		<h5 class="ta-c tt-c" id="section1line2">{data.status}. Next travelling {data.dates}</h5>
		<h5 class="ta-c tt-c bord-bot bot-p-16">{data.duration} | {data.price}</h5>
	</div>
<!--end-->

<!--detailed content and itinerary-->
	<div class="rta-column alt-pads top-p-32 rowgap-64">
		<pre class="h5">
			{data.content}
		</pre>
		<div class="rta-in-col top-p-32 rowgap-16 bot-p-64">
			<h4 class="tt-u">Itinerary</h4>
			{#if itins && itins.length > 0}
				{#each itins as item, i}
				<div class="rta-in-col col-y-top rowgap-16 accordion-item bord-bot bot-p-16" on:click={() => toggleDay(i)} on:keydown={fauxfake} use:autoAnimate>
					<div class="rta-row row-y-cent top-p-16 row-between" class:opened={openedDay[i]}>
						<h6>{item.name}</h6>
						<div class="rta-in-col">
							<ChevronDown/>
						</div>
					</div>
					{#if openedDay[i]}
					<pre class="h6">
						{item.content}
					</pre>
					{/if}
				</div>				
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--temples-->
	<div class="rta-column rowgap-16 alt-pads top-p-32 bot-p-64">
		<h4 class="bot-p-16 tt-u">Temples of {data.chapter}</h4>
		<div class="rta-grid grid3 colgap-32 rowgap-32">
			{#if temp && temp.length > 0}
				{#each temp as item}
					<div class="rta-in-col rowgap-16">
						<div class="rta-image height-30">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-in-col rowgap-8">
							<h6>{item.name}</h6>
							<pre>{item.content}</pre>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->


<style lang="sass">

#section1line2
	background: var(--bluedark)
	color: white
	padding: 2px 0

h6, pre, h4, h3, h5
	margin: 0

.x0
	img
		object-fit: cover
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center
		align-items: center
		img
			width: 80%
			height: 80%
			margin-top: 64px
	@media screen and (max-width: 1023px)
		height: 40vh
		img
			height: 100%



</style>