<script lang="ts">
	import { onMount } from 'svelte';
	import { breakZero } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import Shell from '$lib/components/PageShell.svelte';
	import { reveal } from '$lib/reveal/exportReveal';
	import Chevron2 from '$lib/icons/chevrond.svelte';
	import Chevron from '$lib/icons/chevrond.svelte';
	import {
		BOLEssentials,
		BOLBodhas,
		BOLIKS,
		BOLROS,
		BOLOthers,
		AryanTag
	} from '$lib/utils/supapulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	let dropdownOne = true;
	let dropdownTwo = true;
	let searchHelpOn = false;
	let breakPoint: boolean;
	let bolInput: any;
	let bolInputValue: any;
	let bolHiLiteIndex: any = null;
	let filteredBOLS: any = [];
	let essentials: string | any[];
	let bodhas: string | any[];
	let ikss: string | any[];
	let ross: string | any[];
	let others: string | any[];
	let aryans: string | any[];
	let limit: number = 160;
	let iw: number;
	let responsive: boolean;
	let selectedCategory: boolean[] = Array(5).fill(false);
	selectedCategory[1] = true;
	let tag: string = 'Core Material';
	let fake = false;
	let iW: number;
	let expandMenu = false;

	$metaUrl = 'https://www.brhat.in/openlibrary';
	$metaTitle = 'Bṛhat Open Library';
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaType = 'webpage';

	function toggleMenu() {
		expandMenu = !expandMenu;
	}

	$: if (!bolInputValue) {
		filteredBOLS = [];
		bolHiLiteIndex = null;
		searchHelpOn = true;
	}

	const setInputVal = (bolname: any) => {
		bolInputValue = removeBold(bolname);
		filteredBOLS = [];
		bolHiLiteIndex = null;
	};

	const removeBold = (str: any) => {
		return str.replace(/<(.)*?>/g, '');
	};

	const navigateList = (e: any) => {
		if (e.key === 'ArrowDown' && bolHiLiteIndex <= filteredBOLS.length - 1) {
			bolHiLiteIndex === null ? (bolHiLiteIndex = 0) : (bolHiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && bolHiLiteIndex !== null) {
			bolHiLiteIndex === 0 ? (bolHiLiteIndex = filteredBOLS.length - 1) : (bolHiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			setInputVal(filteredBOLS[bolHiLiteIndex]);
		} else {
			return;
		}
	};

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Element;
		if (target && !target.closest('.bolsearch')) {
			bolInput.value = '';
			searchHelpOn = false;
		}
	}

	function toggleCategory(index: number) {
		selectedCategory[index] = !selectedCategory[index];
		for (let i = 0; i < selectedCategory.length; i++) {
			if (i !== index && selectedCategory[i] === true) {
				selectedCategory[i] = false;
			}
		}
	}

	function setTag(newTag: string) {
		tag = newTag;
	}

	$: if (tag) {
		(async () => {
			aryans = await AryanTag(tag);
		})();
	}

	function fauxfake() {
		fake = !fake;
	}

	$: if (iw <= 1023) {
		responsive = true;
	} else {
		responsive = false;
	}

	$: if (iw <= 1023) {
		breakPoint = true;
		dropdownOne = false;
		dropdownTwo = false;
	} else {
		breakPoint = false;
		dropdownOne = true;
		dropdownTwo = true;
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);

		(async () => {
			essentials = await BOLEssentials(limit);
			bodhas = await BOLBodhas(limit);
			ikss = await BOLIKS(limit);
			ross = await BOLROS(limit);
			others = await BOLOthers();
			aryans = await AryanTag(tag);
		})();
	});
</script>

