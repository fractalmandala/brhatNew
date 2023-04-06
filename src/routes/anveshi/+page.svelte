<script lang="ts">

	import { onMount } from 'svelte'
	import { crossfade } from 'svelte/transition'
	import { expoIn } from 'svelte/easing'
	import { allChapters, allDiaryCards, allFaq, anveshiGeneral } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let chapters:string|any[]
	let cards:string|any[]
	let faqs:string|any[]
	let gens:string|any[]
	let isFaqOpen:boolean[] = Array(15).fill(false)
	let isGenOpen:boolean[] = Array(3).fill(false)
	let readjustedgrid:boolean = false

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
		cards = await allDiaryCards()
		faqs = await allFaq()
		gens = await anveshiGeneral()
	})
	
</script>

<div class="type">
	<div class="box x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')"></ParallaxImage>
	</div>
	<div class="title-box x1 pads">
		<div class="a-title">
			<h3>Bṛhat Anveṣī</h3>
		</div>
		<div class="a-box box extra">
			<h5>
				is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
			</h5>
			<p>
				Each chapter of Bṛhat Anveṣī focuses on a specific area of India with dense concentrations of great temples and heritage centers. Anveṣī chapters are thrilling rides of three to four days, full of exploration of local cuisine, culture and heritage. Designed to satisfy both your wanderlust and curiosity, leaving you with an elevated taste of the cultural magic of India.
			</p>
		</div>
	</div>
	<div class="title-box x2 pads">
		<div class="a-title">
			<h4>Chapters</h4>
		</div>
		<div class="a-box gridof3">
			{#if chapters && chapters.length > 0}
				{#each chapters as item}
					<div class="card-b">
						<div class="card-image">
							<img src={item.image} alt={item.id} />
						</div>
						<div class="card-body">
							<h6>
								<a href="/anveshi/chapter/{item.chapter}">
								{item.name}
								</a>
							</h6>
							<p>
								{item.content.slice(0,300)}...<span style="color: var(--yellow); font-weight: bold"><a href="/anveshi/chapter/{item.chapter}">Know More</a></span>
							</p>
							<div class="boxr card-meta">
								<small style="color: var(--yellow)">
									{item.duration}
								</small>
								<small style="color: var(--yellow)">
									{item.dates}
								</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Travel Diaries</h4>
		</div>
		<div class="a-box box extra">
			<h5>
				Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
			</h5>
			<div class="gridof4">
				{#if cards && cards.length > 0}
					{#each cards as item}
						<div class="card-c">
							<h6>{item.name}</h6>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="title-box x4 pads" id="faqs">
		<div class="a-title">
			<h4>FAQS</h4>
		</div>
		<div class="a-box gridof2">
			{#if faqs && faqs.length > 0}
				{#each faqs as item, i}
					<div class="card-b faqcard" on:click={() => toggleFaq(i)} on:keydown={() => toggleFaq(i)}>
						<h6>{item.name}</h6>
						{#if isFaqOpen[i]}
							<p in:receive out:send>{item.content}</p>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh

.x1, .x2, .x3
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.x1, .x2, .x3, .x4
	padding-bottom: 64px

.x1
	padding-top: 64px


.faqcard
	cursor: pointer

</style>