<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import Header from '$lib/components/DhitiHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		fontSize
	} from '$lib/stores/metastores';
	import { themeMode } from '$lib/stores/globalstores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import PageProgress from '$lib/components/PageProgress.svelte';
	import { latestDhitiTen } from '$lib/utils/localpulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import { brhatTeamMember } from '$lib/utils/supapulls';
	import { authorfiltered } from '$lib/utils/localpulls';

	export let data;

	$metaUrl = $page.url.pathname;
	$metaTitle = data.title;
	$metaDescription = data.excerpt;
	$metaImage = data.image;
	$metaType = 'article';

	let posts: any;
	let thisAuthorPosts: any;
	let fake: boolean = false;
	let member: any;
	let member2: any;
	let ref: HTMLElement | null = null;
	let y: number;
	let fsize = Array(3).fill(false);
	let ftitle = Array(3).fill(false);
	let scY: number;
	fsize[1] = true;
	let observer: any;

	function toggleFont(index: number) {
		fsize[index] = !fsize[index];
		for (let i = 0; i < fsize.length; i++) {
			if (i !== index && fsize[i] === true) {
				fsize[i] = false;
			}
		}
	}

	function toggleTitle(index: number) {
		ftitle[index] = !ftitle[index];
		for (let i = 0; i < ftitle.length; i++) {
			if (i !== index && ftitle[i] === true) {
				ftitle[i] = false;
			}
		}
	}

	$: if (fsize[2] === true) {
		$fontSize = 'big';
	} else {
		if (fsize[3] === true) {
			$fontSize = 'small';
		} else $fontSize = 'std';
	}

	onMount(() => {
		$metaUrl = $page.url.pathname;
		$metaTitle = data.title;
		$metaDescription = data.excerpt;
		$metaImage = data.image;

		(async () => {
			member = await brhatTeamMember(data.author);
			member2 = await brhatTeamMember(data.authortwo);
			posts = await latestDhitiTen();
			thisAuthorPosts = await authorfiltered(data.author);

			document.querySelectorAll('a').forEach((a) => {
				a.setAttribute('target', '_blank');
				a.setAttribute('rel', 'noopener noreferrer');
			});
		})();
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<svelte:window bind:scrollY={scY} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header opacitor={scY} />

<PageProgress --thispagebackground="#fe4a49" --thispageheight="4px" {ref} />

<div
	class="rta-column"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')" />
	</div>
	<div class="fonter">
		<small>Font Size:</small>
		<button
			class="blank-button"
			on:click={() => toggleFont(1)}
			on:mouseenter={() => toggleTitle(1)}
			on:mouseleave={() => toggleTitle(1)}
		>
			<div class="outercircle">
				{#if fsize[1]}
					<div class="cir" />
				{/if}
			</div>
			{#if ftitle[1]}
				<small>Standard</small>
			{/if}
		</button>
		<button
			class="blank-button"
			on:click={() => toggleFont(2)}
			on:mouseenter={() => toggleTitle(2)}
			on:mouseleave={() => toggleTitle(2)}
		>
			<div class="outercircle">
				{#if fsize[2]}
					<div class="cir" />
				{/if}
			</div>
			{#if ftitle[2]}
				<small>Bigger</small>
			{/if}
		</button>
		<button
			class="blank-button"
			on:click={() => toggleFont(3)}
			on:mouseenter={() => toggleTitle(3)}
			on:mouseleave={() => toggleTitle(3)}
		>
			<div class="outercircle">
				{#if fsize[3]}
					<div class="cir" />
				{/if}
			</div>
			{#if ftitle[3]}
				<small>Smaller</small>
			{/if}
		</button>
	</div>
	<div class="plain-one x1">
		<div class="rta-column thisguys">
			<h5 class="serif" style="font-weight: bold; font-style: italic; color: var(--onlyblack)">
				{data.category}
			</h5>
		</div>
		<h1 class="tt-c" style="serif; font-weight: bold;">{data.title}</h1>
		<div class="rta-row colgap200 ycenter bord-bot p-bot-64">
			{#each data.tags as item}
				<cite class="citeone">{item}</cite><br />
			{/each}
		</div>
		<div class="authorbox">
			<div class="rta-row ycenter colgap100">
				{data.author}<br />
				{#if member && member.length > 0}
					{#each member as item}
						<a href={item.twitter} target="_blank" rel="noreferrer">
							<img
								class="authortwitter"
								src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/122-twitter.png"
								alt={data.author}
							/>
						</a>
					{/each}
				{/if}
			</div>
			{#if data.authortwo && data.authortwo.length > 0}
				<div class="rta-row ycenter colgap100">
					{data.authortwo}
					{#if member2 && member2.length > 0}
						{#each member2 as item}
							<a href={item.twitter} target="_blank" rel="noreferrer">
								<img
									class="authortwitter"
									src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/122-twitter.png"
									alt={data.authortwo}
								/>
							</a>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<div class="rta-column x22">
		<div
			class="maincol dhitiblogbox p-top-32 {$fontSize}"
			class:light={$themeMode}
			class:dark={!$themeMode}
			bind:this={ref}
		>
			<svelte:component this={data.content} class="dhitiblog" />
			<div class="rta-column rowgap300">
				<h5 class="serif">More from {data.author}:</h5>
				{#if thisAuthorPosts && thisAuthorPosts.length > 0}
					{#each thisAuthorPosts as item}
						<a class="rta-row fixed colgap300 bord-bot p-bot-32" href={item.path}>
							<div class="rta-image w32 height-30-2">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
							<div class="rta-column w64 rowgap100">
								<cite class="citeone">{item.meta.category}</cite>
								<h6 class="serif">{item.meta.title}</h6>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>

	<div class="rta-column x3 dhitiouter">
		<h4 class="serif">Latest Posts:</h4>
		{#if posts && posts.length > 0}
			{#each posts as item}
				{#if item.meta.title !== data.title}
					<div class="rta-column rowgap200 bord-bot p-bot-32 p-top-32">
						<h6 class="heading hover-purple"><a href={item.path}>{item.meta.title}</a></h6>
						<p class="tt-no serif">{item.meta.excerpt}</p>
						<div class="rta-column">
							<small class="is-purple">
								<strong>
									{item.meta.author}
									{#if item.meta.authortwo && item.meta.authortwo.length > 0}
										<span> and {item.meta.authortwo}</span>
									{/if}
								</strong>
							</small>
							<cite class="citetwo">{item.meta.tags}</cite>
						</div>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.x0
	z-index: 300

.levelzero, .levelone
	.fonter
		position: fixed
		top: 160px
		left: 32px
		display: flex
		flex-direction: column
		row-gap: 8px
		.blank-button
			width: max-content
			height: 20px
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center
			column-gap: 4px
			.outercircle
				width: 20px
				height: 20px
				border: 1px solid var(--opposite)
				border-radius: 10px
				display: flex
				flex-direction: row
				align-items: center
				justify-content: center
			.cir
				display: flex
				width: 12px
				height: 12px
				border-radius: 6px
				background: #fe4a49

.leveltwo
	.fonter
		display: flex
		flex-direction: row
		align-items: center
		column-gap: 16px
		padding-top: 16px
		padding-left: 16px
		.blank-button
			height: 48px
			border-radius: 10px
			display: flex
			align-items: center
			justify-content: center
			flex-direction: column
			row-gap: 4px
			position: relative
			.outercircle
				width: 20px
				height: 20px
				border: 1px solid var(--opposite)
				border-radius: 10px
				display: flex
				flex-direction: row
				align-items: center
				justify-content: center
			.cir
				display: flex
				width: 12px
				height: 12px
				border-radius: 6px
				background: #fe4a49
			small
				position: absolute
				bottom: 0

h1
	font-family: 'Adobe Devanagari', sans-serif
	line-height: 1
	padding-bottom: 16px

.x3.dhitiouter
	h4
		padding: 64px 0 12px 0

.levelzero
	align-items: center
	.x22, .x3
		width: 640px
		margin-left: 0
	.x3
		padding-bottom: 128px
	.x0
		height: 100vh
		width: 100vw
		overflow: hidden

.levelone
	align-items: center
	.x22, .x3
		width: 690px
		margin-left: 0
	.x3
		padding-bottom: 128px
	.x0
		height: 100vh
		width: 100vw
		overflow: hidden

.leveltwo
	.x3
		padding-bottom: 128px
	.x0
		height: 50vh
		margin-top: 64px
		width: 100vw
		overflow: hidden
	.x1, .x22, .x3
		padding-left: 32px
		padding-right: 32px


.rta-column
	box-sizing: border-box

.is-purple
	color: var(--dhiticolor)

.hover-purple
	transition: 0.08s
	&:hover
		color: var(--dhiticolor)

.authorbox
	color: #878787
	padding-top: 16px
	font-size: 21px
	@media screen and (max-width: 1023px)
		font-size: 16px

.rta-column
	h6
		font-family: 'Adobe Devanagari', serif


.authortwitter
	object-fit: contain
	transform: scale(0.8)
	&:hover
		transform: scale(1)
	@media screen and (min-width: 1024px)
		width: 32px
		height: 27px
	@media screen and (max-width: 1023px)
		width: 24px

@keyframes ping
	0%
		transform: scale(0.8)
		opacity: 0.8
	80%
		transform: scale(1.2)
		opacity: 0
	100%
		transform: scale(2.2)
		opacity: 0

.x1
	.thisguys
		h5
			margin: 0
			padding: 0	
		padding-bottom: 16px
	h1
		padding-top: 32px
		border-top: 1px solid var(--borderline)
		letter-spacing: -1px
	@media screen and (min-width: 1024px)
		display: flex
		flex-direction: column
		justify-content: center
		h1
			letter-spacing: -1px
	@media screen and (max-width: 1023px)
		h1
			letter-spacing: -1px
			font-size: 40px

.x1
	@media screen and (min-width: 1024px)
		padding-top: 64px
		height: 100vh
		justify-content: center
		padding-left: 8.6vw
		padding-right: 12vw
	@media screen and (max-width: 1023px)
		padding-top: 32px

.maincol
	.rta-column
		.rta-row
			.citeone
				color: #878787
				text-transform: uppercase
				font-style: normal
			.citetwo
				color: #b7b7b7
				text-transform: lowercase

.maincol
	>.rta-column
		padding-top: 64px


.maincol
	@media screen and (min-width: 1024px)
		padding-bottom: 80px
		padding-top: 64px
		.rta-row
			margin-bottom: 24px
			.rta-image
				height: 96px
				img
					object-fit: cover

.rta-row
	h6
		transition: var(--snap)
		&:hover
			color: #fe4a49

.citeone
	background: #fe4a49
	color: white
	text-transform: uppercase
	font-style: normal
	padding: 2px 8px

</style>
