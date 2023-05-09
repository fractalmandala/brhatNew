<script lang="ts">

	export let data
	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import { page } from '$app/stores'
	import PageProgress from '$lib/components/PageProgress.svelte'
	import Formatting from '$lib/components/Formatting.svelte'
	import ReadingProgress from '$lib/components/ReadingProgress.svelte'
	import { latestDhitiTen } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'	
	import { brhatTeamMember } from '$lib/utils/supapulls'
	import { authorfiltered } from '$lib/utils/localpulls'

	let url = $page.url.pathname
	let text = data.title
	let posts:any
	let thisAuthorPosts:any
	let fake:boolean = false
	let member:any


	function fakefaux(){
		fake = !fake
	}

	onMount(async() => {
		member = await brhatTeamMember(data.author)
		posts = await latestDhitiTen()
		thisAuthorPosts = await authorfiltered(data.author)
	})


</script>

<svelte:head>
	<HeadComponent>
		{data.title} | Dhīti at
	</HeadComponent>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>




<PageProgress --thispagebackground="#fe4a49" --thispageheight="4px"/>

	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')">
		</ParallaxImage>
	</div>

	<div class="plain-one x1">
		<div class="boxr">
			<cite>{data.tags}</cite><br>
			<small>{data.category}</small>
		</div>
		<h2 style="font-family: 'Playfair Display', serif; font-weight: 700;">{data.title}</h2>
		<div class="authorbox">{data.author}<br>
			{#if member && member.length > 0}
			{#each member as item}
				<a href="{item.twitter}" target="_blank" rel="noreferrer">
					<img class="authortwitter" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/122-twitter.png" alt={data.author}/>
				</a>
			{/each}
			{/if}
			{#if data.authortwo && data.authortwo.length > 0}
			and {data.authortwo}
			{/if}
		</div>
	</div>

	<div class="rta-grid grid2 right">
		<div class="rta-grid grid2 pagebox">
			<div class="rr"></div>
			<div class="maincol dhitiblogbox" class:light={$visibilityMode} class:dark={!$visibilityMode}>
				<svelte:component this={data.content} class="dhitiblog"/>
				<div class="rta-column rowgap300">
					<p>More from {data.author}:</p>
					{#if thisAuthorPosts && thisAuthorPosts.length > 0}
						{#each thisAuthorPosts as item}
						<a class="rta-row fixed colgap300 bord-bot p-bot-32" href="{item.path}">
						<div class="rta-image w32 height-30-2">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-column w64 rowgap100">
							<cite class="citeone">{item.meta.category}</cite>
							<h6>{item.meta.title}</h6>
							<cite class="citetwo">{item.meta.tags}</cite>
						</div>
						</a>
						{/each}
					{/if}
					</div>
			</div>
		</div>
		<div class="rightcol">
			{#if posts && posts.length > 0}
				{#each posts as item}
					{#if item.meta.title !== data.title}
					<div class="rta-column rowgap100 bord-bot p-bot-16">
						<h6 class="heading hover-purple"><a href={item.path}>{item.meta.title}</a></h6>
						<small class="tt-no">{item.meta.excerpt}</small>
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

.rta-grid.grid2.right
	box-sizing: border-box
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "pagebox" "rightcol"
		.pagebox
			grid-area: pagebox
		.rightcol
			grid-area: rightcol

.pagebox
	@media screen and (min-width: 1024px)
		grid-template-columns: 120px 1fr
		grid-template-areas: "rr maincol"
		.rr
			grid-area: rr
		.maincol
			grid-area: maincol
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "maincol" "rr"
		.rr
			grid-area: rr
		.maincol
			grid-area: maincol

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
		font-family: 'Playfair Display', serif


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
	.boxr
		align-items: center
		padding-bottom: 32px	
		small
			background: #fe4a49
			color: white
			padding: 4px 8px 0 8px
			border-radius: 12px
	h2
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 32px
		padding-top: 32px
		border-top: 1px solid var(--borderline)
	@media screen and (min-width: 1024px)
		display: flex
		flex-direction: column
		justify-content: center
		h2
			letter-spacing: -3px
			line-height: 1.12
	@media screen and (max-width: 1023px)
		padding-left: 24px
		padding-right: 24px
		h2
			letter-spacing: -1px
			font-size: 40px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		margin-top: 80px
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 56vh
		margin-top: 64px

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
		padding-right: 120px
		padding-bottom: 80px
		padding-top: 64px
		.rta-row
			margin-bottom: 24px
			.rta-image
				height: 96px
				img
					object-fit: cover
	@media screen and (max-width: 1023px)
		padding-left: 24px
		padding-right: 24px

.rightcol
	display: flex
	flex-direction: column
	row-gap: 48px
	@media screen and (min-width: 1024px)
		padding-right: 8vw
		.rta-column
			h6
				font-size: 18px		
	@media screen and (max-width: 1023px)
		padding-top: 64px
		padding-bototm: 64px
		padding-left: 24px
		padding-right: 24px

.rta-row
	h6
		transition: var(--snap)
		&:hover
			color: #fe4a49

</style>