<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/NewHeader.svelte';
 import MainPage from '$lib/components/mainpage.svelte'
 import Head from '$lib/components/HeadComponent.svelte'
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
		BOLLatest,
  newPages
	} from '$lib/utils/supapulls';
	import { latestDhitiSix } from '$lib/utils/localpulls';
	import Chevron from '$lib/icons/chevrond.svelte';
	import Chevron2 from '$lib/icons/chevrond.svelte';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';

	$metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
	$metaImage = '/images/cover-brhat.webp';

	let title1 = 'Svarṇāñjali';
	let title2 = 'Bṛhat Anveṣī';
	let title3 = 'Bṛhat Draṣṭā';
	let title4 = 'Bṛhadmṛdaṅga';
	let title5 = 'Dhīti';
	let title6 = 'Bṛhat Open Library';
	let title7 = 'Also Explore';
	let title8 = 'Samīkṣaṇā';
	let title9 = 'Nītividhāna';

 let pages:any;
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

	defaultFullBox({
		transition: 'fly',
		y: 120,
		opacity: 0,
		duration: 300
	});

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
   pages = await newPages();
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

<Head title={$metaTitle} metaDescription={$metaDescription} metaUrl={$metaUrl} metaImage={$metaImage}></Head>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js"></script>
</svelte:head>

