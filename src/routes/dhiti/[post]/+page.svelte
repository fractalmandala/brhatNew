<script lang="ts">

	export let data
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import Formatting from '$lib/components/Formatting.svelte'
	import ReadingProgress from '$lib/components/ReadingProgress.svelte'
	import { latestDhitiTen } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'	

	let posts:any
	let fake:boolean = false

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
		let text = data.title
	})

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
	<title>Dhīti - {data.title} | Bṛhat</title>
</svelte:head>



<div class="type dhiti">
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')">
		</ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<p class="label">{data.category}</p>
		<h1 style="font-family: 'Playfair Display', serif">{data.title}</h1>
		<h6 class="border-bottom pad16" style="font-family: 'Vazirmatn', sans-serif">{data.author}
		{#if data.authortwo && data.authortwo.length > 0}
			and {data.authortwo}
		{/if}
		</h6>
		<p>{data.tags}</p>
	</div>
	<div class="x3">
		<div class="leftcol">
			<div class="box">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="fb" on:click={() => window.open(shareFB())} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter" on:click={shareTwitter} on:keydown={fakefaux}/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin" on:click={shareLinkedin} on:keydown={fakefaux}/>
				<img id="wht" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/whatsapp-red.png" alt="whatsapp" on:click={shareWhatsapp} on:keydown={fakefaux}/>
			</div>
		</div>
		<div class="maincol">
			<ReadingProgress></ReadingProgress>
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
</div>


<style lang="sass">

.x0
	height: 100vh
	overflow: hidden

.x1
	height: 100vh
	justify-content: center


.x1 h6
	margin: 0
	
.x3
	display: grid
	grid-auto-flow: row
	padding-bottom: 128px
	@media screen and (min-width: 1024px)
		grid-template-columns: 120px 1fr 480px
		grid-template-row: auto
		grid-template-area: "leftcol maincol rightcol"

.leftcol
	.box
		align-items: center
		height: max-content
		padding-bottom: 32px
		padding-top: 32px
		position: sticky
		top: 112px
	.box img
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

.maincol
	@media screen and (min-width: 1024px)
		padding-right: 120px

.rightcol
	display: flex
	flex-direction: column
	row-gap: 48px
	@media screen and (min-width: 1024px)
		padding-right: 8vw
		.card-body
			h6
				font-size: 18px

.card-body
	h6
		transition: var(--snap)
		&:hover
			color: #fe4a49

#wht
	width: 20px
	height: 20px

</style>