<svelte:window bind:innerWidth={iw} on:keydown={navigateList} />
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mobile-bol.webp')"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<h4 use:reveal>
			Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More. It
			is a tribute to the hard labor of people known and unknown that have created for us an
			unbelievable repository of Indian knowledge.
		</h4>
		<h5>
			All material here is sourced from public domains, permitted for resharing, and uploaded under
			the CC0 1.0 Open License. If you find any material that violates this, please write to us at
			contact@brhat.in and we will remove it from the collection.
		</h5>
	</section>
	<section class="rta-column rowgap400 min100 ytop p-bot-64" id="main">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Explore</h2>
		</div>
		{#if !$breakZero}
			<div
				class="rta-row colgap200 ycenter drawer-select"
				class:isactive={expandMenu}
				on:click={toggleMenu}
				on:keydown={fauxfake}
				use:reveal={{ transition: 'fade', delay: 100, duration: 100 }}
			>
				{#if expandMenu}
					Close
				{:else}
					Expand Genres
				{/if}
				<div class="rta-row ycenter" class:rotated={expandMenu}>
					{#if expandMenu}
						<Chevron2 dimension={24} onToggle={true} />
					{:else}
						<Chevron2 dimension={24} />
					{/if}
				</div>
			</div>
		{/if}
		{#if expandMenu || $breakZero}
			<div
				class="rta-row row-col ycenter xleft rta-drawer-items colgap400 rowgap100"
				in:slide={{ axis: 'y', easing: quintOut }}
				out:slide={{ axis: 'y', easing: quintIn }}
				on:click={toggleMenu}
				on:keydown={fauxfake}
				use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
			>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(1)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[1]}>Essentials</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(2)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[2]}>Bodhas</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(3)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[3]}>IKS</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(4)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[4]}>Scriptural</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(6)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[6]}>Āryan Issue</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(5)}
					on:keydown={fauxfake}
					class:drawerselection={selectedCategory[5]}>Specials</button
				>
			</div>
		{/if}
		<div
			class="rta-grid grid3 rowgap400 colgap400"
			class:fullgrid={selectedCategory[5] || selectedCategory[6]}
		>
			{#if selectedCategory[1]}
				{#if essentials && essentials.length > 0}
					{#each essentials as item, i}
						<div
							class="rta-column rowgap50"
							use:reveal={{
								transition: 'slide',
								duration: 200,
								delay: i + 20,
								opacity: 0
							}}
						>
							<h6 class="title"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							{#if item.Description && item.Description.length > 0}
								<p class="small">{item.Description}</p>
							{/if}
							<small>{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[2]}
				{#if bodhas && bodhas.length > 0}
					{#each bodhas as item, i}
						<div
							class="rta-column rowgap50"
							use:reveal={{
								transition: 'slide',
								duration: 200,
								delay: i + 20,
								opacity: 0
							}}
						>
							<h6 class="title"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							{#if item.Description && item.Description.length > 0}
								<p class="small">{item.Description}</p>
							{/if}
							<small>{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[3]}
				{#if ikss && ikss.length > 0}
					{#each ikss as item, i}
						<div
							class="rta-column rowgap50"
							use:reveal={{
								transition: 'slide',
								duration: 200,
								delay: i + 20,
								opacity: 0
							}}
						>
							<h6 class="title"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							{#if item.Description && item.Description.length > 0}
								<p class="small">{item.Description}</p>
							{/if}
							<small>{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[4]}
				{#if ross && ross.length > 0}
					{#each ross as item, i}
						<div
							class="rta-column rowgap50"
							use:reveal={{
								transition: 'slide',
								duration: 200,
								delay: i + 20,
								opacity: 0
							}}
						>
							<h6 class="title"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							{#if item.Description && item.Description.length > 0}
								<p class="small">{item.Description}</p>
							{/if}
							<small>{item.author}</small>
						</div>
					{/each}
				{/if}
			{/if}
			{#if selectedCategory[5]}
				<div class="rta-column rowgap300">
					<h6>We have a dream.</h6>
					<p>
						The entire available corpus of dhārmika literature, interconnected from root to shoot,
						branches myriad, that one could swim through. We spot a dravya of Vaiṣeśika, and
						immediately query Pāṇini to get to the dhātu of it. Informed by the ṛṣi's evocation,
						manifold word stems spread out from this single dhātu. As they jump into consciousness,
						we gain insight on what's meant by that original dravya we spotted.
					</p>
					<p>
						Midway in this journey we take a detour and check- did the word occur in any of
						Bhartṛhari's writings? Another detour shows us the dravya's occurences in the Ṛgveda and
						Bṛhadāraṇyaka Upaniṣad.
					</p>
					<h6>Do you see what we see?</h6>
					<p>
						This vast, digital pool of "data" is in fact an ocean of dhārmika ontology, or meaning
						and being. On a different day, a similar swim educates us on the notions of anumāna and
						pramāṇa, and thus we learn how our ancestors knew what they knew - their epistemology.
					</p>
					<p>
						On a low day, the kind when one seeks not the esoterica of phenomenology, but the warm
						assurance of familiarity, we pore through the many stories of Rāma spread across the
						Purāṇas. In reading of him and those around him, we inherit wisdom on what exactly is
						the point of it all, bringing us closer yet to dharma's pauruṣārthika teleology.
					</p>
					<h6>Now do you see it?</h6>
					<p>
						Bubbling mushroom clouds of native comprehension, one word leading to countless more,
						what's bīja at one end in entirety instead a stambha. Nested levels of comprehension,
						leading us along dhātu to pada to śabda to dhātu to sūtra to ṛca to pada again. Click
						after click, read after read, we plunge deeper into this ocean. And yet we only move
						further and further away from darkness.
					</p>
					<h6>Asato mā sadgamaya. Tamaso mā jyotirgamaya.</h6>
					<p>
						With each new journey, each fresh plunge, each discovery, the grand learnings of a
						sanātana pravāha dawn upon us. Swim after swim a recalibration is seeded. We think less
						and less in the boxes the colonizers left our minds infected with. We think more and
						more like a Bhāratīya. As the civilizational consciousness is thus revealed to us it
						becomes evident...does it not? This is no pool we dream of. It is a maṇḍala, veritably
						digital and instantly accessible. Bīja to stambha as the dhātus and dravyas and darśanas
						take us we see it clear.
					</p>
					<h6>Yathā piṇḍe tathā brahmāṇḍe. Yathā brahmāṇḍe tathā piṇḍe.</h6>
					<p>
						Our predecessors of yore, in the beginning, raised grand maṇḍalas from earth to sky- the
						plasma-wisps of yājñika agni from their havanas. Those recursive wisps were receated in
						brick, reed, metal and mortar by their progeny- the skill-defying nested architecture of
						our temples, rising from earth to sky in imitation of the ancestral fires. As above, so
						below. As is ṛta so is dharma. A quest for harmony this was, a culture that in its long
						stand-in for nature developed coherence at multiple levels.
					</p>
					<h6>A maṇḍala that was fractal.</h6>
					<p>
						That is what we dream of. Digital plasma-wisps of agni, nested architecture of
						scriptures, raising our consciousness towards comprehension - towards the light. And as
						the sanātana code is unlocked bit by bit, byte by byte, dhātu by dhātu, a fractal
						maṇḍala is created amid the new cosmos that cocoons us - the technological. A different
						fire we raise to the ancestors, but a fire all the same.
					</p>
					<h6>
						Here, at the Bṛhat Open Library, we build this dhārmika pool of our dreams. You are
						welcome to jump in.
					</h6>
					<h5 class="title">Coming Soon</h5>
				</div>
			{/if}
			{#if selectedCategory[6]}
				<div class="rta-column rowgap300">
					<h6>
						At Bṛhat, we see history as being salient to civilization, just as memory is salient to
						consciousness.
					</h6>
					<p>
						And by history we mean not just the trivia of events and sequences, but the very
						processes of history making and civilizational emergence. It is core to a sense of self
						and identity. The distortion of history is a consequential and egregious ploy in the
						agenda to distort a civilization’s sense of self. When we speak of colonization, we are
						keen in pointing out that an important aspect of our colonized national psyche is an
						internalized false narrative about our past. This narrative is not static — its specific
						conclusions often change and its goalposts shift, but the overall intent to make us
						doubt our own past, reconsider our own nativity, and blur our conceptions of our
						forefathers.
					</p>
					<p>
						One core dimension of this agenda is the matter of Aryan invasion/migration, and
						multiple revisions in the theories that re-formulate them more as “ trickling-in” or
						even as “tourism”. The theory itself a corollary from the question of
						‘proto-Indo-European’ (PIE) origins and dispersal. This is a vast field, whose birth was
						in the 18th century with the rise of Comparative Linguistics (CL) as a legitimate
						academic discipline.
					</p>
					<p>
						Among the many distortions and misrepresentations this minefield is laden with, two of
						special concern are claims that:<br /><br />– The Out of India (OIT) model of PIE
						origins and dispersals is built atop pseudoscience with no real evidence in its favor.<br
						/><br />– The current consensus is based on a rigorous, well-proven theory which we
						dismiss out of misplaced national sentiment at best.
					</p>
					<h6>
						Partly to refute these false allegations, but largely to continue our intent to
						construct and maintain a repository for all texts relevant to the Indian civilization
						and its knowledge systems, we have dedicated here a special section in our Bṛhat Library
						to the Aryan issue.
					</h6>
					<p>
						This will be a dynamic, continuously growing collection of articles, essays, papers and
						findings relevant to the AI/M/T issue from all discipline, with a focus on giving due
						shelf-space and representation to the OIT model(s). In line with the need to have both
						svayaṃbodha and śatrubodha, we will also feature works by key proponents.<br /><br />To
						traverse such a complex landscape is neither a quick journey, nor does it lend itself to
						easy navigation without guidance. To this end, we have also added a basic walkthrough.<br
						/><br />We will continue to add to this collection, and if you wish to suggest pertinent
						and relevant literature and scholarship on the matter, whether papers, works, or writers
						that should be featured in this repository to build its volume along with its
						credibility and comprehensiveness, please write to us at contact@brhat.in
					</p>
					<p style="font-weight: bold;">Special Gratitude to:</p>
					<p>
						Shri Shrikant Talageri ji, who has single-handedly won the debate, and has generously
						agreed to have his works posted here. His complete works are available <a
							href="http://talageri.blogspot.com/"
							target="_blank"
							rel="noreferrer"
							style="color: var(--tree)"
						>
							here.</a
						><br /><br />
						Shri Ashish Kulkarni, who is fighting the good fight on the frontlines of primary research
						in genetic matters, and who also consented to have his primary essays fronted here. His work
						is found
						<a
							href="https://a-genetics.blogspot.com/"
							target="_blank"
							rel="noreferrer"
							style="color: var(--tree)"
						>
							here.</a
						><br /><br /> The ShoebillStork, with the handle @TrueShoebill on Twitter, who has been running
						an unsung yeoman service for a long time.
					</p>
					<h5 class="heading" style="font-weight: bold">Explore the collection below.</h5>
				</div>
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap400 min100 ytop" id="aryan">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>The Aryan Issue</h2>
		</div>
		{#if !$breakZero}
			<div
				class="rta-row colgap200 ycenter drawer-select"
				class:isactive={expandMenu}
				on:click={toggleMenu}
				on:keydown={fauxfake}
				use:reveal={{ transition: 'fade', delay: 100, duration: 100 }}
			>
				{#if expandMenu}
					Close
				{:else}
					Expand Genres
				{/if}
				<div class="rta-row ycenter" class:rotated={expandMenu}>
					{#if expandMenu}
						<Chevron dimension={24} onToggle={true} />
					{:else}
						<Chevron dimension={24} />
					{/if}
				</div>
			</div>
		{/if}
		{#if expandMenu || $breakZero}
			<div
				class="rta-row row-col ycenter xleft rta-drawer-items colgap400 rowgap100"
				in:slide={{ axis: 'y', easing: quintOut }}
				out:slide={{ axis: 'y', easing: quintIn }}
				on:click={toggleMenu}
				on:keydown={fauxfake}
				use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
			>
				<button
					on:click={() => setTag('Core Material')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Core Material' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Core Material'}>Core</button
				>
				<button
					on:click={() => setTag('Indology')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Indology' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Indology'}>Indology</button
				>
				<button
					on:click={() => setTag('Linguistics')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Linguistics' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Linguistics'}>Linguistics</button
				>
				<button
					on:click={() => setTag('History')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'History' ? 'filtered' : ''}"
					class:drawerselection={tag === 'History'}>History</button
				>
				<button
					on:click={() => setTag('Genetics')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Genetics' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Genetics'}>Genetics</button
				>
				<button
					on:click={() => setTag('Archaeology')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Archaeology' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Archaeology'}>Archaeology</button
				>
				<button
					on:click={() => setTag('Chronology')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Chronology' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Chronology'}>Chronology</button
				>
				<button
					on:click={() => setTag('Philology')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Philology' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Philology'}>Philology</button
				>
				<button
					on:click={() => setTag('Geology')}
					on:keydown={fauxfake}
					class="drawer-item {tag === 'Geology' ? 'filtered' : ''}"
					class:drawerselection={tag === 'Geology'}>Geology</button
				>
			</div>
		{/if}
		<div class="rta-grid grid3 rowgap400 colgap400">
			{#if aryans && aryans.length > 0}
				{#each aryans as item, i}
					<div
						class="rta-column rowgap50"
						use:reveal={{
							transition: 'slide',
							duration: 200,
							delay: i + 20,
							opacity: 0
						}}
					>
						<h6 class="title">
							<a href={item.sourcelink} target="_blank" rel="noreferrer">{item.paper}</a>
						</h6>
						<small>{item.author}</small>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</Shell>

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 100vh
		
.rta-grid.grid3.fullgrid
	grid-template-columns: 1fr
	grid-template-areas: "."


</style>
