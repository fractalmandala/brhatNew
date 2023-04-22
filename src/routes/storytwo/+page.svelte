<script lang="ts">

	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'
	import { pannable } from '$lib/utils/Pannable'	
	import { draggableAction } from 'svelte-legos'
	import { elementBoundingStore } from 'svelte-legos'
	import tippy from 'tippy.js'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/scale.css'
	import 'tippy.js/themes/material.css'
	import { StoryBoard1, StoryBoard2, StoryBoard3, brCalendar, brCalendar2 } from '$lib/utils/story'
	import SimpleTipper from '$lib/components/SimpleTipper.svelte'
	import { tweened } from 'svelte/motion'
	import { fly } from 'svelte/transition'
	import { quintOut, quintIn } from 'svelte/easing'
	import { inview } from 'svelte-inview'
	import Lenis from '@studio-freight/lenis'
	let alignGrid = false
	let dt1:any
	let tooltip:any
	let dates2:any
	let el:any
	let goaly:any
	let goalyrect:any
	let goalX:any
	let goalY:any
	let goalW:any
	let goalH:any
	let rect:any
	let x:any
	let y:any
	let dt2
	let dt3
	let dt4
	let dt5
	let dt6
	let drop_zone;
	let dropped:any = [];
	let status = '';
	let visPan:number = 1
	
	let dropped_in:any
	let activeEvent = '';
  let originalX = '';
  let originalY = '';
	let ifAxisY:number
	let typeBullets1:any
	let typeCallouts1:any
	let typeBullets2:any
	let typeCallouts2:any
	let typeBullets3:any
	let typeCallouts3:any
	let showArrow = false
	let onBox = Array(8).fill(false)
	let target:any
	let bullet = 'bullet'
	let callout = 'callout'
	let sY:number
	let axisX = 0
	let axisY = 0
	let moveY = 0
	let dates:any
	let iH:number
	let oH:number
	let tooltip2:any
	let motifRotation:number
	let whiteHeight = 160
	const options = {}
	let slide:number
	let dropZone:any
	let fullHeight:number
	let yMovement:number
	let iW:number
	let oW:number
	let move:number 
	let fake:boolean
	let pz:number = 0
	let grow:number
	let grey = "#878787"
	let red = "#fe4a49"
	let ballColor:string
	let currentPanel:number = 0
	let isPanel = Array(6).fill(false)
	let isHoverButton = Array(6).fill(false)
	let isGoal = false
	let calendarShow = false
	let isDragging = false
	let inTheZone = false
	let isPanel1 = true
	let isPanel2 = false

	function updatePosition() {
		const goalyrect = goaly.getBoundingClientRect();
		goalX = goalyrect.left;
		goalY = goalyrect.top;
		goalH = goalyrect.height;
		goalW = goalyrect.width
	}



	function toggleCalendarShow(){
		calendarShow = !calendarShow
	}

	function handleMouseMotif(event: MouseEvent) {
		axisX = event.clientX;
		axisY = event.clientY
	}

	$: motifRotation =  axisX / iW * 360
	$: yMovement = axisY / iH
	$: target = iW - goalW
	$: moveY = Math.abs($coords.x)
	$: if ( moveY >= target ){
		inTheZone = true
	} else {
		inTheZone = false
	}

	$: if ( axisX / iW <= 0.16) {
		ifAxisY = axisY
	} else {
		ifAxisY = 0
	}



	function togglePanel(index:number){
		isPanel[index] = !isPanel[index]
		for ( let i = 0; i < isPanel.length; i ++ ){
			if ( i !== index && isPanel[i] === true) {
				isPanel[i] = false
			}
			currentPanel = index
		}
		if ( alignGrid === false) {
				alignGrid = true
		}
	}

	function hoverPanel(index:number){
		onBox[index] = !onBox[index]
		for ( let i = 0; i < onBox.length; i ++ ){
			if ( i !== index && onBox[i] === true) {
				onBox[i] = false
			}
		}
	}
	
	$: if (isPanel.every((item) => item === false)) {
		alignGrid = false
	}

	$: if ( isPanel1 && inTheZone) {
		isPanel2 = true;
		isPanel1 = false;
		visPan = 2
	}


	$: if (showArrow == true) {
		ballColor = red
	} else {
		ballColor = grey
	}

	function fauxfake(){
		fake = !fake
	}

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
		isDragging = true
	}

	function handlePanMove(event:any) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event:any) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
		isDragging = false
	}


	onMount(async() => {
		typeBullets1 = await StoryBoard1(bullet)
		typeCallouts1 = await StoryBoard1(callout)
		typeBullets2 = await StoryBoard2(bullet)
		typeCallouts2 = await StoryBoard2(callout)
		typeBullets3 = await StoryBoard3(bullet)
		typeCallouts3 = await StoryBoard3(callout)
		dates2 = await brCalendar2()
		dates = await brCalendar()
		isPanel1 = true
		const lenis = new Lenis({
			duration: 1.1,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 1,
			infinite: false,
		})
		function raf(time: any){
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		window.addEventListener('mousemove', handleMouseMotif);
		fullHeight = document.body.scrollHeight
		ballColor = grey
		slide = iW - 88
		tooltip = tippy('.titlebox', {
		content: 'drag the Red Dot!',
		theme: 'material',
		placement: 'bottom',
		});
		tooltip2 = tippy('.helptip', {
			content: 'help and guide',
			theme: 'material',
			placement: 'top',
		})
		updatePosition()
	})

</script>

<svelte:window bind:innerWidth={iW} bind:outerWidth={oW} bind:scrollY={sY} bind:innerHeight={iH} bind:outerHeight={oH}/>
<div class="fixed">
	{inTheZone}  {visPan} - {moveY}
</div>
<div class="respmessage type pads">
	<h5>Namaste,<br><br>
		It is recommended to browse these sections on a full desktop to receive the best experience.
	</h5><br>
	<h5>
		If you are unable to access a desktop at the moment, but would still like to see the contents, please download the unformatted PDF from here.
	</h5><br>
	<h5 style="color: #fe4a49; font-weight: bold">
		We hope you return on a wider screen!
	</h5>
</div>
<div class="storypage type back">
  <div class="leftdates" on:mouseenter={toggleCalendarShow} on:mouseleave={toggleCalendarShow}>
	<div class="goal box" bind:this={goaly} class:greengoal={inTheZone}>
		{#if isDragging && !inTheZone}
		<h6>Drag it Here!</h6>
		{/if}
		{#if inTheZone}
		<h6>Drop It!</h6>
		{/if}
		{#if !isDragging && !inTheZone && !calendarShow}
				<p class="growp" style="text-align: center">Try Scrolling Below:</p>
		{/if}
		{#if !isDragging && !inTheZone && calendarShow}
			<p>Calendar of Events</p>
		{/if}
	</div>
	<div class="box dates" style="transform: translateY({-ifAxisY}px)">
		{#if visPan === 1}
		{#if dates && dates.length > 0}
			{#each dates as item, i}
					{#if calendarShow}
				<div class="box calbox {item.catgory}">
					<p>{item.month}</p>
					<h6>{item.contentitem}</h6>
					<cite>{item.action} - {item.catgory}</cite>
				</div>
					{/if}
			{/each}
		{/if}
		{/if}
		{#if visPan === 2}
		{#if dates2 && dates2.length > 0}
			{#each dates2 as item, i}
					{#if calendarShow}
				<div class="box calbox {item.catgory}">
					<p>{item.month}</p>
					<h6>{item.contentitem}</h6>
					<cite>{item.action} - {item.catgory}</cite>
				</div>
					{/if}
			{/each}
		{/if}
		{/if}
	</div>
	</div>
  <div class="rightarrow">
		<div class="yarrowline" style="transform: translateY({axisY}px)"></div>
		<svg width="120" height="172" viewBox="0 0 120 172" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateY({axisY}px);">
			<path d="M112.849 7.16203C103.325 -2.38734 87.8443 -2.38734 78.3213 7.16203L0 85.5867L78.3213 164.011C83.0828 168.792 89.3338 171.176 95.5849 171.176C101.836 171.176 108.087 168.792 112.849 164.011C122.384 154.462 122.384 138.982 112.849 129.433L69.079 85.5867L112.849 41.7403C122.384 32.1909 122.384 16.7114 112.849 7.16203Z" fill={ballColor}/>
		</svg>
	</div>
  <div class="bottomarrow">
		<div class="arrowline" style="transform: translateX({axisX}px)"></div>
		<svg width="172" height="121" viewBox="0 0 172 121" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateX({axisX}px)">
			<path d="M7.57413 7.7396C-1.97524 17.2627 -1.97524 32.7438 7.57413 42.2669L85.9988 120.588L164.423 42.2669C169.204 37.5053 171.589 31.2543 171.589 25.0032C171.589 18.7522 169.204 12.5011 164.423 7.73959C154.874 -1.7957 139.395 -1.7957 129.845 7.7396L85.9988 51.5091L42.1524 7.7396C32.603 -1.79569 17.1235 -1.79569 7.57413 7.7396Z" fill="#FE4A49"/>
		</svg>
	</div>
  <div class="cornerbox">
		<svg class="helptip" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.4927 40.2515C9.44698 40.2515 0.492676 31.2971 0.492676 20.2515C0.492676 9.20576 9.44698 0.251465 20.4927 0.251465C31.5383 0.251465 40.4927 9.20576 40.4927 20.2515C40.4805 31.2921 31.5333 40.2393 20.4927 40.2515ZM18.4927 30.2515V34.2515H22.4927V30.2515H18.4927ZM20.4927 10.2515C22.7019 10.2515 24.4927 12.0423 24.4927 14.2515C24.4997 15.3129 24.0735 16.3313 23.3127 17.0715L20.8327 19.5915C19.3355 21.0949 18.4943 23.1297 18.4927 25.2515V26.2515H22.4927C22.3373 24.1015 23.2045 22.0041 24.8327 20.5915L26.6327 18.7515C27.8289 17.5601 28.4987 15.9397 28.4927 14.2515C28.4927 9.83318 24.9109 6.25146 20.4927 6.25146C16.0744 6.25146 12.4927 9.83318 12.4927 14.2515H16.4927C16.4927 12.0423 18.2835 10.2515 20.4927 10.2515Z" fill="#FE4A49"/>
		</svg>

	</div>
  <div class="mainarea">
		{#if isPanel1}
    <div class="prime main1" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}>
					{#if typeBullets1 && typeBullets1.length > 0}
						{#each typeBullets1 as item, i}
						<div class="bulletbox box">
							<div class="seq box">
								<h6 class="seqball" style="background: {item.color}; color: white; padding: 2px">{item.seq}</h6>
								<h5 style="font-weight: 600">{item.highlightitem}</h5>
							</div>
							<p>{item.content}</p>
						</div>
						{/each}
						<div class="box titlebox">
							<h3 class="dragtip">1 - ārambha</h3>
							<div class="boxr" style="justify-content: flex-end; column-gap: 12px">
								<h6>Bṛhat Launch <span class="colorblock">22 April 2022</span></h6>
								<div class="dragball ball1"
									use:pannable
									on:panstart={handlePanStart}
									on:panmove={handlePanMove}
									on:panend={handlePanEnd}
									style="transform:
										translate({$coords.x}px,{$coords.y}px)
										rotate({$coords.x * 0.2}deg)"	
									on:click={updatePosition}
									on:keydown={fauxfake}
									>
								</div>
							</div>
						</div>
					{/if}		
					<div class="gridof3" class:calibrated={alignGrid}>
						{#if typeCallouts1 && typeCallouts1.length > 0}
						{#each typeCallouts1 as item, i}
							<button class="storybutton" style="background: {item.color}" on:click={() => togglePanel(i)} on:mouseenter={() => hoverPanel(i)} on:mouseleave={() => hoverPanel(i)}>
								{item.highlightitem}
								{#if onBox[i] && !alignGrid}
									<p>{item.content}</p>
								{/if}
							</button>
							{#if isPanel[i]}
								<div class="box insidebox" class:biginside={isPanel[i]} in:fly={{ duration: 600, delay: 200, easing: quintOut}} out:fly={{ duration: 200, delay: 0, easing: quintIn}}>
									<div class="box">
										<h4 style="color: #474747">{item.highlightitem}</h4>
										<p>{item.content}</p>
									</div>
										<img src={item.image} alt={item.id} in:fly={{duration: 400, x: 320}}/>
								</div>
							{/if}
						{/each}
						{/if}
					</div>
		</div>
		{/if}
		{#if isPanel2}
    <div class="prime main2" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}>
					{#if typeBullets2 && typeBullets2.length > 0}
						{#each typeBullets2 as item, i}
						<div class="bulletbox box">
							<div class="seq box">
								<h6 class="seqball" style="background: {item.color}; color: white; padding: 2px">{item.seq}</h6>
								<h5 style="font-weight: 600">{item.highlightitem}</h5>
							</div>
							<p>{item.content}</p>
						</div>
						{/each}
						<div class="box titlebox">
							<h3 class="dragtip">2 - bṛhat and sub-brands</h3>
							<div class="boxr" style="justify-content: flex-end; column-gap: 12px">
								<h6>Explore our <span class="colorblock">Brand Tree</span></h6>
								<div class="dragball ball1"
									use:pannable
									on:panstart={handlePanStart}
									on:panmove={handlePanMove}
									on:panend={handlePanEnd}
									style="transform:
										translate({$coords.x}px,{$coords.y}px)
										rotate({$coords.x * 0.2}deg)"	
									on:click={updatePosition}
									on:keydown={fauxfake}
									>
								</div>
							</div>
						</div>
					{/if}		
					<div class="gridof3" class:calibrated={alignGrid}>
						{#if typeCallouts2 && typeCallouts2.length > 0}
						{#each typeCallouts2 as item, i}
							<button class="storybutton" style="background: {item.color}" on:click={() => togglePanel(i)} on:mouseenter={() => hoverPanel(i)} on:mouseleave={() => hoverPanel(i)}>
								{item.highlightitem}
								{#if onBox[i] && !alignGrid}
									<p>{item.content}</p>
								{/if}
							</button>
							{#if isPanel[i]}
								<div class="box insidebox" class:biginside={isPanel[i]} in:fly={{ duration: 600, delay: 200, easing: quintOut}} out:fly={{ duration: 200, delay: 0, easing: quintIn}}>
									<div class="box">
										<h4 style="color: #474747">{item.highlightitem}</h4>
										<p>{item.content}</p>
									</div>
										<img src={item.image} alt={item.id} in:fly={{duration: 400, x: 320}}/>
								</div>
							{/if}
						{/each}
						{/if}
					</div>
		</div>
		{/if}
    <div class="prime main3" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
    <div class="prime main4" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
    <div class="prime main5" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
    <div class="prime main6" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
    <div class="prime main7" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
    <div class="prime main8" in:fly={{ duration: 1400, delay: 1800, x: 1200, easing: quintIn}} out:fly={{ duration: 1200, delay: 600, x: 1200, easing: quintOut }}></div>
  </div>
</div>

<style lang="sass">

.respmessage
	width: 100vw
	height: 100vh
	display: flex
	flex-direction: column
	justify-content: center
	
	@media screen and (min-width: 1024px)
		display: none

.storybutton
	border: none
	color: white
	font-size: 24px
	font-weight: bold
	padding: 24px
	transform-origin: left center
	transition: transform 0.4s var(--cubea)
	transform: scale(0.8)
	&:hover
		transform: scale(1)
	p
		color: white
		padding-top: 24px

.fixed
	z-index: 10000
	background: yellow
	color: black

.goal
	border: 1px solid #d7d7d7
	width: 80%
	min-height: 80px
	border-radius: 4px
	display: flex
	justify-content: flex-start
	align-items: center
	z-index: 1
	background: white
	row-gap: 8px
	h6
		margin: 0
		background: #fe4a49
		color: white
		padding: 4px 8px
	p
		color: #272727
		text-transform: uppercase
		font-weight: bold

.goal.greengoal
	background: #10D56C
	h6
		color: white

.tippy-box[data-theme~='dragball']
	background-color: yellow
	color: white

.dragball
	width: 24px
	height: 24px
	border-radius: 50%
	background: #fe4a49
	transition: width 0.2s ease, height 0.2s ease
	z-index: 999
	position: fixed
	&:hover
		width: 32px
		height: 32px


.colorblock
	background: #474747
	color: white
	padding: 2px 4px

.gridof3.calibrated
	grid-template-columns: 1fr 72%
	grid-template-rows: 1fr 1fr 1fr
	grid-template-areas: ". biginside" ". biginside" ". biginside"
	align-items: stretch
	.insidebox.biginside
		grid-area: biginside

.gridof3
	height: 100%
	align-items: start
	padding: 0
	justify-content: start
	justify-items: start

.titlebox
	padding-top: 24px
	height: max-content
	h3, h6
		margin: 0
		padding: 0
	gap: 0
	h6
		color: #878787
		margin-right: 64px
	text-align: right

.insidebox
	img
		object-fit: cover
		width: 200px
		height: 160px

.insidebox.biginside
	img
		height: 100%
		width: 100%
	

.bulletbox
	row-gap: 16px

.calbox
	align-items: flex-start
	row-gap: 0
	margin-bottom: 48px
	z-index: 0
	cite, p
		margin: 0
		padding: 0
	h6
		margin-top: 5px
		margin-bottom: 2px
	cite
		font-style: normal
		text-transform: uppercase

.calbox.video
	cite
		background: #0AB9D0
		color: white
		padding: 2px

.calbox.education
	cite
		background: #E26A07
		color: white
		padding: 2px

.calbox.culture
	cite
		background: #ACAD1C
		color: white
		padding: 2px

.bottomarrow
	z-index: 0
	display: flex
	align-items: center
	svg path
		fill: #878787
	.arrowline
		width: 1px
		height: calc(100% - 48px)
		background: #ececec
		position: absolute
		top: 0
		margin-right: -12px
		left: 12px

.rightarrow
	z-index: 0
	overflow: hidden
	display: flex
	flex-direction: column
	align-items: center
	.yarrowline
		height: 1px
		width: calc(100% - 48px)
		background: #ececec
		position: absolute
		left: 0
		top: 12px

.rightarrow svg, .bottomarrow svg
	object-fit: contain
	width: 24px
	height: 24px

.bottomarrow svg
	path
		transform-origin: center center
		transform: rotate(180deg)

.prime
	height: 100vh

.storypage
	display: grid 
	grid-template-columns: 280px 1fr 48px 
	grid-template-rows: auto
	height: 100vh
	width: 100vw
	gap: 0px 0px 
	position: relative
	grid-auto-flow: row 
	grid-template-areas: "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "leftdates mainarea rightarrow" "bottomarrow bottomarrow cornerbox" 
	@media screen and (max-width: 1023px)
		display: none

.leftdates 
	grid-area: leftdates 
	height: calc(100vh - 48px)
	padding-left: 32px
	width: 280px
	display: flex
	flex-direction: column
	justify-content: space-between
	padding-top: 24px
	padding-bottom: 88px
	.dates
		padding-top: 32px

.rightarrow 
	grid-area: rightarrow 
	height: calc(100vh - 48px)

.bottomarrow 
	grid-area: bottomarrow 
	width: calc(100vw - 48px)
	height: 48px

.cornerbox 
	grid-area: cornerbox 
	width: 64px
	height: 64px
	z-index: 900
	background: white
	svg
		object-fit: contain
		width: 32px
		height: 32px
		transition: width 0.4s ease, height 0.6s ease
	&:hover
		svg
			width: 40px
			height: 40px
.mainarea 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "main1" "main2" "main3" "main4" "main5" "main6" "main7" "main8" 
	grid-area: mainarea 
	height: calc(100vh - 48px)
	overflow-y: scroll
	z-index: 1

.prime
	gap: 32px

.main1, .main2 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr
	grid-template-rows: 1fr 1fr 1fr 
	grid-auto-flow: row 
	grid-template-areas: ". . . titlebox titlebox" "gridbox4 gridbox4 gridbox4 gridbox4 gridbox4" "gridbox4 gridbox4 gridbox4 gridbox4 gridbox4"
	grid-area: main2 
	height: calc(100vh - 48px)
	padding: 0
	.gridof3
		grid-area: gridbox4
	.titlebox
		grid-area: titlebox


.main3 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 
	grid-template-rows: 1fr 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: ". . . . . ." ". . . . . ." ". . . . . ." 
	grid-area: main3 
.main4 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 
	grid-template-rows: 1fr 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: ". . . . . ." ". . . . . ." ". . . . . ." 
	grid-area: main4 
.main5 
	grid-area: main5 
.main6 
	grid-area: main6 
.main7 
	grid-area: main7 
.main8 
	grid-area: main8 


</style>
