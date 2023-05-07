<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { scale } from 'svelte/transition'
	import Animations from 'textify.js'
	import visibilityMode from '$lib/stores/visibility'
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


  function scrollToTeam() {
    const teamElement = document.getElementById('team');
    if (teamElement) {
      teamElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
	
	
	onMount(() => {

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
	<div class="x1 type-thin rta-column ycenter outer-box limit p-top-64 minH rowgap600">
		<h2>Bṛhat is a<br><span>culture engine</span></h2>
		<h5 class="typett">
			To power creatives, research and design rooted in the Indian civilizational consciousness. We
			convert individual, institutional and collective intent into action, across 3 dimensions.
		</h5>
		<div class="rta-grid grid3 rowgap400 colgap400">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="rta-column col-row rowgap300">
						<div class="rta-image" id="imagebox">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-column ta-c-d rowgap100">
							<h5><strong>{item.name}</strong></h5>
							<pre>{item.content}</pre>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--three constraints-->
	<div class="rta-column type-thin minH ycenter outer-box limit rowgap600">
		<div class="rta-column line"></div>
		<h5 class="typett">
			An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that?
		</h5>
		<h4 class="typett">
			At Bṛhat, we're acutely aware of three constraints:
		</h4>
		<div class="rta-grid grid3 rowgap400 colgap400">
			{#if threeareas && threeareas.length > 0}
				{#each threeareas as item}
					<div class="rta-column col-row rowgap200">
						<div class="rta-image w32" id="imagebox2">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-column ta-c-d rowgap200 w64">
							<h5><strong>{item.name}</strong></h5>
							<p class="wide60">{item.content}</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--severest constraint is time-->
	<div class="rta-column type-thin ycenter outer-box limit rowgap400">
		<div class="rta-column line"></div>
		<h5 class="typett">
			But the severest constraint of them all is Time, and more specifically – Moment.
		</h5>
		<h5 class="typett">
			The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		</h5>
		<h4 class="typett">
			Read more on the need we see, why we think this is the time to address it, and about our self-identity:
		</h4>
	</div>
<!--end-->

<!--all links listed-->
	<div class="rta-column outer-box limit p-top-64">
		<div class="onpagelinks rta-column rowgap400">
			<h3><a href="/about/svatahsiddha">SVATAḤSIDDHA</a></h3>
			<h3><a href="/about/anatomy">ANATOMY OF A CIVILIZATIONAL MOMENT</a></h3>
			<h3><a href="/about/whatkrishnameanstous">WHAT ŚRĪ KṚṢṆA MEANS TO US</a></h3>
			<h3><a href="/about/namelogo">NĀMARŪPA - NAME AND LOGO</a></h3>
			<h3><a href="/about/values">PRATIJÑĀ - VALUES</a></h3>
			<h3><a href="/about/#advisors">ADVISORS</a></h3>
			<h3><a href="/about/#partners">PARTNERS</a></h3>
			<h3><a href="/about/#team">TEAM</a></h3>
		</div>
	</div>
<!--end-->


	<div class="rta-column ycenter rowgap600 outer-box minH limit">
		<h3 class="typett bord-top bord-bot p-top-32 p-bot-32">ADVISORS</h3>
			<div class="rta-grid grid4 rowgap400 colgap400" id="advisors">
			{#if advisors && advisors.length > 0}
			{#each advisors as item}
			<div class="rta-column col-row rowgap200">
				<div class="rta-image height-30" id="imagebox4">
					<img src={item.image} alt={item.id}/>
				</div>
				<div class="rta-column rowgap100">
					<h6>{item.name}</h6>
					<small>{item.title}</small>
				</div>
			</div>
			{/each}
			{/if}
			</div>
	</div>


<div class="rta-column rowgap600 outer-box limit">
	<h3 class="bord-top bord-bot p-top-32 p-bot-32">
		PARTNERS
	</h3>
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


	<div class="rta-column rowgap600 outer-box limit p-top-64">
			<h3 class="bord-top bord-bot p-top-32 p-bot-32">
				TEAM
			</h3>
		<div class="rta-grid grid3 colgap600 rowgap600 p-bot-64" class:calibrated={alignGrid} id="team">
			{#if team && team.length > 0}
				{#each team as item, i}
					<div class="rta-column rowgap400" class:openedcard={authorCardOn[i]} on:click={scrollToTeam} on:keydown={fauxfake}><strong>
						<div class="rta-image" id="imagebox3">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-column p-top-8 rowgap100">
							<h6>{item.name}</h6>
							<small class="bord-bot p-bot-16">{item.title}</small>
						</div>
						<div class="rta-column p-top-8 rowgap100">
							<p>{item.bio}</p>
							{#if item.name === 'Pankaj Saxena'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Pankaj</strong></p>
							{:else if item.name === 'Raghava Krishna'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Raghava</strong></p>
							{:else if item.name === 'Amritanshu Pandey'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Amrit</strong></p>
							{:else if item.name === 'Kavita Krishna Meegama'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Kavita</strong></p>
							{:else if item.name === 'Anurag Shukla'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Anurag</strong></p>
							{:else if item.name === 'Nivedita Tiwari'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Nivedita</strong></p>
							{:else if item.name === 'Sai Priya Chodavarapu'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Sai</strong></p>
							{:else if item.name === 'Akshay Jha'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Akshay</strong></p>
							{:else if item.name === 'Anshuman Panda'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Anshuman</strong></p>
							{:else if item.name === 'Sushant Gangoli'}
								<p style="color: #fe4a49; cursor: pointer" on:click={() => openAuthorCard(i)} on:keydown={fauxfake}><strong>Writings by Sushant</strong></p>
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

#imagebox, #imagebox2
	@media screen and (min-width: 1024px)
		border-radius: 80px
		img
			object-fit: contain
			height: 160px
			border-radius: 80px
	@media screen and (max-width: 1023px)
		img
			object-fit: contain
			height: 88px
			width: 88px
			border-radius: 44px

#imagebox3
	@media screen and (min-width: 1024px)
		border-radius: 80px
		img
			width: 200px
			height: 200px
			border-radius: 100px
	@media screen and (max-width: 1023px)
		img
			width: 128px
			height: 128px
			border-radius: 64px

#imagebox4
	@media screen and (max-width: 1023px)
		height: 104px

.x0
	height: 100vh
	overflow: hidden

.gridnew
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
		grid-template-areas: ". . . . . . ."
		gap: 0 32px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ." ". . ." ". . ."
		gap: 16px 16px
	

.grid3.calibrated
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

.onpagelinks h3
	transition: 0.15s
	&:hover
		color: #fe4a49


</style>