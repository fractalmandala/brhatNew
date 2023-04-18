<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { latestDhitiPost, latestDhitiThree, allFeaturedPosts, filterChosen, authorfiltered } from '$lib/utils/localpulls'
	import { scale } from 'svelte/transition'
	import { quartIn, quartOut } from 'svelte/easing'
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

<div class="type dhiti">
	<div class="x0">
		{#if latestpost && latestpost.length > 0}
			{#each latestpost as item}
				<div class="latestsingle" style="background-image: url('{item.meta.image}')">
					<div class="card-body">
						<h3><a href="{item.path}">{item.meta.title}</a></h3>
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
					<div class="card-nix">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href="{item.path}">{item.meta.title}</a></h6>
							<p>{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<cite style="color: #b7b7b7; font-style: normal; font-size: 12px">{item.meta.tags}</cite>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="featured">
			{#if featuredposts && featuredposts.length > 0}
				{#each featuredposts as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href={item.path}>{item.meta.title}</a></h6>
							<p>{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<div class="boxr card-meta">
								<small>{item.meta.tags}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="x1">
		<div class="categorystrip">
			<div class="category {category === 'Featured' ? 'selected' : ''}" on:click={() => setFilter('Featured')} on:keydown={fauxfake}>
				Featured
			</div>
			<div class="category {category === 'Svayambodha' ? 'selected' : ''}" on:click={() => setFilter('Svayambodha')} on:keydown={fauxfake}>
				Two Bodhas
			</div>
			<div class="category {category === 'Dharma Today' ? 'selected' : ''}" on:click={() => setFilter('Dharma Today')} on:keydown={fauxfake}>
				Dharma Today
			</div>
			<div class="category {category === 'Indian Knowledge Systems' ? 'selected' : ''}" on:click={() => setFilter('Indian Knowledge Systems')} on:keydown={fauxfake}>
				IKS
			</div>
			<div class="category {category === 'Culture and Policy' ? 'selected' : ''}" on:click={() => setFilter('Culture and Policy')} on:keydown={fauxfake}>
				Culture and Policy
			</div>
		</div>
		<div class="gridof4">
			{#if filteredposts && filteredposts.length > 0}
				{#each filteredposts as item, i}
					<div class="box back" style="background-image: url('{item.meta.image}')" in:scale={{ duration: 200, delay: i*200, easing: quartOut}} out:scale={{ duration: 100, easing: quartIn}}> 
						<a class="box" href="{item.path}">
							<h6>
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
		<div class="categorystrip">
			<div class="boxr toggler"><p class:toggled={writersortags} on:click={toggleWritersOrTags} on:keydown={fauxfake}>Writers</p>
				<div class="boxr switch" on:click={toggleWritersOrTags} on:keydown={fauxfake}>
			  	<div class="slider">
						<div class="ball" class:balltag={!writersortags}></div>
					</div>
				</div><p class:toggled={!writersortags} on:click={toggleWritersOrTags} on:keydown={fauxfake}>
				Tags</p>
			</div>
			{#if writersortags}
			<div class="box">
			<div class="author {writer === 'Akshay Jha' ? 'written' : ''}" on:click={() => setAuthor('Akshay Jha')} on:keydown={fauxfake}>
				Akshay Jha
			</div>
			<div class="author {writer === 'Amritanshu Pandey' ? 'written' : ''}" on:click={() => setAuthor('Amritanshu Pandey')} on:keydown={fauxfake}>
				Amritanshu Pandey
			</div>
			<div class="author {writer === 'Anshuman Panda' ? 'written' : ''}" on:click={() => setAuthor('Anshuman Panda')} on:keydown={fauxfake}>
				Anshuman Panda
			</div>
			<div class="author {writer === 'Anurag Shukla' ? 'written' : ''}" on:click={() => setAuthor('Anurag Shukla')} on:keydown={fauxfake}>
				Anurag Shukla
			</div>
			<div class="author {writer === 'Kavita Krishna Meegama' ? 'written' : ''}" on:click={() => setAuthor('Kavita Krishna Meegama')} on:keydown={fauxfake}>
				Kavita Krishna Meegama
			</div>
			<div class="author {writer === 'Nivedita Tiwari' ? 'written' : ''}" on:click={() => setAuthor('Nivedita Tiwari')} on:keydown={fauxfake}>
				Nivedita Tiwari
			</div>
			<div class="author {writer === 'Pankaj Saxena' ? 'written' : ''}" on:click={() => setAuthor('Pankaj Saxena')} on:keydown={fauxfake}>
				Pankaj Saxena
			</div>
			<div class="author {writer === 'Raghava Krishna' ? 'written' : ''}" on:click={() => setAuthor('Raghava Krishna')} on:keydown={fauxfake}>
				Raghava Krishna
			</div>
			<div class="author {writer === 'Sai Priya Chodavarapu' ? 'written' : ''}" on:click={() => setAuthor('Sai Priya Chodavarapu')} on:keydown={fauxfake}>
				Sai Priya Chodavarapu
			</div>
			<div class="author {writer === 'Sushant Gangoli' ? 'written' : ''}" on:click={() => setAuthor('Sushant Gangoli')} on:keydown={fauxfake}>
				Sushant Gangoli
			</div>
			<div class="author spaced">
				Guests:
			</div>
			<div class="authors {writer === 'Shri Ramachandra Roddam' ? 'written' : ''}" on:click={() => setAuthor('Shri Ramachandra Roddam')} on:keydown={fauxfake}>
				Shri Ramachandra Roddam
			</div>
			<div class="authors {writer === 'Akshay Shankar' ? 'written' : ''}" on:click={() => setAuthor('Akshay Shankar')} on:keydown={fauxfake}>
				Akshay Shankar
			</div>
			<div class="authors {writer === 'Jash Dholani' ? 'written' : ''}" on:click={() => setAuthor('Jash Dholania')} on:keydown={fauxfake}>
				Jash Dholani
			</div>
			<div class="authors {writer === 'Kate Herse' ? 'written' : ''}" on:click={() => setAuthor('Kate Herse')} on:keydown={fauxfake}>
				Kate Herse
			</div>
			<div class="authors {writer === 'Ghora Angirasa' ? 'written' : ''}" on:click={() => setAuthor('Ghora Angirasa')} on:keydown={fauxfake}>
				Ghora Angirasa
			</div>
			<div class="authors {writer === 'Samyak Dixit' ? 'written' : ''}" on:click={() => setAuthor('Samyak Dixit')} on:keydown={fauxfake}>
				Samyak Dixit
			</div>
			<div class="authors {writer === 'Prabhav Paturi' ? 'written' : ''}" on:click={() => setAuthor('Prabhav Paturi')} on:keydown={fauxfake}>
				Prabhav Paturi
			</div>
			</div>
			{:else}
			<div class="authors">tag</div>
			{/if}
		</div>
		<div class="articlesarea">
			{#if authorposts && authorposts.length > 0}
				{#each authorposts as item, i}
					<div class="card-row" in:scale={{ duration: 250, delay: i*100}} out:scale={{ duration: 90, delay: 0}}>
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h5 style="font-weight: bold">
								<a href="{item.path}">
									{item.meta.title}
								</a>
							</h5>
							<p>{item.meta.category}</p>
							<small>{item.meta.tags}</small>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.toggler
	p.toggled
		color: #fe4a49

.toggler
	align-items: center
	width: 100%
	justify-content: center
	gap: 12px
	color: #878787
	margin-bottom: 24px
	cursor: pointer
	p
		&:hover
			color: #fe4a49
.switch
	height: 28px
	width: 64px
	background: #d7d7d7
	border-radius: 13px
	padding-top: 2px
	padding-left: 2px
	padding-right: 2px
	.ball
		height: 24px
		width: 24px
		background: white
		border-radius: 12px
		transition: 0.15s

.ball.balltag
	transform: translateX(35px)

.switch
	&:hover
		background: #fe4a49

.type.dhiti
	padding-top: 72px
	padding-bottom: 72px

.x1, .x2
	@media screen and (min-width: 1024px)
		padding-left: 32px
		padding-right: 32px

.x2
	padding-top: 64px

.x0
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto auto
	padding-top: 32px
	@media screen and (min-width: 1024px)
		padding-left: 48px
		padding-right: 48px
		align-content: start
		align-items: start
		gap: 48px 48px
		grid-template-columns: 1fr 1fr 1fr 30%
		grid-template-areas: "latestsingle latestsingle latestsingle featured" "latestthree latestthree latestthree featured"
		grid-template-rows: auto 1fr


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
				font-weight: 800
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

.featured
	grid-area: featured
	display: flex
	flex-direction: column
	@media screen and (min-width: 1024px)
		row-gap: 48px
		padding-bottom: 64px
		.card-row
			.card-body
				display: flex
				flex-direction: column
				row-gap: 4px
				p
					line-height: 1.1
					padding-top: 4px

.latestthree
	grid-area: latestthree
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	@media screen and (min-width: 1024px)
		gap: 32px 48px
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."
		.card-nix
			row-gap: 8px
			.card-image
				height: 120px	
			.card-body
				row-gap: 2px	

.card-nix
	.card-body
		display: flex
		flex-direction: column
		row-gap: 2px
		h6
			margin-bottom: 12px
			border-bottom: 1px solid #ececec
			padding-bottom: 8px
		small, cite
			margin: 0
			paddding: 0

.categorystrip
	display: flex
	flex-direction: row
	column-gap: 16px
	border-top: 1px solid #ececec
	border-bottom: 1px solid #ececec
	.category
		display: flex
		flex-direction: column
		font-family: 'Spline Sans', sans-serif
		text-transform: uppercase
		font-size: 27px
		font-weight: 700
		padding: 4px 12px
		cursor: pointer
		&:hover
			background: #fe4a49
			color: white
	.category.selected
		background: var(--strong)
		color: white
		&:hover
			background: #676767
			color: white
			cursor: none

.x2
	.categorystrip
		display: flex
		flex-direction: column
		.author
			display: flex
			flex-direction: column
			font-family: 'Spline Sans', sans-serif
			text-transform: uppercase
			font-size: 18px
			padding: 6px 4px
			cursor: pointer
			&:hover
				background: #fe4a49
				color: white
		.author.written
			color: white
			background: var(--strong)
		.authors
			display: flex
			flex-direction: column
			font-family: 'Spline Sans', sans-serif
			text-transform: uppercase
			font-size: 16px
			padding: 3px
			cursor: pointer
			&:hover
				background: #fe4a49
				color: white
		.authors.written
			background: var(--strong)
			color: white
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
		.categorystrip
			grid-area: categorystrip
			padding-top: 24px
			height: 100%
			display: flex
			flex-direction: column
			>.box
				row-gap: 2px
				position: sticky
				top: 0
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
				border-bottom: none
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
	padding-bottom: 64px
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
				border-top: 1px solid #ececec
				padding-top: 16px
				&:hover
					color: var(--strong)
				

.author.spaced
	margin-top: 24px

</style>