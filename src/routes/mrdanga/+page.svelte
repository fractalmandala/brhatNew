<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
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

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
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

	onMount(() => {
		const { Textify } = Animations;
		new Textify({
			selector: ".typett",
			duration: 1200,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false
		});

		(async () => {
			vids = await allmrdVids(limiter)
			kalas = await Shabdavali()
			rasas = await mrdangaVids()
			kavitas = await kavitaVids()
		})()
	})


</script>

<svelte:head>
	<HeadComponent>
		Bṛhadmṛdaṅga at
	</HeadComponent>
</svelte:head>
<svelte:window bind:innerWidth={iw}/>

<Header sidebar={sidebar}>
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>

<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>

	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')"></ParallaxImage>
	</div>
	<div class="rta-grid grid2 left thirty is-padded rowgap-32 colgap-64 minH cc-all">
		<div class="rta-in-col rowgap-24 ta-l thin">
			<h5>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation.</h5>
			<h4 style="color: #fe4a49">
				It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
			</h4>	
		</div>
		<div class="rta-in-col rowgap-24 ta-l thick">
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
	<div class="rta-column is-padded minH min rowgap-32">
		<div class="rta-in-col">
			<h3 class="typett">EXPLORE BṚHAD MṚDAṄGA</h3>
		</div>
		<div class="rta-row colgap-16">
				<button class="sideways-button red" on:click={() => toggleCategory(1)} class:selected={selectedCategory[1]}>
					<span>
						LATEST
					</span>
				</button>
				<button class="sideways-button red" on:click={() => toggleCategory(2)} class:selected={selectedCategory[2]}>
					<span>
						RASA
					</span>
				</button>
				<button class="sideways-button red" on:click={() => toggleCategory(3)} class:selected={selectedCategory[3]}>
					<span>
						KAVITĀ
					</span>
				</button>
				<button class="sideways-button red" on:click={() => toggleCategory(4)} class:selected={selectedCategory[4]}>
					<span>
						ŚABDĀVALĪ
					</span>
				</button>
		</div>
		<div class="rta-in-col rowgap-32">
			{#if selectedCategory[1]}
				<div class="rta-grid grid4 rowgap-32 colgap-32">
					{#if vids && vids.length > 0}
						{#each vids as item, i}
							<div class="rta-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
								<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
								<p>{item.name}</p>	
							</div>
						{/each}
					{/if}
				</div>
				<button class="sideways-button full" on:click={moreClick}>
					<span>
						Load More
					</span>
				</button>
			{/if}
			{#if selectedCategory[2]}
			<div class="rta-grid grid4 rowgap-32 colgap-32"> 
				{#if rasas && rasas.length > 0}
					{#each rasas as item, i}
						<div class="rta-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>	
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if selectedCategory[3]}
			<div class="rta-grid grid4 rowgap-32 colgap-32">
				{#if kavitas && kavitas.length > 0}
					{#each kavitas as item, i}
						<div class="rta-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<p>{item.name}</p>	
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if selectedCategory[4]}
				<div class="rta-grid grid5 rowgap-32 colgap-32">
					{#if kalas && kalas.length > 0}
						{#each kalas as item, i}
							<div class="rta-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
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

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh

</style>