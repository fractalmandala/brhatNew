<script lang="ts">
	import { onMount } from 'svelte';
	import {
		newPages,
		createCurateConsult,
		svEpisodes,
		bodhaEpisodes,
		allChapters,
		allCourses,
		latestMrdanga,
		BOLLatest
	} from '$lib/utils/supapulls';
	import { latestDhitiSix } from '$lib/utils/localpulls';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css/core';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import Youtuber2 from '$lib/components/Youtuber.svelte';
	import CLeft from '$lib/icons/ChevLeft.svelte';
	import CRight from '$lib/icons/ChevRight.svelte';

	let pages: any;
	let threeactions: any;
	let sveps: any;
	let bodheps: any;
	let mrdeps: any;
	let chapters: any;
	let courses: any;
	let books: any;
	let limit = 10;
	let posts: any;

	onMount(async () => {
		pages = await newPages();
		threeactions = await createCurateConsult();
		sveps = await svEpisodes();
		bodheps = await bodhaEpisodes();
		mrdeps = await latestMrdanga();
		chapters = await allChapters();
		courses = await allCourses();
		books = await BOLLatest(limit);
		posts = await latestDhitiSix();
	});
</script>

<section class="mainpagebox pagila rta-column rowgap300">
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
	<div class="sliderbox" id="aboutbrhat">
		<div class="sliver carries" style="background-image: url('/images/newpages/brhat.webp')" />
		<div class="title rta-column rowgap100">
			<h3>B<span class="red">ṛ</span>hat is a Culture Engine</h3>
			<p class="small bord-top p-top-8">culture | policy | leadership</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/brhat.webp')"
			href="/about"
		>
			<img src="/images/newpages/brhat.webp" alt="about brhat" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				To power creatives, research and design rooted in the Indian civilizational consciousness,
				we convert individual, institutional and collective intent into these actions:
			</p>
			{#if threeactions && threeactions.length > 0}
				<div class="rta-column rowgap200">
					{#each threeactions as item}
						<div class="rta-column bord-bot p-bot-8">
							<h6>{item.name}</h6>
							<pre class="small soft">{item.content}</pre>
						</div>
					{/each}
				</div>
			{/if}
			<a href="/about">
				<button class="buttonmain">About Us</button>
			</a>
		</div>
	</div>
	<div class="sliderbox" id="bodha">
		<div class="sliver carries" style="background-image: url('/images/newpages/bodha.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/bodha">B<span class="red">o</span>dha</a></h3>
			<p class="small bord-top p-top-8">conversations on civilization and culture</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/bodha.webp')"
			href="/bodha"
		>
			<img src="/images/newpages/bodha.webp" alt="bodha" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Essential conversations on culture and civilization. The lenses of svayaṃbodha and
				śatrubodha explored in video format.
			</p>
			{#if bodheps && bodheps.length > 0}
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
						perPage: 1,
						pagination: false,
						breakpoints: {
							1023: {
								perPage: 1
							},
							768: {
								perPage: 1
							}
						}
					}}
				>
					<SplideTrack>
						{#each bodheps as item}
							<SplideSlide>
								<div class="videoboxer">
									<Youtuber youTubeId={item.videoid} />
									<p class="small soft p-top-8 ta-c-d ta-c-m">
										<a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
									</p>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap100 p-top-8 m-top-8 bord-top"
					>
						<button
							class="splide__arrow splide__arrow--prev blank-button"
							type="button"
							aria-label="Previous slide"
							aria-controls="splide01-track"
						>
							<CLeft />
						</button>
						<button
							class="splide__arrow splide__arrow--next blank-button"
							type="button"
							aria-label="Next slide"
							aria-controls="splide01-track"
						>
							<CRight />
						</button>
					</div>
				</Splide>
			{/if}
		</div>
	</div>
	<div class="sliderbox" id="svarnanjali">
		<div
			class="sliver carries"
			style="background-image: url('/images/newpages/svarnanjali.webp')"
		/>
		<div class="title rta-column rowgap100">
			<h3><a href="/svarnanjali">Svarṇā<span class="red">ñ</span>jali</a></h3>
			<p class="small bord-top p-top-8">hindu cultural renaissance</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/svarnanjali.webp')"
			href="/svarnanjali"
		>
			<img src="/images/newpages/svarnanjali.webp" alt="svarnanjali" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Video series to discuss literature, arts, drama, architecture, sculpture and cinema from the
				point of view of rasikā, in Sanskṛta Niṣṭha Hindī.
			</p>
			{#if sveps && sveps.length > 0}
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
						perPage: 1,
						pagination: false,
						breakpoints: {
							1023: {
								perPage: 1
							},
							768: {
								perPage: 1
							}
						}
					}}
				>
					<SplideTrack>
						{#each sveps as item}
							<SplideSlide>
								<div class="videoboxer">
									<Youtuber2 youTubeId={item.videoid} />
									<p class="small soft p-top-8 ta-c-d ta-c-m">
										<a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
									</p>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap100 p-top-16 m-top-8 bord-top"
					>
						<button
							class="splide__arrow splide__arrow--prev blank-button"
							type="button"
							aria-label="Previous slide"
							aria-controls="splide01-track"
						>
							<CLeft />
						</button>
						<button
							class="splide__arrow splide__arrow--next blank-button"
							type="button"
							aria-label="Next slide"
							aria-controls="splide01-track"
						>
							<CRight />
						</button>
					</div>
				</Splide>
			{/if}
		</div>
	</div>
	<div class="sliderbox" id="anveshi">
		<div class="sliver carries" style="background-image: url('/images/newpages/anveshi.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/anveshi">B<span class="red">ṛ</span>hat Anveṣī</a></h3>
			<p class="small bord-top p-top-8">culture travel and discovery</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/anveshi.webp')"
			href="/anveshi"
		>
			<img src="/images/newpages/anveshi.webp" alt="anveshi" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				A culture experience and discovery travel program that curates guided temple tours to
				hitherto rarely explored sites across India.
			</p>
			{#if chapters && chapters.length > 0}
				<div class="rta-grid grid2 stay2 rowgap300 colgap300">
					{#each chapters as item}
						<a
							class="rta-column anveshichapters back"
							style="background-image: url('{item.image}')"
							href="/anveshi/{item.chapter}"
						>
							<p>{item.name}</p>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div class="sliderbox" id="drashta">
		<div class="sliver carries" style="background-image: url('/images/newpages/drashta.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/drashta">B<span class="red">ṛ</span>hat Draṣṭā</a></h3>
			<p class="small bord-top p-top-8">online courses on bhārata, itihāsa and dharma</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/drashta.webp')"
			href="/drashta"
		>
			<img src="/images/newpages/drashta.webp" alt="drashta" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Shared online learning program and community. Courses on firekeepers of civilization and
				Indian Knowledge Systems.
			</p>
			{#if courses && courses.length > 0}
				<div class="rta-column">
					{#each courses as item}
						<div class="rta-column drashtabox bord-bot p-bot-8 p-top-8">
							<p style="color: var(--opposite)">
								<a href="/drashta/course/{item.course}">{item.name}</a>
							</p>
						</div>
					{/each}
				</div>
			{/if}
			<a href="/drashta">
				<button class="buttonmain">More on Draṣṭā</button>
			</a>
		</div>
	</div>
	<div class="sliderbox" id="mrdanga">
		<div class="sliver carries" style="background-image: url('/images/newpages/mrdanga.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/mrdanga">B<span class="red">ṛ</span>had Mṛdaṅga</a></h3>
			<p class="small bord-top p-top-8">visual and creative cultural content</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/mrdanga.webp')"
			href="/mrdanga"
		>
			<img src="/images/newpages/mrdanga.webp" alt="mrdanga" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				The fundamental human aesthetic experience, explored in visual medium. Content that cover
				kalās, rasas, utsavas and more.
			</p>
			{#if mrdeps && mrdeps.length > 0}
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
						perPage: 1,
						pagination: false,
						breakpoints: {
							1023: {
								perPage: 1
							},
							768: {
								perPage: 1
							}
						}
					}}
				>
					<SplideTrack>
						{#each mrdeps as item}
							<SplideSlide>
								<div class="videoboxer">
									<Youtuber2 youTubeId={item.videoid} />
									<p class="small soft p-top-8 ta-c-d ta-c-m">
										<a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
									</p>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap100 p-top-16 m-top-8 bord-top"
					>
						<button
							class="splide__arrow splide__arrow--prev blank-button"
							type="button"
							aria-label="Previous slide"
							aria-controls="splide01-track"
						>
							<CLeft />
						</button>
						<button
							class="splide__arrow splide__arrow--next blank-button"
							type="button"
							aria-label="Next slide"
							aria-controls="splide01-track"
						>
							<CRight />
						</button>
					</div>
				</Splide>
			{/if}
		</div>
	</div>
	<div class="sliderbox" id="openlibrary">
		<div
			class="sliver carries"
			style="background-image: url('/images/newpages/openlibrary.webp')"
		/>
		<div class="title rta-column rowgap100">
			<h3><a href="/openlibrary">B<span class="red">ṛ</span>hat Open Library</a></h3>
			<p class="small bord-top p-top-8">online library for indian knowledge systems</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/openlibrary.webp')"
			href="/openlibrary"
		>
			<img src="/images/newpages/openlibrary.webp" alt="openlibrary" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Online repository of Books, Papers, Texts and Scriptures. Gathering point for digitized
				scripture, civilizational literature and more.
			</p>
			{#if books && books.length > 0}
				<div class="rta-column">
					{#each books as item}
						<div class="rta-column drashtabox bord-bot p-bot-8 p-top-8">
							<p style="color: var(--opposite)">
								<a href="/openlibrary/books/{item.slug}">{item.Text}</a>
							</p>
						</div>
					{/each}
				</div>
			{/if}
   <a href="/openlibrary">
				<button class="buttonmain">Explore Library</button>
			</a>
		</div>
	</div>
	<div class="sliderbox" id="dhiti">
		<div class="sliver carries" style="background-image: url('/images/newpages/dhiti.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/dhiti">Dh<span class="red">ī</span>ti</a></h3>
			<p class="small bord-top p-top-8">essays on culture, policy and more</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/dhiti.webp')"
			href="/dhiti"
		>
			<img src="/images/newpages/dhiti.webp" alt="dhiti" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Our blog, featuring long-reads, research essays, cinema reviews, historical work, book
				reviews and much more.
			</p>
			{#if posts && posts.length > 0}
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
						perPage: 1,
						pagination: false,
						breakpoints: {
							1023: {
								perPage: 1
							},
							768: {
								perPage: 1
							}
						}
					}}
				>
					<SplideTrack>
						{#each posts as item}
							<SplideSlide>
								<div class="rta-column dhitibox rowgap100">
									<small class="cat">{item.meta.category}</small>
									<img src={item.meta.image} alt={item.meta.title} />
									<h5><b><a href={item.path}>{item.meta.title}</a></b></h5>
									<pre class="small soft" style="margin: 0">{item.meta.excerpt}</pre>
									<small
										>{item.meta.author}{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											{item.meta.authortwo}
										{/if}</small
									>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div class="splide__arrows splide__arrows--ltr rta-row xcenter-d colgap100 p-top-16">
						<button
							class="splide__arrow splide__arrow--prev blank-button"
							type="button"
							aria-label="Previous slide"
							aria-controls="splide01-track"
						>
							<CLeft />
						</button>
						<button
							class="splide__arrow splide__arrow--next blank-button"
							type="button"
							aria-label="Next slide"
							aria-controls="splide01-track"
						>
							<CRight />
						</button>
					</div>
				</Splide>
			{/if}
		</div>
	</div>
	<div class="sliderbox" id="aryavarta">
		<div class="sliver carries" style="background-image: url('/images/newpages/aryavarta.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/aryavarta">Scrolls of <span class="red">Ā</span>ryavarta</a></h3>
			<p class="small bord-top p-top-8">a bhārata that once was or could have been</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/aryavarta.webp')"
			href="/aryavarta"
		>
			<img src="/images/newpages/aryavarta.webp" alt="aryavarta" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Imaginations of the Bhārata that once was and could have been. Visual storytelling combining
				AI-art with narrative plot and exploration.
			</p>
			<a href="/aryavarta">
				<button class="buttonmain">Browse Chapters</button>
			</a>
		</div>
	</div>
	<div class="sliderbox" id="mandala">
		<div class="sliver carries" style="background-image: url('/images/newpages/mandala.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/mandala">Fractal Ma<span class="red">ṇḍ</span>ala</a></h3>
			<p class="small bord-top p-top-8">investigations into indian civilizational consciousness</p>
		</div>
		<a
			class="image carries"
			style="background-image: url('/images/newpages/mandala.webp')"
			href="/mandala"
		>
			<img src="/images/newpages/mandala.webp" alt="mandala" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				Civilization with multi-level coherence. Research, exploration, and furtherance of Indian
				civilizational consciousness.
			</p>
			<a href="/mandala">
				<button class="buttonmain">Dive In</button>
			</a>
		</div>
	</div>
	<div class="sliderbox" id="rta">
		<div class="sliver carries" style="background-image: url('/images/newpages/rta.webp')" />
		<div class="title rta-column rowgap100">
			<h3><a href="/rta"><span class="red">Ṛ</span>ta in Design</a></h3>
			<p class="small bord-top p-top-8">a new system for design, rooted in dharma</p>
		</div>
		<a class="image carries" style="background-image: url('/images/newpages/rta.webp')" href="/rta">
			<img src="/images/newpages/rta.webp" alt="rta" />
		</a>
		<div class="rest rta-column rowgap300 ybot">
			<p class="mid">
				A new framework for design thinking, centred on the mind of the designer. Inspired by
				universal principles of Dharma.
			</p>
			<a href="/rta">
				<button class="buttonmain">Learn</button>
			</a>
		</div>
	</div>
</section>

<style lang="sass">

.red
 color: #fe4a49  

.sliderbox
 .image
  img
   filter: saturate(0.1)
   transition: all 0.2s
 &:hover
  .image
   img
    filter: saturate(1)  
 @media screen and (min-width: 769px)
  padding-left: 32px
  padding-right: 32px 
 @media screen and (max-width: 768px)
  padding-left: 16px
  padding-right: 16px  

.carries
 background-size: cover
 background-repeat: no-repeat

.sliver.carries
 background-position: center left
 filter: saturate(0.1)

.image.carries
 background-position: center center

.buttonmain
 background: var(--peach)
 border: 1px solid var(--peach)
 color: white
 text-transform: uppercase
 font-size: 15px
 padding: 4px 16px
 border-radius: 4px
 transform-origin: center center
 transition: all 0.08s
 cursor: pointer
 &:hover
  transform: scale(0.9)
 &:active
  background: transparent
  color: var(--peach)

.sliderbox
 height: 100vh
 width: 100vw
 display: grid
 grid-template-rows: auto
 grid-auto-flow: row
 .sliver
  grid-area: sliver
 .title
  grid-area: title
  z-index: 1
  h3
   color: var(--opposite)
   text-transform: uppercase
  p
   color: var(--peach) 
 .image
  grid-area: image
  img
   object-fit: cover
   width: 100%
   height: 100%
 .rest
  grid-area: rest  
  p
   color: var(--greyish)
 @media screen and (min-width: 1024px)
  grid-template-columns: 4% 24% 32% 40%
  grid-template-areas: "sliver title image rest"
  padding-top: 64px
  padding-bottom: 64px
  .title, .rest
   padding: 32px
  .title h3, .title p
   text-align: right
 @media screen and (max-width: 1023px) and (min-width: 769px)
  grid-template-columns: 4% 32% 24% 40%  
  grid-template-areas: "sliver title image rest"
  padding-top: 64px
  padding-bottom: 64px
  .title, .rest
   padding: 32px
  .title h3, .title p
   text-align: right   
 @media screen and (max-width: 768px)
  grid-template-columns: 100%
  grid-template-areas: "image" "title" "rest"
  height: max-content
  align-content: start
  align-items: start
  padding-top: 64px
  padding-bottom: 16px
  overflow-y: hidden
  row-gap: 16px
  border-bottom: 1px solid var(--contraster)
  .sliver
   display: none
  .image
   img
    height: 216px
  .rest
   padding: 0
  .title
   padding: 0

.anveshichapters
 height: 128px  
 padding-bottom: 8px
 padding-left: 8px
 justify-content: flex-end
 filter: saturate(0.1)
 border-radius: 4px
 transition: all 0.1s
 p
  background: rgba(0,0,0,0.53)
  color: white !important
  width: max-content
  max-width: 100%
  padding: 4px
  font-size: 16px
 &:hover
  filter: saturate(1) 

.drashtabox
 p
  text-transform: capitalize
 &:hover
  a
   text-decoration: underline  

.dhitibox
 h5
  color: var(--opposite)
  a
   color: inherit
  &:hover
   a
    text-decoration: underline 
 img
  filter: saturate(0.1) 
  transition: 0.1s
 &:hover
  img
   filter: saturate(1)   

.videoboxer
 padding: 0 24px

.accordion
 display: flex
 flex-direction: row
 height: calc(100vh - 48px)
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
  padding-top: 72px
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
 padding: 64px 0 0 0
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
