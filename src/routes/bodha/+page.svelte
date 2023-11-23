<script lang="ts">
	import { onMount } from 'svelte';
	import { bodhaVids } from '$lib/utils/supapulls';
	import Header from '$lib/components/NewHeader.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import '@splidejs/splide/css/core';
	import CLeft from '$lib/icons/ChevLeft.svelte';
	import CRight from '$lib/icons/ChevRight.svelte';

	$metaTitle = 'Bodha at Bṛhat';
	$metaDescription =
		'Essential conversations on culture and civilization. The lenses of svayaṃbodha and śatrubodha explored in video format.';
	$metaUrl = 'https://www.brhat.in/bodha';
	$metaImage = '/images/newpages/bodha.webp';

	let vids: any;

	onMount(async () => {
		vids = await bodhaVids();
	});
</script>

<Header isSwitch={false} />
<div class="gifhold">
	<img
		src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/22bodha/bodhagifnew.gif"
		alt="bodhagif"
	/>
</div>
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column p-top-32 p-bot-32 bord-top">
		<h5 class="title ta-c p-bot-8">Civilizational and Cultural Discourse</h5>
		<p class="soft ta-c">
			Essential conversations on culture and civilization. The lenses of svayaṃbodha and śatrubodha
			explored in video format.
		</p>
  <p class="ta-c">Visit us on <a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer" style="color: #fe4a49">Youtube</a></p>
	</section>
	<section class="rta-column p-top-32 p-bot-32 bord-top">
		{#if vids && vids.length > 0}
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
					{#each vids as item}
						<SplideSlide>
							<div class="videosboxer">
								<Youtuber youTubeId={item.videoid} />
								<h5 class="p-top-8 ta-c-d ta-c-m">
									<a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
        </h5>
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
	</section>
 <section class="rta-column p-top-32 bord-top">
  <p class="mid soft ta-c">
   Our foundational work is to provide self-authoring pathways for Svayambodha, Śatrubodha and Saudaryabodh. The Bodha video series is built on a creative core - our 'Schools of Thought' and the 'Firekeepers of Civilization'.
  </p>
  <h6 class="ta-c">We now present these as  crucial conversations on civilization.</h6>
 </section>
</Shell>

<style lang="sass">

.gifhold
 height: 100vh
 width: 100vw
 display: flex
 flex-direction: column
 justify-content: center
 background: white
 img 
   object-fit: contain
   height: 80%
 @media screen and (max-width: 768px)
  height: 50vh

.videosboxer
 h5
  color: var(--onlyblack)
  a
   color: inherit
  &:hover
   a
    &:hover
     color: #fe4a49 

</style>
