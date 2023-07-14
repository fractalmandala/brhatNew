<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/NewHeader.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css/core';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import Shell from '$lib/components/PageShell.svelte';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import Youtuber2 from '$lib/components/Youtuber.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { breakZero, breakTwo } from '$lib/stores/globalstores';
	import {
		svEpisodes,
		allChapters,
		allCourses,
		latestMrdanga,
		createCurateConsult,
		BOLLatest
	} from '$lib/utils/supapulls';
	import { latestDhitiSix } from '$lib/utils/localpulls';
	import Chevron from '$lib/icons/chevrond.svelte';
	import Chevron2 from '$lib/icons/chevrond.svelte';

	$metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
	$metaImage = '/images/cover-brhat.webp';

	let episodes: any;
	let threeactions: string | any[];
	let chapters: any;
	let courses: any;
	let mrdanga: any;
	let posts: any;
	let books: any;
	let bollimit = 12;
	let fake = false;
	let anveshiFull = Array(10).fill(false);
	anveshiFull[0] = true;
	let drashtaFull = Array(10).fill(false);
	drashtaFull[0] = true;
	let expandMenu = false;
	let expandMenu2 = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleMenu() {
		expandMenu = !expandMenu;
	}

	function toggleMenu2() {
		expandMenu2 = !expandMenu2;
	}

	function toggleAnveshi(index: number) {
		anveshiFull[index] = !anveshiFull[index];
		for (let i = 0; i < anveshiFull.length; i++) {
			if (i !== index && anveshiFull[i] === true) {
				anveshiFull[i] = false;
			}
		}
	}

	function toggleDrashta(index: number) {
		drashtaFull[index] = !drashtaFull[index];
		for (let i = 0; i < drashtaFull.length; i++) {
			if (i !== index && drashtaFull[i] === true) {
				drashtaFull[i] = false;
			}
		}
	}

	onMount(() => {
		(async () => {
			threeactions = await createCurateConsult();
			episodes = await svEpisodes();
			chapters = await allChapters();
			courses = await allCourses();
			mrdanga = await latestMrdanga();
			posts = await latestDhitiSix();
			books = await BOLLatest(bollimit);
		})();
	});
</script>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js"></script>
</svelte:head>

