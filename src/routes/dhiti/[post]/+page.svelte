<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
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
	let ref: HTMLElement | null = null;
	let y: number;
	let fsize = Array(3).fill(false);
	fsize[1] = true;

	function toggleFont(index: number) {
		fsize[index] = !fsize[index];
		for (let i = 0; i < fsize.length; i++) {
			if (i !== index && fsize[i] === true) {
				fsize[i] = false;
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

	onMount(async () => {
		member = await brhatTeamMember(data.author);
		posts = await latestDhitiTen();
		thisAuthorPosts = await authorfiltered(data.author);
	});
</script>

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
		<small>Font<br />Size:</small>
		<button class="blank-button" on:click={() => toggleFont(1)}>
			{#if fsize[1]}
				<div class="cir" />
			{/if}
		</button>
		<button class="blank-button" on:click={() => toggleFont(2)}>
			{#if fsize[2]}
				<div class="cir" />
			{/if}
		</button>
		<button class="blank-button" on:click={() => toggleFont(3)}>
			{#if fsize[3]}
				<div class="cir" />
			{/if}
		</button>
	</div>
	<div class="plain-one x1">
		<div class="rta-row ycenter colgap100 thisguys">
			<small>{data.category}</small>
			<cite>{data.tags}</cite><br />
		</div>
		<h2 style="serif; font-weight: 700;">{data.title}</h2>
		<div class="authorbox">
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
			{#if data.authortwo && data.authortwo.length > 0}
				and {data.authortwo}
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

.levelzero, .levelone
	.fonter
		position: fixed
		top: 160px
		left: 32px
		display: flex
		flex-direction: column
		row-gap: 8px
		.blank-button
			border: 1px solid var(--opposite)
			width: 20px
			height: 20px
			border-radius: 10px
			display: flex
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
		column-gap: 8px
		padding-top: 16px
		padding-left: 16px
		.blank-button
			border: 1px solid var(--opposite)
			width: 20px
			height: 20px
			border-radius: 10px
			display: flex
			align-items: center
			justify-content: center
			.cir
				display: flex
				width: 12px
				height: 12px
				border-radius: 6px
				background: #fe4a49

h2
	font-family: 'Adobe Devanagari', sans-serif



.x3.dhitiouter
	h4
		padding: 64px 0 12px 0

.levelzero
	align-items: center
	.x22, .x3
		width: 720px
		margin-left: -64px
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
	text-transform: uppercase
	color: #878787
	padding-top: 16px

.rta-column
	h6
		font-family: 'Adobe Devanagari', serif


.authortwitter
	object-fit: contain
	&:hover
		animation: ping 0.8s ease-in-out infinite both
	@media screen and (min-width: 1024px)
		width: 32px
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
	.rta-row
		align-items: center
		padding-bottom: 32px	
		small
			background: #fe4a49
			color: white
			padding: 4px 8px 4px 8px
			border-radius: 12px
	h2
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 32px
		padding-top: 32px
		border-top: 1px solid var(--borderline)
		letter-spacing: 0 !important
	@media screen and (min-width: 1024px)
		display: flex
		flex-direction: column
		justify-content: center
		h2
			letter-spacing: -3px
			line-height: 1.12
	@media screen and (max-width: 1023px)
		h2
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

</style>
