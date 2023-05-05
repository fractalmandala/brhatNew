<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import AnveshiTemple from '$lib/logos/AnveshiTemple.svelte'
	import { scale, fly } from 'svelte/transition'
	import { backOut, backIn, quintIn, quintOut } from 'svelte/easing'
	import { allChapters, allDiaryCards, allFaq, anveshiGeneral, anveshiTempleArt, anveshiVids } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	const options = {}
	let fullText = false
	let chapters:string|any[]
	let isPanel2:boolean
	let cards:string|any[]
	let faqs:string|any[]
	let gens:string|any[]
	let videoLimit = 4
	let vids:any
	let arts:any
	let isFaqOpen:boolean[] = Array(15).fill(false)
	let isGenOpen:boolean[] = Array(3).fill(false)
	let readjustedgrid:boolean = false
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let selectedArea:boolean[] = Array(3).fill(false)
	selectedArea[1] = true
	let alignGrid:boolean = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function expandText(){
		fullText = !fullText
	}

	function toggleCategory(index:number) {
		selectedCategory[index] = !selectedCategory[index]
		for ( let i = 0; i < selectedCategory.length; i++) {
			if ( i !== index && selectedCategory[i] === true ) {
				selectedCategory[i] = false
			}
		}		
	}

	function increaseLimit(){
		videoLimit += 4
	}

	function toggleArea(index:number) {
		selectedArea[index] = !selectedArea[index]
		for ( let i = 0; i < selectedArea.length; i++) {
			if ( i !== index && selectedArea[i] === true ) {
				selectedArea[i] = false
			}
		}		
	}

	function toggleFaq(index:number) {
		isFaqOpen[index] = !isFaqOpen[index]
		for ( let i = 0; i < isFaqOpen.length; i++ ) {
			if ( i !== index && isFaqOpen[i] === true ) {
				isFaqOpen[i] = false
			}
		}
		if ( alignGrid === false) {
			alignGrid = true
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

	$: if (videoLimit) {
		(async() => {
			vids = await anveshiVids(videoLimit)
		})()
	}

	onMount(async() => {
		chapters = await allChapters()
		arts = await anveshiTempleArt()
		vids = await anveshiVids(videoLimit)
		cards = await allDiaryCards()
		faqs = await allFaq()
		gens = await anveshiGeneral()
	})
	
</script>

<svelte:head>
	<HeadComponent>
		Bṛhat Anveṣī at 
	</HeadComponent>
</svelte:head>

<!--hero image-->
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')"></ParallaxImage>
	</div>
<!--end-->

<!--all chapters-->
	<div class="rta-grid grid2 colgap-64 rowgap-32 is-padded top-p-64">
		<div class="rta-in-col rowgap-32">
				<div class="templeanim">
				<AnveshiTemple></AnveshiTemple>			
				</div>
				<h5>
			 		A travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
				</h5>
				<p>
				Each chapter of Bṛhat Anveṣī focuses on a specific area of India with dense concentrations of great temples and heritage centers. Anveṣī chapters are thrilling rides of three to four days, full of exploration of local cuisine, culture and heritage. Designed to satisfy both your wanderlust and curiosity, leaving you with an elevated taste of the cultural magic of India.
				</p>
				<button class="button yellow" on:click={expandText}>Read More</button>
				{#if fullText}
					<p>
					A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals of existence itself. According to another school of thought, Nature nudged evolution to a point where a species would emerge capable of reflecting upon itself and the mysteries of the cosmos, life and existence.
					</p>
					<p>
						Without getting deep into darśana, the point is that, humans are born to search, born for anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who searches is called – anveṣī – the discoverer. This element of discovery has mainly two dimensions – inner and outer. And the two are connected. The favorite theme of literature is wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
					</p>
					<p>
						Yes, that urge to discover the world is innate in all humans. To search for what is novel, what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of courageous journeys taken individually and in groups, changing the course of entire humanity in the process. This urge is biological, as most other species also have this urge to chart new waters and to discover new territories. But in humans it is central. We are born – anveṣī.
					</p>
					<p>
						But there is a deep inner dimension to this urge for discovery. While discovering the world we also discover the self. While looking for the new, we also crave for what is eternal and everlasting. While looking for change, we also look for the unchanging and the permanent. In short, while we discover the outer world, we also go on an inner journey an inner – anvekṣaṇa.
					</p>
					<p>
						In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two seemingly dichotomous urges of humans in one fulfilling quest. We created an entire tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also spiritually and culturally elevating.
					</p>
					<h5>
						Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize this ancient Indian tradition by guiding travel groups through sacred kṣetras of India which are hitherto unexplored by most of us, but which are not just full of architectural, sculptural and cultural splendor, but are also living systems carrying beautiful ancestral traditions for thousands of years. 
					</h5>
					<h5>
						We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but will also elevate your understanding and knowledge. <span class="anv">When discovering together such, we are Bṛhat Anveṣī.</span>
					</h5>
					<button class="button yellow" on:click={expandText}>Close Text</button>
				{/if}
		</div>
		<div id="chapterscolumn" class="rta-in-col rowgap-32 bot-p-16">
			{#if chapters && chapters.length > 0}
				{#each chapters as item}
					<div class="rta-row colgap-24">
						<div class="rta-image height-30 w32">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-in-col rowgap-8 w64"> 
							<h5 style="font-weight: bold">
									<a href="/anveshi/chapter/{item.chapter}">
										{item.name}
									</a>
								</h5>
								{#if item.content && item.content.length > 0}
								<p>
									{item.content.slice(0,300)}...<span style="color: var(--yellow); font-weight: bold"><a href="/anveshi/chapter/{item.chapter}">Know More</a></span>
								</p>
								{/if}
								<div class="cardothers">
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
<!--end-->

<!--travel diaries-->
	<div id="travel-diaries" class="rta-column minH min cc-all is-padded">
		<div class="glass rta-grid grid2 right colgap-64 rowgap-32">
			<div class="rta-in-col rowgap-16">
			{#if selectedCategory[1]}
				<div class="rta-grid grid4 rowgap-24 colgap-24">
				{#if arts && arts.length > 0}
					{#each arts as item, i}
						<div class="rta-image height-30" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<img src={item.image} alt={item.id}/>
						</div>
					{/each}
				{/if}
				</div>
			{/if}	
			{#if selectedCategory[2]}
				<div class="rta-grid grid4 rowgap-24 colgap-24 bot-p-16 bot-m-24" id="videos-section">
					{#if vids && vids.length > 0}
						{#each vids as item, i}
						<div class="rta-video" in:scale={{ duration: 200, delay: i * 25}} out:scale={{ duration: 100, delay: 0}}>
							<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<small>{item.name}</small>	
						</div>
						{/each}
					{/if}
				</div>
				<button class="button yellow top-m-24" on:click={increaseLimit}>Load More</button>
			{/if}			
			{#if selectedCategory[3]}
				<div class="box">
					<h4>Travel Diary by Kriteesh Vajrapani - Karnataka</h4>
					<p>
						The Bṛhat Anveṣī trip for me started at the airport itself. Instead of going to Hassan by myself, I chose to wait for the Bṛhat team to arrive, so that I could tag along. Interestingly, no one else in the group did this. Whether I am lazy and irresponsible, or extremely aware and smart! Either way, I was just lucky. The wait was more rewarding than I expected. It got me exclusive time with the Bṛhat Team.
					</p>
					<button class="yellowbutton"><a href="/anveshi/posts/kriteesh">Read More</a></button>
				</div>
			{/if}	
			</div>
			<div class="rta-in-col rowgap-8 ta-r right" id="diaries">
				<h4>Travel Diaries</h4>
				<h5>
				Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
				</h5>
				<button class="button yellow" on:click={() => toggleCategory(3)} class:selected={selectedCategory[3]}>Travel Blog</button>
				<button class="button yellow" on:click={() => toggleCategory(1)} class:selected={selectedCategory[1]}>Temple Art</button>
				<button class="button yellow" on:click={() => toggleCategory(2)} class:selected={selectedCategory[2]}>Video Testimonials</button>
			</div>
		</div>
	</div>
<!--end-->

<!--about anveshi, faq-->
	<div class="rta-column minH min cc-all is-padded">
		<div class="glass rta-grid grid2 left colgap-64 rowgap-32">
			<div class="rta-in-col rowgap-16">
				<button class="button yellow" on:click={() => toggleArea(3)} class:selected={selectedArea[3]}>About the Lead</button>
				<button class="button yellow" on:click={() => toggleArea(1)} class:selected={selectedArea[1]}>FAQs</button>
				<button class="button yellow" on:click={() => toggleArea(2)} class:selected={selectedArea[2]}>Who is Bṛhat Anveṣī</button>		
			</div>
			<div class="rta-in-col rowgap-16">
			{#if selectedArea[1]}
				<div class="rta-grid grid2 rowgap-24 colgap-24" id="faqgrid" class:calibrated={isFaqOpen} out:fly={{ duration: 400, delay: 300, x: 500, easing: quintIn}} in:fly={{ duration: 250, delay: 0, x: 500, easing: quintOut}}>
					{#if faqs && faqs.length > 0}
						{#each faqs as item, i}
							<div class="card-c faqcard" class:opentab={isFaqOpen[i]} on:click={() => toggleFaq(i)} on:keydown={() => toggleFaq(i)} in:scale={{ duration: 400, delay: 200, easing: backOut }} out:scale={{ duration: 200, delay: 0, easing: backOut}}>
								<h6>{item.name}</h6>
								{#if isFaqOpen[i]}
									<p in:scale={{ duration: 400, delay: 200, easing: backOut }} out:scale={{ duration: 200, delay: 0, easing: backIn}}>{item.content}</p>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if selectedArea[2]}
				<div class="box" id="whoisanveshi" class:calibrated={isFaqOpen} out:fly={{ duration: 400, delay: 300, x: 500, easing: quintIn}} in:fly={{ duration: 250, delay: 0, x: 500, easing: quintOut}}>
					<p>
					A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals of existence itself. According to another school of thought, Nature nudged evolution to a point where a species would emerge capable of reflecting upon itself and the mysteries of the cosmos, life and existence.
					</p>
					<p>
						Without getting deep into darśana, the point is that, humans are born to search, born for anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who searches is called – anveṣī – the discoverer. This element of discovery has mainly two dimensions – inner and outer. And the two are connected. The favorite theme of literature is wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
					</p>
					<p>
						Yes, that urge to discover the world is innate in all humans. To search for what is novel, what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of courageous journeys taken individually and in groups, changing the course of entire humanity in the process. This urge is biological, as most other species also have this urge to chart new waters and to discover new territories. But in humans it is central. We are born – anveṣī.
					</p>
					<p>
						But there is a deep inner dimension to this urge for discovery. While discovering the world we also discover the self. While looking for the new, we also crave for what is eternal and everlasting. While looking for change, we also look for the unchanging and the permanent. In short, while we discover the outer world, we also go on an inner journey an inner – anvekṣaṇa.
					</p>
					<p>
						In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two seemingly dichotomous urges of humans in one fulfilling quest. We created an entire tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also spiritually and culturally elevating.
					</p>
					<h5>
						Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize this ancient Indian tradition by guiding travel groups through sacred kṣetras of India which are hitherto unexplored by most of us, but which are not just full of architectural, sculptural and cultural splendor, but are also living systems carrying beautiful ancestral traditions for thousands of years. 
					</h5>
					<h5>
						We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but will also elevate your understanding and knowledge. <span class="anv">When discovering together such, we are Bṛhat Anveṣī.</span>
					</h5>
				</div>
			{/if}
			{#if selectedArea[3]}
				<div class="card-row">
					<div class="card-image">
						<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/00team/pankajsaxena.webp" alt="pankajsaxena"/>
					</div>
					<div class="card-body">
						<h5>
							Pankaj Saxena is a scholar of Hindu temple architecture, Hindu arts and aesthetics.
						</h5>
						<p>
							He has visited more than 1200 ancient temples all over India and documented photographic, historical and oral evidence of the living tradition centred around the Hindu temple. He writes on the meaning and purpose of the Hindu temple in Hindu society and history and has authored various articles on that topic.
						</p>
					</div>
				</div>
			{/if}
			</div>
		</div>
	</div>
<!--end-->


<style lang="sass">

#travel-diaries
	height: 100%

.templeanim
	@media screen and (max-width: 1023px)
		width: 64%

#whoisanveshi
	@media screen and (min-width: 1024px)
		width: 88%	

.rta-grid.grid2.calibrated
	@media screen and (min-width: 1024px)
		grid-template-rows: auto auto
		grid-template-areas: "opentab opentab" ". ."
		.card-c.opentab
			grid-area: opentab
	

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh

.faqcard
	cursor: pointer
	row-gap: 8px

#faqgrid
	align-items: start
	align-content: start

</style>