<Header />

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<h1>Bṛhat is a <span style="color: #fe4a49">Culture Engine</span></h1>
		<h5>
			To power creatives, research and design rooted in the Indian civilizational consciousness. We
			convert individual, institutional and collective intent into action.
		</h5>
		<div class="rta-grid grid3 colgap300 rowgap200">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item, i}
					<div class="rta-column null rowgap100">
						<h6 class="typett ta-l">{item.name}</h6>
						<pre class="ta-l small">{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
		<a href="/about">
			<button class="newbutton big">Know More</button>
		</a>
	</section>
	<section class="rta-column rowgap400 min100" id="svarnanjali">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
			<h2><a href="/svarnanjali">Svarṇāñjali</a></h2>
			<small>Hindu Culture Rennaissance</small>
		</div>
		<div class="rta-column rowgap200">
			<h5>
				A weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema
				and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī. View at <a
					href="https://youtu.be/OeCFCHwSpd0"
					target="_blank"
					rel="noreferrer">Youtube,</a
				> and remember to subscribe-
			</h5>
			<div
				class="g-ytsubscribe"
				data-channelid="UCpmTZwM36xdAuHbBaaE2asg"
				data-layout="default"
				data-count="hidden"
			/>
		</div>
		{#if episodes && episodes.length > 0}
			<Splide
				hasTrack={false}
				options={{
					drag: true,
					keyboard: 'global',
					waitForTransition: true,
					type: 'loop',
					gap: '20px',
					width: '100%',
					wheelMinThreshold: 1.1,
					speed: 900,
					direction: 'ltr',
					perPage: 3,
					pagination: false,
					breakpoints: {
						1023: {
							perPage: 2
						},
						768: {
							perPage: 1
						}
					}
				}}
			>
				<SplideTrack>
					{#each episodes as item}
						<SplideSlide>
							<Youtuber youTubeId={item.videoid} />
							<p class="ta-c small p-top-16">
								<strong>
									<a href={item.link} target="_blank" rel="noreferrer">
										{item.name}
									</a></strong
								>
							</p>
						</SplideSlide>
					{/each}
				</SplideTrack>
				<div
					class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 p-top-16 m-top-16 bord-top"
				>
					<button
						class="splide__arrow splide__arrow--prev newbutton"
						type="button"
						aria-label="Previous slide"
						aria-controls="splide01-track"
					>
						PREV
					</button>
					<button
						class="splide__arrow splide__arrow--next newbutton"
						type="button"
						aria-label="Next slide"
						aria-controls="splide01-track"
					>
						NEXT
					</button>
				</div>
			</Splide>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100" id="anveshi">
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
				<h2><a href="/anveshi">Bṛhat Anveṣī</a></h2>
				<small
					>Culture Travel and Discovery. Register Now for <span
						style="color: var(--hilite); font-weight: bold">OPEN CHAPTERS.</span
					></small
				>
			</div>
			<h5>
				A travel program to contemporize ancient Indian tradition by guiding travel groups through
				hitherto rarely explored sacred kṣetras of India.
			</h5>
			{#if chapters && chapters.length > 0}
				{#if !$breakZero}
					<div
						class="rta-row colgap400 ycenter drawer-select"
						class:isactive={expandMenu}
						on:click={toggleMenu}
						on:keydown={fauxfake}
					>
						{#if expandMenu}
							Close Tours
						{:else}
							Expand Tours
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
						class="rta-row row-col ycenter xleft rta-drawer-items p-top-8 p-bot-8 bord-top bord-bot colgap400 rowgap100"
						in:slide={{ axis: 'y', easing: quintOut }}
						out:slide={{ axis: 'y', easing: quintIn }}
						on:click={toggleMenu}
						on:keydown={fauxfake}
					>
						{#each chapters as item, i}
							<button
								class="drawer-item {item.status}"
								on:click={() => toggleAnveshi(i)}
								on:keydown={fauxfake}
								class:drawerselection={anveshiFull[i]}
								>{item.name.substring(0, item.name.length - 8)}</button
							>
						{/each}
					</div>
				{/if}
			{/if}
		</div>
		<div class="rta-column p-top-8 rowgap200">
			{#if chapters && chapters.length > 0}
				{#each chapters as item, i}
					{#if anveshiFull[i]}
						<div class="rta-column rowgap300">
							<h3>{item.name}</h3>
							<div class="rta-row row-col colgap400 rowgap200">
								<div class="rta-image w32 image-20-20 br6">
									<img class="br6" src={item.image} alt={item.name} />
								</div>
								<div class="rta-column w64 rowgap100">
									<div class="rta-row ycenter between colgap100">
										<div class="status-sticker {item.status}">
											{item.status}
										</div>
										{#if item.status !== 'complete'}
											<cite class="str8">Next - {item.dates}</cite>
										{/if}
									</div>
									{#if item.content && item.content.length > 0}
										<pre class="h6 ta-l">{item.content.slice(0, 360)}...</pre>
									{/if}
									<a class="rta-column xleft" href="/anveshi/{item.chapter}"
										><button class="newbutton big {item.status}">Read More</button></a
									>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap50 min100" id="drashta">
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
				<h2><a href="/drashta">Bṛhat Draṣṭā</a></h2>
				<small>Online Courses on Itihāsa, Bhārata and Dharma.</small>
			</div>
			<h5>
				An offering in deep learning that extends courses on some of the greatest ancient and
				contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</h5>
		</div>
		<div class="side-l">
			<div class="left-side">
				{#if courses && courses.length > 0}
					{#if $breakTwo}
						<div
							class="rta-row colgap400 ycenter between m-top-16 drawer-select"
							class:isactive={expandMenu2}
							on:click={toggleMenu2}
							on:keydown={fauxfake}
						>
							{#if expandMenu2}
								Close Courses
							{:else}
								Expand Courses
							{/if}
							<div class="rta-row ycenter" class:rotated={expandMenu2}>
								{#if expandMenu2}
									<Chevron dimension={24} onToggle={true} />
								{:else}
									<Chevron dimension={24} />
								{/if}
							</div>
						</div>
					{/if}
					{#if expandMenu2 || !$breakTwo}
						<div
							class="rta-column xleft rta-drawer-items colgap400 rowgap100"
							in:slide={{ axis: 'y', easing: quintOut }}
							out:slide={{ axis: 'y', easing: quintIn }}
							on:click={toggleMenu2}
							on:keydown={fauxfake}
						>
							{#each courses as item, i}
								<button
									class="side-item {item.status}"
									on:click={() => toggleDrashta(i)}
									on:keydown={fauxfake}
									class:drawerselection={drashtaFull[i]}>{item.coursename}</button
								>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
			<div class="left-main">
				{#if courses && courses.length > 0}
					{#each courses as item, i}
						{#if drashtaFull[i]}
							<div class="rta-column rowgap300">
								<h3 style="text-transform: capitalize">{item.coursename}</h3>
								<div class="rta-row row-col colgap300 rowgap200">
									<div class="rta-image w32 image-20-20 br6">
										<img
											class="br6"
											style="object-fit: contain;"
											src={item.image}
											alt={item.name}
										/>
									</div>
									<div class="rta-column w64 rowgap100">
										<div class="rta-row ycenter between colgap100">
											<div class="status-sticker {item.status}">{item.status}</div>
											<cite class="str8"
												>{item.datefrom} | with <span id="instructor">{item.ins}</span></cite
											>
										</div>
										{#if item.excerpt && item.excerpt.length > 0}
											<pre class="h6 ta-l">{item.excerpt}</pre>
										{/if}
										<a class="rta-column xleft" href="/drashta/course/{item.course}"
											><button class="newbutton big {item.status}">Read More</button></a
										>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="mrdanga">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
			<h2><a href="/mrdanga">Bṛhadmṛdaṅga</a></h2>
			<small>Visual and Creative Cultural Content</small>
		</div>
		{#if mrdanga && mrdanga.length > 0}
			<Splide
				hasTrack={false}
				options={{
					drag: true,
					keyboard: 'global',
					waitForTransition: true,
					type: 'loop',
					gap: '20px',
					width: '100%',
					wheelMinThreshold: 1.1,
					speed: 900,
					direction: 'ltr',
					perPage: 3,
					pagination: false,
					breakpoints: {
						1023: {
							perPage: 2
						},
						768: {
							perPage: 1
						}
					}
				}}
			>
				<SplideTrack>
					{#each mrdanga as item}
						<SplideSlide>
							<Youtuber youTubeId={item.videoid} />
							<p class="ta-c small p-top-16">
								<strong>
									<a href={item.link} target="_blank" rel="noreferrer">
										{item.name}
									</a></strong
								>
							</p>
						</SplideSlide>
					{/each}
				</SplideTrack>
				<div
					class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 p-top-16 m-top-16 bord-top"
				>
					<button
						class="splide__arrow splide__arrow--prev newbutton"
						type="button"
						aria-label="Previous slide"
						aria-controls="splide01-track"
					>
						PREV
					</button>
					<button
						class="splide__arrow splide__arrow--next newbutton"
						type="button"
						aria-label="Next slide"
						aria-controls="splide01-track"
					>
						NEXT
					</button>
				</div>
			</Splide>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100" id="dhiti">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
			<h2><a href="/dhiti">Dhīti</a></h2>
			<small>Essays on Culture, Policy and Education</small>
		</div>
		<div class="rta-column rowgap600">
			{#if posts && posts.length > 0}
				{#each posts as item}
					<div class="rta-row row-col colgap300 rowgap200">
						<div class="rta-image image-20-20 w32 br6">
							<img class="br6" src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-column rowgap200 w64">
							<small class="label">{item.meta.category}</small>
							<h5 class="title"><a href={item.path}>{item.meta.title}</a></h5>
							<p class="mid soft">{item.meta.excerpt}</p>
							<div class="rta-column rowgap100 bord-top p-top-16">
								<div class="rta-row stay colgap200 tags">
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								</div>
								<p class="writer">
									{item.meta.author}
									{#if item.meta.authortwo && item.meta.authortwo.length > 0}
										| {item.meta.authortwo}
									{/if}
								</p>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="bol">
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24">
				<h2><a href="/openlibrary">Bṛhat Open Library</a></h2>
				<small>Online library for all things Dharma and Indian Knowledge Systems.</small>
			</div>
			<h5>Find books, digitized searchable texts, works on history and language, and more.</h5>
		</div>
		{#if books && books.length > 0}
			<div class="rta-grid grid3 rowgap400">
				{#each books as item}
					<div class="rta-column rowgap50">
						<h6 class="title"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
						<small style="text-transform: none">{item.author}</small>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</Shell>

<style lang="sass">

.drawer-item.open
	background: var(--hilite)
	color: white

.drawer-item.open.drawerselection
	color: var(--hilite)
	background: none

.drawer-item, .drawer-item.open
	&:hover
		border: 1px solid var(--hilite)

.side-l
	@media screen and (min-width: 769px)
		padding-top: 24px

</style>
