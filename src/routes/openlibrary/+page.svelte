<script lang="ts">

	import { onMount } from 'svelte'
	import { bols } from '$lib/filed/bolindex'
	import { themeMode } from '$lib/stores/globalstores'
	import Animations from 'textify.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { ChevronDown } from 'lucide-svelte'
	import autoAnimate from '@formkit/auto-animate'
	import LogoBol from '$lib/logos/LogoBol.svelte'
	import RIDButton from '$lib/ridunits/RIDButton.svelte'
	import { BOLEssentials, BOLBodhas, BOLIKS, BOLROS, BOLOthers, AryanIssue, AryanTag } from '$lib/utils/supapulls'
	import { fly, scale } from 'svelte/transition'
	import { circIn } from 'svelte/easing'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let dropdownOne = true
	let dropdownTwo = true
	let searchHelpOn = false
	let breakPoint:boolean
	let bolInput:any
	let bolInputValue:any
	let bolHiLiteIndex:any = null
	let filteredBOLS:any = []
	let essentials:string|any[]
	let bodhas:string|any[]
	let ikss:string|any[]
	let ross:string|any[]
	let others:string|any[]
	let aryans:string|any[]
	let limit:number = 160
	let iw:number
	let responsive:boolean
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let tag:string = 'Core Material'
	let fake = false
	let iW:number
	let expandMenu = false

	function toggleMenu(){
		expandMenu = !expandMenu
	}

	function toggleSecondMenu(){
		if ( iw <= 1023 ) {
			dropdownTwo = !dropdownTwo
		}
	}

	$: if ( !bolInputValue ) {
		filteredBOLS = []
		bolHiLiteIndex = null
		searchHelpOn = true
	}

	const setInputVal = (bolname:any) => {
		bolInputValue = removeBold(bolname)
		filteredBOLS = []
		bolHiLiteIndex = null
	}

	const removeBold = (str:any) => {
		return str.replace(/<(.)*?>/g, "")
	}

	const navigateList = (e:any) => {
		if (e.key === "ArrowDown" && bolHiLiteIndex <= filteredBOLS.length-1) {
			bolHiLiteIndex === null ? bolHiLiteIndex = 0 : bolHiLiteIndex += 1
		} else if (e.key === "ArrowUp" && bolHiLiteIndex !== null) {
			bolHiLiteIndex === 0 ? bolHiLiteIndex = filteredBOLS.length-1 : bolHiLiteIndex -= 1
		} else if (e.key === "Enter") {
			setInputVal(filteredBOLS[bolHiLiteIndex]);
		} else {
			return;
		}
	} 

	function handleClickOutside(event:MouseEvent){
		const target = event.target as Element
		if( target && !target.closest('.bolsearch')){
			bolInput.value = ''
			searchHelpOn = false
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

	function setTag(newTag:string){
		tag = newTag
	}	

	$: if (tag) {
		(async() => {
			aryans = await AryanTag(tag)
		})()
	}

	function fauxfake(){
		fake = !fake
	}

	$: if (iw <= 1023) {
			responsive = true
		} else {
			responsive = false
		}

	$: if ( iw <= 1023) {
		breakPoint = true
		dropdownOne = false
		dropdownTwo = false
	} else {
		breakPoint = false
		dropdownOne = true
		dropdownTwo = true
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		const { Textify } = Animations;
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

		(async () => {
			essentials = await BOLEssentials(limit)
			bodhas = await BOLBodhas(limit)
			ikss = await BOLIKS(limit)
			ross = await BOLROS(limit)
			others = await BOLOthers()
			aryans = await AryanTag(tag)
		})();
	})

</script>

<svelte:window bind:innerWidth={iw} on:keydown={navigateList}/>

<svelte:head>
	<HeadComponent>
		The Open Library at
	</HeadComponent>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<div class:light={$themeMode} class:dark={!$themeMode}>

	<div class="x0" data-lenis-scroll-snap-align="start">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mobile-bol.webp')">
		</ParallaxImage>
	</div>

<!--initial section with bol description-->
	<div class="rta-column minH outer-box ycenter p-top-64 limit2" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap600 wide-60-100">
			<h4 class="typett">
				Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
				It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge.
			</h4>
			<p class="typett">
				All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection.
			</p>
		</div>
	</div>
<!--end-->

<!--primary section featuring books-->
	<div class="rta-column rowgap600 outer-box" data-lenis-scroll-snap-align="start">
		<h3 class="typett ta-c-d bord-top p-top-32 p-bot-32 bord-bot">EXPLORE</h3>
			{#if breakPoint}
				<div class="rta-row colgap400 drawer-select" on:click={toggleMenu} on:keydown={fauxfake}>
					Expand Groups
					<div class="button-box" class:rotated={expandMenu}>
						<ChevronDown size="27"/>
					</div>
				</div>
			{/if}
			{#if expandMenu || !breakPoint}
				<div class="rta-row xcenter-d row-col ycenter rta-drawer-items colgap400 rowgap100" use:autoAnimate on:click={toggleMenu} on:keydown={fauxfake}>
					<button class="drawer-item" on:click={() => toggleCategory(1)} on:keydown={fauxfake} class:selected={selectedCategory[1]}>Essentials</button>
					<button class="drawer-item" on:click={() => toggleCategory(2)} on:keydown={fauxfake} class:selected={selectedCategory[2]}>Bodhas</button>
					<button class="drawer-item" on:click={() => toggleCategory(3)} on:keydown={fauxfake} class:selected={selectedCategory[3]}>IKS</button>
					<button class="drawer-item" on:click={() => toggleCategory(4)} on:keydown={fauxfake} class:selected={selectedCategory[4]}>Scriptural</button>
					<button class="drawer-item" on:click={() => toggleCategory(6)} on:keydown={fauxfake} class:selected={selectedCategory[6]}>Āryan Issue</button>
					<button class="drawer-item" on:click={() => toggleCategory(5)} on:keydown={fauxfake} class:selected={selectedCategory[5]}>Specials</button>
				</div>
			{/if}
		<div class="rta-grid grid3 rowgap400 colgap400" class:fullgrid={selectedCategory[5] || selectedCategory[6]} use:autoAnimate>
			{#if selectedCategory[1]}
				{#if essentials && essentials.length > 0}
					{#each essentials as item, i}
						<div class="rta-column rowgap100" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
							<h6 class="heading"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							{#if item.Description && item.Description.length > 0}
							<p>{item.Description}</p>
							{/if}
							<small class="is-green">{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[2]}
				{#if bodhas && bodhas.length > 0}
					{#each bodhas as item, i}
						<div class="rta-column rowgap100" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
								<h6 class="heading"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								{#if item.Description && item.Description.length > 0}
								<p>{item.Description}</p>
								{/if}
								<small class="is-green">{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[3]}
				{#if ikss && ikss.length > 0}
					{#each ikss as item, i}
						<div class="rta-column rowgap100" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
								<h6 class="heading"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								{#if item.Description && item.Description.length > 0}
								<p>{item.Description}</p>
								{/if}
								<small class="is-green">{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[4]}
				{#if ross && ross.length > 0}
					{#each ross as item, i}
						<div class="rta-column rowgap100" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
								<h6 class="heading"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								{#if item.Description && item.Description.length > 0}
								<p>{item.Description}</p>
								{/if}
								<small class="is-green">{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[5]}
				<div class="rta-column limit2 rowgap300">
						<h5 class="heading" style="font-weight: bold">
						We have a dream.
						</h5>
						<p>
							The entire available corpus of dhārmika literature, interconnected from root to shoot, branches myriad, that one could swim through. We spot a dravya of Vaiṣeśika, and immediately query Pāṇini to get to the dhātu of it. Informed by the ṛṣi's evocation, manifold word stems spread out from this single dhātu. As they jump into consciousness, we gain insight on what's meant by that original dravya we spotted.
						</p>
						<p>
							Midway in this journey we take a detour and check- did the word occur in any of Bhartṛhari's writings? Another detour shows us the dravya's occurences in the Ṛgveda and Bṛhadāraṇyaka Upaniṣad.
						</p>
						<h5 class="heading" style="font-weight: bold">
							Do you see what we see?
						</h5>
						<p>
							This vast, digital pool of "data" is in fact an ocean of dhārmika ontology, or meaning and being. On a different day, a similar swim educates us on the notions of anumāna and pramāṇa, and thus we learn how our ancestors knew what they knew - their epistemology.
						</p>
						<p>
							On a low day, the kind when one seeks not the esoterica of phenomenology, but the warm assurance of familiarity, we pore through the many stories of Rāma spread across the Purāṇas. In reading of him and those around him, we inherit wisdom on what exactly is the point of it all, bringing us closer yet to dharma's pauruṣārthika teleology.
						</p>
						<h5 class="heading" style="font-weight: bold">
							Now do you see it?
						</h5>
						<p>
							Bubbling mushroom clouds of native comprehension, one word leading to countless more, what's bīja at one end in entirety instead a stambha. Nested levels of comprehension, leading us along dhātu to pada to śabda to dhātu to sūtra to ṛca to pada again. Click after click, read after read, we plunge deeper into this ocean. And yet we only move further and further away from darkness.
						</p>
						<h5 class="heading" style="font-weight: bold">
							Asato mā sadgamaya. Tamaso mā jyotirgamaya.
						</h5>
						<p>
							With each new journey, each fresh plunge, each discovery, the grand learnings of a sanātana pravāha dawn upon us. Swim after swim a recalibration is seeded. We think less and less in the boxes the colonizers left our minds infected with. We think more and more like a Bhāratīya. As the civilizational consciousness is thus revealed to us it becomes evident...does it not? This is no pool we dream of. It is a maṇḍala, veritably digital and instantly accessible. Bīja to stambha as the dhātus and dravyas and darśanas take us we see it clear.
						</p>
						<h5 class="heading" style="font-weight: bold">
							Yathā piṇḍe tathā brahmāṇḍe. Yathā brahmāṇḍe tathā piṇḍe.
						</h5>
						<p>
							Our predecessors of yore, in the beginning, raised grand maṇḍalas from earth to sky- the plasma-wisps of yājñika agni from their havanas. Those recursive wisps were receated in brick, reed, metal and mortar by their progeny- the skill-defying nested architecture of our temples, rising from earth to sky in imitation of the ancestral fires. As above, so below. As is ṛta so is dharma. A quest for harmony this was, a culture that in its long stand-in for nature developed coherence at multiple levels.
						</p>
						<h5 class="heading" style="font-weight: bold">
							A maṇḍala that was fractal.
						</h5>
						<p>
							That is what we dream of. Digital plasma-wisps of agni, nested architecture of scriptures, raising our consciousness towards comprehension - towards the light. And as the sanātana code is unlocked bit by bit, byte by byte, dhātu by dhātu, a fractal maṇḍala is created amid the new cosmos that cocoons us - the technological. A different fire we raise to the ancestors, but a fire all the same.
						</p>
						<h5 class="heading" style="font-weight: bold">
							Here, at the Bṛhat Open Library, we build this dhārmika pool of our dreams. You are welcome to jump in.
						</h5>
						<h4 class="heading is-green">Coming Soon</h4>
				</div>
			{/if}
			{#if selectedCategory[6]}
				<div class="rta-column rowgap300 limit2">
					<h5 class="heading" style="font-weight: bold">
						At Bṛhat, we see history as being salient to civilization,
						just as memory is salient to consciousness.
					</h5>
					<p>
						And by history we mean not just the trivia of events and sequences, but the very processes of history making and civilizational emergence. It is core to a sense of self and identity. The distortion of history is a consequential and egregious ploy in the agenda to distort a civilization’s sense of self. When we speak of colonization, we are keen in pointing out that an important aspect of our colonized national psyche is an internalized false narrative about our past. This narrative is not static — its specific conclusions often change and its goalposts shift, but the overall intent to make us doubt our own past, reconsider our own nativity, and blur our conceptions of our forefathers.
					</p>
					<p>
						One core dimension of this agenda is the matter of Aryan invasion/migration, and multiple revisions in the theories that re-formulate them more as “ trickling-in” or even as “tourism”. The theory itself a corollary from the question of ‘proto-Indo-European’ (PIE) origins and dispersal. This is a vast field, whose birth was in the 18th century with the rise of Comparative Linguistics (CL) as a legitimate academic discipline.
					</p>
					<p>
						Among the many distortions and misrepresentations this minefield is laden with, two of special concern are claims that:<br><br>– The Out of India (OIT) model of PIE origins and dispersals is built atop pseudoscience with no real evidence in its favor.<br><br>– The current consensus is based on a rigorous, well-proven theory which we dismiss out of misplaced national sentiment at best.
					</p>
					<h5 class="heading" style="font-weight: bold">
						Partly to refute these false allegations, but largely to continue our intent to construct and maintain a repository for all texts relevant to the Indian civilization and its knowledge systems, we have dedicated here a special section in our Bṛhat Library to the Aryan issue.
					</h5>	
					<p>
					This will be a dynamic, continuously growing collection of articles, essays, papers and findings relevant to the AI/M/T issue from all discipline, with a focus on giving due shelf-space and representation to the OIT model(s). In line with the need to have both svayaṃbodha and śatrubodha, we will also feature works by key proponents.<br><br>To traverse such a complex landscape is neither a quick journey, nor does it lend itself to easy navigation without guidance. To this end, we have also added a basic walkthrough.<br><br>We will continue to add to this collection, and if you wish to suggest pertinent and relevant literature and scholarship on the matter, whether papers, works, or writers that should be featured in this repository to build its volume along with its credibility and comprehensiveness, please write to us at contact@brhat.in
					</p>
					<p style="font-weight: bold;">Special Gratitude to:</p>
					<p>
						Shri Shrikant Talageri ji, who has single-handedly won the debate, and has generously agreed to have his works posted here. His complete works are available <a href="http://talageri.blogspot.com/" target="_blank" rel="noreferrer" style="color: var(--tree)"> here.</a><br><br>
						Shri Ashish Kulkarni, who is fighting the good fight on the frontlines of primary research in genetic matters, and who also consented to have his primary essays fronted here. His work is found <a href="https://a-genetics.blogspot.com/" target="_blank" rel="noreferrer" style="color: var(--tree)"> here.</a><br><br>		The ShoebillStork, with the handle @TrueShoebill on Twitter, who has been running an unsung yeoman service for a long time.
					</p>
					<h5 class="heading" style="font-weight: bold">Explore the collection below.</h5>
				</div>
			{/if}
		</div>
	</div>
<!--end-->

<!--aryan issue section-->
	<div class="rta-column minH rowgap600 outer-box p-top-64" data-lenis-scroll-snap-align="start">
		<h3 class="typett p-top-32 p-bot-32 bord-top bord-bot ta-c-d">THE ĀRYAN ISSUE</h3>
			{#if breakPoint}
				<div class="rta-row colgap400 drawer-select" on:click={toggleSecondMenu} on:keydown={fauxfake}>
					Expand Genres
					<div class="button-box" class:rotated={dropdownTwo}>
						<ChevronDown size="27"/>
					</div>
				</div>
			{/if}
			{#if !breakPoint || dropdownTwo}
				<div class="rta-row row-col colgap200 xcenter-d" on:click={toggleSecondMenu} on:keydown={fauxfake}>
					<button on:click={() => setTag('Core Material')} on:keydown={fauxfake} class="drawer-item {tag === 'Core Material' ? 'filtered' : ''}">Core</button>
					<button on:click={() => setTag('Indology')} on:keydown={fauxfake} class="drawer-item {tag === 'Indology' ? 'filtered' : ''}">Indology</button>
					<button on:click={() => setTag('Linguistics')} on:keydown={fauxfake} class="drawer-item {tag === 'Linguistics' ? 'filtered' : ''}">Linguistics</button>
					<button on:click={() => setTag('History')} on:keydown={fauxfake} class="drawer-item {tag === 'History' ? 'filtered' : ''}">History</button>
					<button on:click={() => setTag('Genetics')} on:keydown={fauxfake} class="drawer-item {tag === 'Genetics' ? 'filtered' : ''}">Genetics</button>
					<button on:click={() => setTag('Archaeology')} on:keydown={fauxfake} class="drawer-item {tag === 'Archaeology' ? 'filtered' : ''}">Archaeology</button>
					<button on:click={() => setTag('Chronology')} on:keydown={fauxfake} class="drawer-item {tag === 'Chronology' ? 'filtered' : ''}">Chronology</button>
					<button on:click={() => setTag('Philology')} on:keydown={fauxfake} class="drawer-item {tag === 'Philology' ? 'filtered' : ''}">Philology</button>
					<button on:click={() => setTag('Geology')} on:keydown={fauxfake} class="drawer-item {tag === 'Geology' ? 'filtered' : ''}">Geology</button>
				</div>
			{/if}
				<div class="rta-grid grid4 rowgap400 colgap400">
				{#if aryans && aryans.length > 0}
					{#each aryans as item, i}
						<div class="rta-column rowgap100" in:scale={{ duration: 200, delay: i*50, easing: circIn}} out:fly={{ duration: 150, easing: circIn}}>
							<h6 class="heading"><a href={item.sourcelink} target="_blank" rel="noreferrer">{item.paper}</a></h6>
							<small class="is-green">{item.author}</small>
						</div>
					{/each}
				{/if}	
				</div>
	</div>
<!--end-->

</div>


<style lang="sass">

.is-green
	color: #538733

.wide-60-100
	@media screen and (min-width: 1024px)
		text-align: center
		align-items: center

.heading
	font-family: 'STIX Two Text', serif

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 100vh
		
.rta-grid.grid3.fullgrid
	grid-template-columns: 1fr
	grid-template-areas: "."

.drawer-item
	text-decoration: none
	font-size: 16px
	text-transform: uppercase
	border: none
	background: none
	padding: 4px 12px
	border-radius: 16px
	&::before
		margin-left: auto
	&::before, &::after
		content: ''
		display: block
		width: 0%
		height: 2px
		background: #538733
		transition: 0.5s
		border-radius: 2px
	&:hover
		&::after, &::before
			width: 100%
	@media screen and (max-width: 1023px)
		width: 100%

.light
	.drawer-item
		color: #474747
	.drawer-item.selected, .drawer-item.filtered
		background: #538733
		color: white

.dark
	.drawer-item
		color: #878787
	.drawer-item.selected, .drawer-item.filtered
		background: #538733
		color: white	

.drawer-select
	display: flex
	text-decoration: none
	font-size: 20px
	text-transform: uppercase
	justify-content: space-between
	background: #538733
	color: white
	align-items: center
	padding: 6px 12px 0px 12px
	border-radius: 20px
	.rotated
		transform: rotate(180deg)
		transform-origin: center center
		.button-box
			padding-bottom: 4px

.button-box
	height: 30px
	display: flex
	justify-content: center
	align-items: center
	padding: 0
	transition: 0.08s


</style>