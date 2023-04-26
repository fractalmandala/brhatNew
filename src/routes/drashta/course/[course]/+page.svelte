<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
  import { page } from '$app/stores'
	import { fly } from 'svelte/transition'
	import { backOut, backIn } from 'svelte/easing'
	import DropDown from '$lib/components/DropDown.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { courseContents, courseTakeaways, courseInstructor, courseDetails, courseWhoFor, allCourses } from '$lib/utils/supapulls'
	let y:number
	let iW:number
	let breakPoint:boolean
	let dynamizer:any
	let details:any
	let conts: any
	let takes: any
	let instructor:any
	let otherCourses:any
	let isFor:any
	let area:any = Array(5).fill(false)
	area[1] = true
	let fake = false
	let expandMenu = false

	function toggleMenu(){
		expandMenu = !expandMenu
	}

	function fauxfake(){
		fake = !fake
	}

	function toggleArea(index:number) {
		area[index] = !area[index]
		for ( let i = 0; i < area.length; i ++ ) {
			if ( i !== index && area[i] === true ) {
				area[i] = false
			}
		}
	}

	$: if ( iW <= 1023 ) {
		breakPoint = true
	} else {
		breakPoint = false
	}

	onMount(async() => {
		dynamizer = $page.url.pathname.slice(16,50)
		conts = await courseContents(dynamizer)
		takes = await courseTakeaways(dynamizer)
		instructor = await courseInstructor(dynamizer)
		details = await courseDetails(dynamizer)
		isFor = await courseWhoFor(dynamizer)
		otherCourses = await allCourses()
	})

	afterUpdate(() => {
		dynamizer = $page.url.pathname.slice(16,50)
	})
	export let data

	

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW}/>

<svelte:head>
	<HeadComponent>
		{data.name} | Bṛhat Draṣṭā at 
	</HeadComponent>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>


