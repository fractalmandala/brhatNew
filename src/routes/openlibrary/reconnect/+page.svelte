<script lang="ts">

	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	let y:number
	let morecontent = false
	let fake = false
	
	function fauxfake(){
		fake = !fake
	}

	function toggleContent(){
		morecontent = !morecontent
	}

</script>

<svelte:head>
<title>Bṛhat Open LibraryT</title>
<meta name="description" content="the Culture Engine"/>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<div class="mainpage">
	<div class="mainmain">
		<img src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/478.webp" alt="the center" style="transform: translateY({y/4}px)"/>
	</div>
	<div class="plain-one type pads x1">
		<h5>
			<span style="color: var(--strong);">Enter a journey of discovery and reconnection.</span><br>
			Search any word from the fields at top of page, or dive into one of the texts below.
		</h5>
		<div class="onpagelinks">
			<h4>
				<a href="/openlibrary/reconnect/sections/ramayana">
					Vālmīki Rāmāyaṇa
				</a>
			</h4>
			<h4>
				<a href="/openlibrary/reconnect/sections/rigveda">
					Ṛgveda Saṃhitā
				</a>
			</h4>
			<h4 on:click={toggleContent} on:keydown={fauxfake}>
				About the Learning Center
			</h4>
		</div>
	</div>
	{#if morecontent}
	<div class="plain-one type pads x2" transition:scale>
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
	</div>
	{/if}
	<div class="plain-one type pads x3">
		<h5>Sources of Data:</h5>
		<p>Amarakośaḥ parsed from the raw .txt data at <a href="http://gretil.sub.uni-goettingen.de/gretil.html#Lex" target="_blank" rel="noreferrer">GRETIL.</a></p>
		<p>Dhātupāṭha and Aṣṭadhyāyi data from <a href="https://ashtadhyayi.com/" target="_blank" rel="noreferrer">Ashtadhyayi.com's</a> public repository at Github.</p>
		<p>Dictionary data from <a href="https://www.sanskrit-lexicon.uni-koeln.de/" target="_blank" rel="noreferrer">Cologne Digital Sanskrit Dictionaries</a></p>
		<p>Streaming responses for word meta-data from adjusted model of <a href="https://openai.com/" target="_blank" rel="noreferrer">OpenAI's</a> text-completion model GPT 3.5 turbo.</p>
		<p>The following texts have been cleaned, formatted and prepared in-house from the raw XML files at GRETIL:</p>
			<ul>
				<li>Rāmāyaṇa</li>
				<li>Ṛgveda</li>
			</ul>
	</div>
</div>

<style lang="sass">

.onpagelinks
	&:hover
		a, h4
			&:hover
				color: var(--strong)

.onpagelinks h4
	cursor: pointer

.mainpage
	min-height: 100vh

.mainpage
	display: flex
	flex-direction: column

.mainmain
	overflow: hidden
	img
		object-fit: cover
		width: 100%

.x1
	padding-top: 64px
	padding-bottom: 64px

.x2
	padding-bottom: 64px
	padding-right: 50%

.x3
	row-gap: 12px
	border-top: 1px solid #d7d7d7
	padding-top: 16px
	padding-bottom: 32px
	a
		color: #fe4a49

</style>


