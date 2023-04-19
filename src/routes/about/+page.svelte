<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { scale } from 'svelte/transition'
	import Lenis from '@studio-freight/lenis'
	import Animations from 'textify.js'
	import { reveal } from 'svelte-reveal'
	import { elementVisibilityStore } from "svelte-legos"
	import { createCurateConsult, threeConvictions, brhatAdvisors, brhatTeam, brhatPartners } from '$lib/utils/supapulls'
	import PankajSaxena from '$lib/authors/PankajSaxena.svelte'
	import RaghavaKrishna from '$lib/authors/RaghavaKrishna.svelte'
	import AkshayJha from '$lib/authors/AkshayJha.svelte'
	import AmritPandey from '$lib/authors/AmritPandey.svelte'
	import AnshumanPanda from '$lib/authors/AnshumanPanda.svelte'
	import AnuragShukla from '$lib/authors/AnuragShukla.svelte'
	import KavitaKrishna from '$lib/authors/KavitaKrishna.svelte'
	import NiveditaTiwari from '$lib/authors/NiveditaTiwari.svelte'
	import SaiPriya from '$lib/authors/SaiPriya.svelte'
	import SushantGangoli from '$lib/authors/SushantGangoli.svelte'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let threeactions: string|any[]
	let threeareas: string|any[]
	let advisors: string|any[]
	let partners: string|any[]
	let team: string|any[]
	let intersector:boolean = false
	let tracking:HTMLElement | null = null
	let authorCardOn = Array(12).fill(false)
	let fake = false
	let alignGrid = false

	function openAuthorCard(index:number){
		authorCardOn[index] = !authorCardOn[index]
		for ( let i = 0; i < authorCardOn.length; i++ ) {
			if ( i !== index && authorCardOn[i] === true ) {
				authorCardOn[i] = false
			}
		}
		if ( alignGrid === false ) {
			alignGrid = true
		}
	}

	function fauxfake(){
		fake = !fake
	}

	$: ({ isVisible } = elementVisibilityStore(tracking))
	$: if ( $isVisible ) {
		intersector = true
	} else {
		intersector = false
	}

  function scrollToTeam() {
    const teamElement = document.getElementById('team');
    if (teamElement) {
      teamElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"></ParallaxImage>
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
		<div class="a-box gridof3" class:calibrated={alignGrid}>
			{#if team && team.length > 0}
				{#each team as item, i}
					<div class="card-a teamcard" class:openedcard={authorCardOn[i]} on:click={scrollToTeam} on:keydown={fauxfake}>
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="card-body">
							<h6>{item.name}</h6>
							<small>{item.title}</small>
							<p>{item.bio}</p>
							{#if item.name === 'Pankaj Saxena'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Pankaj</cite>
							{:else if item.name === 'Raghava Krishna'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Raghava</cite>
							{:else if item.name === 'Amritanshu Pandey'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Amrit</cite>
							{:else if item.name === 'Kavita Krishna Meegama'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Kavita</cite>
							{:else if item.name === 'Anurag Shukla'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Anurag</cite>
							{:else if item.name === 'Nivedita Tiwari'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Nivedita</cite>
							{:else if item.name === 'Sai Priya Chodavarapu'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Sai</cite>
							{:else if item.name === 'Akshay Jha'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Akshay</cite>
							{:else if item.name === 'Anshuman Panda'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Anshuman</cite>
							{:else if item.name === 'Sushant Gangoli'}
								<cite on:click={() => openAuthorCard(i)} on:keydown={fauxfake}>Writings by Sushant</cite>
							{/if}
						</div>
					</div>
					{#if authorCardOn[i]}
					<div class="opentab teampage" in:scale={{ duration: 300, delay: 100}}>
							{#if item.name === 'Pankaj Saxena'}						
								<PankajSaxena></PankajSaxena>
							{:else if item.name === 'Raghava Krishna'}
								<RaghavaKrishna></RaghavaKrishna>
							{:else if item.name === 'Anurag Shukla'}
								<AnuragShukla></AnuragShukla>
							{:else if item.name === 'Kavita Krishna Meegama'}
								<KavitaKrishna></KavitaKrishna>
							{:else if item.name === 'Nivedita Tiwari'}
								<NiveditaTiwari></NiveditaTiwari>
							{:else if item.name === 'Akshay Jha'}
								<AkshayJha></AkshayJha>
							{:else if item.name === 'Anshuman Panda'}
								<AnshumanPanda></AnshumanPanda>
							{:else if item.name === 'Sai Priya Chodavarapu'}
								<SaiPriya></SaiPriya>
							{:else if item.name === 'Sushant Gangoli'}
								<SushantGangoli></SushantGangoli>
							{:else if item.name === 'Amritanshu Pandey'}
								<AmritPandey></AmritPandey>
							{:else}
								<div></div>
							{/if}
					</div>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.teamcard
	cite
		font-style: normal
		text-align: right
		text-transform: uppercase
		background: #676767
		color: white
		font-size: 12px
		padding: 4px 8px
		width: 200px
		align-self: end
		cursor: pointer
	img
		filter: saturate(0.01)
		transform: scale(0.8)
		transform-origin: bottom right
		transition: 0.43s ease
	.card-body
		transition: 0.43s ease
	&:hover
		img
			filter: saturate(1)
			transform: scale(1)
			transform-origin: left top
		.card-body
			transform: scale(0.8)
		small
			color: #fe4a49
		cite
			background: #fe4a49
			padding: 8px

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
			width: 128px
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

.gridof3.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab openedcard" ". . ."
		grid-template-rows: auto auto
		.opentab
			grid-area: opentab
		.teamcard.card-a.openedcard
			grid-area: openedcard

.teamcard.card-a.openedcard
	img
		filter: saturate(1)
	small
		color: #fe4a49
	cite
		background: #fe4a49

.opentab.teampage
	display: flex
	flex-direction: column
	justify-content: center


</style>