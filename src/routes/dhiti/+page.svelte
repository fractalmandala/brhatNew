<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import Header from '$lib/components/DhitiHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import {
		latestDhitiFour,
		allFeaturedPosts,
		allBodhas,
		allIKS,
		allCandP,
		allDharmaToday
	} from '$lib/utils/localpulls';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import { slide } from 'svelte/transition';

	$metaUrl = 'https://www.brhat.in/dhiti';
	$metaTitle = 'Dhīti at Bṛhat';
	$metaDescription =
		'Our blog, Dhīti, is an attempt to decode the aesthetics of culture manifest in art and literature, in the intention they were originally perceived in.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/dhiti.webp';
	$metaType = 'webpage';

	let latest: any;
	let mainer: any;
	let feat: any;
	let bodhas: any;
	let iks: any;
	let candp: any;
	let dharmas: any;
	let limitBodha = 6;
	let openCat = false;

	defaultFullBox({
		transition: 'fly',
		y: 120,
		opacity: 0,
		duration: 300
	});

	function expandCategories() {
		openCat = !openCat;
	}

	onMount(async () => {
		latest = await latestDhitiFour(1, 6);
		mainer = await latestDhitiFour(0, 1);
		feat = await allFeaturedPosts();
		bodhas = await allBodhas(limitBodha);
		iks = await allIKS(limitBodha);
		candp = await allCandP(limitBodha);
		dharmas = await allDharmaToday(limitBodha);
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header />
<section class="rta-column conta">
	<!--
	<section class="rta-row bannerstrip">
		<button class="blank-button" on:click={expandCategories}>
			<p>
				{#if openCat}
					Close
				{:else}
					Categories
				{/if}
			</p>
		</button>
		{#if openCat}
			<div class="rta-row colgap200 pegged" transition:slide>
				<p class="mid">The Two Bodhas</p>
				<p class="mid">Indian Knowledge Systems</p>
				<p class="mid">Culture and Policy</p>
				<p class="mid">Dharma Today</p>
			</div>
		{/if}
	</section>
	-->
	<section class="rta-grid grid3 tricol pagila">
		<section class="rta-column sideleft rowgap400">
			<h5 class="bord-bot title p-bot-8">Latest</h5>
			<div class="rta-column rowgap300">
				{#if latest && latest.length > 0}
					{#each latest as item}
						<div class="rta-column p-bot-32" style="border-bottom: 1px solid var(--contraster)">
							<div class="rta-row colgap300">
								<small class="small">{item.meta.category}</small>
							</div>
							<p class="mid">
								<strong>
									<a href={item.path}>{item.meta.title}</a>
								</strong>
							</p>
							<p class="small">
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									and {item.meta.authortwo}{/if}
							</p>
							{#if item.meta.tags && item.meta.tags.length > 0}
								<div class="rta-row colgap200 cites">
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		</section>
		<section class="rta-column mainpage">
			{#if mainer && mainer.length > 0}
				{#each mainer as item}
					<div class="rta-image">
						<img src={item.meta.image} alt={item.meta.title} />
					</div>
					<div class="rta-column p-top-16 rowgap100">
						<h5 class="title">
							<a href={item.path}>{item.meta.title}</a>
						</h5>
						<p class="soft small">{item.meta.excerpt}</p>
					</div>
					<p class="mid p-top-8 p-bot-8">
						{item.meta.author}
						{#if item.meta.authortwo && item.meta.authortwo.length > 0}
							and {item.meta.authortwo}{/if}
					</p>
					<div class="rta-row colgap300 between p-top-8 bord-top">
						<small class="xsmall">{item.meta.category}</small>
						<div class="rta-row colgap200">
							{#if item.meta.tags && item.meta.tags.length > 0}
								{#each item.meta.tags as tag}
									<cite>{tag}</cite>
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			{/if}
		</section>
		<section class="rta-column sideright rowgap400">
			<h5 class="bord-bot p-bot-8 title">Featured</h5>
			<div class="rta-column rowgap300">
				{#if feat && feat.length > 0}
					{#each feat as item}
						<div
							class="rta-row stay colgap300 p-bot-24"
							style="border-bottom: 1px solid var(--contraster)"
						>
							<div class="rta-image w32">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
							<div class="rta-column rowgap50 w64">
								<p class="mid">
									<strong>
										<a href={item.path} class="highlight">{item.meta.title}</a>
									</strong>
								</p>
								{#if item.meta.tags && item.meta.tags.length > 0}
									<div class="rta-row colgap200">
										{#each item.meta.tags as tag}
											<cite>{tag}</cite>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</section>
	</section>
	<section class="rta-column rowgap400 pagila categorybox">
		<div class="rta-column bord-top bord-bot p-top-16 p-bot-16" use:reveal>
			<h3>Śatrubodha and Svayaṃbodha</h3>
			<p class="soft">Essays that articulate the two great wheels of civilization</p>
		</div>
		<div class="rta-grid grid3 colgap500 rowgap600">
			{#if bodhas && bodhas.length > 0}
				{#each bodhas as item, i}
					<div
						class="rta-column rowgap200"
						use:reveal={{ transition: 'scale', duration: 200, delay: i + 50, opacity: 0, scale: 0 }}
					>
						<div class="rta-image image-20-20">
							<img src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-column">
							<div class="rta-row colgap200 bord-bot p-bot-8">
								{#if item.meta.tags && item.meta.tags.length > 0}
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								{/if}
							</div>
							<h5 class="title p-top-8"><a href={item.path}>{item.meta.title}</a></h5>
							<p class="small p-top-8">{item.meta.excerpt}</p>
							<div class="rta-row between ycenter bord-top m-top-8">
								<small class="tt-c"
									><strong
										>{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											and {item.meta.authortwo}{/if}</strong
									></small
								>
								<small class="small" style="padding-top: 6px">{item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-row colgap300 xcenter-d">
			<a href="/dhiti/category/bodhas"> <button class="newbutton big">See All</button></a>
		</div>
	</section>
	<section class="rta-column rowgap400 pagila categorybox">
		<div class="rta-column bord-top bord-bot p-top-16 p-bot-16" use:reveal>
			<h3>Indian Knowledge Systems</h3>
			<p class="soft">On Learning, Education and Epistemes of Indian heritage</p>
		</div>
		<div class="rta-grid grid3 colgap500 rowgap600">
			{#if iks && iks.length > 0}
				{#each iks as item, i}
					<div
						class="rta-column rowgap200"
						use:reveal={{ transition: 'scale', duration: 200, delay: i + 50, opacity: 0, scale: 0 }}
					>
						<div class="rta-image image-20-20">
							<img src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-column">
							<div class="rta-row colgap200 bord-bot p-bot-8">
								{#if item.meta.tags && item.meta.tags.length > 0}
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								{/if}
							</div>
							<h5 class="title p-top-8"><a href={item.path}>{item.meta.title}</a></h5>
							<p class="small p-top-8">{item.meta.excerpt}</p>
							<div class="rta-row between ycenter bord-top m-top-8">
								<small class="tt-c"
									><strong
										>{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											and {item.meta.authortwo}{/if}</strong
									></small
								>
								<small class="small" style="padding-top: 6px">{item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-row colgap300 xcenter-d">
			<a href="/dhiti/category/iks"> <button class="newbutton big">See All</button></a>
		</div>
	</section>
	<section class="rta-column rowgap400 pagila categorybox">
		<div class="rta-column bord-top bord-bot p-top-16 p-bot-16" use:reveal>
			<h3>Culture and Policy</h3>
			<p class="soft">Coverage on issues of culture and culture-compatible policy</p>
		</div>
		<div class="rta-grid grid3 colgap500 rowgap600">
			{#if candp && candp.length > 0}
				{#each candp as item, i}
					<div
						class="rta-column rowgap200"
						use:reveal={{ transition: 'scale', duration: 200, delay: i + 50, opacity: 0, scale: 0 }}
					>
						<div class="rta-image image-20-20">
							<img src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-column">
							<div class="rta-row colgap200 bord-bot p-bot-8">
								{#if item.meta.tags && item.meta.tags.length > 0}
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								{/if}
							</div>
							<h5 class="title p-top-8"><a href={item.path}>{item.meta.title}</a></h5>
							<p class="small p-top-8">{item.meta.excerpt}</p>
							<div class="rta-row between ycenter bord-top m-top-8">
								<small class="tt-c"
									><strong
										>{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											and {item.meta.authortwo}{/if}</strong
									></small
								>
								<small class="small" style="padding-top: 6px">{item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-row colgap300 xcenter-d">
			<a href="/dhiti/category/cultureandpolicy"> <button class="newbutton big">See All</button></a>
		</div>
	</section>
	<section class="rta-column rowgap400 pagila categorybox">
		<div class="rta-column bord-top bord-bot p-top-16 p-bot-16" use:reveal>
			<h3>Dharma Today</h3>
			<p class="soft">Contemporary media, cinema, events and issues of Dhārmika interest</p>
		</div>
		<div class="rta-grid grid3 colgap500 rowgap600">
			{#if dharmas && dharmas.length > 0}
				{#each dharmas as item, i}
					<div
						class="rta-column rowgap200"
						use:reveal={{ transition: 'scale', duration: 200, delay: i + 50, opacity: 0, scale: 0 }}
					>
						<div class="rta-image image-20-20">
							<img src={item.meta.image} alt={item.meta.title} />
						</div>
						<div class="rta-column">
							<div class="rta-row colgap200 bord-bot p-bot-8">
								{#if item.meta.tags && item.meta.tags.length > 0}
									{#each item.meta.tags as tag}
										<cite>{tag}</cite>
									{/each}
								{/if}
							</div>
							<h5 class="title p-top-8"><a href={item.path}>{item.meta.title}</a></h5>
							<p class="small p-top-8">{item.meta.excerpt}</p>
							<div class="rta-row between ycenter bord-top m-top-8">
								<small class="tt-c"
									><strong
										>{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											and {item.meta.authortwo}{/if}</strong
									></small
								>
								<small class="small" style="padding-top: 6px">{item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-row colgap300 xcenter-d">
			<a href="/dhiti/category/dharmatoday"> <button class="newbutton big">See All</button></a>
		</div>
	</section>
</section>

<style lang="sass">

.highlight
	color: var(--textone)
	&:hover
		color: #fe4a49

p.mid
	a
		&:hover
			text-decoration: underline

.cites
	width: max-content
	margin-top: 8px

small.small
	color: #fe4a49
	padding-bottom: 4px

small.xsmall
	background: #fe4a49
	color: white
	padding: 2px 4px
	font-size: 10px
	font-weight: bold

.conta
	min-height: 144px
	@media screen and (min-width: 1024px)
		padding-top: 128px

.categorybox
	@media screen and (min-width: 1024px)
		padding-left: 48px
		padding-right: 48px
		padding-bottom: 48px
		img
			border-radius: 8px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px
		padding-bottom: 32px
		
.tricol
	min-height: calc(100vh - 144px)
	border-bottom: 1px solid var(--contraster)
	@media screen and (min-width: 1024px)
		.sideleft
			width: 320px
			border-right: 1px solid var(--contraster)
			padding: 48px
		.sideright
			width: 448px
			border-left: 1px solid var(--contraster)
			padding: 48px
		.mainpage
			width: calc(100vw - 768px)
			padding: 48px
	@media screen and (max-width: 768px)
		grid-template-areas: "mainpage" "sideleft" "sideright"
		.mainpage
			grid-area: mainpage
			padding-left: 24px
			padding-right: 24px
			padding-top: 160px
			padding-bottom: 48px
		.sideleft
			padding-left: 24px
			padding-right: 24px
			grid-area: sideleft
		.sideright
			padding-left: 24px
			padding-right: 24px
	

</style>
