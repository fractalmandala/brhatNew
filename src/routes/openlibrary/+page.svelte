<script lang="ts">

	import { onMount } from 'svelte'
	import { bols } from '$lib/filed/bolindex'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import DropDown from '$lib/components/DropDown.svelte'
	import DropDown2 from '$lib/components/DropDown.svelte'
	import { BOLEssentials, BOLBodhas, BOLIKS, BOLROS, BOLOthers, AryanIssue, AryanTag } from '$lib/utils/supapulls'
	import { crossfade, fly, scale } from 'svelte/transition'
	import { circIn } from 'svelte/easing'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import ButtonOne from '$lib/anims/ButtonOne.svelte'
	let dropdown = false
	let searchHelpOn = false
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
	let fake:boolean = false

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

	$: if (iw <= 899) {
			responsive = true
		} else {
			responsive = false
		}

	onMount(async() => {
		window.addEventListener('click', handleClickOutside)
		essentials = await BOLEssentials(limit)
		bodhas = await BOLBodhas(limit)
		ikss = await BOLIKS(limit)
		ross = await BOLROS(limit)
		others = await BOLOthers()
		aryans = await AryanTag(tag)
	})

</script>

<svelte:window bind:innerWidth={iw} on:keydown={navigateList}/>

<svelte:head>
	<HeadComponent>
		The Open Library at
	</HeadComponent>
</svelte:head>


