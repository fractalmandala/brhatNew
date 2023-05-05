<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { scale } from 'svelte/transition'
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
	
	
	onMount(() => {
		const { Textify, TextifyTitle } = Animations	
		new Textify({
			selector: ".typett",
			duration: 1200,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 3
		});
		new Textify({
			selector: ".onpagelinks h4",
			duration: 700,
			stagger: 40,
			fade: false,	
			top: true,
			reveal: true,
			once: false,
			scale: 2
		})

		(async () => {
			threeactions = await createCurateConsult()
			threeareas = await threeConvictions()
			advisors = await brhatAdvisors()
			partners = await brhatPartners()
			team = await brhatTeam()
		})()
	})

</script>

<svelte:head>
	<HeadComponent>
		About 
	</HeadComponent>
</svelte:head>


<!--parallax header-->
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"></ParallaxImage>
	</div>
<!--end-->

<!--intro section with 3 actions-->
	<div class="x1 rta-column is-padded minH rowgap-32">
		<h2>Bṛhat is a<br><span class="gradient-red">culture engine</span></h2>
		<h5 class="typett">
			To power creatives, research and design rooted in the Indian civilizational consciousness. We
			convert individual, institutional and collective intent into action, across 3 dimensions.
		</h5>
		<div class="rta-in-col rowgap-32">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="rta-row colgap-24">
						<div class="rta-image height-20 w32">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-in-col rowgap-16 w64">
							<h6>{item.name}</h6>
							<p>{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--three constraints-->
	<div class="rta-column minH is-padded rowgap-32">
		<div class="rta-in-col line"></div>
		<h5 class="typett">
			An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that?
		</h5>
		<h4 class="typett">
			At Bṛhat, we're acutely aware of three constraints:
		</h4>
		<div class="rta-in-col rowgap-32">
			{#if threeareas && threeareas.length > 0}
				{#each threeareas as item}
					<div class="rta-row colgap-24">
						<div class="rta-image w32">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-in-col rowgap-16 w64">
							<h6>{item.name}</h6>
							<p class="wide60">{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--severest constraint is time-->
	<div class="rta-column minH is-padded rowgap-32">
		<div class="rta-in-col line"></div>
		<h5 class="typett">
			But the severest constraint of them all is Time, and more specifically – Moment.
		</h5>
		<h5 class="typett">
			The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		</h5>
		<h4 class="typett">
			Read more on the need we see, why we think this is the time to address it, and about our self-identity.
		</h4>
	</div>
<!--end-->

<!--all links listed-->
	<div class="rta-column is-padded minH">
		<div class="rta-in-col line"></div>
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
<!--end-->


	<div class="rta-column is-padded minH align-all">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 left colgap-32">
			<div class="rta-in-col rowgap-32">
				<h4 class="typett">
				ADVISORS
				</h4>
			</div>
			<div class="a-box gridof4" id="advisors">
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
	</div>
	<div class="title-box x6 pads">
		<div class="a-title">
			<h4>
				Partners
			</h4>
		</div>
		<div class="a-box gridnew" id="partners">
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
	<div class="title-box x7 pads">
		<div class="a-title">
			<h4>
				Team {alignGrid}
			</h4>
		</div>
		<div class="a-box gridof3" class:calibrated={alignGrid} id="team">
			{#if team && team.length > 0}
				{#each team as item, i}
					<div class="card-a teamcard" class:openedcard={authorCardOn[i]} on:click={scrollToTeam} on:keydown={fauxfake}>
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
							<div>
								<h6>{item.name}</h6>
								<small>{item.title}</small>
							</div>
						</div>
						<div class="card-body">
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

<style lang="sass">

.teamcard
	cite
		font-style: normal
		text-align: right
		text-transform: uppercase
		color: white
		font-size: 12px
		padding: 4px 8px
		width: 200px
		align-self: end
		cursor: pointer
	small
		color: #878787
	img
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
	@media screen and (min-width: 1024px)
		h6, small
			text-align: right
		img
			filter: saturate(0.01)
			transform: scale(0.8)
		cite
			background: #676767
		&:hover
			cite
				background: #fe4a49
	@media screen and (max-width: 1023px)
		cite
			background: #fe4a49
			

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
	@media screen and (min-width: 1024px)
		.card-a
			justify-content: flex-start
			display: flex
			flex-direction: column
			.card-image
				display: flex
				flex-direction: column
				align-items: center
				height: 240px
				justify-content: space-between
				padding: 0
				img
					width: 180px
					height: 180px
					object-fit: cover
					margin-left: auto
					margin-right: auto
					border-radius: 80px
					margin-bottom: 16px
	@media screen and (max-width: 1023px)
		.card-a
			flex-direction: column
			display: flex
			padding: 0
			background: white
			row-gap: 16px
			.card-image
				display: flex
				flex-direction: row
				width: 100%
				align-items: center
				gap: 16px
				min-height: 112px
				img
					width: 112px
					height: 112px
					border-radius: 56px
			.card-body
				width: 100%

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
	@media screen and (max-width: 1023px)
		grid-template-areas: "opentab" "openedcard" "."
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