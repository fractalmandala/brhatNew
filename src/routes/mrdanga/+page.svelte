<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import Header from '$lib/components/SubHeader.svelte'
	import Animations from 'textify.js'
	import { scale } from 'svelte/transition'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { allmrdVids, Shabdavali, mrdangaVids, kavitaVids } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import ButtonOne from '$lib/anims/ButtonOne.svelte'
	import ButtonTwo from '$lib/anims/ButtonOne.svelte'
	let sidebar = false
	let vids:string|any[]
	let limiter:number = 8
	let kalas:string|any[]
	let kavitas:any
	let rasas:any
	let iw:number
	let responsive:boolean
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let fake = false

	function toggleResponsive(){
		responsive = !responsive
	}

	function fauxfake(){
		fake = !fake
	}

	function toggleCategory(index:number) {
		selectedCategory[index] = !selectedCategory[index]
		for ( let i = 0; i < selectedCategory.length; i++) {
			if ( i !== index && selectedCategory[i] === true ) {
				selectedCategory[i] = false
			}
		}		
	}
	
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

	$: if ( iw <= 1023) {
		responsive = true
	} else {
		responsive = false
	}

	onMount(async() => {
		vids = await allmrdVids(limiter)
		kalas = await Shabdavali()
		rasas = await mrdangaVids()
		kavitas = await kavitaVids()
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
		Bṛhadmṛdaṅga at
	</HeadComponent>
</svelte:head>
<svelte:window bind:innerWidth={iw}/>

<Header sidebar={sidebar}/>
<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')"></ParallaxImage>
	</div>
	<div class="modern-grid pads">
		<div class="thin-col">
			<h5>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation.</h5>
			<h4 style="color: #fe4a49">
				It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
			</h4>	
		</div>
		<div class="thick-col">
				<p>
					Sanātana Dharma is a view of immanence. It sees the divine everywhere. The transcendent is the Ultimate Truth, the Supreme Consciousness. The view of immanence says that although nothing that we perceive is the Ultimate Truth, it is at the same time a form of the Ultimate. In this view of immanence a gradient of divinity is created in which individual consciousness is always encouraged to elevate itself and ultimately realize its true form as the Supreme Consciousness.
				</p>
				<p>
					What are these instruments of realization? In language it is Saṃskṛta and the mantras that lead us to the Ultimate. In sādhanā, it is meditation upon the Iṣṭa and the Mantra.
				</p>
				<p>
					In music, it is the instruments of music. And of all the musical instruments some are considered the most divine. And three of them, Bāṃsurī, Vīṇā and Mṛdaṅga are the most divine of all.
				</p>
				<p>
					Mṛdaṅga is the instrument which makes it possible for us mortals to tap into the divine music, capable of leading one to higher states of consciousness. The Nāṭyaśastra mentions the instrument at many places proving its antiquity in Indian cultural consciousness. It was famous across India and it is mentioned in Cilappatikāram. Bharatanāṭyam also traces its origin to Mṛdaṅga.
				</p>
				<p>
					As important to the mārga culture in Bhāratavarṣa as it is to desīya culture, it is an integral part of the Yakṣagāna performances in Karnataka and other states of India. The famous Koodalmanikyam Temple in Irinjalkuda, Kerala, dedicated to Lord Bharata holds a Mṛdaṅga Mela where young artists come to play the divine instrument. Similar will be the videos on this project.
				</p>
				<p>
					Like Mṛdaṅga they will tap into the eternal streams of beauty and reality in our culture and will voice them in contemporary idiom to convey the eternal truths of the eternal civilization to our contemporary times.
				</p>
		</div>
	</div>
	<div class="plain-one x2 pads">
		<div class="a-title">
			<h3>Explore Bṛhad Mṛdaṅga</h3>
		</div>
		<div class="a-box box extra">
			<div class="boxr short">
				<h6 on:click={() => toggleCategory(1)} on:keydown={() => toggleCategory(1)} class:selected={selectedCategory[1]}>Latest</h6>
				<h6 on:click={() => toggleCategory(2)} on:keydown={() => toggleCategory(2)} class:selected={selectedCategory[2]}>Rasa</h6>
				<h6 on:click={() => toggleCategory(3)} on:keydown={() => toggleCategory(3)} class:selected={selectedCategory[3]}>Kavitā</h6>
				<h6 on:click={() => toggleCategory(4)} on:keydown={() => toggleCategory(4)} class:selected={selectedCategory[4]}>Śabdāvalī</h6>
			</div>
			{#if selectedCategory[1]}
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
				<div on:click={moreClick} on:keydown={moreClick}>
				<ButtonOne>Load More</ButtonOne>
				</div>
			{/if}
			{#if selectedCategory[2]}
			<div class="gridof4"> 
				{#if rasas && rasas.length > 0}
					{#each rasas as item, i}
						<div class="card-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>	
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if selectedCategory[3]}
			<div class="gridof4">
				{#if kavitas && kavitas.length > 0}
					{#each kavitas as item, i}
						<div class="card-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>	
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if selectedCategory[4]}
				<div class="gridof5">
					{#if kalas && kalas.length > 0}
						{#each kalas as item, i}
							<div class="box" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
								<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
							</div>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.modern-grid
	display: flex
	@media screen and (min-width: 1024px)
		height: 100vh
		flex-direction: row
		column-gap: 64px
		padding-top: 64px
		.thin-col
			width: 40%
			row-gap: 16px
		.thick-col
			width: calc(60% - 32px)
			p
				margin-bottom: 16px
	@media screen and (max-width: 1023px)
		flex-direction: column
		padding-top: 32px
		padding-bottom: 32px
		.thin-col
			row-gap: 16px
		.thick-col
			padding-top: 24px
			p
				margin-bottom: 16px

.thin-col
	display: flex
	flex-direction: column


.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh



.x2
	padding-bottom: 64px
	.a-box
		.boxr
			border-bottom: 1px solid #ececec
			border-top: 1px solid #ececec
			justify-content: center
			width: 100%
			@media screen and (min-width: 900px)
				gap: 32px
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
		.gridof5
			video
				object-fit: cover
				width: 100%
		align-items: center
	h3
		text-align: center

.gridof4
	padding-left: 0
	padding-right: 0

.card-video
	@media screen and (max-width: 1023px)
		height: 240px
		width: 100%
		iframe
			height: 180px


</style>