<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mobile-bol.webp')">
			<div class="boxobox" style="display: flex; flex-direction: column; height: 100%; width: 100%; justify-content: center; align-items: center; text-align: center;">
				<div class="boxc pads" style="height: max-content; background: rgba(0,0,0,0.8); text-align: center; padding-top: 32px; padding-bottom: 32px">
				<h3 style="color: white; margin-bottom: 24px">Bṛhat Open Library</h3>
				<h5 class="pads" style="color: white; margin-bottom: 24px">
					is an Online Repository for Texts, Papers, Learning Material and More.
					It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge.
				</h5>
				<p style="color: white">
					All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection.
				</p>
				</div>
			</div>
		</ParallaxImage>
	</div>
	<div class="plain-one x2 pads">
		<div class="a-title">
			<h4 style="text-align: center">Explore</h4>
		</div>
		<div class="a-box box extra">
			<div class="boxr resbox">
				<DropDown --thisbackground="var(--tree)" --thisdropdowntextcolor="var(--tree)">
					<div slot="visible" class="expandmenu"><h6 style="color: white">EXPAND MENU</h6></div>
					<div slot="invisible">
						<h5 on:click={() => toggleCategory(1)} on:keydown={() => toggleCategory(1)} class:selected={selectedCategory[1]}>Essentials</h5>
						<h5 on:click={() => toggleCategory(2)} on:keydown={() => toggleCategory(2)} class:selected={selectedCategory[2]}>Two Bodhas</h5>
						<h5 on:click={() => toggleCategory(3)} on:keydown={() => toggleCategory(3)} class:selected={selectedCategory[3]}>IKS</h5>
						<h5 on:click={() => toggleCategory(4)} on:keydown={() => toggleCategory(4)} class:selected={selectedCategory[4]}>Scriptural</h5>
						<h5 on:click={() => toggleCategory(5)} on:keydown={() => toggleCategory(5)} class:selected={selectedCategory[5]}>Special</h5>
						<h5 on:click={() => toggleCategory(6)} on:keydown={() => toggleCategory(6)} class:selected={selectedCategory[6]}>Āryan Issue</h5>
					</div>
				</DropDown>
			</div>
			<div class="gridof2" class:fullgrid={selectedCategory[5] || selectedCategory[6]}>
			{#if selectedCategory[1]}
				{#if essentials && essentials.length > 0}
					{#each essentials as item, i}
						<div class="card-book" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								<p>{item.Description}</p>
								<small>{item.author}</small>
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[2]}
				{#if bodhas && bodhas.length > 0}
					{#each bodhas as item, i}
						<div class="card-book" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								<p>{item.Description}</p>
								<small>{item.author}</small>
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[3]}
				{#if ikss && ikss.length > 0}
					{#each ikss as item, i}
						<div class="card-book" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								<p>{item.Description}</p>
								<small>{item.author}</small>
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[4]}
				{#if ross && ross.length > 0}
					{#each ross as item, i}
						<div class="card-book" in:scale={{ duration: 150, delay: i*25}} out:scale={{ duration: 25, delay: 0 }}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
								<p>{item.Description}</p>
								<small>{item.author}</small>
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[5]}
				<div class="boxc pads" style="width: 100%;">
					<div class="bodyinside pads" style="display: flex; flex-direction: column; row-gap: 20px">
						<h6>
						We have a dream.
						</h6>
						<p>
							The entire available corpus of dhārmika literature, interconnected from root to shoot, branches myriad, that one could swim through. We spot a dravya of Vaiṣeśika, and immediately query Pāṇini to get to the dhātu of it. Informed by the ṛṣi's evocation, manifold word stems spread out from this single dhātu. As they jump into consciousness, we gain insight on what's meant by that original dravya we spotted.
						</p>
						<p>
							Midway in this journey we take a detour and check- did the word occur in any of Bhartṛhari's writings? Another detour shows us the dravya's occurences in the Ṛgveda and Bṛhadāraṇyaka Upaniṣad.
						</p>
						<h6>
							Do you see what we see?
						</h6>
						<p>
							This vast, digital pool of "data" is in fact an ocean of dhārmika ontology, or meaning and being. On a different day, a similar swim educates us on the notions of anumāna and pramāṇa, and thus we learn how our ancestors knew what they knew - their epistemology.
						</p>
						<p>
							On a low day, the kind when one seeks not the esoterica of phenomenology, but the warm assurance of familiarity, we pore through the many stories of Rāma spread across the Purāṇas. In reading of him and those around him, we inherit wisdom on what exactly is the point of it all, bringing us closer yet to dharma's pauruṣārthika teleology.
						</p>
						<h6>
							Now do you see it?
						</h6>
						<p>
							Bubbling mushroom clouds of native comprehension, one word leading to countless more, what's bīja at one end in entirety instead a stambha. Nested levels of comprehension, leading us along dhātu to pada to śabda to dhātu to sūtra to ṛca to pada again. Click after click, read after read, we plunge deeper into this ocean. And yet we only move further and further away from darkness.
						</p>
						<h6>
							Asato mā sadgamaya. Tamaso mā jyotirgamaya.
						</h6>
						<p>
							With each new journey, each fresh plunge, each discovery, the grand learnings of a sanātana pravāha dawn upon us. Swim after swim a recalibration is seeded. We think less and less in the boxes the colonizers left our minds infected with. We think more and more like a Bhāratīya. As the civilizational consciousness is thus revealed to us it becomes evident...does it not? This is no pool we dream of. It is a maṇḍala, veritably digital and instantly accessible. Bīja to stambha as the dhātus and dravyas and darśanas take us we see it clear.
						</p>
						<h6>
							Yathā piṇḍe tathā brahmāṇḍe. Yathā brahmāṇḍe tathā piṇḍe.
						</h6>
						<p>
							Our predecessors of yore, in the beginning, raised grand maṇḍalas from earth to sky- the plasma-wisps of yājñika agni from their havanas. Those recursive wisps were receated in brick, reed, metal and mortar by their progeny- the skill-defying nested architecture of our temples, rising from earth to sky in imitation of the ancestral fires. As above, so below. As is ṛta so is dharma. A quest for harmony this was, a culture that in its long stand-in for nature developed coherence at multiple levels.
						</p>
						<h5 style="font-weight: bold">
							A maṇḍala that was fractal.
						</h5>
						<p>
							That is what we dream of. Digital plasma-wisps of agni, nested architecture of scriptures, raising our consciousness towards comprehension - towards the light. And as the sanātana code is unlocked bit by bit, byte by byte, dhātu by dhātu, a fractal maṇḍala is created amid the new cosmos that cocoons us - the technological. A different fire we raise to the ancestors, but a fire all the same.
						</p>
						<h6>
							Here, at the Bṛhat Open Library, we build this dhārmika pool of our dreams. You are welcome to jump in.
						</h6>
						<ButtonOne><a href="/openlibrary/reconnect">Visit Now</a></ButtonOne>
					</div>
				</div>
			{/if}
			{#if selectedCategory[6]}
				<div class="boxc pads" style="width: 100%">
					<div class="bodyinside pads" style="display: flex; flex-direction: column; row-gap: 20px">
					<h5 style="font-weight: bold">
						At Bṛhat, we see history as being salient to civilization,
						just as memory is salient to consciousness.
					</h5>
					<p class="grey5">
						And by history we mean not just the trivia of events and sequences, but the very processes of history making and civilizational emergence. It is core to a sense of self and identity. The distortion of history is a consequential and egregious ploy in the agenda to distort a civilization’s sense of self. When we speak of colonization, we are keen in pointing out that an important aspect of our colonized national psyche is an internalized false narrative about our past. This narrative is not static — its specific conclusions often change and its goalposts shift, but the overall intent to make us doubt our own past, reconsider our own nativity, and blur our conceptions of our forefathers.
					</p>
					<p class="grey5">
						One core dimension of this agenda is the matter of Aryan invasion/migration, and multiple revisions in the theories that re-formulate them more as “ trickling-in” or even as “tourism”. The theory itself a corollary from the question of ‘proto-Indo-European’ (PIE) origins and dispersal. This is a vast field, whose birth was in the 18th century with the rise of Comparative Linguistics (CL) as a legitimate academic discipline.
					</p>
					<p class="grey5">
						Among the many distortions and misrepresentations this minefield is laden with, two of special concern are claims that:<br><br>– The Out of India (OIT) model of PIE origins and dispersals is built atop pseudoscience with no real evidence in its favor.<br><br>– The current consensus is based on a rigorous, well-proven theory which we dismiss out of misplaced national sentiment at best.
					</p>
					<h5 style="font-weight: bold">
						Partly to refute these false allegations, but largely to continue our intent to construct and maintain a repository for all texts relevant to the Indian civilization and its knowledge systems, we have dedicated here a special section in our Bṛhat Library to the Aryan issue.
					</h5>	<p class="grey5 wide75">
					This will be a dynamic, continuously growing collection of articles, essays, papers and findings relevant to the AI/M/T issue from all discipline, with a focus on giving due shelf-space and representation to the OIT model(s). In line with the need to have both svayaṃbodha and śatrubodha, we will also feature works by key proponents.<br><br>To traverse such a complex landscape is neither a quick journey, nor does it lend itself to easy navigation without guidance. To this end, we have also added a basic walkthrough.<br><br>We will continue to add to this collection, and if you wish to suggest pertinent and relevant literature and scholarship on the matter, whether papers, works, or writers that should be featured in this repository to build its volume along with its credibility and comprehensiveness, please write to us at contact@brhat.in
					</p>
					<p style="font-weight: bold; color: black">Special Gratitude to:</p>
					<p class="grey5 wide75">
						Shri Shrikant Talageri ji, who has single-handedly won the debate, and has generously agreed to have his works posted here. His complete works are available <a href="http://talageri.blogspot.com/" target="_blank" rel="noreferrer" style="color: var(--tree)"> here.</a><br><br>
						Shri Ashish Kulkarni, who is fighting the good fight on the frontlines of primary research in genetic matters, and who also consented to have his primary essays fronted here. His work is found <a href="https://a-genetics.blogspot.com/" target="_blank" rel="noreferrer" style="color: var(--tree)"> here.</a><br><br>		The ShoebillStork, with the handle @TrueShoebill on Twitter, who has been running an unsung yeoman service for a long time.
					</p>
					<h5 style="font-weight: bold; color: var(--tree)">Explore the collection below.</h5>
					</div>
				</div>
			{/if}
			</div>
		</div>
	</div>
	<div class="plain-one x4 pads">
		<div class="a-title">
			<h4 style="text-align: center">The Āryan Issue</h4>
		</div>
		<div class="a-box box extra">
			<DropDown2  --thisbackground="var(--tree)" --thisdropdowntextcolor="var(--tree)">
				<div slot="visible">
					<h6 style="color: white">EXPAND GENRES</h6>
				</div>
				<div slot="invisible">
					<h5 on:click={() => setTag('Core Material')} on:keydown={fauxfake} class="genres {tag === 'Core Material' ? 'filtered' : ''}">Core Material</h5>
					<h5 on:click={() => setTag('Indology')} on:keydown={fauxfake} class="genres {tag === 'Indology' ? 'filtered' : ''}">Indology</h5>
					<h5 on:click={() => setTag('Linguistics')} on:keydown={fauxfake} class="genres {tag === 'Linguistics' ? 'filtered' : ''}">Linguistics</h5>
					<h5 on:click={() => setTag('History')} on:keydown={fauxfake} class="genres {tag === 'History' ? 'filtered' : ''}">History</h5>
					<h5 on:click={() => setTag('Genetics')} on:keydown={fauxfake} class="genres {tag === 'Genetics' ? 'filtered' : ''}">Genetics</h5>
					<h5 on:click={() => setTag('Archaeology')} on:keydown={fauxfake} class="genres {tag === 'Archaeology' ? 'filtered' : ''}">Archaeology</h5>
					<h5 on:click={() => setTag('Chronology')} on:keydown={fauxfake} class="genres {tag === 'Chronology' ? 'filtered' : ''}">Chronology</h5>
					<h5 on:click={() => setTag('Philology')} on:keydown={fauxfake} class="genres {tag === 'Philology' ? 'filtered' : ''}">Philology</h5>
					<h5 on:click={() => setTag('Geology')} on:keydown={fauxfake} class="genres {tag === 'Geology' ? 'filtered' : ''}">Geology</h5>
				</div>
			</DropDown2>
			<div class="gridof4">
				{#if aryans && aryans.length > 0}
					{#each aryans as item, i}
						<div class="card-book aryansbook" in:scale={{ duration: 200, delay: i*50, easing: circIn}} out:fly={{ duration: 150, easing: circIn}}>
							<h6><a href={item.sourcelink} target="_blank" rel="noreferrer">{item.paper}</a></h6>
							<p>{item.author}</p>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 100vh
		

.x2
	.gridof2.fullgrid
		grid-template-columns: 1fr
		grid-template-areas: "."

.x2
	padding-bottom: 64px
	padding-top: 64px
	.card-book
		.card-body
			row-gap: 12px
			small
				border-top: 1px solid #ececec
				padding-top: 4px
				text-transform: uppercase
				font-weight: bold
			a
				transition: var(--snap)
				&:hover
					color: var(--tree)
	.a-box
		.boxr
			justify-content: center
			h6
				cursor: pointer
				text-transform: uppercase
				&:hover
					background: var(--tree)
					color: white
				@media screen and (max-width: 1023px)
					font-size: 16px
			@media screen and (min-width: 900px)
				border-bottom: 1px solid #ececec
				border-top: 1px solid #ececec
				gap: 32px
				h6
					padding: 4px 8px
			@media screen and (max-width: 899px)
				border: none


.x4
	padding-bottom: 64px
	padding-top: 64px


.aryansbook
	flex-direction: column

</style>