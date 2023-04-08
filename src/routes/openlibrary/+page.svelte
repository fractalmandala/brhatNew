<script lang="ts">

	import { onMount } from 'svelte'
	import { BOLEssentials, BOLBodhas, BOLIKS, BOLROS, BOLOthers, AryanIssue, AryanTag } from '$lib/utils/supapulls'
	import { crossfade, fly } from 'svelte/transition'
	import { circIn } from 'svelte/easing'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let essentials:string|any[]
	let bodhas:string|any[]
	let ikss:string|any[]
	let ross:string|any[]
	let others:string|any[]
	let aryans:string|any[]
	let limit:number = 160
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let tag:string = 'Core Material'
	let fake:boolean = false

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

	const [send, receive] = crossfade({
		duration: 400,
		easing: circIn,
		delay: 100
	})

	onMount(async() => {
		essentials = await BOLEssentials(limit)
		bodhas = await BOLBodhas(limit)
		ikss = await BOLIKS(limit)
		ross = await BOLROS(limit)
		others = await BOLOthers()
		aryans = await AryanTag(tag)
	})

</script>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<h3>Bṛhat Open Library</h3>
		<h5 class="wide60">
			is an Online Repository for Texts, Papers, Learning Material and More.
			It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge.
		</h5>
		<p class="wide60">
			All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection.
		</p>
	</div>
	<div class="title-box x2 pads">
		<div class="a-title">
			<h4>Explore</h4>
		</div>
		<div class="a-box box extra">
			<div class="boxr">
				<h5 on:click={() => toggleCategory(1)} on:keydown={() => toggleCategory(1)} class:selected={selectedCategory[1]}>Essentials</h5>
				<h5 on:click={() => toggleCategory(2)} on:keydown={() => toggleCategory(2)} class:selected={selectedCategory[2]}>Two Bodhas</h5>
				<h5 on:click={() => toggleCategory(3)} on:keydown={() => toggleCategory(3)} class:selected={selectedCategory[3]}>IKS</h5>
				<h5 on:click={() => toggleCategory(4)} on:keydown={() => toggleCategory(4)} class:selected={selectedCategory[4]}>Scriptural</h5>
			</div>
			<div class="gridof2">
			{#if selectedCategory[1]}
				{#if essentials && essentials.length > 0}
					{#each essentials as item, i}
						<div class="card-book" in:receive={{ key: item.id, delay: i*50}} out:send={{ key: item.id}}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}" target="_self">{item.Text}</a></h6>
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
						<div class="card-book" in:receive={{ key: item.id, delay: i*50}} out:send={{ key: item.id}}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}" target="_self">{item.Text}</a></h6>
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
						<div class="card-book" in:receive={{ key: item.id, delay: i*50}} out:send={{ key: item.id}}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}" target="_self">{item.Text}</a></h6>
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
						<div class="card-book" in:receive={{ key: item.id, delay: i*50}} out:send={{ key: item.id}}>
							<div class="card-image">
								<img src={item.imagelinker} alt={item.id}/>
							</div>
							<div class="card-body">
								<h6><a href="/openlibrary/books/{item.slug}" target="_self">{item.Text}</a></h6>
								<p>{item.Description}</p>
								<small>{item.author}</small>
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			</div>
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Special Section</h4>
			<button class="treebutton"><a href="/openlibrary/scripture" target="_self">Visit Now</a></button>
		</div>
		<div class="a-box box">
			<h6 class="wide60">
				We have a dream.
			</h6>
			<p class="wide60">
				The entire available corpus of dhārmika literature, interconnected from root to shoot, branches myriad, that one could swim through. We spot a dravya of Vaiṣeśika, and immediately query Pāṇini to get to the dhātu of it. Informed by the ṛṣi's evocation, manifold word stems spread out from this single dhātu. As they jump into consciousness, we gain insight on what's meant by that original dravya we spotted.
			</p>
			<p class="wide60">
				Midway in this journey we take a detour and check- did the word occur in any of Bhartṛhari's writings? Another detour shows us the dravya's occurences in the Ṛgveda and Bṛhadāraṇyaka Upaniṣad.
			</p>
			<h6>
				Do you see what we see?
			</h6>
			<p class="wide60">
				This vast, digital pool of "data" is in fact an ocean of dhārmika ontology, or meaning and being. On a different day, a similar swim educates us on the notions of anumāna and pramāṇa, and thus we learn how our ancestors knew what they knew - their epistemology.
			</p>
			<p class="wide60">
				On a low day, the kind when one seeks not the esoterica of phenomenology, but the warm assurance of familiarity, we pore through the many stories of Rāma spread across the Purāṇas. In reading of him and those around him, we inherit wisdom on what exactly is the point of it all, bringing us closer yet to dharma's pauruṣārthika teleology.
			</p>
			<h6>
				Now do you see it?
			</h6>
			<p class="wide60">
				Bubbling mushroom clouds of native comprehension, one word leading to countless more, what's bīja at one end in entirety instead a stambha. Nested levels of comprehension, leading us along dhātu to pada to śabda to dhātu to sūtra to ṛca to pada again. Click after click, read after read, we plunge deeper into this ocean. And yet we only move further and further away from darkness.
			</p>
			<h6>
				Asato mā sadgamaya. Tamaso mā jyotirgamaya.
			</h6>
			<p class="wide60">
				With each new journey, each fresh plunge, each discovery, the grand learnings of a sanātana pravāha dawn upon us. Swim after swim a recalibration is seeded. We think less and less in the boxes the colonizers left our minds infected with. We think more and more like a Bhāratīya. As the civilizational consciousness is thus revealed to us it becomes evident...does it not? This is no pool we dream of. It is a maṇḍala, veritably digital and instantly accessible. Bīja to stambha as the dhātus and dravyas and darśanas take us we see it clear.
			</p>
			<h6>
				Yathā piṇḍe tathā brahmāṇḍe. Yathā brahmāṇḍe tathā piṇḍe.
			</h6>
			<p class="wide60">
				Our predecessors of yore, in the beginning, raised grand maṇḍalas from earth to sky- the plasma-wisps of yājñika agni from their havanas. Those recursive wisps were receated in brick, reed, metal and mortar by their progeny- the skill-defying nested architecture of our temples, rising from earth to sky in imitation of the ancestral fires. As above, so below. As is ṛta so is dharma. A quest for harmony this was, a culture that in its long stand-in for nature developed coherence at multiple levels.
			</p>
			<h5>
				A maṇḍala that was fractal.
			</h5>
			<p class="wide60">
				That is what we dream of. Digital plasma-wisps of agni, nested architecture of scriptures, raising our consciousness towards comprehension - towards the light. And as the sanātana code is unlocked bit by bit, byte by byte, dhātu by dhātu, a fractal maṇḍala is created amid the new cosmos that cocoons us - the technological. A different fire we raise to the ancestors, but a fire all the same.
			</p>
			<h6 class="wide60">
				Here, at the Bṛhat Open Library, we build this dhārmika pool of our dreams. You are welcome to jump in.
			</h6>
			<button class="treebutton"><a href="/openlibrary/scripture" target="_self">Visit Now</a></button>
		</div>
	</div>
	<div class="title-box x4 pads">
		<div class="a-title">
			<h4>The Āryan Issue</h4>
		</div>
		<div class="a-box">
			<div class="boxr">
				<h6>Core Material</h6>
				<h6 on:click={() => setTag('Indology')} on:keydown={fauxfake}>Indology</h6>
				<h6 on:click={() => setTag('Linguistics')} on:keydown={fauxfake}>Linguistics</h6>
				<h6 on:click={() => setTag('History')} on:keydown={fauxfake}>History</h6>
				<h6 on:click={() => setTag('Genetics')} on:keydown={fauxfake}>Genetics</h6>
				<h6 on:click={() => setTag('Archaeology')} on:keydown={fauxfake}>Archaeology</h6>
			</div>
			<div class="gridof3">
				{#if aryans && aryans.length > 0}
					{#each aryans as item, i}
						<div class="card-c" in:fly={{ duration: 300, delay: i*40, y: 120, x: 0, easing: circIn}} out:fly={{ duration: 150, y: 120, x: 0, easing: circIn}}>
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
		height: 60vh

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center

.x2
	padding-bottom: 64px
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
			gap: 32px
			border-bottom: 1px solid #ececec
			border-top: 1px solid #ececec
			h5
				cursor: pointer
				text-transform: uppercase
				padding: 4px 8px
				@media screen and (max-width: 1023px)
					font-size: 16px
			h5.selected
				background: var(--tree)
				color: white

.x3
	padding-bottom: 64px
	.a-title h4
		margin-bottom: 24px

.x4
	padding-bottom: 64px
	.boxr
		border-bottom: 1px solid #ececec
		gap: 16px
		h6
			text-transform: uppercase
			cursor: pointer
			&:hover
				color: var(--tree)
	.gridof3
		margin-top: 32px

</style>