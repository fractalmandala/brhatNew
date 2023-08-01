<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import { slide } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import {
		createCurateConsult,
		threeConvictions,
		brhatAdvisors,
		brhatTeam,
		brhatPartners
	} from '$lib/utils/supapulls';
	import { authorfiltered } from '$lib/utils/localpulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';

	let threeactions: string | any[];
	let threeareas: string | any[];
	let advisors: string | any[];
	let partners: string | any[];
	let team: string | any[];
	let writings: any;
	let authorCardOn = Array(12).fill(false);
	let fake = false;
	let alignGrid = false;
	let y: number;

	defaultFullBox({
		transition: 'fly',
		y: 120,
		opacity: 0,
		duration: 300
	});

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

	async function selectedWriter(name: string) {
		writings = await authorfiltered(name);
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

<!--parallax header-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp')"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<h1 use:reveal>Bṛhat is a <span style="color: #fe4a49">Culture Engine</span></h1>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			To power creatives, research and design rooted in the Indian civilizational consciousness. We
			convert individual, institutional and collective intent into action.
		</h5>
		<div class="rta-grid grid3 colgap600 rowgap300">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item, i}
					<div
						class="rta-column null rowgap200"
						use:reveal={{ transition: 'scale', duration: 400, delay: i + 40, opacity: 0, scale: 0 }}
					>
						<div class="rta-image">
							<img class="img-128" src={item.image} alt={item.name} />
						</div>
						<h6 class="ta-l title">{item.name}</h6>
						<pre class="ta-l small">{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="constrains">
		<div
			class="rta-column rowgap200 bord-top bord-bot p-top-16 p-bot-16"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<h5>
				An engine is an instrument for transformation, and this engine is to build the
				self-perpetuating civilizational moment.
			</h5>
			<h5>How does one go about doing that?</h5>
			<h5>At Bṛhat, we're acutely aware of three constraints:</h5>
		</div>
		{#if threeareas && threeareas.length > 0}
			<div class="rta-grid grid3 colgap600 rowgap300">
				{#each threeareas as item, i}
					<div
						class="rta-column null rowgap200"
						use:reveal={{
							transition: 'scale',
							duration: 400,
							delay: i + 40,
							opacity: 0,
							scale: 0
						}}
					>
						<div class="rta-image">
							<img class="img-128" src={item.image} alt={item.name} />
						</div>
						<h6 class="title">{item.name}</h6>
						<pre class="small">{item.content}</pre>
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-bot-64" id="momentisnow">
		<h4 use:reveal>
			But the severest constraint of them all is Time, and more specifically – Moment.
		</h4>
		<div
			class="rta-column rowgap200"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<h5>
				The time for a Culture Engine is now, because we are in the midst of a civilizational
				moment. What is a civilizational moment? How rare or regular are such moments? How must we
				respond to them?
			</h5>
			<h5>
				Read more on the need we see, why we think this is the time to address it, and about our
				self-identity:
			</h5>
		</div>
		<div class="onpagelinks rta-column rowgap200 p-top-16">
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 0, opacity: 0, scale: 0 }}>
				<a href="/about/svatahsiddha">SVATAḤSIDDHA</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 20, opacity: 0, scale: 0 }}>
				<a href="/about/anatomy">ANATOMY OF A CIVILIZATIONAL MOMENT</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 50, opacity: 0, scale: 0 }}>
				<a href="/about/whatkrishnameanstous">WHAT ŚRĪ KṚṢṆA MEANS TO US</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 80, opacity: 0, scale: 0 }}>
				<a href="/about/namelogo">NĀMARŪPA - NAME AND LOGO</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 90, opacity: 0, scale: 0 }}>
				<a href="/about/values">PRATIJÑĀ - VALUES</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 100, opacity: 0, scale: 0 }}>
				<a href="/about/#advisors">ADVISORS</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 100, opacity: 0, scale: 0 }}>
				<a href="/about/#partners">PARTNERS</a>
			</h3>
			<h3 use:reveal={{ transition: 'scale', duration: 400, delay: 110, opacity: 0, scale: 0 }}>
				<a href="/about/#team">TEAM</a>
			</h3>
		</div>
	</section>
	<section class="rta-column rowgap400 min100 p-top-64" id="advisors">
		<h2 class="bord-top bord-bot p-top-16 p-bot-24" use:reveal>Advisors</h2>
		{#if advisors && advisors.length > 0}
			<div class="rta-grid grid4 colgap600 rowgap400">
				{#each advisors as item, i}
					<div
						class="rta-column col-row rowgap200"
						use:reveal={{ transition: 'scale', duration: 400, delay: i + 40, opacity: 0, scale: 0 }}
					>
						<div class="rta-image" id="imagebox4">
							<img src={item.image} alt={item.id} />
						</div>
						<div class="rta-column rowgap100">
							<h6 class="title">{item.name}</h6>
							<small>{item.title}</small>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-top-64" id="partners">
		<h2 class="bord-top bord-bot p-top-16 p-bot-24" use:reveal>Partners</h2>
		{#if partners && partners.length > 0}
			<div class="rta-grid grid8 colgap300 stay4 rowgap300">
				{#each partners as item, i}
					<div
						class="box partner-bb"
						use:reveal={{ transition: 'scale', duration: 400, delay: i + 40, opacity: 0, scale: 0 }}
					>
						<a href={item.link} target="_blank" rel="noreferrer">
							<img src={item.image} alt={item.id} />
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-top-64">
		<h2 class="bord-top bord-bot p-top-16 p-bot-24" use:reveal>Team</h2>
		{#if team && team.length > 0}
			<div class="rta-grid grid2 colgap600 rowgap600" id="team">
				{#each team as item, i}
					<div
						class="rta-row rowgap400 colgap300"
						class:openedcard={authorCardOn[i]}
						on:keydown={fauxfake}
						use:reveal={{ transition: 'scale', duration: 400, delay: i + 40, opacity: 0, scale: 0 }}
					>
						<div class="rta-image w32">
							<img src={item.image} alt={item.id} />
						</div>
						<div class="rta-column p-top-8 rowgap100 w64">
							<h6 class="title">{item.name}</h6>
							<small class="bord-bot p-bot-16">{item.title}</small>
							<div class="rta-column rowgap100">
								<p class="small">{item.bio}</p>
								{#if item.writer === true}
									<button
										class="blank-button ta-l holds-link"
										on:click={() => openAuthorCard(i)}
										on:click={() => selectedWriter(item.name)}
									>
										<p class="mid">Writings at Dhīti</p>
									</button>
								{/if}
							</div>
						</div>
					</div>
					{#if authorCardOn[i]}
						<div
							class="rta-column rowgap200"
							class:openedcard={authorCardOn[i]}
							on:keydown={fauxfake}
							in:slide={{ duration: 200, delay: 200, axis: 'y', easing: quintOut }}
							out:slide={{ duration: 200, axis: 'y', easing: quintIn }}
						>
							{#if writings && writings.length > 0}
								{#each writings as item}
									<p class="title"><a href={item.path}>{item.meta.title}</a></p>
								{/each}
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
</Shell>

<style lang="sass">

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
				border-radius: 80px
			@media screen and (max-width: 1023px)
				width: 120px
				height: 120px
				border-radius: 60px
	

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
