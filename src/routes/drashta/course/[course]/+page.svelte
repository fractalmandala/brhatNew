<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
  import { page } from '$app/stores'
	import { scale } from 'svelte/transition'
	import DropDown from '$lib/components/DropDown.svelte'
	import StickyCols from '$lib/components/StickyCols.svelte'
	import StickyCols2 from '$lib/components/StickyCols.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { courseContents, courseTakeaways, courseInstructor } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let y:number
	let isPads = true
	let iW:number
	let breakPoint:boolean
	let isRev = false
	let isRev2 = true
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

	$: if ( iW <= 1023 ) {
		breakPoint = true
	} else {
		breakPoint = false
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

<svelte:window bind:scrollY={y} bind:innerWidth={iW}/>

<svelte:head>
	<HeadComponent>
		{data.name} | Bṛhat Draṣṭā at 
	</HeadComponent>
</svelte:head>

<div class="type">
	<div class="box x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')">
			<h1 style="transform: translateY({-y/5}px)">{data.name}</h1>
		</ParallaxImage>
	</div>
	<StickyCols isPads={isPads} isRev={isRev}>
		<div slot="holds" class="box" id="nonhighlight">
			<h6>{data.status}</h6>
			<h6>{data.datefrom}</h6>
			<h6> by {data.ins}</h6>
		</div>
		<div slot="scrolls">
			<h5>
				{data.content}
			</h5>
		</div>
	</StickyCols>
	<StickyCols2 isPads={isPads} isRev={isRev2}>
		<div slot="holds" class="box" id="highlight">
			{#if breakPoint}
			<DropDown --thisbackground="var(--drash)" --thisdropdowntextcolor="var(--drash)">
				<div slot="visible">
					<h6 style="color: white">VIEW DETAILS:</h6>
				</div>
				<div slot="invisible">
					<h5 on:click={() => toggleArea(1)} on:keydown={fauxfake} class:selectedhead={area[1]}>Contents</h5>
					<h5 on:click={() => toggleArea(2)} on:keydown={fauxfake} class:selectedhead={area[2]}>Takeaways</h5>
					<h5 on:click={() => toggleArea(3)} on:keydown={fauxfake} class:selectedhead={area[3]}>Instructor</h5>
				</div>
			</DropDown>
			{:else}
			<h4 on:click={() => toggleArea(1)} on:keydown={fauxfake} class:selectedhead={area[1]}>Contents</h4>
			<h4 on:click={() => toggleArea(2)} on:keydown={fauxfake} class:selectedhead={area[2]}>Takeaways</h4>
			<h4 on:click={() => toggleArea(3)} on:keydown={fauxfake} class:selectedhead={area[3]}>Instructor</h4>
			{/if}
		</div>
		<div slot="scrolls">
			{#if area[1]}
				{#if conts && conts.length > 0}
					<div class="gridof2">
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
	</StickyCols2>
</div>


<style lang="sass">

#nonhighlight
	text-transform: uppercase
	h6
		color: var(--drash)

#highlight h4
	&:hover
		color: var(--drash)
		cursor: pointer

#highlight
	@media screen and (min-width: 1024px)
		text-align: right
	@media screen and (max-width: 1023px)
		flex-direction: row
		gap: 16px
		padding-top: 4px
		padding-bottom: 4px

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

.type
	padding-bottom: 120px

</style>