<Header isSwitch={false} />
<!--
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 p-top-64" id="intro">
		<h1 use:reveal>Bṛhat is a <span style="color: #fe4a49">Culture Engine</span></h1>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			To power creatives, research and design rooted in the Indian civilizational consciousness. We
			convert individual, institutional and collective intent into action.
		</h5>
		<div class="rta-grid grid3 colgap300 rowgap300">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item, i}
					<div
						class="rta-column null rowgap100"
						use:reveal={{ transition: 'scale', duration: 400, delay: i + 40, opacity: 0, scale: 0 }}
					>
						<h6 class="ta-l title">{item.name}</h6>
						<pre class="ta-l small">{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
		<a href="/about" use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}>
			<button class="newbutton big">Know More</button>
		</a>
	</section>

	<section class="rta-column rowgap400 min100" id="upcoming">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>
				{#each title8.split('') as char, i}
					<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
				{/each}
			</h2>
			<small>Events, Conferences, Programs</small>
		</div>
		<div
			class="rta-grid grid2 rowgap200 colgap500"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<div class="rta-image">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/15updates/bharatauvacha.webp"
					alt="bharatauvacha"
				/>
			</div>
			<div class="rta-column rowgap200">
				<h5 class="title">Bhārata Uvāca' - A Civilization Speaks</h5>
				<h5>
					A one day festival of short talks and performances bringing together the voices of
					Bhārata, celebrating India's rich heritage and knowledge from literature to arts, science,
					and more.
				</h5>
				<h5>
					Brought to you by Shankarananda Kalakshetra, Nātyārambha, in collaboration with Bṛhat and
					SAHE under the aegis of Amrit Mahotsav & Ministry Of Culture, GoI.
				</h5>
				<h6>5 Aug 2023 - Shilpakala Vedika, Bhagyanagar.</h6>
				<a href="http://www.bharatauvaca.com/" target="_blank" rel="noreferrer">
					<button class="newbutton big red">Visit Website</button>
				</a>
			</div>
		</div>
	</section>
	--
 <section class="rta-column rowgap400 min100" id="nitividhana">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>
				<a href="/nitividhana">
					{#each title9.split('') as char, i}
						<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
					{/each}
				</a>
			</h2>
			<small>Civilizational Public Policy</small>
		</div>
		<div class="rta-grid grid2 colgap300 rowgap200">
			<div class="rta-column rowgap200">
				<h5>
					This online policy learning program offered by Chinmaya International Foundation and Brhat
					is an intensive immersive program in today's burning issues.
				</h5>
				<a href="/nitividhana"><button class="newbutton big red">Visit</button></a>
			</div>
			<a href="/nitividhana">
				<img src="/images/nitividhanahero.webp" alt="nitividhana" style="border-radius: 8px" />
			</a>
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="samikshana">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>
				<a href="/samikshana">
					{#each title8.split('') as char, i}
						<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
					{/each}
				</a>
			</h2>
			<small>Exploring Why We Are, The Way We Are</small>
		</div>
		<div
			class="rta-column rowgap200"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<h5>
				“What is the purpose in knowing everything without knowing your own Self?” - Pravrājika
				Divyanandaprāṇa
			</h5>
			<h5>
				Time and again, scientists from the Orient as well as the Occident have believed that human
				nature is kaleidoscopic. The study of Human Evolution and Counselling is witnessing an
				exciting phase of growth; moving beyond the Euro-American theories and thus further
				exploring culturally rooted perspectives.
			</h5>
			<h6>
				A ground-breaking, multidisciplinary, and innovative study integrating the perspectives of
				the Orient (vedic) and the Occident (Modern) to examine the ‘HUMAN’ in its entirety.
			</h6>
			<a href="/samikshana">
				<button class="newbutton red big">Visit Page</button>
			</a>
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="svarnanjali">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>
				<a href="/svarnanjali">
					{#each title1.split('') as char, i}
						<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
					{/each}
				</a>
			</h2>
			<small>Hindu Culture Rennaissance</small>
		</div>
		<div
			class="rta-column rowgap200"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
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
			<div use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}>
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
								<p class="ta-c-d small p-top-16">
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
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d colgap200 p-top-16 m-top-16 bord-top"
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
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100" id="anveshi">
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
				<a href="/anveshi"
					><h2>
						{#each title2.split('') as char, i}
							<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
						{/each}
					</h2></a
				>

				<small
					>Culture Travel and Discovery. Register Now for <span
						style="color: var(--hilite); font-weight: bold">OPEN CHAPTERS.</span
					></small
				>
			</div>
			<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				A travel program to contemporize ancient Indian tradition by guiding travel groups through
				hitherto rarely explored sacred kṣetras of India.
			</h5>
			{#if chapters && chapters.length > 0}
				{#if !$breakZero}
					<div
						class="rta-row colgap200 ycenter drawer-select"
						class:isactive={expandMenu}
						on:click={toggleMenu}
						on:keydown={fauxfake}
						use:reveal={{ transition: 'fade', delay: 100, duration: 100 }}
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
						class="rta-row row-col ycenter xleft rta-drawer-items colgap400 rowgap100"
						in:slide={{ axis: 'y', easing: quintOut }}
						out:slide={{ axis: 'y', easing: quintIn }}
						on:click={toggleMenu}
						on:keydown={fauxfake}
						use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
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
		<div
			class="rta-column p-top-8 rowgap200"
			use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
		>
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
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
				<a href="/drashta"
					><h2>
						{#each title3.split('') as char, i}
							<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
						{/each}
					</h2></a
				>

				<small>Online Courses on Itihāsa, Bhārata and Dharma.</small>
			</div>
			<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				An offering in deep learning that extends courses on some of the greatest ancient and
				contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</h5>
		</div>
		<div class="side-l" use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}>
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
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<a href="/mrdanga">
				<h2>
					{#each title4.split('') as char, i}
						<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
					{/each}
				</h2></a
			>
			<small>Visual and Creative Cultural Content</small>
		</div>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			Video content that taps into the eternal streams of beauty and reality in our culture and
			voices them in contemporary idiom.
		</h5>
		{#if mrdanga && mrdanga.length > 0}
			<div use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}>
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
								<Youtuber2 youTubeId={item.videoid} />
								<p class="ta-c-d small p-top-16">
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
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d colgap200 p-top-16 m-top-16 bord-top"
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
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100" id="dhiti">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<a href="/dhiti"
				><h2>
					{#each title5.split('') as char, i}
						<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
					{/each}
				</h2></a
			>

			<small>Essays on Culture, Policy and Education</small>
		</div>
		<div
			class="rowgap200 rta-column"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<h5>
				Dhī - thought, intent, reflection<br />
				Iti - verily, this.<br />
				Dhīti - conception, perception, understanding.
			</h5>
			<h5>
				A blog for our written voice on Culture and Policy, Dharma Today, Śatrubodha and
				Svayaṃbodha, and the Indian Knowledge Systems.
			</h5>
		</div>
		<div class="rta-column rowgap600 p-top-16">
			{#if posts && posts.length > 0}
				{#each posts as item, i}
					<div
						class="rta-row row-col colgap300 rowgap200"
						use:reveal={{
							transition: 'slide',
							duration: 200,
							delay: i + 20,
							opacity: 0
						}}
					>
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
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
				<a href="/openlibrary">
					<h2>
						{#each title6.split('') as char, i}
							<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
						{/each}
					</h2>
				</a>

				<small>Online library for all things Dharma and Indian Knowledge Systems.</small>
			</div>
			<h5>
				Find books, digitized searchable texts, works on history and language, and more. Explore our
				dedicated section - The Āryan Issue and curated readings - Bṛhat's Essentials.
			</h5>
		</div>
		{#if books && books.length > 0}
			<div class="rta-grid grid3 rowgap400">
				{#each books as item, i}
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
						<small style="text-transform: none">{item.author}</small>
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100" id="others">
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
				<h2>Also Explore</h2>
				<small>Design, Civilization, Imagination</small>
			</div>
			<h5>
				With a continuity of untold millennia, the passage of time visible to us in itihāsa,
				information was processed in increasingly complex ways within the physical environment best
				described as Bhārata, emerged a civilizational consciousness, with multi-level coherence. It
				is known to us as Dharma. Creative new avenues in art, design and narratives of this story:
			</h5>
		</div>
		<div class="rta-grid grid3 colgap400 p-top-8 rowgap400">
			<div
				class="rta-column rowgap200"
				use:reveal={{ transition: 'scale', duration: 400, delay: 30, opacity: 0, scale: 0 }}
			>
				<h5 class="title"><a href="/rta">Ṛta in Design</a></h5>
				<div class="rta-row stay colgap300">
					<div class="rta-image w32">
						<img
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/ridhero1.webp"
							alt="hero-rta"
							style="height: 120px"
						/>
					</div>
					<div class="rta-column w64">
						<p class="small">
							A new framework for design thinking, centred on the mind of the designer. Inspired by
							universal principles of Dharma.
						</p>
					</div>
				</div>
			</div>
			<div
				class="rta-column rowgap200"
				use:reveal={{ transition: 'scale', duration: 400, delay: 60, opacity: 0, scale: 0 }}
			>
				<h5 class="title"><a href="/mandala">Fractal Maṇḍala</a></h5>
				<div class="rta-row stay colgap300">
					<div class="rta-image w32">
						<img
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/fmhomehero.webp"
							alt="hero-mandala"
							style="height: 120px"
						/>
					</div>
					<div class="rta-column w64">
						<p class="small">
							Research, exploration, and furtherance of Indian civilizational consciousness through
							long-form essays and development of core ontology.
						</p>
					</div>
				</div>
			</div>
			<div
				class="rta-column rowgap200"
				use:reveal={{ transition: 'scale', duration: 400, delay: 90, opacity: 0, scale: 0 }}
			>
				<h5 class="title"><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
				<div class="rta-row stay colgap300">
					<div class="rta-image w32">
						<img
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/scrollshero.webp"
							alt="hero-mandala"
							style="height: 120px"
						/>
					</div>
					<div class="rta-column w64">
						<p class="small">
							Cultural narratives of the Bhārata that once was, and some of the Bhārata that could
							have been. At the edge of AI and art.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</Shell>
-->
<section class="accordion">
 <a class="panel back" id="panel1" href="/about/culturecreatives">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/creative-culture-1024-1.webp"
			alt="cc"
		/>
		<a href="/about/culturecreatives"><button class="newbutton big">Culture Creatives</button></a>
	</a>
	<a class="panel back" id="panel2" href="/about/policyresearch">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/research-policy-1024-1.webp"
			alt="pr"
		/>
		<a href="/about/policyresearch"><button class="newbutton big">Policy Research</button></a>
 </a>
	<a class="panel back" id="panel3" href="/about/leadershipdevelopment">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/develop-leader-1024-1.webp"
			alt="ld"
		/>
		<a href="/about/leadershipdevelopment"
			><button class="newbutton big">Leadership Development</button></a
		>
 </a>
</section>
<MainPage/>


<style lang="sass">

.accordion
 display: flex
 flex-direction: row
 height: 100vh
 width: calc(100vw - 64px)
 margin-left: 32px
 column-gap: 32px
 .panel
  width: calc(33.33% - 21.34px)
  transition: all 0.4s
 &:hover
  .panel
   width: 30%
   filter: saturate(0.1)
   &:hover
    width: 40%
    filter: saturate(1)
 @media screen and (max-width: 768px)
  flex-direction: column
  padding-top: 64px
  padding-bottom: 16px
  width: calc(100vw - 32px)
  margin-left: 16px
  row-gap: 16px
  .panel
   width: 100%
   height: calc(33.33% - 10.67px)
  &:hover
   .panel
    height: 25%
    width: 100%
    &:hover
     height: 50% 
     width: 100%

.panel
 padding: 64px 0 32px 0
 position: relative
 align-items: center
 display: flex
 flex-direction: column
 a
  position: absolute
  bottom: 96px   
 img
  border-radius: 6px
  filter: saturate(1)
  transition: all 0.2s
 &:hover
  img
   filter: saturate(1)
 @media screen and (max-width: 768px)
  padding: 0
  a
   bottom: 24px  

</style>
