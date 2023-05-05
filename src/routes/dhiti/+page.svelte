<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { latestDhitiPost, latestDhitiThree, allFeaturedPosts, filterChosen, authorfiltered } from '$lib/utils/localpulls'
	import { scale } from 'svelte/transition'
	import { quartIn, quartOut } from 'svelte/easing'
	import DropDown from '$lib/components/DropDown.svelte'
	import DropDown2 from '$lib/components/DropDown.svelte'
	let latestpost:string|any[]
	let nextthreeposts:string|any[]
	let featuredposts:string|any[]
	let category:string = 'Featured'
	let filteredposts:string|any[]
	let fake:boolean = false
	let writer:string = ''
	let authorposts:string|any[]
	let writersortags:boolean = true

	function fauxfake(){
		fake = !fake
	}

	function toggleWritersOrTags(){
		writersortags = !writersortags
	}

	function setAuthor(newAuthor:string){
		writer = newAuthor
	}
	
	function setFilter(newCategory:string){
		category = newCategory
	}

	$: if (writer) {
		(async() => {
			authorposts = await authorfiltered(writer)
		})()
	}

	$: if (category) {
		(async() => {
			filteredposts = await filterChosen(category)
		})()
	}

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };

	onMount(async() => {
		latestpost = await latestDhitiPost()
		nextthreeposts = await latestDhitiThree()
		featuredposts = await allFeaturedPosts()
		filteredposts = await filterChosen(category)
		authorposts = await authorfiltered(writer)
	})

</script>

<svelte:head>
	<HeadComponent>
		Dhīti, the blog at
	</HeadComponent>
</svelte:head>

