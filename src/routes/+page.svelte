<script lang="ts">
	import { onMount } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import autoAnimate from '@formkit/auto-animate';
	import Chevron from '$lib/icons/chevrond.svelte';
	import Chevron2 from '$lib/icons/chevrond.svelte';
	import { themeMode, breakZero } from '$lib/stores/globalstores';
	import Header from '$lib/components/SubHeader.svelte';
	import ButtonEmerge from '$lib/anims/ButtonEmerge.svelte';
	import ButtonEmerge2 from '$lib/anims/ButtonEmerge.svelte';
	import ButtonEmerge3 from '$lib/anims/ButtonEmerge.svelte';
	import ButtonEmerge4 from '$lib/anims/ButtonEmerge.svelte';
	import ButtonEmerge5 from '$lib/anims/ButtonEmerge.svelte';
	import ButtonEmerge6 from '$lib/anims/ButtonEmerge.svelte';
	import SVCar from '$lib/components/SVCar.svelte';
	import { reveal } from 'svelte-reveal';
	import HomeAccordion from '$lib/components/HomeAccordion.svelte';
	import CompButton from '$lib/ridunits/CompButton.svelte';
	import CompButton2 from '$lib/ridunits/CompButton.svelte';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import {
		createCurateConsult,
		brhatUpdates,
		latestVidsVar,
		BOLLatest,
		allChapters,
		allCourses
	} from '$lib/utils/supapulls';
	import { latestDhitiSix } from '$lib/utils/localpulls';
	import '@splidejs/splide/css/core';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/animations/shift-away.css';

	let threeactions: string | any[];
	let expandMenu = false;
	let expandMenu2 = false;
	let updates: string | any[];
	let count: number = 3;
	let videos: string | any[];
	let posts: string | any[];
	let bollimit: number = 12;
	let books: string | any[];
	let chapters: any;
	let courses: any;
	let sY: number;
	let oH: number;
	let breakPoint: boolean;
	let fake = false;
	let anveshiFull = Array(10).fill(false);
	anveshiFull[0] = true;
	let drashtaFull = Array(10).fill(false);
	drashtaFull[0] = true;

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

	function fauxfake() {
		fake = !fake;
	}

	$metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
	$metaType = 'webpage';

	onMount(() => {
		(async () => {
			threeactions = await createCurateConsult();
			updates = await brhatUpdates();
			videos = await latestVidsVar(count);
			posts = await latestDhitiSix();
			books = await BOLLatest(bollimit);
			chapters = await allChapters();
			courses = await allCourses();
		})();
	});
</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header />

<div
	class="pageglobals"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:breaker={$breakZero}
