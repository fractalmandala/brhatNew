<script lang="ts">
//@ts-nocheck
	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { latestDhitiFour, allFeaturedPosts, filterChosen, authorfiltered, allBodhas, allCandP, allIKS, allDharmaToday } from '$lib/utils/localpulls'
	import { scale } from 'svelte/transition'
	import visibilityMode from '$lib/stores/visibility'
	import { quartIn, quartOut } from 'svelte/easing'
	import CompDrawer from '$lib/ridunits/CompDrawer.svelte'
	import DropDown from '$lib/components/DropDown.svelte'
	import DropDown2 from '$lib/components/DropDown.svelte'
	import SocialShare from '$lib/ridunits/RIDSocialShare.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { clickOutsideAction } from "svelte-legos";
	let nextthreeposts:string|any[]
	let featuredposts:string|any[]
	let filteredposts:string|any[]
	let category:string = ''
	let fake:boolean = false
	let writer:string = ''
	let authorposts:string|any[]
	let writersortags:boolean = true
	let showWriters = false
	let searchFocus = false
	let showDefault = true
	let categoryItems = Array(4).fill(false)
	let bodhas:any
	let caps:any
	let knows:any
	let dharmas:any
	let hide = true

	$: anyCategoryOpen = categoryItems.some(item => item)
	$: if (anyCategoryOpen === true) {
		showDefault = false
	} else {
		showDefault = true
	}

	function toggleCategory(index:number){
		categoryItems[index] = !categoryItems[index]
		for ( let i = 0; i < categoryItems.length; i++ ) {
			if ( i !== index && categoryItems[i] === true ) {
				categoryItems[i] = false
			}
		}
	}

	function toggleWriters(){
		showWriters = !showWriters
	}

	function offWriters(){
		showWriters = !showWriters
	}

	function searchFocusOn(){
		searchFocus = true
	}

	function searchFocusOff(){
		searchFocus = false
	}

	function fauxfake(){
		fake = !fake
	}

	function setAuthor(newAuthor:string){
		writer = newAuthor
	}

	$: if (writer) {
		(async() => {
			authorposts = await authorfiltered(writer)
		})()
	}

	onMount(async() => {
		nextthreeposts = await latestDhitiFour()
		featuredposts = await allFeaturedPosts()
		filteredposts = await filterChosen(category)
		authorposts = await authorfiltered(writer)
		bodhas = await allBodhas()
		caps = await allCandP()
		knows = await allIKS()
		dharmas = await allDharmaToday()
	})

</script>

<svelte:head>
	<HeadComponent>
		Dhīti, the blog at
	</HeadComponent>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
</svelte:head>

