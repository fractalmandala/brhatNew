<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
  import { page } from '$app/stores'
	import { fly } from 'svelte/transition'
	import { backOut, backIn } from 'svelte/easing'
	import DropDown from '$lib/components/DropDown.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import CompButton from '$lib/ridunits/RIDButton.svelte'
	import { courseContents, juneCalendar, courseTakeaways, newSRG, courseInstructor, courseDetails, courseWhoFor, allCourses } from '$lib/utils/supapulls'
	let y:number
	let iW:number
	let breakPoint:boolean
	let dynamizer:any
	let details:any
	let conts: any
	let takes: any
  let junes:any
	let instructor:any
	let otherCourses:any
    let schedules:any
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
    schedules = await newSRG(dynamizer)
    junes = await juneCalendar();
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
	<div id="headersection" class="rta-column outer-box minH p-top-64 rowgap600" data-lenis-scroll-snap-align="start">
		<div class="rta-grid colgap600 grid2 right2" id="headersectionmaingrid">
			<div class="rta-column rowgap400">
				<div id="heading" class="rta-column rowgap400 p-top-64 background">
					<h2 class="heading">{data.name}</h2>
					<h5 class="serif">
						{data.excerpt}
					</h5>
				</div>
				<div class="rta-grid grid4 colgap400 rowgap400">
					{#if details && details.length > 0}
						{#each details as item}
							<div class="rta-column xcenter rowgap100 bord-bot-m p-bot-16-m background">
								<div class="rta-icon2 rta-column">
									<img src={item.image} alt={item.name}/>
								</div>
								<h6 class="tt-uc ta-c-d">{item.content}</h6>
								<small class="tt-uc ta-c-d"><b>{item.name}</b></small>
							</div>
						{/each}
            {#if data.status === 'open now'}
              <CompButton --thisbuttoncolor="#0170B9">
                <a href="https://rzp.io/l/4OgbiD3Co" target="_blank" rel="noreferrer" style="font-size: 18px">
                  Register and Pay
                </a>
              </CompButton>
            {/if}
					{/if}
				</div>
			</div>
			<div class="rta-column rta-image" id="heroimage">
				<img src={data.image} alt={data.name}/>
			</div>
		</div>
	</div>
<!--end-->

<!--all course details area-->
	<div class="rta-grid grid2 left0 colgap600 outer-box" data-lenis-scroll-snap-align="start">
		<div id="columnofbuttons" class="rta-column bord-right-d rowgap300 p-bot-64">
			{#if breakPoint}
			<button class="drawer-select" on:click={toggleMenu}>EXPAND DETAILS</button>
			{/if}
			{#if !breakPoint || expandMenu}
			<div class="rta-column rowgap300" on:click={toggleMenu} on:keydown={fauxfake}>
			<button class="drawer-item2" on:click={() => toggleArea(1)} class:selected={area[1]}>
					Introduction
			</button>
			<button class="drawer-item2" on:click={() => toggleArea(2)} class:selected={area[2]}>
					Course Contents
			</button>
			<button class="drawer-item2" on:click={() => toggleArea(3)} class:selected={area[3]}>
					Course Audience
			</button>
			<button class="drawer-item2" on:click={() => toggleArea(4)} class:selected={area[4]}>
					Learner Takeaways
			</button>
			<button class="drawer-item2" on:click={() => toggleArea(5)} class:selected={area[5]}>
					Instructor Profile
			</button>
			<button class="drawer-item2" on:click={() => toggleArea(6)} class:selected={area[6]}>
					Session Schedule
			</button>
			</div>
			{/if}
		</div>
		<div class="rta-column p-bot-64">
			{#if area[1]}
			<div class="rta-column rowgap300" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading is-blue">Course Introduction</h4>
				<pre class="serif">
				{data.content}
				</pre>
			</div>
			{/if}
			{#if area[2]}
			<div class="rta-column rowgap300" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading is-blue">Course Contents</h4>
				{#if conts && conts.length > 0}
					{#each conts as item}
						<div class="rta-column rowgap-8 bord-bot p-bot-16">
							<h6 class="tt-c heading">{item.name}</h6>
							{#if item.content && item.content.length > 0}
							<pre class="serif">{item.content}</pre>
							{/if}
							{#if item.books && item.books.length > 0}
							<div class="rta-column">
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
			<div class="rta-column rowgap100" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading is-blue">Who is the Course For</h4>
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
			<div class="rta-column rowgap300" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading is-blue">Learner Takeaways</h4>
				{#if takes && takes.length > 0}
					{#each takes as item}
						<div class="rta-column rowgap100 bord-bot p-bot-16">
							<h6 class="heading">{item.name}</h6>
							<pre class="serif">{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
			{/if}
			{#if area[5]}
			<div class="rta-column rowgap300" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
				<h4 class="heading is-blue">Course Instructor</h4>
				{#if instructor && instructor.length > 0}
					{#each instructor as item}
						<div class="rta-row row-col fixed rowgap300 colgap300 bord-bot p-bot-16">
							<div class="rta-image w32 height-30-3">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-column w64">
								<h6 class="heading">{item.name}</h6>
								<pre class="serif">{item.content}</pre>
							</div>
						</div>
					{/each}
				{/if}
			</div>
			{/if}
            {#if area[6]}
                <div class="rta-column rowgap300" in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut}} out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn}}>
                    {#if schedules && schedules.length > 0}
                    <h4 class="heading is-blue">Session Schedule</h4>
                    <div class="rta-grid grid7">
                      {#if junes && junes.length > 0}
                        {#each junes as item}
                          <div class="rta-column datebox {item.isyes}">
                            <small>June {item.id}</small>
                            {#if item.isyes === 'yes'}
                            <p>{item.title}</p>
                            {/if}
                          </div>
                        {/each}
                      {/if}
                    </div>
                    {/if}
                </div>
            {/if}
		</div>
	</div>
<!--end-->
	<div class="rta-column outer-box"><div class="line"></div></div>
<!--all other courses list-->
	<div class="rta-grid grid2 left0 rowgap400 outer-box colgap600 p-top-64" data-lenis-scroll-snap-align="start">
		<div class="rta-column">
			<h3 class="heading is-blue">All Courses</h3>
		</div>
		<div class="rta-grid grid3 colgap400 rowgap400 p-bot-64">
		{#if otherCourses && otherCourses.length > 0}
			{#each otherCourses as item}
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<small class="label label-red">{item.status}</small>
						<h6 class="heading tt-c">{item.name}</h6>
						<p>{item.datefrom} | with {item.ins}</p>
					{:else}
					<small class="label">{item.status}</small>
					<h6 class="heading tt-c is-blue">
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
	</div>
<!--end-->


<style lang="sass">

.drawer-select
	background: #0170B9
	color: white
	border: none
	font-size: 18px
	padding: 8px
	border-radius: 20px


#heading
	h2
		@media screen and (max-width: 1023px)
			font-size: 2.7rem

#headersectionmaingrid
	@media screen and (max-width: 1023px)
		grid-template-areas: "hero" "."
		padding-top: 64px
		#heroimage
			grid-area: hero

.is-blue
	color: #0170B9

#columnofbuttons
	@media screen and (min-width: 1024px)
		padding-right: 32px

.datebox.yes
	background: var(--borderline)
	small
		color: #fe4a49

.datebox
	@media screen and (min-width: 1024px)
		height: 120px
		border: 1px solid var(--borderline)
		padding: 16px
		p
			font-size: 14px
			line-height: 1.2
			font-weight: bold
			color: var(--opposite)
	@media screen and (max-width: 1023px)
		height: 120px
		border: 1px solid var(--borderline)
		padding: 8px
		p
			font-size: 14px
			line-height: 1.2
			font-weight: bold
			color: var(--opposite)

.drawer-item2
	&::after
		background: #0170B9
	@media screen and (max-width: 1023px)
		text-align: center

#heroimage
	@media screen and (min-width: 1024px)
		justify-content: center
		img
			height: 80%

.rta-icon2
	img
		object-fit: cover
	@media screen and (min-width: 1024px)
		align-items: center
		img
			width: 80px
			height: 80px
	@media screen and (max-width: 1023px)
		img
			width: 80px
			height: 80px

h2
	text-transform: capitalize
	font-weight: bold
	line-height: 1.05
	@media screen and (min-width: 1024px)
		letter-spacing: -2px
	@media screen and (max-width: 1023px)
		letter-spacing: -1px

.serif
	font-family: 'Nanum Myeongjo', serif

.heading
	font-family: 'Playfair Display', serif

pre.serif
	font-weight: 400
	font-size: 20px

.drawer-item2.selected
	border: 1px solid var(--bord)

</style>