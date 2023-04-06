<script lang="ts">

	import { onMount } from 'svelte'
	import Lenis from '@studio-freight/lenis'
	import Animations from 'textify.js'
	import HomeAccordion from '$lib/components/HomeAccordion.svelte'
	import { createCurateConsult, brhatUpdates, latestVidsVar, BOLLatest } from '$lib/utils/supapulls'
	import { latestDhitiSix } from '$lib/utils/localpulls'

	let threeactions: string|any[]
	let updates: string|any[]
	let count:number = 4
	let videos: string|any[]
	let posts: string|any[]
	let bollimit:number = 12
	let books: string|any[]
	let scy:number
	let ouh:number

	onMount(async() => {
		threeactions = await createCurateConsult()
		updates = await brhatUpdates()
		videos = await latestVidsVar(count)
		posts = await latestDhitiSix()
		books = await BOLLatest(bollimit)
		const lenis = new Lenis({
			orientation: 'vertical',
			duration: 1.0,
			wheelMultiplier: 0.5,
			infinite: false,
			smoothWheel: true
		})
		lenis.on('scroll', (e: any) => {
		})
		function raf(time: any) {
  		lenis.raf(time)
  		requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		const { Textify } = Animations
		new Textify({
			selector: '.card-body h6',
			duration: 600,
			stagger: 200,
			fade: false,
			reveal: true,
			threshold: 0.2,
			once: false
		})
		new Textify({
			selector: '.a-title h4',
			duration: 500,
			stagger: 50,
			fade: false,
			reveal: true,
			once: false
		})	
	})	

</script>

<svelte:window bind:scrollY={scy} bind:outerHeight={ouh}/>
<div class="type">
	<HomeAccordion></HomeAccordion>
	<div class="plain-three x1 pads">
		<div class="top">
			<h1>Bṛhat is a<br><span style="color: #fe4a49">culture engine</span></h1>
		</div>
		<div class="mid box">
			<h5 class="wide60">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h5>
			<button class="redbutton"><a href="/about">Know More</a></button>
		</div>
		<div class="bot gridof3">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="box">
						<h6>{item.name}</h6>
						<pre>{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x2 pads">
		<div class="a-title">
			<h4>New and Recent</h4>
		</div>
		<div class="a-box gridof3">
			{#if updates && updates.length > 0}
				{#each updates as item}
					<div class="card-a">
						<div class="card-image">
							<img src={item.image} alt={item.id} />
						</div>
						<div class="card-body">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}...<span style="color: #fe4a49; font-weight: bold; text-transform: capitalize"><a href={item.link} target="_blank" rel="noreferrer">{item.buttontext}</a></span></p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Explore Visual Content</h4>
		</div>
		<div class="strip"></div>
		<div class="a-box box extra">
			<h5>
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. View the latest videos below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					style="color: #fe4a49"
					rel="noreferrer">YouTube channel</a
				>
			</h5>
			<button class="redbutton"><a href="/mrdanga">Visit Bṛhadmṛdaṅga</a></button>
			<div class="gridof4">
				{#if videos && videos.length > 0}
					{#each videos as item}
						<div class="card-video">
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>						
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="title-box x4 pads">
		<div class="a-title">
			<h4>Latest at Dhīti</h4>
		</div>
		<div class="a-box gridof3">
			{#if posts && posts.length > 0}
				{#each posts as item}
					<div class="card-b">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6>
								<a href={item.path}>
									{item.meta.title}
								</a>
							</h6>
							<p>
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<div class="box card-meta">
								<cite>{item.meta.tags}</cite>
								<small>{item.meta.category}</small>
							</div>
						</div>	
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x5 pads">
		<div class="a-title">
			<h4>Open Library</h4>
		</div>
		<div class="a-box gridof4">
			{#if books && books.length > 0}
				{#each books as item}
					<div class="card-c">
						<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
						<p>{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.x1, .x2, .x3, .x5
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.x1, .x2, .x3, .x5
	@media screen and (max-width: 1023px)
		margin-bottom: 48px

.x4
	padding-bottom: 64px
	a
		transition: var(--snap)
		&:hover
			color: var(--strong)
	small
		background: var(--strong)
		color: white
		width: max-content
		padding: 2px 8px
	.card-meta
		justify-self: flex-end
		row-gap: 4px

.x5
	a
		transition: var(--snap)
		&:hover
			color: var(--strong)
	.card-c
		row-gap: 8px

.strip
	height: 24px
	width: 0%
	background: #fe4a49

</style>
