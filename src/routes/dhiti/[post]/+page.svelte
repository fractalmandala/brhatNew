<script lang="ts">

	export let data
	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
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

	function shareFB(url:string){
		return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
	}

	function shareLinkedin(url:string){
		return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`
	}

	function shareTwitter(url:string, text:string){
		return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
	}

	function shareWhatsapp(url:string, text:string){
		return `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
	}

	function handleTwitterClick(event: MouseEvent) {
		window.open(shareTwitter(url, 'Check out this page!'));
	}

	function handleWhatsappClick(event: MouseEvent) {
		window.open(shareWhatsapp(url, 'Check out this page!'));
	}

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
	 <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
</svelte:head>



<div class="type dhiti heightmeasure">
<PageProgress --thispagebackground="#fe4a49" --thispageheight="4px"/>
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')">
		</ParallaxImage>
	</div>
	<div class="plain-one x1">
		<div class="boxr">
			<p style="color: white; background: var(--strong); width: max-content; padding: 2px 4px; font-size: 16px">{data.category}</p>
			<span class="line"></span><small>{data.tags}</small>
		</div>
		<h2 style="font-family: 'Playfair Display', serif; font-weight: 700;">{data.title}</h2>
		<div class="author border-bottom pad16">{data.author}<br>
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
	<div class="x3">
		<div class="leftcol" data-lenis-prevent>
			<div class="box">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="fb"  on:click={() => window.open(shareFB(url))} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter" on:click={handleTwitterClick} on:keydown={fakefaux} />
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin" on:click={() => window.open(shareLinkedin(url))} on:keydown={fakefaux} />
				<img id="wht" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/whatsapp-red.png" alt="whatsapp" on:click={handleWhatsappClick} on:keydown={fakefaux} />
			</div>
		</div>
		<div class="maincol dhitiblogbox">
			<svelte:component this={data.content} class="dhitiblog"/>
			<div class="boxr">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="fb"  on:click={() => window.open(shareFB(url))} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter" on:click={handleTwitterClick} on:keydown={fakefaux} />
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin" on:click={() => window.open(shareLinkedin(url))} on:keydown={fakefaux} />
				<img id="wht" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/whatsapp-red.png" alt="whatsapp" on:click={handleWhatsappClick} on:keydown={fakefaux} />
			</div>
			<p style="font-family: Spline Sans, sans-serif; font-size: 14px; font-weight: bold;">More from {data.author}:</p>
			<div class="gridof1">
				{#if thisAuthorPosts && thisAuthorPosts.length > 0}
					{#each thisAuthorPosts as item}
					<a class="card-row" href="{item.path}">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<cite class="citeone">{item.meta.category}</cite>
							<h6>{item.meta.title}</h6>
							<cite class="citetwo">{item.meta.tags}</cite>
						</div>
					</a>
					{/each}
				{/if}
			</div>
		</div>
		<div class="rightcol">
			<h4>RECENT:</h4>
			{#if posts && posts.length > 0}
				{#each posts as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<cite class="citeone">{item.meta.category}</cite>
							<h6><a href="{item.path}">{item.meta.title}</a></h6>
							<p>
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<cite class="citetwo">{item.meta.tags}</cite>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="box x2 pads">
	</div>
</div>


<style lang="sass">

.maincol
	border-bottom: 1px solid #d7d7d7

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
		small
			font-size: 12px
			color: #878787
			font-style: italic
			@media screen and (max-width: 1023px)
				text-align: right
		.line
			height: 1px
			background: #ececec
			width: 60%
	@media screen and (min-width: 1024px)
		h2
			letter-spacing: -3px
	@media screen and (max-width: 1023px)
		h2
			letter-spacing: -1px
			font-size: 40px


.author
	text-transform: uppercase
	@media screen and (min-width: 1024px)
		font-size: 18px
	@media screen and (max-width: 1023px)
		font-size: 15px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
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
		padding-left: 6vw
		padding-right: 6vw

.x2
	@media screen and (min-width: 1024px)
		padding-left: 8.6vw
		padding-top: 32px
	
.x3
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 120px 1fr 480px
		grid-template-rows: 100%
		grid-template-areas: "leftcol maincol rightcol"
		height: 100%
		align-content: start
		align-items: start
		.maincol
			>.boxr
				gap: 24px
				border-top: 1px solid #ececec
				padding-top: 16px
				margin-top: 16px
				padding-bottom: 16px
			.gridof1
				grid-template-columns: 1fr
				grid-template-rows: auto
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		grid-template-areas: "maincol" "leftcol" "rightcol"
		height: 100%
		padding-top: 0
		align-items: start
		align-content: start
		.maincol
			grid-area: maincol
			padding-top: 32px
			>.boxr
				gap: 24px
				padding: 16px 0
				border-top: 1px solid #ececec
			.gridof1
				padding-top: 24px
				.card-row
					padding-bottom: 32px
					flex-direction: row
					column-gap: 24px
					.card-image
						width: 32%
						height: 88px
					.card-body
						width: calc(68% - 24px)
						row-gap: 0
						h6
							margin-bottom: 6px
							border-top: 1px solid #ececec
							padding-top: 8px
						p
							margin-bottom: 3px
						cite
							text-transform: uppercase
							color: #878787
							margin-bottom: 4px
						.citeone
							font-style: normal
						.citetwo
							text-transform: lowercase
							font-style: italic
		.leftcol
			grid-area: leftcol
			display: none
		.rightcol
			grid-area: rightcol

.leftcol
	height: 200px
	position: sticky
	top: 0
	left: 0
	display: flex
	flex-direction: column
	.box
		padding-left: 24px

.boxr, .leftcol .box
	img
		object-fit: contain
		height: 24px
		width: 24px
		filter: saturate(0.01)
		opacity: 0.5
		transition: var(--snap)
		cursor: pointer
		&:hover
			opacity: 1
			filter: saturate(1.0)

.card-row
	.citeone
		color: #878787
		text-transform: uppercase
		font-style: normal
	.citetwo
		color: #b7b7b7
		text-transform: lowercase


.maincol
	@media screen and (min-width: 1024px)
		padding-right: 120px
		padding-bottom: 80px
		.card-row
			margin-bottom: 24px
			.card-image
				height: 96px
				img
					object-fit: cover
	@media screen and (max-width: 1023px)
		padding-left: 6vw
		padding-right: 6vw
		padding-top: 0

.rightcol
	display: flex
	flex-direction: column
	row-gap: 48px
	@media screen and (min-width: 1024px)
		padding-right: 8vw
		.card-body
			h6
				font-size: 18px
	@media screen and (max-width: 1023px)
		padding-left: 6vw
		padding-right: 6vw
		padding-top: 64px
		border-top: 1px solid #ececec
		.card-row
			border-bottom: 1px solid #ececec
			padding-bottom: 32px
			flex-direction: row
			column-gap: 24px
			.card-image
				width: 32%
				height: 88px
			.card-body
				width: calc(68% - 24px)
				row-gap: 0
				h6
					margin-bottom: 6px
					border-top: 1px solid #ececec
					padding-top: 8px
				p
					margin-bottom: 3px
				cite
					text-transform: uppercase
					color: #878787
					margin-bottom: 4px
				.citeone
					font-style: normal
				.citetwo
					text-transform: lowercase
					font-style: italic			

.card-body
	h6
		transition: var(--snap)
		&:hover
			color: #fe4a49

#wht
	width: 20px
	height: 20px


</style>