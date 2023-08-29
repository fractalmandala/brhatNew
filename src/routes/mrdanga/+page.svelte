<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import Header from '$lib/components/NewHeader.svelte';
	import { scale } from 'svelte/transition';
	import { allmrdVids, Shabdavali, mrdangaVids, kavitaVids } from '$lib/utils/supapulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	let vids: string | any[];
	let limiter: number = 8;
	let kalas: string | any[];
	let kavitas: any;
	let rasas: any;
	let iw: number;
	let responsive: boolean;
	let selectedCategory: boolean[] = Array(5).fill(false);
	selectedCategory[1] = true;
	let breakPoint: boolean;
	let fake = false;
	let expandMenu = false;
	let isSwitch = false;

	$metaUrl = 'https://www.brhat.in/mrdanga';
	$metaTitle = 'Bṛhad Mṛdaṅga';
	$metaDescription =
		'The fundamental human aesthetic experience, explored through visual and poetic content. Videos, posts, audio clips and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhadmrdanga.webp';
	$metaType = 'webpage';

	function toggleMenu() {
		expandMenu = !expandMenu;
	}

	function toggleResponsive() {
		responsive = !responsive;
	}

	function fauxfake() {
		fake = !fake;
	}

	function toggleCategory(index: number) {
		selectedCategory[index] = !selectedCategory[index];
		for (let i = 0; i < selectedCategory.length; i++) {
			if (i !== index && selectedCategory[i] === true) {
				selectedCategory[i] = false;
			}
		}
	}

	async function loadMore() {
		try {
			vids = await allmrdVids(limiter);
		} catch (error) {
			console.error('failed', error);
		}
	}

	function moreClick() {
		limiter += 4;
		loadMore();
	}

	$: if (iw <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	onMount(() => {
		(async () => {
			vids = await allmrdVids(limiter);
			kalas = await Shabdavali();
			rasas = await mrdangaVids();
			kavitas = await kavitaVids();
		})();
	});
</script>

<svelte:window bind:innerWidth={iw} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header {isSwitch} hasMenu={false} />

<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<div class="x0" data-lenis-scroll-snap-align="start">
		<ParallaxImage
			--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')"
			--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/mrdanga-hero.webp')"
		/>
	</div>
	<div class="rta-column p-top-128 stout">
		<div class="rta-column instout pagila rowgap400">
			<h5>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the
				instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is
				capable of sounding the divine rhythm across the multiple planes of consciousness. It is so
				divine because the sound that it emanates is not just a human creation.
			</h5>
			<h4>
				It is a tapping into the divine sound which is always playing but not accessible to our
				senses normally.
			</h4>
			<p>
				Sanātana Dharma is a view of immanence. It sees the divine everywhere. The transcendent is
				the Ultimate Truth, the Supreme Consciousness. The view of immanence says that although
				nothing that we perceive is the Ultimate Truth, it is at the same time a form of the
				Ultimate. In this view of immanence a gradient of divinity is created in which individual
				consciousness is always encouraged to elevate itself and ultimately realize its true form as
				the Supreme Consciousness.
			</p>
			<p>
				What are these instruments of realization? In language it is Saṃskṛta and the mantras that
				lead us to the Ultimate. In sādhanā, it is meditation upon the Iṣṭa and the Mantra.
			</p>
			<p>
				In music, it is the instruments of music. And of all the musical instruments some are
				considered the most divine. And three of them, Bāṃsurī, Vīṇā and Mṛdaṅga are the most divine
				of all.
			</p>
			<p>
				Mṛdaṅga is the instrument which makes it possible for us mortals to tap into the divine
				music, capable of leading one to higher states of consciousness. The Nāṭyaśastra mentions
				the instrument at many places proving its antiquity in Indian cultural consciousness. It was
				famous across India and it is mentioned in Cilappatikāram. Bharatanāṭyam also traces its
				origin to Mṛdaṅga.
			</p>
			<p>
				As important to the mārga culture in Bhāratavarṣa as it is to desīya culture, it is an
				integral part of the Yakṣagāna performances in Karnataka and other states of India. The
				famous Koodalmanikyam Temple in Irinjalkuda, Kerala, dedicated to Lord Bharata holds a
				Mṛdaṅga Mela where young artists come to play the divine instrument. Similar will be the
				videos on this project.
			</p>
			<p>
				Like Mṛdaṅga they will tap into the eternal streams of beauty and reality in our culture and
				will voice them in contemporary idiom to convey the eternal truths of the eternal
				civilization to our contemporary times.
			</p>
			<div class="rta-column p-top-32 bord-top bord-bot p-bot-32">
				<h3 class="ta-c-d">EXPLORE BṚHAD MṚDAṄGA</h3>
			</div>
			<div
				class="rta-row stay xcenter-d ycenter rowgap100 p-bot-16"
				use:autoAnimate
				on:click={toggleMenu}
				on:keydown={fauxfake}
			>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(1)}
					on:keydown={fauxfake}
					class:selected={selectedCategory[1]}>Latest</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(2)}
					on:keydown={fauxfake}
					class:selected={selectedCategory[2]}>Rasa</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(3)}
					on:keydown={fauxfake}
					class:selected={selectedCategory[3]}>Kavitā</button
				>
				<button
					class="drawer-item"
					on:click={() => toggleCategory(4)}
					on:keydown={fauxfake}
					class:selected={selectedCategory[4]}>Śabdāvalī</button
				>
			</div>
			<div class="rta-column rowgap300">
				{#if selectedCategory[1]}
					<div class="rta-grid grid2">
						{#if vids && vids.length > 0}
							{#each vids as item, i}
								<div class="rta-column rowgap100 pagilavideo">
									<Youtuber youTubeId={item.videoid} />
									<small class="tt-c">{item.name}</small>
								</div>
							{/each}
						{/if}
					</div>
					<button on:click={moreClick} on:keydown={fauxfake} class="newbutton red">
						Load More
					</button>
				{/if}
				{#if selectedCategory[2]}
					<div class="rta-grid grid2">
						{#if rasas && rasas.length > 0}
							{#each rasas as item, i}
								<div class="rta-column rowgap100 pagilavideo">
									<Youtuber youTubeId={item.videoid} />
									<small class="tt-c">{item.name}</small>
								</div>
							{/each}
						{/if}
					</div>
				{/if}
				{#if selectedCategory[3]}
					<div class="rta-grid grid2">
						{#if kavitas && kavitas.length > 0}
							{#each kavitas as item, i}
								<div class="rta-column rowgap100 pagilavideo">
									<Youtuber youTubeId={item.videoid} />
									<small class="tt-c">{item.name}</small>
								</div>
							{/each}
						{/if}
					</div>
				{/if}
				{#if selectedCategory[4]}
					<div class="rta-grid grid3 stay2">
						{#if kalas && kalas.length > 0}
							{#each kalas as item, i}
								<div
									class="rta-video"
									in:scale={{ duration: 200, delay: i * 25 }}
									out:scale={{ duration: 100, delay: 0 }}
								>
									<video src={item.fileid} poster={item.imagelink} controls={true}
										><track kind="captions" /></video
									>
								</div>
							{/each}
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class="rta-column outer-box limit rowgap600" data-lenis-scroll-snap-align="start" />
</div>

<style lang="sass">

.rta-video
	video
		object-fit: cover
		width: 100%
		height: 100%


.light
	background: white
	h3
		color: #272727

.dark
	background: #171717
	h3
		color: white

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh


.drawer-item
	text-decoration: none
	font-size: 16px
	text-transform: uppercase
	border: none
	background: none
	padding: 4px 12px
	border-radius: 4px
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
		font-size: 14px
		padding: 2px 6px

.light
	.drawer-item
		color: #474747
	.drawer-item.selected
		background: #fe4a49
		color: white

.dark
	.drawer-item
		color: #878787
	.drawer-item.selected
		background: #fe4a49
		color: white	

</style>
