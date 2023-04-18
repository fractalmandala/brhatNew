<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { scale } from 'svelte/transition'
	import { crossfade } from 'svelte/transition'
	import { expoIn } from 'svelte/easing'
	import { allChapters, allDiaryCards, allFaq, anveshiGeneral, anveshiTempleArt, anveshiVids } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import Anveshi from '$lib/anims/LogoAnveshi.svelte'
	import WhiteCard from '$lib/components/WhiteCard.svelte'

	let chapters:string|any[]
	let cards:string|any[]
	let faqs:string|any[]
	let gens:string|any[]
	let vids:any
	let arts:any
	let isFaqOpen:boolean[] = Array(15).fill(false)
	let isGenOpen:boolean[] = Array(3).fill(false)
	let readjustedgrid:boolean = false
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let selectedArea:boolean[] = Array(3).fill(false)
	selectedArea[1] = true

	function toggleCategory(index:number) {
		selectedCategory[index] = !selectedCategory[index]
		for ( let i = 0; i < selectedCategory.length; i++) {
			if ( i !== index && selectedCategory[i] === true ) {
				selectedCategory[i] = false
			}
		}		
	}

	function toggleArea(index:number) {
		selectedArea[index] = !selectedArea[index]
		for ( let i = 0; i < selectedArea.length; i++) {
			if ( i !== index && selectedArea[i] === true ) {
				selectedArea[i] = false
			}
		}		
	}

	const [send, receive] = crossfade({
		duration: 200,
		easing: expoIn
	})

	function toggleFaq(index:number) {
		isFaqOpen[index] = !isFaqOpen[index]
		for ( let i = 0; i < isFaqOpen.length; i++ ) {
			if ( i !== index && isFaqOpen[i] === true ) {
				isFaqOpen[i] = false
			}
		}
	}

	function toggleGen(index:number) {
		isGenOpen[index] = !isGenOpen[index]
		for ( let i = 0; i < isGenOpen.length; i++ ) {
			if ( i !== index && isGenOpen[i] === true ) {
				isGenOpen[i] = false
			}
		}	
		readjustedgrid = !readjustedgrid	
	}

	onMount(async() => {
		chapters = await allChapters()
		arts = await anveshiTempleArt()
		vids = await anveshiVids()
		cards = await allDiaryCards()
		faqs = await allFaq()
		gens = await anveshiGeneral()
		const { Textify, TextifyTitle } = Animations
		new TextifyTitle({
			selector: '.a-title h3',
			duration: 800,
			stagger: 40,
			fade: false,
			reveal: true,
			once: false
		})	
	})
	
</script>

<svelte:head>
	<HeadComponent>
		Bṛhat Anveṣī at 
	</HeadComponent>
</svelte:head>