<!--page header with title and icons-->
	<div id="headersection" class="rta-column minH is-padded rowgap-32">
		<img src={data.image} alt={data.name}/>
		<div id="heading" class="rta-in-col rowgap-16 text-black top-p-16 background">
			<h2 class="heading">{data.name}</h2>
			<h5 class="serif">
				{data.excerpt}
			</h5>
		</div>
		<div class="rta-grid grid4 stays-grid colgap-32">
			{#if details && details.length > 0}
				{#each details as item}
					<div class="rta-in-col cc-all bord-all all-p-16 background captioned-text">
						<div class="rta-icon2">
							<img src={item.image} alt={item.name}/>
						</div>
						<h5 class="tt-uc" style="color: var(--black)">{item.content}</h5>
						<p class="tt-uc"><b>{item.name}</b></p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--all course details area-->
	<div class="rta-grid grid2 left is-padded minH min all-align rowgap-32 colgap-32">
		<div id="columnofbuttons" class="rta-in-col rowgap-8">
			{#if !breakPoint}
			<button class="download-button" on:click={() => toggleArea(1)} class:selected={area[1]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Introduction
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			<button class="download-button" on:click={() => toggleArea(2)} class:selected={area[2]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Course Contents
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			<button class="download-button" on:click={() => toggleArea(3)} class:selected={area[3]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Course Audience
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			<button class="download-button" on:click={() => toggleArea(4)} class:selected={area[4]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Learner Takeaways
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			<button class="download-button" on:click={() => toggleArea(5)} class:selected={area[5]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Instructor Profile
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			<button class="download-button" on:click={() => toggleArea(6)} class:selected={area[6]}>
  			<div class="docs">
					<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Session Schedule
				</div>
  			<div class="download">
  			  <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
					</svg>
  			</div>
			</button>
			{/if}
			{#if breakPoint}
			<button class="dropdown-menu-button red" on:click={toggleMenu}>EXPAND DETAILS</button>
				{#if expandMenu}
					<div class="rta-in-col rowgap-8">
						<button class="menu-inside-button" on:click={() => toggleArea(1)} class:selected={area[1]}>Introduction</button>
						<button class="menu-inside-button" on:click={() => toggleArea(2)} class:selected={area[2]}>Course Contents</button>
						<button class="menu-inside-button" on:click={() => toggleArea(3)} class:selected={area[3]}>Course Audience</button>
						<button class="menu-inside-button" on:click={() => toggleArea(4)} class:selected={area[4]}>Learner Takeaways</button>
						<button class="menu-inside-button" on:click={() => toggleArea(5)} class:selected={area[5]}>Instructor Profile</button>
						<button class="menu-inside-button" on:click={() => toggleArea(6)} class:selected={area[6]}>Session Schedule</button>
					</div>
				{/if}
			{/if}
		</div>
		<div class="rta-in-col text-black">
			{#if area[1]}
			<div class="rta-in-col rowgap-24" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading">Course Introduction</h4>
				<p class="serif">
				{data.content}
				</p>
			</div>
			{/if}
			{#if area[2]}
			<div class="rta-in-col rowgap-24" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading">Course Contents</h4>
				{#if conts && conts.length > 0}
					{#each conts as item}
						<div class="rta-in-col rowgap-8 bord-all all-p-16">
							<h5 class="tt-c heading">{item.name}</h5>
							{#if item.content && item.content.length > 0}
							<pre class="serif">{item.content}</pre>
							{/if}
							{#if item.books && item.books.length > 0}
							<div class="rta-in-col">
								<small>Books Consulted:</small>
								<small style="color: #878787">{item.books}</small>
							</div>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if area[3]}
			<div class="rta-in-col rowgap-24" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading">Who is the Course For</h4>
				{#if isFor && isFor.length > 0}
					{#each isFor as item}
						<pre class="serif bord-all all-p-16">
							{item.content}
						</pre>
					{/each}
				{/if}
			</div>
			{/if}
			{#if area[4]}
			<div class="rta-in-col rowgap-24" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading">Learner Takeaways</h4>
				{#if takes && takes.length > 0}
					{#each takes as item}
						<div class="rta-in-col rowgap-8 bord-all all-p-16">
							<h5 class="heading">{item.name}</h5>
							<pre class="serif">{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if area[5]}
			<div class="rta-in-col rowgap-24" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading">Course Instructor</h4>
				{#if instructor && instructor.length > 0}
					{#each instructor as item}
						<div class="rta-in-col colgap-24 rowgap-8 bord-all all-p-16">
							<div class="rta-image w32 height-30">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-in-col w64">
								<h5 class="heading">{item.name}</h5>
								<pre class="serif">{item.content}</pre>
							</div>
						</div>
					{/each}
				{/if}
			</div>
			{/if}
		</div>
	</div>
<!--end-->

<!--all other courses list-->
	<div class="rta-grid grid4 is-padded minH all-align rowgap-32 colgap-32">
		<h4 class="heading">All Courses</h4>
		{#if otherCourses && otherCourses.length > 0}
			{#each otherCourses as item}
				<div class="rta-in-col rowgap-8 bord-bot">
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<small class="label label-red">{item.status}</small>
						<h6 class="heading tt-c">{item.name}</h6>
						<p>{item.datefrom} | with {item.ins}</p>
					{:else}
					<small class="label">{item.status}</small>
					<h6 class="heading tt-c">
						<a href="/drashta/course/{item.course}">
							{item.name}
						</a>
					</h6>
					<p>with {item.ins}</p>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
<!--end-->


<style lang="sass">

#headersection
	position: relative
	overflow: hidden
	>img
		position: absolute
		object-fit: cover
		z-index: 0
	>.rta-in-col
		z-index: 1
	>.rta-grid
		z-index: 1
	@media screen and (min-width: 1024px)
		>img
			top: 15%
			right: 0
			z-index: 0
			object-position: center right
			height: 70%
			width: 40%
	@media screen and (max-width: 1023px)
		padding-top: calc(30vh + 64px)
		>img
			top: 64px
			left: 0
			width: 100%
			height: 30vh

h2
	text-transform: capitalize
	font-weight: bold
	line-height: 1.05
	@media screen and (min-width: 1024px)
		letter-spacing: -2px
	@media screen and (max-width: 1023px)
		letter-spacing: -1px

#heading
	@media screen and (min-width: 1024px)
		width: 75%

.serif
	font-family: 'Nanum Myeongjo', serif

.heading
	font-family: 'Playfair Display', serif

pre.serif, p.serif
	font-weight: 400
	font-size: 20px

#columnofbuttons
	@media screen and (min-width: 1024px)
		width: 72%

.download-button.selected
	border: 1px solid var(--bord)

</style>