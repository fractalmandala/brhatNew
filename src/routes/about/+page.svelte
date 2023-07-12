<script lang="ts">
	import { onMount } from 'svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { themeMode } from '$lib/stores/globalstores';
	import { scale } from 'svelte/transition';
	import {
		createCurateConsult,
		threeConvictions,
		brhatAdvisors,
		brhatTeam,
		brhatPartners
	} from '$lib/utils/supapulls';
	import PankajSaxena from '$lib/authors/PankajSaxena.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import RaghavaKrishna from '$lib/authors/RaghavaKrishna.svelte';
	import AkshayJha from '$lib/authors/AkshayJha.svelte';
	import AmritPandey from '$lib/authors/AmritPandey.svelte';
	import AnshumanPanda from '$lib/authors/AnshumanPanda.svelte';
	import AnuragShukla from '$lib/authors/AnuragShukla.svelte';
	import KavitaKrishna from '$lib/authors/KavitaKrishna.svelte';
	import NiveditaTiwari from '$lib/authors/NiveditaTiwari.svelte';
	import SaiPriya from '$lib/authors/SaiPriya.svelte';
	import SushantGangoli from '$lib/authors/SushantGangoli.svelte';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';

	let threeactions: string | any[];
	let threeareas: string | any[];
	let advisors: string | any[];
	let partners: string | any[];
	let team: string | any[];
	let authorCardOn = Array(12).fill(false);
	let fake = false;
	let alignGrid = false;
	let y: number;

	$metaUrl = 'https://www.brhat.in/about';
	$metaTitle = 'About Bṛhat';
	$metaDescription =
		'Bṛhat is a culture engine. To power creatives, research and design rooted in the Indian civilizational consciousness.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
	$metaType = 'webpage';

	function openAuthorCard(index: number) {
		authorCardOn[index] = !authorCardOn[index];
		for (let i = 0; i < authorCardOn.length; i++) {
			if (i !== index && authorCardOn[i] === true) {
				authorCardOn[i] = false;
			}
		}
		if (alignGrid === false) {
			alignGrid = true;
		}
	}

	function fauxfake() {
		fake = !fake;
	}

	function scrollToTeam() {
		const teamElement = document.getElementById('team');
		if (teamElement) {
			teamElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	onMount(() => {
		(async () => {
			threeactions = await createCurateConsult();
			threeareas = await threeConvictions();
			advisors = await brhatAdvisors();
			partners = await brhatPartners();
			team = await brhatTeam();
		})();
	});
</script>

<svelte:window bind:scrollY={y} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<!--parallax header-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"
	/>
</div>
<!--end-->
<div class="rta-column stout p-top-128">
	<div class="rta-column rowgap400 instout pagila">
		<div class="rta-column rowgap400 bord-bot p-bot-64">
			<h1>Bṛhat is a Culture Engine</h1>
			<h5>
				To power creatives, research and design rooted in the Indian civilizational consciousness.
			</h5>
			<div class="motifimage rta-image">
				{#if $themeMode}
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/motif-black.png"
						alt="motifblack"
						style="transform: rotate({y / 2}deg)"
					/>
				{:else}
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/motif-white.png"
						alt="motifwhite"
						style="transform: rotate({y / 2}deg)"
					/>
				{/if}
			</div>
		</div>
		<div class="rta-column rowgap400 p-top-64 bord-bot p-bot-64">
			<h5>
				We convert individual, institutional and collective intent into action, across 3 dimensions.
			</h5>
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="rta-column null rowgap100 p-bot-32">
						<h6>{item.name}</h6>
						<pre>{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-column rowgap400 p-top-64 bord-bot p-bot-64">
			<h5 class="typett">
				An engine is an instrument for transformation, and this engine is to build the
				self-perpetuating civilizational moment.
			</h5>
			<h5 class="typett">How does one go about doing that?</h5>
			<h5>At Bṛhat, we're acutely aware of three constraints:</h5>
			{#if threeareas && threeareas.length > 0}
				{#each threeareas as item}
					<div class="rta-column null rowgap100 p-bot-32">
						<h6>{item.name}</h6>
						<pre style="width: 60%; margin-bottom: 0">{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-column rowgap400 p-top-64">
			<h4 class="typett">
				But the severest constraint of them all is Time, and more specifically – Moment.
			</h4>
			<h5 class="typett">
				The time for a Culture Engine is now, because we are in the midst of a civilizational
				moment. What is a civilizational moment? How rare or regular are such moments? How must we
				respond to them?
			</h5>
			<h6 class="typett">
				Read more on the need we see, why we think this is the time to address it, and about our
				self-identity:
			</h6>
		</div>
		<div class="onpagelinks rta-column rowgap400 p-top-64">
			<h3><a href="/about/svatahsiddha">SVATAḤSIDDHA</a></h3>
			<h3><a href="/about/anatomy">ANATOMY OF A CIVILIZATIONAL MOMENT</a></h3>
			<h3><a href="/about/whatkrishnameanstous">WHAT ŚRĪ KṚṢṆA MEANS TO US</a></h3>
			<h3><a href="/about/namelogo">NĀMARŪPA - NAME AND LOGO</a></h3>
			<h3><a href="/about/values">PRATIJÑĀ - VALUES</a></h3>
			<h3><a href="/about/#advisors">ADVISORS</a></h3>
			<h3><a href="/about/#partners">PARTNERS</a></h3>
			<h3><a href="/about/#team">TEAM</a></h3>
		</div>
		<div class="rta-column rowgap400 p-top-64">
			<h2 class="p-bot-32">Advisors</h2>
			{#if advisors && advisors.length > 0}
				<div class="rta-column rowgap600" id="advisors">
					{#each advisors as item}
						<div class="rta-row stay rowgap400">
							<div class="rta-image w32" id="imagebox4">
								<img src={item.image} alt={item.id} />
							</div>
							<div class="rta-column w64 rowgap100">
								<h6>{item.name}</h6>
								<small>{item.title}</small>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="rta-column rowgap400 p-top-64">
			<h2 class="p-bot-32">Partners</h2>
			{#if partners && partners.length > 0}
				<div class="rta-grid grid4 stay4" id="partners">
					{#each partners as item}
						<div class="box partner-bb">
							<a href={item.link} target="_blank" rel="noreferrer">
								<img src={item.image} alt={item.id} />
							</a>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="rta-column rowgap400 p-top-64">
			<h2 class="p-bot-32">Team</h2>
			{#if team && team.length > 0}
				<div class="rta-column rowgap600" id="team">
					{#each team as item, i}
						<div
							class="rta-row rowgap400 colgap300"
							class:openedcard={authorCardOn[i]}
							on:keydown={fauxfake}
						>
							<div class="rta-image w32">
								<img src={item.image} alt={item.id} />
							</div>
							<div class="rta-column p-top-8 rowgap100 w64">
								<h6 class="nohemi">{item.name}</h6>
								<small class="bord-bot p-bot-16">{item.title}</small>
								<div class="rta-column rowgap100">
									<p style="font-size: 14px">{item.bio}</p>
									{#if item.name === 'Pankaj Saxena'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Pankaj</strong>
										</p>
									{:else if item.name === 'Raghava Krishna'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Raghava</strong>
										</p>
									{:else if item.name === 'Amritanshu Pandey'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Amrit</strong>
										</p>
									{:else if item.name === 'Kavita Krishna Meegama'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Kavita</strong>
										</p>
									{:else if item.name === 'Anurag Shukla'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Anurag</strong>
										</p>
									{:else if item.name === 'Nivedita Tiwari'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Nivedita</strong>
										</p>
									{:else if item.name === 'Sai Priya Chodavarapu'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Sai</strong>
										</p>
									{:else if item.name === 'Akshay Jha'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Akshay</strong>
										</p>
									{:else if item.name === 'Anshuman Panda'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Anshuman</strong>
										</p>
									{:else if item.name === 'Sushant Gangoli'}
										<p
											style="color: var(--textone); cursor: pointer; font-size: 16px"
											on:click={() => openAuthorCard(i)}
											on:keydown={fauxfake}
										>
											<strong>Writings by Sushant</strong>
										</p>
									{/if}
								</div>
							</div>
						</div>
						{#if authorCardOn[i]}
							<div
								class="rta-column rowgap400"
								class:openedcard={authorCardOn[i]}
								on:keydown={fauxfake}
							>
								{#if item.name === 'Pankaj Saxena'}
									<PankajSaxena />
								{:else if item.name === 'Raghava Krishna'}
									<RaghavaKrishna />
								{:else if item.name === 'Anurag Shukla'}
									<AnuragShukla />
								{:else if item.name === 'Kavita Krishna Meegama'}
									<KavitaKrishna />
								{:else if item.name === 'Nivedita Tiwari'}
									<NiveditaTiwari />
								{:else if item.name === 'Akshay Jha'}
									<AkshayJha />
								{:else if item.name === 'Anshuman Panda'}
									<AnshumanPanda />
								{:else if item.name === 'Sai Priya Chodavarapu'}
									<SaiPriya />
								{:else if item.name === 'Sushant Gangoli'}
									<SushantGangoli />
								{:else if item.name === 'Amritanshu Pandey'}
									<AmritPandey />
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.motifimage
	img
		transform-origin: center center
	@media screen and (min-width: 1024px)
		width: 200px
		height: 200px
	@media screen and (max-width: 1023px)
		height: 144px
		width: 144px
		margin: auto
	

#imagebox4
	@media screen and (min-width: 769px)
		img
			width: 160px
			height: 160px
	@media screen and (max-width: 768px)
		img
			width: 120px
			height: 120px


#team
	.rta-image
		img
		@media screen and (min-width: 1024px)
			width: 160px
			height: 160px
		@media screen and (max-width: 1023px)
			width: 120px
			height: 120px
	

.x0
	height: 100vh
	overflow: hidden


.onpagelinks h3
	transition: 0.15s
	&:hover
		color: #fe4a49

.partner-bb a
	img
		object-fit: contain
		width: 100%

</style>
