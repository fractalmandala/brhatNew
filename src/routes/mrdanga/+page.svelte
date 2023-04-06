<script lang="ts">

	import { onMount } from 'svelte'
	import { allmrdVids, Shabdavali } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let vids:string|any[]
	let limiter:number = 8
	let kalas:string|any[]
	
	async function loadMore(){
		try {
			vids = await allmrdVids(limiter)
		} catch (error) {
			console.error('failed', error)
		}
	}

	function moreClick(){
		limiter += 4
		loadMore()
	}

	onMount(async() => {
		vids = await allmrdVids(limiter)
		kalas = await Shabdavali()
	})

</script>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<div class="box">
			<p class="wide60">
			Sanātana Dharma is a view of immanence. It sees the divine everywhere. The transcendent is the Ultimate Truth, the Supreme Consciousness. The view of immanence says that although nothing that we perceive is the Ultimate Truth, it is at the same time a form of the Ultimate. In this view of immanence a gradient of divinity is created in which individual consciousness is always encouraged to elevate itself and ultimately realize its true form as the Supreme Consciousness.
			</p>
			<p class="wide60">
			What are these instruments of realization? In language it is Saṃskṛta and the mantras that lead us to the Ultimate. In sādhanā, it is meditation upon the Iṣṭa and the Mantra.
			</p>
			<p class="wide60">
			In music, it is the instruments of music. And of all the musical instruments some are considered the most divine. And three of them, Bāṃsurī, Vīṇā and Mṛdaṅga are the most divine of all.
			</p>
			<p class="wide60">
			Mṛdaṅga is the instrument which makes it possible for us mortals to tap into the divine music, capable of leading one to higher states of consciousness. The Nāṭyaśastra mentions the instrument at many places proving its antiquity in Indian cultural consciousness. It was famous across India and it is mentioned in Cilappatikāram. Bharatanāṭyam also traces its origin to Mṛdaṅga.
			</p>
			<p class="wide60">
			As important to the mārga culture in Bhāratavarṣa as it is to desīya culture, it is an integral part of the Yakṣagāna performances in Karnataka and other states of India. The famous Koodalmanikyam Temple in Irinjalkuda, Kerala, dedicated to Lord Bharata holds a Mṛdaṅga Mela where young artists come to play the divine instrument. Similar will be the videos on this project.
			</p>
			<p class="wide60">
			Like Mṛdaṅga they will tap into the eternal streams of beauty and reality in our culture and will voice them in contemporary idiom to convey the eternal truths of the eternal civilization to our contemporary times.
			</p>	
		</div>
			<h5>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation.</h5>
			<h4 class="mrd">
			It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
			</h4>	
	</div>
	<div class="title-box x2 pads">
		<div class="a-title">
			<h4>Explore Bṛhad Mṛdaṅga</h4>
			<button class="redbutton" on:click={moreClick} on:keydown={moreClick}>Load More</button>
		</div>
		<div class="a-box gridof4">
			{#if vids && vids.length > 0}
				{#each vids as item}
					<div class="card-video">
						<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
						<p>{item.name}</p>	
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Śabdāvalī</h4>
		</div>
		<div class="a-box gridof5">
			{#if kalas && kalas.length > 0}
				{#each kalas as item}
					<div class="box">
						<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		align-items: center
		grid-template-columns: 1fr 36%
		grid-template-areas: ". ."

.x2
	padding-bottom: 64px
	.a-title h4
		margin-bottom: 24px

.x3
	padding-bottom: 64px

.x3
	.box
		video
			object-fit: cover
			width: 100%

</style>