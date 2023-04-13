<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Animations from 'textify.js'
	import { reveal } from 'svelte-reveal'
	import { elementVisibilityStore } from "svelte-legos"
	import { createCurateConsult, threeConvictions, brhatAdvisors, brhatTeam, brhatPartners } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let threeactions: string|any[]
	let threeareas: string|any[]
	let advisors: string|any[]
	let partners: string|any[]
	let team: string|any[]
	let intersector:boolean = false
	let tracking:HTMLElement | null = null

	$: ({ isVisible } = elementVisibilityStore(tracking))
	$: if ( $isVisible ) {
		intersector = true
	} else {
		intersector = false
	}
	
	
	onMount(async() => {
		threeactions = await createCurateConsult()
		threeareas = await threeConvictions()
		advisors = await brhatAdvisors()
		partners = await brhatPartners()
		team = await brhatTeam()
		const { Textify } = Animations
		new Textify({
			selector: '.card-body h6',
			duration: 600,
			stagger: 200,
			fade: false,
			reveal: true,
			threshold: 0.2
		})
		new Textify({
			selector: '.card-body p',
			duration: 800,
			stagger: 300,
			fade: false,
			reveal: true,
			threshold: 0.2
		})
		new Textify({
			selector: '.onpagelinks h4',
			duration: 1000,
			stagger: 100,
			fade: false,
			scale: 0.8,
			reveal: true,
			transformOrigin: 'left center'
		})
		new Textify({
			selector: '.a-title h4',
			duration: 500,
			stagger: 50,
			fade: false,
			reveal: true
		})		
	})

</script>

<svelte:head>
	<HeadComponent>
		About 
	</HeadComponent>
</svelte:head>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp?t=2023-04-06T12%3A47%3A17.585Z')"></ParallaxImage>
	</div>
	<div class="plain-three x1 pads">
		<div class="top" use:reveal={{ transition: "fly", y: 64 }}>
			<h1>Bṛhat is a<br><span style="color: #fe4a49">culture engine</span></h1>
		</div>
		<div class="mid box">
			<h5 class="wide60" use:reveal={{ transition: "fly", y: 64 }}>
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h5>
		</div>
		<div class="bot box extra">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="card-body firstcard">
							<h6 data-textify>{item.name}</h6>
							<p>{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="plain-two x2 pads">
		<div class="up box extra">
			<h5 class="wide60">
				An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that?
			</h5>
			<h4>
				At Bṛhat, we're acutely aware of three constraints:
			</h4>
		</div>
		<div class="down box extra">
			{#if threeareas && threeareas.length > 0}
				{#each threeareas as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="card-body firstcard">
							<h6>{item.name}</h6>
							<p class="wide60">{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="plain-one x3 pads">
		<h5 class="wide60">
			But the severest constraint of them all is Time, and more specifically – Moment.
		</h5>
		<h5 class="wide60">
			The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		</h5>
		<h4 class="wide60">
			Read more on the need we see, why we think this is the time to address it, and about our self-identity.
		</h4>
	</div>
	<div class="plain-one x4 pads">
		<div class="onpagelinks">
			<h4><a href="/about/svatahsiddha">SVATAḤSIDDHA</a></h4>
			<h4><a href="/about/anatomy">ANATOMY OF A CIVILIZATIONAL MOMENT</a></h4>
			<h4><a href="/about/whatkrishnameanstous">WHAT ŚRĪ KṚṢṆA MEANS TO US</a></h4>
			<h4><a href="/about/namelogo">NĀMARŪPA - NAME AND LOGO</a></h4>
			<h4><a href="/about/values">PRATIJÑĀ - VALUES</a></h4>
			<h4><a href="/about/#advisors">ADVISORS</a></h4>
			<h4><a href="/about/#partners">PARTNERS</a></h4>
			<h4><a href="/about/#team">TEAM</a></h4>
		</div>
	</div>
	<div class="title-box x5 pads" id="advisors">
		<div class="a-title">
			<h4>
				Advisors
			</h4>
		</div>
		<div class="a-box gridof4">
			{#if advisors && advisors.length > 0}
			{#each advisors as item}
			<div class="card-a">
				<div class="card-image">
					<img src={item.image} alt={item.id}/>
				</div>
				<div class="card-body">
					<h6>{item.name}</h6>
					<p>{item.title}</p>
				</div>
			</div>
			{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x6 pads" id="partners">
		<div class="a-title">
			<h4>
				Partners
			</h4>
		</div>
		<div class="a-box gridnew">
		{#if partners && partners.length > 0}
			{#each partners as item}
				<div class="box">
					<a href={item.link} target="_blank" rel="noreferrer">
						<img src={item.image} alt={item.id}/>
					</a>
				</div>
			{/each}
		{/if}
		</div>
	</div>
	<div class="title-box x7 pads" id="team">
		<div class="a-title">
			<h4>
				Team
			</h4>
		</div>
		<div class="a-box gridof3">
			{#if team && team.length > 0}
				{#each team as item}
					<div class="card-a">
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="card-body">
							<h6>{item.name}</h6>
							<small>{item.title}</small>
							<p>{item.bio}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.firstcard
	@media screen and (min-width: 1024px)
		width: 40%

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		min-height: 100vh
		align-content: center
		img
			width: 200px
		.bot.box.extra
			row-gap: 32px

.x2
	padding-bottom: 64px
	padding-top: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.x3
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		padding-top: 64px
		align-content: center

.x4
	padding-bottom: 64px
	a
		transition: var(--snap)
		&:hover
			color: #fe4a49

.x5
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.x6
	padding-top: 64px
	padding-bottom: 64px
	.box a
		img
			object-fit: contain
			width: 100%
			height: 128px
			transition: var(--snap)
			transform-origin: center center
			&:hover
				transform: scale(0.9)

.gridnew
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
		grid-template-areas: ". . . . . . ."
		gap: 0 32px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-areas: ". ." ". ." ". ." ". ."
		gap: 32px 32px
	
.x7
	padding-bottom: 64px
	.card-a
		.card-image
			@media screen and (min-width: 1024px)
				display: flex
				flex-direction: column
				align-items: center
				img
					width: 160px
					margin-left: auto
					margin-right: auto
			@media screen and (max-width: 1023px)
				height: 112px
				img
					width: 112px
					height: 112px

.card-row
	@media screen and (min-width: 1024px)
		img
			border-radius: 60px
			width: 120px
			height: 120px
	@media screen and (max-width: 1023px)
		img
			border-radius: 44px
			width: 88px
			height: 88px

</style>