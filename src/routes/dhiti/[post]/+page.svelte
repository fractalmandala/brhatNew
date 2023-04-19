<script lang="ts">

	export let data
	import { onMount, afterUpdate } from 'svelte'
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
		return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
	}

	function shareWhatsapp(url:string, text:string){
		return `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
	}

	function fakefaux(){
		fake = !fake
	}

	onMount(async() => {
		posts = await latestDhitiTen()
	})

	afterUpdate(async() => {
		member = await brhatTeamMember(data.author)
		thisAuthorPosts = await authorfiltered(data.author)
	})


</script>

<svelte:head>
	<HeadComponent>
		{data.title} | Dhīti at
	</HeadComponent>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>



<div class="type dhiti heightmeasure">
<PageProgress --thispagebackground="#fe4a49" --thispageheight="4px"/>
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')">
		</ParallaxImage>
	</div>
	<div class="plain-one x1">
		<div class="boxr">
			<p style="color: white; background: var(--strong); width: max-content; padding: 6px; font-size: 16px">{data.category}</p>
			<span class="line"></span><small>{data.tags}</small>
		</div>
		<h2 style="font-family: 'Playfair Display', serif; font-weight: 700; letter-spacing: -3px">{data.title}</h2>
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
		<div class="leftcol">
		</div>
		<div class="maincol dhitiblogbox">
			<svelte:component this={data.content} class="dhitiblog"/>
		</div>
		<div class="rightcol">
			{#if posts && posts.length > 0}
				{#each posts as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href="{item.path}">{item.meta.title}</a></h6>
							<p>
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<div class="card-meta boxr">
								<small>{item.meta.tags}</small>
								<small> | {item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="box x2 pads">
		<div class="boxr">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="fb" on:click={() => window.open(shareFB())} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter" on:click={shareTwitter} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin" on:click={shareLinkedin} on:keydown={fakefaux}/>
				<img id="wht" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/whatsapp-red.png" alt="whatsapp" on:click={shareWhatsapp} on:keydown={fakefaux}/>
		</div>
		<h6>More from {data.author}:</h6>
		<div class="gridof2">
			{#if thisAuthorPosts && thisAuthorPosts.length > 0}
				{#each thisAuthorPosts as item}
					<a class="dhitipageauthorposts" href="{item.path}">
						<img src={item.meta.image} alt={item.meta.title}/>
						<div class="box zero">
						<h6>{item.meta.title}</h6>
						<p>{item.meta.category}</p>
						<small>{item.meta.tags}</small>
						</div>
					</a>
				{/each}
			{/if}
			</div>
	</div>
</div>


<style lang="sass">

.maincol
	border-bottom: 1px solid #d7d7d7

.authortwitter
	object-fit: contain
	width: 32px
	&:hover
		animation: ping 0.8s ease-in-out infinite both

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
		.line
			height: 1px
			background: #ececec
			width: 60%

.author
	text-transform: uppercase
	font-size: 21px

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center
		padding-left: 8.6vw
		padding-right: 12vw

.x2
	@media screen and (min-width: 1024px)
		padding-left: 8.6vw
		padding-top: 32px
		.boxr
			padding: 0
			gap: 16px
		>h6
			margin: 0
			padding: 0

.x1 h6
	margin: 0
	
.x3
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 120px 1fr 480px
		grid-template-row: 100%
		grid-template-area: "leftcol maincol rightcol"
		min-height: 200vh
		align-content: start
		align-items: start

.leftcol
	height: 200px
	position: sticky
	top: 0
	left: 0
	display: flex
	flex-direction: column

.boxr
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
	@media screen and (max-width: 1023px)
		padding-left: 6vw
		padding-right: 6vw
		.box
			flex-direction: row
			justify-content: space-between
			width: 50%

.maincol
	@media screen and (min-width: 1024px)
		padding-right: 120px
		padding-bottom: 80px
	@media screen and (max-width: 1023px)
		padding-left: 6vw
		padding-right: 6vw

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

.card-body
	h6
		transition: var(--snap)
		&:hover
			color: #fe4a49

#wht
	width: 20px
	height: 20px

.x2
	.gridof2
		gap: 80px 80px
		padding-top: 16px
		padding-bottom: 64px

.dhitipageauthorposts img
	object-fit: cover
	width: 200px
	height: 120px

</style>