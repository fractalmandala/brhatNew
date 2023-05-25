<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	import { chapterItinerary } from '$lib/utils/supapulls'
	import { chapterTemples } from '$lib/utils/supapulls'

	let p:number
	let alignGrid = false
	let chapter:string 
	let itins:string|any[]
	let openedDay:boolean[] = Array(5).fill(false)
	let temp:any
	let area:any = Array(2).fill(false)
	area[1] = true
	let visibleTemple:any = Array(30).fill(false)
	let fake = false
	let elementTop: HTMLElement

	export let data

	$: $metaUrl = $page.url.pathname
	$: $metaTitle = data.name
	$: $metaDescription = data.excerpt
	$: $metaImage = data.image
	$: $metaType = 'webpage'

	function fauxfake(){
		fake = !fake
	}

	let tempIndex = 0

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

	function toggleImage(index: number, element: HTMLElement) {
		visibleTemple[index] = !visibleTemple[index]
		for ( let i = 0; i < visibleTemple.length; i ++ ) {
			if ( i !== index && visibleTemple[i] === true ) {
				visibleTemple[i] = false
			}
		}
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	$: anyTempleOpen = visibleTemple.some((item: any) => item)

	onMount(async() => {
		chapter = data.chapter
		itins = await chapterItinerary(chapter)
		temp = await chapterTemples(chapter)
	})

	afterUpdate(() => {
		chapter = data.chapter
	})


</script>

<svelte:window bind:scrollY={p}/>



<!--heading image-->
	<div class="rta-column x0 top-p-64" id="heading-image">
		<img src="{data.image}" alt={data.name} />
	</div>
<!--end-->

<!--header and metadetails-->
	<div class="rta-column outer-box limit rowgap100" id="section1">
		<div class="rta-column bord-bot p-bot-64">
			<h3 class="tt-u ta-c-d p-bot-16">{data.name}</h3>
			<em class="tt-u ta-c-d" id="section1line2">{data.status}. Next travelling {data.dates} | {data.duration} | {data.price}</em>
		</div>
	</div>
<!--end-->

<!--detailed content and itinerary-->
	<div class="rta-column outer-box limit rowgap600">
		<pre class="h5">
			{data.content}
		</pre>
		<div class="rta-column top-p-32 rowgap300 bot-p-64">
			<h4 class="tt-u ta-c-d p-bot-16">Itinerary</h4>
			{#if itins && itins.length > 0}
				{#each itins as item, i}
				<div class="rta-column rowgap200 accordion-item" class:accordionOpen={openedDay[i]} on:click={() => toggleDay(i)} on:keydown={fauxfake} use:autoAnimate>
					<div class="rta-row colgap100 xcenter-d" class:opened={openedDay[i]}>
						<div class="rta-column" class:rotated={openedDay[i]}>
							<ChevronDown color="#878787"/>
						</div>
						<h6>{item.name}</h6>
					</div>
					{#if openedDay[i]}
					<pre class="h5 ta-c-d">
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
	<div class="rta-column outer-box limit rowgap100 alt-pads p-top-64 p-bot-64" bind:this={elementTop}>
		<h4 class="bot-p-16 tt-u ta-c-d bord-top p-top-32">Temples of {data.chapter}</h4>
		<p class="ta-c-d p-bot-32">Click on the temples to open details.</p>
		<div class="rta-grid grid3 stay2 colgap400 rowgap400" class:calibrated={anyTempleOpen}>
			{#if temp && temp.length > 0}
				{#each temp as item, i}
					<div class="rta-column rowgap300" class:opentab={visibleTemple[i]} on:click={() => toggleImage(i, elementTop)} on:keydown={fauxfake} use:autoAnimate>
						<div class="rta-image height-30-2">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-column rowgap100" use:autoAnimate>
							{#if !visibleTemple[i]}
							<p class="linecut"><strong>{item.name}</strong></p>
							{/if}
							{#if visibleTemple[i]}
							<h6>{item.name}</h6>
							<pre>{item.content}</pre>
							{/if}
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->


<style lang="sass">

#heading-image
	@media screen and (min-width: 1024px)
		img
			border-radius: 16px

#section1line2
	background: #FF9F1C
	color: white
	padding: 2px 0
	@media screen and (max-width: 1023px)
		padding: 4px 8px

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

.accordion-item
	border-bottom: 1px solid var(--borderline)
	padding-bottom: 16px
	.rta-row
		cursor: pointer
		.rta-column
			transition: 0.15s
		.rta-column.rotated
			transform: rotate(180deg)

.grid3.calibrated
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: "opentab opentab opentab" ". . ."
		.opentab
			grid-area: opentab
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-areas: "opentab opentab" ". ."
		.opentab
			grid-area: opentab

.rta-column.opentab
	@media screen and (min-width: 1024px)
		display: grid
		grid-auto-flow: row
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "rta-image rta-column rta-column"
		gap: 32px 32px
		.rta-image
			grid-area: rta-image
		.rta-column
			grid-area: rta-column
	@media screen and (max-width: 1023px)
		.height-30-2
			height: 20vh
	




</style>