<div class="dhiti">
	<div id="x0" class="rta-grid grid4 colgap-64 rowgap-64">
		{#if latestpost && latestpost.length > 0}
			{#each latestpost as item}
				<div class="latestsingle" style="background-image: url('{item.meta.image}')">
					<div class="card-body">
						<cite>{item.meta.category} | <span class="citetwo">{item.meta.tags}</span></cite>
						<h3 class="heading"><a href="{item.path}">{item.meta.title}</a></h3>
						<p>{item.meta.author}
							{#if item.meta.authortwo && item.meta.authortwo.length > 0}
							<span> and {item.meta.authortwo}</span>
							{/if}
						</p>
					</div>
				</div>
			{/each}
		{/if}
		<div class="latestthree">
			{#if nextthreeposts && nextthreeposts.length > 0}
				{#each nextthreeposts as item}
					<div class="rta-in-col rowgap-16">
						<div class="rta-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col rowgap-8">
							<cite class="citeone">{item.meta.category}</cite>
							<h6 class="heading"><a href="{item.path}">{item.meta.title}</a></h6>
							<p>{item.meta.author}
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
		<div class="featured">
			<h4>FEATURED</h4>
			{#if featuredposts && featuredposts.length > 0}
				{#each featuredposts as item}
					<div class="rta-row colgap-24">
						<div class="rta-image height-20 w32">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col rowgap-8 w64">
							<h6 class="heading"><a href={item.path}>{item.meta.title}</a></h6>
							<p>{item.meta.author}
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
	<div class="x1">
		<DropDown --thisbackground="#fe4a49" --thisdropdowntextcolor="#fe4a49">
			<div slot="visible">
				<h6 style="color: white">CATEGORIES</h6>
			</div>
			<div slot="invisible">
				<div class="category {category === 'Featured' ? 'selected' : ''}" on:click={() => setFilter('Featured')} on:keydown={fauxfake}>
					<h5>Featured</h5>
				</div>
				<div class="category {category === 'Svayambodha' ? 'selected' : ''}" on:click={() => setFilter('Svayambodha')} on:keydown={fauxfake}>
					<h5>Two Bodhas</h5>
				</div>
				<div class="category {category === 'Dharma Today' ? 'selected' : ''}" on:click={() => setFilter('Dharma Today')} on:keydown={fauxfake}>
					<h5>Dharma Today</h5>
				</div>
				<div class="category {category === 'Indian Knowledge Systems' ? 'selected' : ''}" on:click={() => setFilter('Indian Knowledge Systems')} on:keydown={fauxfake}>
					<h5>IKS</h5>
				</div>
				<div class="category {category === 'Culture and Policy' ? 'selected' : ''}" on:click={() => setFilter('Culture and Policy')} on:keydown={fauxfake}>
					<h5>Culture and Policy</h5>
				</div>
			</div>
		</DropDown>
		<div class="gridof4">
			{#if filteredposts && filteredposts.length > 0}
				{#each filteredposts as item, i}
					<div class="box back" style="background-image: url('{item.meta.image}')" in:scale={{ duration: 200, delay: i*200, easing: quartOut}} out:scale={{ duration: 100, easing: quartIn}}> 
						<a class="box" href="{item.path}">
							<h6 class="heading">
									{item.meta.title}
							</h6>
							<p style="font-size: 12px">{item.meta.author}
									{#if item.meta.authortwo && item.meta.authortwo.length > 0}
										<span> and {item.meta.authortwo}</span>
									{/if}
							</p>
							<cite style="color: white; font-style: normal; font-size: 10px; text-transform: uppercase">{item.meta.tags}</cite>
						</a>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="x2">
		<DropDown2 --thisbackground="#fe4a49" --thisdropdowntextcolor="#fe4a49">
			<div slot="visible">
				<h6 style="color: white">WRITERS</h6>
			</div>
			<div slot="invisible">
				<div class="author {writer === 'Akshay Jha' ? 'written' : ''}" on:click={() => setAuthor('Akshay Jha')} on:keydown={fauxfake}>
					<h5>Akshay Jha</h5>
				</div>
				<div class="author {writer === 'Amritanshu Pandey' ? 'written' : ''}" on:click={() => setAuthor('Amritanshu Pandey')} on:keydown={fauxfake}>
					<h5>Amritanshu Pandey</h5>
				</div>
				<div class="author {writer === 'Anshuman Panda' ? 'written' : ''}" on:click={() => setAuthor('Anshuman Panda')} on:keydown={fauxfake}>
					<h5>Anshuman Panda</h5>
				</div>
				<div class="author {writer === 'Anurag Shukla' ? 'written' : ''}" on:click={() => setAuthor('Anurag Shukla')} on:keydown={fauxfake}>
					<h5>Anurag Shukla</h5>
				</div>
				<div class="author {writer === 'Kavita Krishna Meegama' ? 'written' : ''}" on:click={() => setAuthor('Kavita Krishna Meegama')} on:keydown={fauxfake}>
					<h5>Kavita Krishna Meegama</h5>
				</div>
				<div class="author {writer === 'Nivedita Tiwari' ? 'written' : ''}" on:click={() => setAuthor('Nivedita Tiwari')} on:keydown={fauxfake}>
					<h5>Nivedita Tiwari</h5>
				</div>
				<div class="author {writer === 'Pankaj Saxena' ? 'written' : ''}" on:click={() => setAuthor('Pankaj Saxena')} on:keydown={fauxfake}>
					<h5>Pankaj Saxena</h5>
				</div>
				<div class="author {writer === 'Raghava Krishna' ? 'written' : ''}" on:click={() => setAuthor('Raghava Krishna')} on:keydown={fauxfake}>
					<h5>Raghava Krishna</h5>
				</div>
				<div class="author {writer === 'Sai Priya Chodavarapu' ? 'written' : ''}" on:click={() => setAuthor('Sai Priya Chodavarapu')} on:keydown={fauxfake}>
					<h5>Sai Priya Chodavarapu</h5>
				</div>
				<div class="author {writer === 'Sushant Gangoli' ? 'written' : ''}" on:click={() => setAuthor('Sushant Gangoli')} on:keydown={fauxfake}>
					<h5>Sushant Gangoli</h5>
				</div>
				<div class="author spaced">
					<h6>Guests:</h6>
				</div>
				<div class="authors {writer === 'Shri Ramachandra Roddam' ? 'written' : ''}" on:click={() => setAuthor('Shri Ramachandra Roddam')} on:keydown={fauxfake}>
					<h5>Shri Ramachandra Roddam</h5>
				</div>
				<div class="authors {writer === 'Akshay Shankar' ? 'written' : ''}" on:click={() => setAuthor('Akshay Shankar')} on:keydown={fauxfake}>
					<h5>Akshay Shankar</h5>
				</div>
				<div class="authors {writer === 'Jash Dholani' ? 'written' : ''}" on:click={() => setAuthor('Jash Dholania')} on:keydown={fauxfake}>
					<h5>Jash Dholani</h5>
				</div>
				<div class="authors {writer === 'Kate Herse' ? 'written' : ''}" on:click={() => setAuthor('Kate Herse')} on:keydown={fauxfake}>
					<h5>Kate Herse</h5>
				</div>
				<div class="authors {writer === 'Ghora Angirasa' ? 'written' : ''}" on:click={() => setAuthor('Ghora Angirasa')} on:keydown={fauxfake}>
					<h5>Ghora Angirasa</h5>
				</div>
				<div class="authors {writer === 'Samyak Dixit' ? 'written' : ''}" on:click={() => setAuthor('Samyak Dixit')} on:keydown={fauxfake}>
					<h5>Samyak Dixit</h5>
				</div>
				<div class="authors {writer === 'Prabhav Paturi' ? 'written' : ''}" on:click={() => setAuthor('Prabhav Paturi')} on:keydown={fauxfake}>
					<h5>Prabhav Paturi</h5>
				</div>
			</div>
		</DropDown2>
		<div class="articlesarea">
			{#if authorposts && authorposts.length > 0}
				{#each authorposts as item, i}
					<div class="card-row" in:scale={{ duration: 250, delay: i*100}} out:scale={{ duration: 90, delay: 0}}>
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<cite class="citeone">{item.meta.category}</cite>
							<h5 style="font-weight: 600" class="heading">
								<a href="{item.path}">
									{item.meta.title}
								</a>
							</h5>
							<cite class="citetwo">{item.meta.tags}</cite>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.heading
	font-family: 'Playfair Display', serif

.dhiti
	padding-top: 72px
	padding-bottom: 72px

.x1, .x2
	@media screen and (min-width: 1024px)
		padding-left: 32px
		padding-right: 32px
	@media screen and (max-width: 1023px)
		padding-left: 24px
		padding-right: 24px

.x1
	@media screen and (max-width: 1023px)
		padding-top: 64px

.x2
	padding-top: 64px

#x0
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 30%
		grid-template-areas: "latestsingle latestsingle latestsingle featured" "latestthree latestthree latestthree featured"
		grid-template-rows: auto auto
		padding-left: 64px
		padding-right: 64px
	@media screen and (max-width: 1023px)
		grid-template-areas: "latestsingle" "latestthree" "featured"


.latestsingle
	grid-area: latestsingle
	display: flex
	background-size: cover
	background-position: center center
	background-repeat: no-repeat
	@media screen and (min-width: 1024px)
		flex-direction: row
		height: 480px
		padding: 0
		justify-content: space-between
		.card-body
			width: 100%
			height: 100%
			display: flex
			flex-direction: column
			justify-content: center
			padding-left: 32px
			h3
				line-height: 1.1
				font-weight: 600
				letter-spacing: -1.3px
				font-size: 4.4vw
				color: white
				background: rgba(0,0,0,0.8)		
				padding-bottom: 80px
				margin-bottom: -64px
				padding-left: 16px	
			p
				font-size: 18px
				color: white	
				padding-left: 16px	
	@media screen and (max-width: 1023px)
		flex-direction: column
		height: 480px	
		justify-content: flex-end
		padding-bottom: 32px
		.card-body
			row-gap: 8px
			padding: 4px 16px 4px 16px
			h3, p, cite
				color: white
			cite
				font-style: normal
				text-transform: uppercase
				background: #fe4a49
				padding: 2px 4px
				.citetwo
					font-style: italic
					text-transform: lowercase
			background: rgba(0,0,0,0.8)

.featured
	grid-area: featured
	display: flex
	flex-direction: column
	@media screen and (min-width: 1024px)
		row-gap: 48px
		padding-bottom: 64px
	@media screen and (max-width: 1023px)
		padding-top: 32px
		row-gap: 32px
		padding-bottom: 32px	

.latestthree
	grid-area: latestthree
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	@media screen and (min-width: 1024px)
		gap: 32px 48px
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."
	@media screen and (max-width: 1023px)
		gap: 32px 0
		grid-template-columns: 1fr
		grid-template-areas: "." "." "."
		padding-top: 32px
		padding-bottom: 32px

.x2
	@media screen and (min-width: 1024px)
		height: 100vh

.x2
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	padding-top: 64px
	@media screen and (min-width: 1024px)
		grid-template-columns: 280px 1fr
		grid-template-areas: "categorystrip articlesarea"
		column-gap: 64px
		height: 100%
		.articlesarea
			grid-area: articlesarea

.gridof4
	padding-top: 32px
	padding-bottom: 32px
	>.box
		gap: 16px
		background-size: cover
		background-position: center center
		background-repeat: no-repeat
		height: 200px
		a
			top: 0
			left: 0
			height: 100%
			width: 100%
			align-items: center
			justify-content: center
			background: rgba(0,0,0,0.8)
			text-align: center
			padding: 16px
			h6
				color: white
			p
				color: #fe4a49
		&:hover
			>.box
				animation: clearingup 0.35s ease forwards
				h6
					animation: goingaway 0.34s ease forwards
				p, cite
					animation: goingaway 0.34s ease forwards

@keyframes clearingup
	0%
		background: rgba(0,0,0,0.8)
	100%
		background: rgba(0,0,0,0)

@keyframes goingaway
	0%
		opacity: 1
	100%
		opacity: 0

.articlesarea
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	height: 100%
	padding-bottom: 32px
	h5
		color: #272727
	.citeone
		color: #878787
		text-transform: uppercase
		font-style: normal
	.citetwo
		color: #b7b7b7
		text-transform: lowercase
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-areas: "."
		gap: 24px 24px
		.card-row
			display: flex
			width: 100%
			background: none
			box-shadow: none
			padding: 0
			.card-image
				height: 180px
				width: 400px
				img
					object-fit: cover
					height: 100%
					width: 100%
			h5
				padding-top: 16px
				&:hover
					color: var(--strong)
	@media screen and (max-width: 1023px)
		padding-top: 32px
		row-gap: 32px
		.card-row
			column-gap: 24px
			.card-image
				width: 32%
				height: 88px
				img
					object-fit: cover
					width: 100%
					height: 100%
			.card-body
				width: calc(68% - 24px)
				row-gap: 0
				h5
					font-size: 1.414vw*3.2
					padding-top: 8px
					margin-top: 5px
					margin-bottom: 4px
				

.author.spaced
	margin-top: 24px

</style>