<div class="type">
	<div class="box x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')"></ParallaxImage>
	</div>
	<div class="gridof2 x1 pads">
		<div class="box" id="anveshipage">
			<Anveshi></Anveshi>
			<h5>
			 A travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
			</h5>
			<p>
				Each chapter of Bṛhat Anveṣī focuses on a specific area of India with dense concentrations of great temples and heritage centers. Anveṣī chapters are thrilling rides of three to four days, full of exploration of local cuisine, culture and heritage. Designed to satisfy both your wanderlust and curiosity, leaving you with an elevated taste of the cultural magic of India.
			</p>
		</div>
		<div class="box">

		</div>
	</div>
	<div class="plain-one x2 pads">
		<div class="a-title">
			<h3>Chapters</h3>
		</div>
		<div class="a-box gridof3">
			{#if chapters && chapters.length > 0}
				{#each chapters as item}
					<WhiteCard>
						<img slot="image" src={item.image} alt={item.id}/>
						<div slot="body" class="cardboard"> 
							<h6>
								<a href="/anveshi/chapter/{item.chapter}">
								{item.name}
								</a>
							</h6>
							<p>
								{item.content.slice(0,300)}...<span style="color: var(--yellow); font-weight: bold"><a href="/anveshi/chapter/{item.chapter}">Know More</a></span>
							</p>
							<div class="cardothers">
								<small style="color: var(--yellow)">
									{item.duration}
								</small>
								<small style="color: var(--yellow)">
									{item.dates}
								</small>
							</div>
						</div>
					</WhiteCard>
				{/each}
			{/if}
		</div>
	</div>
	<div class="plain-one x3 pads" id="diaries">
		<div class="a-title">
			<h3>Travel Diaries</h3>
			<h5>
				Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
			</h5>
		</div>
		<div class="a-box box extra">
			<div class="boxr">
				<h6 on:click={() => toggleCategory(3)} on:keydown={() => toggleCategory(3)} class:selected={selectedCategory[3]}>Travel Blog</h6>
				<h6 on:click={() => toggleCategory(1)} on:keydown={() => toggleCategory(1)} class:selected={selectedCategory[1]}>Temple Art</h6>
				<h6 on:click={() => toggleCategory(2)} on:keydown={() => toggleCategory(2)} class:selected={selectedCategory[2]}>Video Testimonials</h6>
			</div>
			{#if selectedCategory[1]}
				<div class="gridof4">
				{#if arts && arts.length > 0}
					{#each arts as item, i}
						<div class="card-image" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<img src={item.image} alt={item.id}/>
						</div>
					{/each}
				{/if}
				</div>
			{/if}	
			{#if selectedCategory[2]}
				<div class="gridof4">
					{#if vids && vids.length > 0}
						{#each vids as item, i}
						<div class="card-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>	
						</div>
						{/each}
					{/if}
				</div>
			{/if}			
			{#if selectedCategory[3]}
				<div class="gridof2">
					<div class="box">
						placehold
					</div>
				</div>
			{/if}		
		</div>
	</div>
	<div class="plain-one x3 pads" id="faq">
		<div class="a-title">
			<h3>About Anveṣī</h3>
		</div>
		<div class="a-box box extra">
			<div class="boxr">
				<h6 on:click={() => toggleArea(3)} on:keydown={() => toggleArea(3)} class:selected={selectedArea[3]}>About the Lead</h6>
				<h6 on:click={() => toggleArea(1)} on:keydown={() => toggleArea(1)} class:selected={selectedArea[1]}>FAQs</h6>
				<h6 on:click={() => toggleArea(2)} on:keydown={() => toggleArea(2)} class:selected={selectedArea[2]}>Who is Bṛhat Anveṣī</h6>
			</div>
			{#if selectedArea[1]}
				<div class="gridof3" id="faqgrid">
					{#if faqs && faqs.length > 0}
						{#each faqs as item, i}
							<div class="card-c faqcard" on:click={() => toggleFaq(i)} on:keydown={() => toggleFaq(i)} in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
								<h6>{item.name}</h6>
								{#if isFaqOpen[i]}
									<p>{item.content}</p>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

#diaries
	min-height: 100vh

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh

.x2
	h3
		text-align: center

.x3
	h3, h5
		text-align: center
	h5
		color: #878787
	.a-box
		padding-left: 56px
		padding-right: 32px
		.boxr
			gap: 32px
			border-bottom: 1px solid #ececec
			border-top: 1px solid #ececec
			justify-content: center
			width: 100%
			h6
				cursor: pointer
				text-transform: uppercase
				padding: 4px 8px
				&:hover
					background: #fe4a49
					color: white
				@media screen and (max-width: 1023px)
					font-size: 16px
			h6.selected
				background: #fe4a49
				color: white


.x2
	.gridof3
		padding-left: 48px
		padding-right: 32px
	h6
		&:hover
			color: var(--yellow)

.x1, .x2
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center
		justify-content: center

.x3
	padding-bottom: 72px


.x1
	padding-top: 64px

.faqcard
	cursor: pointer
	row-gap: 8px

#faqgrid
	align-items: start
	align-content: start

</style>