>
	<!--top accordion of 3 sections-->
	<HomeAccordion />
	<!--end-->

	<!--introduction about section-->
	<div class="rta-column ycenter outer-box minH" id="section1" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap600">
			<div class="rta-grid grid2 colgap400 rowgap300">
				<div class="rta-column">
					<h2>
						Bṛhat is a<br />
						<span class="spesh"> culture engine</span>
					</h2>
				</div>
				<div class="rta-column rowgap300">
					<h5 class="typett">
						To power creatives, research and design rooted in the Indian civilizational
						consciousness. We convert individual, institutional and collective intent into action,
						across 3 dimensions.
					</h5>
					<ButtonEmerge>
						<a href="/about"> Know More </a>
					</ButtonEmerge>
				</div>
			</div>

			<div class="rta-grid grid4 colgap400">
				{#if threeactions && threeactions.length > 0}
					{#each threeactions as item, i}
						<div
							class="rta-column glass-top p-top-16"
							use:reveal={{
								transition: 'fly',
								y: 200,
								easing: 'easeOutCirc',
								delay: i * 50
							}}
						>
							<h6 class="typett ta-l">{item.name}</h6>
							<pre class="ta-l">{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<!--end-->

	<SVCar />

	<!--latest anveshi chapters-->
	<div class="rta-column ycenter rowgap600 outer-box minH" data-lenis-scroll-snap-align="start">
		<!---name and description-->
		<div
			class="rta-row row-col ycenter between rowgap100 colgap400 glass-top p-top-32 bord-bot p-bot-32"
		>
			<div class="rta-row row-col ycenter colgap300">
				<h3 class="typett">BṚHAT ANVEṢĪ</h3>
				<div class="holds-button-emerge" use:reveal>
					<ButtonEmerge2><a href="/anveshi">Learn More</a></ButtonEmerge2>
				</div>
			</div>
			<div class="colgap100 rta-row selfend xend-d ycenter" id="thissmall">
				<div class="arrowsanimation">
					<svg
						width="94"
						height="24"
						viewBox="0 0 94 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_2638)">
							<path
								id="arrowl"
								d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowc"
								d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowr"
								d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
								fill="#FE4A49"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_2638">
								<rect width="94" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<small class="typett2" id="thissmall">Culture Travel and Experience</small>
			</div>
		</div>
		<!--end-->

		<div class="rta-column rowgap300" use:autoAnimate>
			{#if chapters && chapters.length > 0}
				{#if !$breakZero}
					<div
						class="rta-row colgap400 ycenter drawer-select"
						on:click={toggleMenu}
						on:keydown={fauxfake}
					>
						Expand Tours
						<div class="rta-row ycenter" class:rotated={expandMenu}>
							<Chevron2 />
						</div>
					</div>
				{/if}
				{#if expandMenu || $breakZero}
					<div
						class="rta-row row-col ycenter rta-drawer-items colgap400 rowgap100 p-bot-16"
						use:autoAnimate
						on:click={toggleMenu}
						on:keydown={fauxfake}
					>
						{#each chapters as item, i}
							<button
								class="drawer-item"
								on:click={() => toggleAnveshi(i)}
								on:keydown={fauxfake}
								class:drawerselection={anveshiFull[i]}>{item.name}</button
							>
						{/each}
					</div>
				{/if}
				<div class="rta-column" use:autoAnimate>
					{#each chapters as item, i}
						{#if anveshiFull[i]}
							<div class="rta-row row-col colgap400 rowgap200">
								<div class="rta-image w32 height-40-30">
									<img src={item.image} alt={item.name} />
								</div>
								<div class="rta-column w64 rowgap200">
									<div class="rta-row ycenter colgap100">
										<div class="status-sticker">
											<small class="tt-u">{item.status}</small>
										</div>
										<cite>{item.dates}</cite>
									</div>
									{#if breakPoint}
										<h4>{item.name}</h4>
									{/if}
									{#if item.content && item.content.length > 0}
										<pre class="h6">{item.content}</pre>
									{/if}
									<CompButton><a href="/anveshi/{item.chapter}">Read More</a></CompButton>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<!--end-->

	<!--latest drashta courses-->
	<div class="rta-column rowgap600 ycenter outer-box minH" data-lenis-scroll-snap-align="start">
		<!--name and description-->
		<div class="rta-row row-col ycenter between rowgap100 glass-top p-top-32 bord-bot p-bot-32">
			<div class="rta-row row-col ycenter colgap300" use:autoAnimate>
				<h3 class="typett">BṚHAT DRAṢṬĀ</h3>
				<div class="holds-button-emerge" use:reveal>
					<ButtonEmerge3><a href="/drashta">Visit</a></ButtonEmerge3>
				</div>
			</div>
			<div class="colgap100 rta-row ycenter">
				<div class="arrowsanimation">
					<svg
						width="94"
						height="24"
						viewBox="0 0 94 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_2638)">
							<path
								id="arrowl"
								d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowc"
								d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowr"
								d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
								fill="#FE4A49"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_2638">
								<rect width="94" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<small class="typett2">Online Courses and Shared Learning</small>
			</div>
		</div>
		<!--end-->

		<div class="rta-grid left grid2 rowgap400 colgap500" use:autoAnimate>
			{#if courses && courses.length > 0}
				{#if !$breakZero}
					<div
						class="rta-row colgap400 ycenter drawer-select"
						on:click={toggleMenu2}
						on:keydown={fauxfake}
					>
						Expand Courses
						<div class="rta-row ycenter" class:rotated={expandMenu2}>
							<Chevron />
						</div>
					</div>
				{/if}
				{#if expandMenu2 || $breakZero}
					<div
						class="rta-column rta-drawer-items rowgap200 bord-right-d"
						id="drashta-drawer"
						on:click={toggleMenu2}
						on:keydown={fauxfake}
						use:autoAnimate
					>
						{#each courses as item, i}
							<button
								class="drawer-item2"
								on:click={() => toggleDrashta(i)}
								on:keydown={fauxfake}
								class:drawerselection={drashtaFull[i]}>{item.coursename}</button
							>
						{/each}
					</div>
				{/if}
				{#each courses as item, i}
					{#if drashtaFull[i]}
						{#if item.status === 'upcoming' || item.status === 'Upcoming'}
							<div
								id="drashtascreen"
								class="rta-column height-40 p-all-32 back"
								style="background-image: url('{item.image}')"
								use:autoAnimate
							>
								<div class="rta-column rowgap100 w32">
									<div class="status-sticker">
										<small class="tt-u">{item.status}</small>
									</div>
									<cite class="sticker-black"
										>{item.datefrom} | with <span id="instructor">{item.ins}</span></cite
									>
								</div>
							</div>
						{:else}
							<div class="rta-column rowgap200">
								<div class="rta-image height-40-30">
									<img src={item.image} alt={item.name} style="object-fit: contain" />
								</div>
								<div class="rta-column rowgap200">
									<div class="status-sticker">
										<small class="tt-u">{item.status}</small>
									</div>
									<cite>{item.datefrom} | with <span id="instructor">{item.ins}</span></cite>
									<pre class="h6">{item.content.slice(0, 200)}</pre>
									<CompButton2
										><a href="/drashta/course/{item.course}">Course Details</a></CompButton2
									>
								</div>
							</div>
						{/if}
					{/if}
				{/each}
			{/if}
		</div>
	</div>
	<!--end-->

	<!--explore visual content section-->
	<div
		class="minH outer-box ycenter rowgap600 rta-column"
		id="brhad-mrdanga"
		data-lenis-scroll-snap-align="start"
	>
		<div class="rta-row row-col ycenter between glass-top p-top-32 bord-bot p-bot-32">
			<div class="rta-row row-col ycenter colgap200" use:autoAnimate>
				<h3 class="typett">BṚHAD MṚDAṄGA</h3>
				<div class="holds-button-emerge" use:reveal>
					<ButtonEmerge4><a href="/mrdanga">More Videos</a></ButtonEmerge4>
				</div>
			</div>
			<div class="colgap100 rta-row ycenter">
				<div class="arrowsanimation">
					<svg
						width="94"
						height="24"
						viewBox="0 0 94 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_2638)">
							<path
								id="arrowl"
								d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowc"
								d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowr"
								d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
								fill="#FE4A49"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_2638">
								<rect width="94" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<small class="typett2">Visual and Creative Cultural Content</small>
			</div>
		</div>
		<h5 class="typett2">
			Our visual content ranges from explorations of rasa and bhāva, to articulations of an
			IKS-implementation strategy for modern India. View the latest videos below, or visit our <a
				href="https://youtube.com/@brhat"
				target="_blank"
				style="color: #fe4a49"
				rel="noreferrer">YouTube channel</a
			>
		</h5>

		<div class="rta-grid grid3 rowgap600 colgap400">
			{#if videos && videos.length > 0}
				{#each videos as item, i}
					<div
						class="rta-column rowgap100"
						use:reveal={{
							transition: 'fly',
							y: 200,
							easing: 'easeOutCirc',
							delay: i * 50
						}}
					>
						<Youtuber youTubeId={item.videoid} />
						<small>{item.name}</small>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<!--end-->

	<!--latest at brhat section
	<div class="rta-column rowgap-32 alt-pads minH">
		<h3 class="typett bord-top top-p-16">LATEST AT BṚHAT</h3>
		<h5 class="typett2">Events, Conferences, Releases</h5>
		<div class="rta-column rowgap-32">
				{#if updates && updates.length > 0}
					{#each updates as item, i}
						<div class="rta-row colgap-24 bord-bot bot-p-32"
							use:reveal={{
								transition: "fly",
								y: 200,
								easing: "easeOutCirc",
								delay: i*50
							}}
							>
							<div class="rta-image height-20 w32">
								<img src={item.image} alt={item.id}/>
							</div>
							<div class="rta-column rowgap-16 w64">
								<h6>{item.heading}</h6>
								<p>{item.text.slice(0,200)}...
									<span style="color: #fe4a49; font-weight: bold"><a href={item.link} target="_blank">READ MORE</a></span>
								</p>
							</div>
						</div>
					{/each}
				{/if}
		</div>
	</div>
	end-->

	<!--dhiti blog latest posts section-->
	<div class="rta-column rowgap600 outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-row row-col between ycenter glass-top p-top-32 bord-bot p-bot-32">
			<div class="rta-row row-col ycenter colgap200">
				<h3 class="typett">RECENT AT DHĪTI</h3>
				<div class="holds-button-emerge" use:reveal>
					<ButtonEmerge6><a href="/dhiti">All Posts</a></ButtonEmerge6>
				</div>
			</div>
			<div class="colgap100 rta-row ycenter ta-c-m">
				<div class="arrowsanimation">
					<svg
						width="94"
						height="24"
						viewBox="0 0 94 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_2638)">
							<path
								id="arrowl"
								d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowc"
								d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowr"
								d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
								fill="#FE4A49"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_2638">
								<rect width="94" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<small class="typett2">our Blog on Culture, Policy and Education</small>
			</div>
		</div>

		<div class="rta-column rowgap400">
			{#if posts && posts.length > 0}
				{#each posts as item, i}
					<div class="rta-card">
						<div class="rta-card-image">
							<img src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-card-body">
							<div class="category">
								<small>{item.meta.category}</small>
							</div>
							<h4 class="tt-c">
								<strong>
									<a href={item.path}>
										{item.meta.title}
									</a></strong
								>
							</h4>
							<p class="exc">{item.meta.excerpt}</p>
							<p class="writer">
								<strong>
									{item.meta.author}<span />
									{#if item.meta.authortwo && item.meta.authortwo.length > 0}
										and {item.meta.authortwo}
									{/if}</strong
								>
							</p>
							<div class="rta-row ycenter tags colgap200">
								{#each item.meta.tags as taggie}
									<cite>{taggie}</cite>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<!--end-->

	<!--open library latest posts section-->
	<div class="rta-column rowgap600 ycenter outer-box minH" data-lenis-scroll-snap-align="start">
		<div class="rta-row row-col glass-top p-top-32 bord-bot p-bot-32">
			<div class="rta-row row-col ycenter colgap200" use:autoAnimate>
				<h3 class="typett">BṚHAT OPEN LIBRARY</h3>
				<div class="holds-button-emerge" use:reveal>
					<ButtonEmerge5><a href="/openlibrary">Enter Library</a></ButtonEmerge5>
				</div>
			</div>
			<div class="colgap100 rta-row ycenter">
				<div class="arrowsanimation">
					<svg
						width="94"
						height="24"
						viewBox="0 0 94 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_2638)">
							<path
								id="arrowl"
								d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowc"
								d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
								fill="#FE4A49"
							/>
							<path
								id="arrowr"
								d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
								fill="#FE4A49"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_2638">
								<rect width="94" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<small class="typett2">A repository of reading and research material.</small>
			</div>
		</div>

		<div class="rta-grid grid4 colgap400 rowgap400">
			{#if books && books.length > 0}
				{#each books as item, i}
					<div
						class="rta-column rowgap100"
						use:reveal={{
							transition: 'fly',
							y: 100,
							easing: 'easeOutCirc',
							delay: i * 5
						}}
					>
						<h6><a href="/openlibrary/books/{item.slug}" class="typett">{item.Text}</a></h6>
						<small style="text-transform: none">{item.author}</small>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<!--end-->
</div>

<style lang="sass">

#thissmall
	@media screen and (max-width: 1023px)
		text-align: right !important

.rta-card
	display: flex
	border-radius: 0
	p.writer
		color: var(--onlyblack)
	padding: 0
	@media screen and (min-width: 769px)
		flex-direction: row
		column-gap: 32px
		border-bottom: 1px solid var(--contraster2)
		padding-bottom: 32px
		.rta-card-image
			width: 36%
		.rta-card-body
			width: 60%
			display: flex
			flex-direction: column
			row-gap: 16px
			.tags
				cite
					background: #fe4a49
					color: white
					text-transform: uppercase
					font-size: 10px
					font-style: normal
					padding: 2px 4px
	@media screen and (max-width: 768px)
		flex-direction: row
		column-gap: 24px
		border-bottom: 1px solid var(--contraster2)
		padding-bottom: 32px
		.rta-card-image
			width: 30%
			height: 200px
		.rta-card-body
			width: calc(70% - 24px)
			display: flex
			flex-direction: column
			row-gap: 16px
			.tags
				cite
					background: #fe4a49
					color: white
					text-transform: uppercase
					font-size: 10px
					font-style: normal
					padding: 2px 4px
			h4
				font-size: 21px
			p.exc
				font-size: 12px
			p.writer
				font-size: 14px
		

#drashtascreen
	@media screen and (max-width: 1023px)
		justify-content: flex-end

#drashta-drawer
	@media screen and (min-width: 1024px)
		padding-right: 24px

.holds-button-emerge, .arrowsanimation
	@media screen and (max-width: 1023px)
		display: none

.status-sticker
	background: #FE4A49
	padding: 2px 8px
	width: max-content
	border-radius: 14px
	small
		color: white

.rta-card
	transition: all 0.18s cubic-bezier(0.795, 1.270, 0.590, 0.945)

#arrowl
	animation: arrow1 16s ease infinite forwards
#arrowc
	animation: arrow2 16s ease infinite forwards
#arrowr
	animation: arrow3 16s ease infinite forwards

@keyframes arrow1
	0%
		opacity: 0
	50%
		opacity: 1
	99.5%
		opacity: 1
	100%
		opacity: 0

@keyframes arrow2
	0%
		opacity: 0
	60%
		opacity: 1
	99%
		opacity: 1
	100%
		opacity: 0

@keyframes arrow3
	0%
		opacity: 0
	70%
		opacity: 1
	99%
		opacity: 1
	100%
		opacity: 0


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
		background: #FE4A49
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
	.drawer-item.drawerselection
		background: #fe4a49
		color: white

.dark
	.drawer-item
		color: #878787
	.drawer-item.drawerselection
		background: #fe4a49
		color: white	

.drawer-select
	display: flex
	text-decoration: none
	font-size: 18px
	text-transform: uppercase
	justify-content: space-between
	background: none
	border: 1px solid var(--contraster)
	color: white
	align-items: center
	padding: 4px 12px
	border-radius: 20px
	height: 36px
	.rta-row
		transition: 0.1s
		transform-origin: center center
	.rotated
		transform: rotate(180deg)
		transform-origin: center center
		transition: 0.1s

.drawer-item2
	&::after
		background: #FE4A49


</style>