<div id="top-panel" class="rta-grid grid2 right outer-box minH" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div class="rta-column bord-right-d main-area">
		<div id="topsticky" class="rta-column rowgap600 bord-bot p-bot-32 p-top-64 mobile-down">
			<div class="rta-row between p-bot-16 ybot top-row">
				<div class="rta-column rowgap50 xright">
					{#if showDefault}
					<small class="is-black"><strong>Filter Categories:</strong></small>
					{:else}
					<small class="is-black"><strong>Deselect Category to Return to Latest Posts.</strong></small>
					{/if}
					<div class="rta-row colgap100">
					<button class="drawer-item"
						class:light={$visibilityMode} class:dark={!$visibilityMode}
						on:click={() => toggleCategory(1)}
						class:selected={categoryItems[1]}
						>Two Bodhas</button>
					<button class="drawer-item"
						class:light={$visibilityMode} class:dark={!$visibilityMode}
						on:click={() => toggleCategory(2)}
						class:selected={categoryItems[2]}
						>Dharma Today</button>
					<button class="drawer-item"
						class:light={$visibilityMode} class:dark={!$visibilityMode}
						on:click={() => toggleCategory(3)}
						class:selected={categoryItems[3]}
						>IKS</button>
					<button class="drawer-item"
						class:light={$visibilityMode} class:dark={!$visibilityMode}
						on:click={() => toggleCategory(4)}
						class:selected={categoryItems[4]}
						>Culture and Policy
					</button>
					</div>
				</div>
			</div>
			<div class="rta-row between ycenter bottom-row" use:autoAnimate={{ duration: 100 }}>
				{#if showDefault}
					<h5><strong>Latest Posts:</strong></h5>
				{/if}
				{#if categoryItems[1]}
					<h5><strong>Svayambodha and Śatrubodha</strong></h5>
				{/if}
				{#if categoryItems[2]}
					<h5><strong>Dharma Today</strong></h5>
				{/if}
				{#if categoryItems[3]}
					<h5><strong>Indian Knowledge System</strong></h5>
				{/if}
				{#if categoryItems[4]}
					<h5><strong>Culture and Policy</strong></h5>
				{/if}
				{#if !hide}
				<div class="dropper point">
					<div class="rta-row filter-row ycenter colgap100" on:click={toggleWriters} on:keydown={fauxfake} class:light={$visibilityMode} class:dark={!$visibilityMode}>
						<small><strong>Filter Writers</strong></small>
						<div class="filtericon">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 0V1.77778H15.1111L9.77778 9.77778V16H6.22222V9.77778L0.888889 1.77778H0V0H16Z" fill="var(--dhiticolor)"/>
							</svg>
						</div>
					</div>
				</div>
				{#if showWriters}
				<div class="rta-column writers-column modal"
				use:clickOutsideAction
				on:clickoutside={offWriters}
				>
				<div class="authors {writer === 'Akshay Jha' ? 'written' : ''}" on:click={() => setAuthor('Akshay Jha')} on:keydown={fauxfake}>
					<p>Akshay Jha</p>
				</div>
				<div class="authors {writer === 'Amritanshu Pandey' ? 'written' : ''}" on:click={() => setAuthor('Amritanshu Pandey')} on:keydown={fauxfake}>
					<p>Amritanshu Pandey</p>
				</div>
				<div class="authors {writer === 'Anshuman Panda' ? 'written' : ''}" on:click={() => setAuthor('Anshuman Panda')} on:keydown={fauxfake}>
					<p>Anshuman Panda</p>
				</div>
				<div class="authors {writer === 'Anurag Shukla' ? 'written' : ''}" on:click={() => setAuthor('Anurag Shukla')} on:keydown={fauxfake}>
					<p>Anurag Shukla</p>
				</div>
				<div class="authors {writer === 'Kavita Krishna Meegama' ? 'written' : ''}" on:click={() => setAuthor('Kavita Krishna Meegama')} on:keydown={fauxfake}>
					<p>Kavita Krishna Meegama</p>
				</div>
				<div class="authors {writer === 'Nivedita Tiwari' ? 'written' : ''}" on:click={() => setAuthor('Nivedita Tiwari')} on:keydown={fauxfake}>
					<p>Nivedita Tiwari</p>
				</div>
				<div class="authors {writer === 'Pankaj Saxena' ? 'written' : ''}" on:click={() => setAuthor('Pankaj Saxena')} on:keydown={fauxfake}>
					<p>Pankaj Saxena</p>
				</div>
				<div class="authors {writer === 'Raghava Krishna' ? 'written' : ''}" on:click={() => setAuthor('Raghava Krishna')} on:keydown={fauxfake}>
					<p>Raghava Krishna</p>
				</div>
				<div class="authors {writer === 'Sai Priya Chodavarapu' ? 'written' : ''}" on:click={() => setAuthor('Sai Priya Chodavarapu')} on:keydown={fauxfake}>
					<p>Sai Priya Chodavarapu</p>
				</div>
				<div class="authors {writer === 'Sushant Gangoli' ? 'written' : ''}" on:click={() => setAuthor('Sushant Gangoli')} on:keydown={fauxfake}>
					<p>Sushant Gangoli</p>
				</div>
				<div class="spaced">
					<p><strong>Guests:</strong></p>
				</div>
				<div class="authors {writer === 'Shri Ramachandra Roddam' ? 'written' : ''}" on:click={() => setAuthor('Shri Ramachandra Roddam')} on:keydown={fauxfake}>
					<p>Shri Ramachandra Roddam</p>
				</div>
				<div class="authors {writer === 'Akshay Shankar' ? 'written' : ''}" on:click={() => setAuthor('Akshay Shankar')} on:keydown={fauxfake}>
					<p>Akshay Shankar</p>
				</div>
				<div class="authors {writer === 'Jash Dholani' ? 'written' : ''}" on:click={() => setAuthor('Jash Dholania')} on:keydown={fauxfake}>
					<p>Jash Dholani</p>
				</div>
				<div class="authors {writer === 'Kate Herse' ? 'written' : ''}" on:click={() => setAuthor('Kate Herse')} on:keydown={fauxfake}>
					<p>Kate Herse</p>
				</div>
				<div class="authors {writer === 'Ghora Angirasa' ? 'written' : ''}" on:click={() => setAuthor('Ghora Angirasa')} on:keydown={fauxfake}>
					<p>Ghora Angirasa</p>
				</div>
				<div class="authors {writer === 'Samyak Dixit' ? 'written' : ''}" on:click={() => setAuthor('Samyak Dixit')} on:keydown={fauxfake}>
					<p>Samyak Dixit</p>
				</div>
				<div class="authors {writer === 'Prabhav Paturi' ? 'written' : ''}" on:click={() => setAuthor('Prabhav Paturi')} on:keydown={fauxfake}>
					<p>Prabhav Paturi</p>
				</div>
				</div>
				{/if}
				{/if}
			</div>
		</div>
		<div class="rta-column p-top-64 mobile-up" use:autoAnimate>
			{#if showDefault}
				{#if nextthreeposts && nextthreeposts.length > 0}
				{#each nextthreeposts as item}
					<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
						<div class="rta-column w70 rowgap200">
							<p class="citeone">{item.meta.category}</p>
							<h5 class="heading" class:light={$visibilityMode} class:dark={!$visibilityMode}><a href="{item.path}">{item.meta.title}</a></h5>
							<p>{item.meta.excerpt}</p>
							<div class="rta-column p-top-16">
								<p class="author">{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</div>
						<div class="rta-image rta-column ytop w32 height-24">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
					</div>
				{/each}
				{/if}
			{/if}
			{#if categoryItems[1]}
				{#if bodhas && bodhas.length > 0}
					{#each bodhas as item}
					<div class="rta-dhiti rta-row ytop between bord-bot p-bot-32 p-top-32">
						<div class="rta-column w70 rowgap200">
							<p class="citeone">{item.meta.category}</p>
							<h5 class="heading"><a href="{item.path}">{item.meta.title}</a></h5>
							<p>{item.meta.excerpt}</p>
							<div class="rta-column p-top-16">
								<p class="author">{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</div>
						<div class="rta-image rta-column ytop w32 height-24">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
					</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[2]}
				{#if dharmas && dharmas.length > 0}
					{#each dharmas as item}
					<div class="rta-dhiti rta-row ytop between bord-bot p-bot-32 p-top-32">
						<div class="rta-column w70 rowgap200">
							<p class="citeone">{item.meta.category}</p>
							<h5 class="heading"><a href="{item.path}">{item.meta.title}</a></h5>
							<p>{item.meta.excerpt}</p>
							<div class="rta-column p-top-16">
								<p class="author">{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</div>
						<div class="rta-image rta-column ytop w32 height-24">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
					</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[3]}
				{#if knows && knows.length > 0}
					{#each knows as item}
					<div class="rta-dhiti rta-row ytop between bord-bot p-bot-32 p-top-32">
						<div class="rta-column w70 rowgap200">
							<p class="citeone">{item.meta.category}</p>
							<h5 class="heading"><a href="{item.path}">{item.meta.title}</a></h5>
							<p>{item.meta.excerpt}</p>
							<div class="rta-column p-top-16">
								<p class="author">{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</div>
						<div class="rta-image rta-column ytop w32 height-24">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
					</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[4]}
				{#if caps && caps.length > 0}
					{#each caps as item}
					<div class="rta-dhiti rta-row ytop between bord-bot p-bot-32 p-top-32">
						<div class="rta-column w70 rowgap200">
							<p class="citeone">{item.meta.category}</p>
							<h5 class="heading"><a href="{item.path}">{item.meta.title}</a></h5>
							<p>{item.meta.excerpt}</p>
							<div class="rta-column p-top-16">
								<p class="author">{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
								<cite class="citetwo">{item.meta.tags}</cite>
							</div>
						</div>
						<div class="rta-image rta-column ytop w32 height-24">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
					</div>
					{/each}
				{/if}
			{/if}
		</div>
	</div>
	<div class="rta-column featured rowgap200 p-top-32">
		<div class="rta-column introbox">
			<cite class="is-black"><b>Dharma</b></cite>
			<cite>The vast pool of culture we draw from, working for its furtherance.</cite>
			<cite class="is-black"><b>Policy</b></cite>
			<cite>The instrument of activating Dharma, providing it with affordance.</cite>
			<cite class="is-black"><b>Leadership</b></cite>
			<cite>The bearing forward and sustaining, that will take us to deliverance.</cite>
			<cite class="is-purple"><b>Dhīti - a blog ranging all three through essays, research pieces and commentary.</b></cite>
		</div>
		<SocialShare --socialcolor="#5A3261"/>
		<div class="rta-column"><div class="line"></div></div>
			<h5 class="p-top-32 p-bot-16"><strong>Featured Posts:</strong></h5>
			{#if featuredposts && featuredposts.length > 0}
				{#each featuredposts as item}
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
				{/each}
			{/if}
	</div>
</div>

<style lang="sass">

#topsticky
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		.bottom-row
			h5
				display: none
		.top-row
			flex-wrap: wrap
			.xright
				width: 100%
			.xright
				.rta-row
					flex-direction: column
					row-gap: 16px

.main-area
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse

.bottom-row
	position: relative
	.writers-column
		position: absolute
		text-align: right
		top: 40px
		right: 0
		z-index: 400
		background: var(--dhiticolor)
		color: white
		.spaced p
			color: white
		.authors
			transition: 0.08s
			padding: 0 16px
			cursor: pointer
			p
				color: white
			&:hover
				background: white
				p
					color: var(--dhiticolor)
		@media screen and (min-width: 1024px)
			border: 1px solid var(--borderline)
			min-width: 240px
			padding: 16px 0
			border-radius: 8px
			.spaced
				padding-right: 16px
				padding-top: 16px
				padding-bottom: 8px
				border-top: 1px solid white
				margin-top: 16px

.is-purple
	color: var(--dhiticolor)

.hover-purple
	transition: 0.08s
	&:hover
		color: var(--dhiticolor)

.introbox
	cite
		line-height: 1.12
	cite.is-black, cite.is-purple
		padding-top: 12px
		padding-bottom: 2px

.filtericon
	transition: 0.08s
	display: flex
	align-items: center
	justify-content: center
	svg
		transition: 0.08s

.filter-row
	transition: 0.08s
	border-radius: 16px
	padding: 8px 12px
	border: 1px solid var(--borderline)
	&:hover
		background: var(--dhiticolor)
		small
			color: white
		.filtericon
			svg
				path
					fill: white

.filter-row.light
	small
		color: #272727

.filter-row.dark
	small
		color: white

.filter-row
	small
		line-height: 1
		padding-top: 4px
		font-weight: bold


#top-panel
	@media screen and (min-width: 1024px)
		.rta-column.bord-right-d
			padding-right: 48px
		.featured
			padding-left: 48px
	@media screen and (max-width: 1023px)
		margin-top: 0px

.rta-dhiti
	.rta-image
		img
			border-radius: 8px

.rta-dhiti
	h5
		transition: 0.08s
		&:hover
			color: var(--dhiticolor)

.rta-dhiti
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		.w70, .w32
			width: 100%

.w70
	@media screen and (min-width: 1024px)
		width: 64%

.author
	position: relative
	padding-top: 16px
	padding-bottom: 0
	&::after
		position: absolute
		top: 0
		left: 0
		content: ''
		height: 1px
		background: var(--borderline)
		width: 50%

p.citeone
	background: var(--dhiticolor)
	color: white
	line-height: 1
	padding: 8px 12px 4px 12px
	text-transform: uppercase
	font-size: 14px
	border-radius: 16px
	@media screen and (min-width: 1024px)
		width: max-content
		text-align: center
	@media screen and (max-width: 1023px)
		font-size: 12px
		width: max-content


.drawer-item
	text-decoration: none
	font-size: 12px
	font-weight: bold
	text-transform: uppercase
	padding: 4px 12px
	border-radius: 16px
	color: white
	transition: 0.08s

.light.drawer-item
	background: #c7c7c7
	border: 2px solid #c7c7c7
	&:hover
		border: 2px solid #5A3261
		background: white
		color: #5A3261

.dark.drawer-item
	background: #474747
	border: 2px solid #474747
	&:hover
		border: 2px solid #0B6E4F
		background: #171717
		color: #0B6E4F

.light.drawer-item.selected
	background: #5A3261
	color: white
	border: 2px solid #5A3261

.dark.drawer-item.selected
	background: #0B6E4F
	color: white
	border: 2px solid #0B6E4F

#top-panel
	@media screen and (min-width: 1024px)
		padding-top: 128px

.heading
	font-family: 'Playfair Display', serif

h5.heading
	font-weight: 800
	font-size: 2rem
	line-height: 1.2

h5.heading.light
	color: #272727

h5.heading.dark
	color: white

</style>