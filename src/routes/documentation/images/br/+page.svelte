<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { draggableAction } from 'svelte-legos'
	import { spring } from 'svelte/motion';
	import { pannable } from '$lib/utils/Pannable'
	import { fly } from 'svelte/transition'
	import TheBox from '$lib/components/TheBox.svelte'
	import { draw } from 'svelte/transition';
	import { quintOut, backIn } from 'svelte/easing'
	import { inview } from 'svelte-inview';
	import AllBrands from '$lib/components/AllBrands.svelte'
	import Parallax from '$lib/components/ParallaxImage.svelte';
	import { brhatTeam } from '$lib/utils/supapulls'
	import { StoryBoardPanel, StoryBoardBullet, StoryBoardCallout, brCalendar3, brCalendar4 } from '$lib/utils/story';
	let svgDraw = true
	let svgDraw2 = false
	let showNot = false
	let ownEvents:any
	let sH:any
	let iW:number
	let fH:number
	let showCalendar = false
	let members:any
	const options = {};
	let events:any
	let sY: number;
	let portrait1: any;
	let motifView = false;
	let panels1: any;
	let bullets1: any;
	let callouts1: any;
	let panels2: any;
	let bullets2: any;
	let callouts2: any;
	let panels3: any;
	let bullets3: any;
	let callouts3: any;
	let panels4: any;
	let bullets4: any;
	let callouts4: any;
	let panels5: any;
	let bullets5: any;
	let callouts5: any;
	let panels6: any;
	let bullets6: any;
	let callouts6: any;
	let panels7: any;
	let panels9:any
	let bullets7: any;
	let callouts7:any
	let panels8: any;
	let bullets8: any;
	let callouts8:any
	let bullets9:any
	let callouts9:any
	let axisX = 0
	let axisY = 0
	let perc:number
	let moveX: any;
	let alignGrid
	let onBox = Array(8).fill(false)
	let onBox2 = Array(8).fill(false)
	let isPanel = Array(10).fill(false)
	isPanel[1] = true
	let whichPanel:number = 1
	let motifY:number = 0

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function SVG2(){
		svgDraw2 = !svgDraw2
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

	function handleMouseMotif(event: MouseEvent) {
		axisX = event.clientX;
		axisY = event.clientY
	}

	function toggleCalendar(){
		showCalendar = !showCalendar
	}

	function togglePanel(index:number){
		isPanel[index] = !isPanel[index]
		for ( let i = 0; i < isPanel.length; i ++ ){
			if ( i !== index && isPanel[i] === true) {
				isPanel[i] = false
			}
			whichPanel = index
		}
	}


	$: if (portrait1 === true) {
		moveX = sY;
	} else {
		moveX = 0;
	}

	$: if (motifView === true ){
		motifY = sY
	} else {
	 motifY = 0
	}

	$: if ( sY >= 2500) {
		showNot = false
	}	else {
		showNot = true
	}

	$: if ( isPanel[10] === true) {
		showNot = true
	}


	onMount(async () => {
		window.addEventListener('mousemove', handleMouseMotif);
		fH = document.body.scrollHeight
		panels1 = await StoryBoardPanel(1);
		bullets1 = await StoryBoardBullet(1);
		callouts1 = await StoryBoardCallout(1);
		panels2 = await StoryBoardPanel(2);
		bullets2 = await StoryBoardBullet(2);
		callouts2 = await StoryBoardCallout(2);
		panels3 = await StoryBoardPanel(3);
		bullets3 = await StoryBoardBullet(3);
		callouts3 = await StoryBoardCallout(3);
		panels4 = await StoryBoardPanel(4);
		bullets4 = await StoryBoardBullet(4);
		callouts4 = await StoryBoardCallout(4);
		panels5 = await StoryBoardPanel(5);
		bullets5 = await StoryBoardBullet(5);
		callouts5 = await StoryBoardCallout(5);
		panels6 = await StoryBoardPanel(6);
		bullets6 = await StoryBoardBullet(6);
		callouts6 = await StoryBoardCallout(6);
		panels7 = await StoryBoardPanel(7);
		bullets7 = await StoryBoardBullet(7);
		callouts7 = await StoryBoardCallout(7);
		panels8 = await StoryBoardPanel(8);
		bullets8 = await StoryBoardBullet(8);
		callouts8 = await StoryBoardCallout(8);
		panels9 = await StoryBoardPanel(9);
		bullets9 = await StoryBoardBullet(9);
		callouts9 = await StoryBoardCallout(9);
		events = await brCalendar3()
		ownEvents = await brCalendar4()
		members = await brhatTeam()
		perc = motifY / 2000
		sH = document.body.scrollHeight
	});
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:scrollY={sY} bind:innerWidth={iW}/>

<div class="respon">
<div class="s3 back" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp?t=2023-04-21T20%3A35%3A19.875Z')">

</div>


<div class="tv tv12 type back"  style="background-image: url('/images/storywall2.png')">
	<h2 class="wide40">22 April 2022</h2>
	<p class="wide40">
		Was the auspicious date when we launched Bṛhat with a team of six members, each at pivotal
		transitions in their lives.
	</p>
	<p class="wide40">A year later we are twelve strong...</p>
	<h5 class="wide40">
		This informal report takes you through the past twelve months as we lived them.<br />
		We hope to give you a clear picture on the work accomplished thus far, and the roadmap we set for
		ourselves as our ambition to create the<span class="makered">
			self-perpetuating civilizational moment
		</span>begins to find tailwinds.
	</h5>
</div>


<!--- sddas -->


<div class="locker">

<div class="thebox type" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
  <div class="toprow">
    <div class="hid">
		{#if panels1 && panels1.length > 0}
			{#each panels1 as item}
				<h2>{item.highlightitem}</h2>
				<h6>{item.content}</h6>
			{/each}
		{/if}
		</div>
    <div class="gallery">
			<img src="/images/01.png" alt="01"/>
		<img class="class" src="/images/02.png" alt="02"/>
		</div>
  </div>
  <div class="left">
    <div class="detail">
				<h5>
					Vistas from a year ago, the earliests months of our launch. The links here articulate our what, why and how.
					In Svataḥsiddha, we describe the problem statement as we see in. <br><br>
					Anatomy of a Civilizational Moment describes the moment we are in, why it is significant, and how it mandates accelerated effort.
					
				</h5>
		</div>
    <div class="portrait">
		<img src="/images/sq.png" alt="one"/>
		</div>
  </div>
  <div class="listing" id="aa" style="margin-top: -80px">
		{#if bullets1 && bullets1.length > 0}
			{#each bullets1 as item, i}
				<div class="box listing" style="align-items: flex-end">
					<h5>{item.highlightitem}</h5>
					<h6>{item.content}</h6>
					<p style="background: var(--blued); cursor: pointer; color: white; padding: 4px; width: 80px"><a href={item.url}>Visit</a></p>
				</div>
			{/each}
		{/if}
		{#if callouts1 && callouts1.length > 0}
			{#each callouts1 as item, i}
				<div class="box listing">
					<h5>
						<a href="{item.url}" target="_blank" rel="noreferrer">
							{item.highlightitem}
						</a>
					</h5>
				</div>
			{/each}
		{/if}
	</div>
</div>


<div class="thebox type xxx4" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
  <div class="toprow">
    <div class="hid">
		{#if panels4 && panels4.length > 0}
			{#each panels4 as item}
				<h2>{item.highlightitem}</h2>
				<h5>{item.content}</h5>
			{/each}
		{/if}
		</div>
    <div class="gallery">
			<img src="/images/03.png" alt="03"/>
		</div>
  </div>
  <div class="left">
    <div class="detail">
				<h5>We launched the shared online learning program <span class="makered">Bṛhat Draṣṭā,</span>with a tribute to the stalwarts who have borne forward the civilizational fire before us. <br><br>
				Introduction to Shri Ram Swarup and to Shri Sita Ram Goel saw more than a 100 participants, and a genuine shared learning environment.
	 			</h5>
		</div>
    <div class="portrait">
			<img src="/images/fire.png" alt="fire"/>
		</div>
  </div>
  <div class="listing">
		{#if bullets4 && bullets4.length > 0}
			{#each bullets4 as item}
				<div class="box listing">
					<h5><a href="{item.url}" target="_blank" rel="noreferrer">{item.highlightitem}</h5>
					<p>{item.content}</p>
				</div>
			{/each}
		{/if}
		{#if callouts4 && callouts4.length > 0}
			{#each callouts4 as item}
				<div class="box listing">
					<h5>
						<a href="{item.url}" target="_blank" rel="noreferrer">
							{item.highlightitem}
						</a>
					</h5>
				</div>
			{/each}
		{/if}
	</div>
</div>


<div class="type tv tv3" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
	<AllBrands></AllBrands>
</div>


<div class="thebox type p4" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
  <div class="toprow">
    <div class="hid">
		{#if panels5 && panels5.length > 0}
			{#each panels5 as item}
				<h2>{item.highlightitem}</h2>
			{/each}
		{/if}
		</div>
    <div class="gallery">
			<img class="templerow" src="/images/templerow.png" alt="row"/>
		</div>
  </div>
  <div class="left">
		<div class="detail">
			With Ṛta in Design we launched a foray into that which arguably governs us today most of all - design.<br><br>
			The first phase in our design process is Svataḥsiddha - the Self Initiated. 
		</div>
    <div class="portrait">
			<img src="/images/mand.png" alt="mand"/>
		</div>
  </div>
  <div class="listing">
		{#if bullets5 && bullets5.length > 0}
			{#each bullets5 as item}
				<div class="box listing">

						<h5><a href="{item.url}" target="_blank" rel="noreferrer">{item.highlightitem}</h5>

					<p>{item.content}</p>
				</div>
			{/each}
		{/if}	
		{#if callouts5 && callouts5.length > 0}
			{#each callouts5 as item}
				<div class="box listing">
					<h5>
						<a href="{item.url}" target="_blank" rel="noreferrer">
							{item.highlightitem}
						</a>
					</h5>
				</div>
			{/each}
		{/if}	
		<h6 style="padding-top: 32px">The Bṛhat Open Library is a growing tool for the self-initiated knowledge seekers.</h6> 
	</div>
</div>	

<div class="thebox type" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
  <div class="toprow">
    <div class="hid">
		{#if panels7 && panels7.length > 0}
			{#each panels7 as item}
				<h2>{item.highlightitem}</h2>
				<h6>{item.content}</h6>
			{/each}
		{/if}
		</div>
    <div class="gallery"></div>
  </div>
  <div class="left">
    <div class="detail">

		</div>
    <div class="portrait">
			<img src="/images/ridsection1.png" alt="rid"/>
		</div>
  </div>
  <div class="listing">
		{#if bullets7 && bullets7.length > 0}
			{#each bullets7 as item}
				<div class="box">
	<h5><a href="{item.url}" target="_blank" rel="noreferrer">{item.highlightitem}</h5>
				</div>
			{/each}
		{/if}
		{#if callouts7 && callouts7.length > 0}
			{#each callouts7 as item}
				<div class="boxr callout back">
	<h5><a href="{item.url}" target="_blank" rel="noreferrer">{item.highlightitem}</h5>
				</div>
			{/each}
		{/if}

	</div>
</div>


<div class="type tv tv8" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
		<div class="box hid">
			<h2>New Tailwinds...</h2>
		</div>
		<div class="gridof2">
			<div class="box">
				<img src="/images/im5.png" alt="new"/>
			</div>
			<div class="box" style="margin-top: 32px">
				<h5>
				In collaboration with the Chinmaya International Foundation, we are now preparing to host Nītividhāna, a civilizational policy learning camp in May 2023. 
			</h5>
				<button class="normal"><a href="https://www.brhateducation.in/nitividhana" target="_blank" rel="noreferrer">Visit Page</a></button>
			<br>
				<h5>Featuring soon from us,<br> 
					<h4>an exclusive video content series.</h4>
				<h4>A website revamp,</h4>
				<h4>New utilities headed your way for Bṛhat Open Library,</h4>
				
			</div>

</div>
</div>



<div class="tv type tv2000" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
	<h2>The Executive Summary</h2>
	<div class="boxr" id="sp2">
		<div class="box">
			<h5>
			75 essays on Dhīti<br>
			200+ works uploaded at Open Library<br>
			4 Bṛhat Draṣṭā courses<br>
			3 Bṛhat Anveṣī tours - Karnataka and Odisha<br>
			20+ Bṛhad Mṛdaṅga videos<br>
			Short content programs:<br>
			Shabdavali<br>
			Scrollls of Aryavarta<br>
			</h5>
		<img class="mandimage" src="/images/0_1.png" alt="mandir"/>
		</div>
	<div class="box">
		<h5 class="wide60" style="text-align: right; padding-top: 256px">
	10 IKS Dhara event collaborations<br>
	
	Research partner at WAVES Conference<br>
	
	Brand partner at<br>
	
	Shaktikumbh<br>
	
	IIC Art Exhibition<br>
	
	Anadi IKS Hub<br>
	
	Thanjai Big Art Festival<br>
	
	Arogyam Ayurveda Program<br>
	
	The World of the Bauls<br>
	
	</h5>
	</div>
</div>
</div>


<div class="plain-one type xp" in:fly={{ duration: 900, delay: 1000, x: -1200, easing: quintOut}} out:fly={{ duration: 900, delay: 0, x: 1200, easing: backIn}}>
	<h2>
		The Team
	<h2>
	<div class="gridof2">
		{#if members && members.length > 0}
			{#each members as item}
				<div class="boxr teambox">
					<div class="teamphoto">
						<img src={item.image} alt={item.name}/>
					</div>
					<div class="box">
					<h6>{item.name}</h6>
					<p>{item.title}</p>
					<pre>{item.bio}</pre>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>



</div>
</div>


<style lang="sass">

.thebox, .tv
	height: 100vh
	overflow: hidden

.templerow
	width: 400px
	height: 200px
	object-fit: cover

.xp
	height: 100%
	.gridof2
		width: 90vw
		grid-template-columns: 1fr 1fr

.gridof2
	padding-top: 32px

.teambox
	align-items: flex-start
	gap: 24px
	padding: 12px
	img
		object-fit: cover
		height: 100%
		width: 100%
	.teamphoto
		width: 120px
		height: 120px
	.box
		width: 68%
		row-gap: 0
		p
			font-size: 18px
			text-transform: uppercase
			color: #fe4a49
		pre
			font-size: 16px
			font-weight: 400
	
	

.teambox
	row-gap: 0
	h6, p
		margin: 0

.xp
	padding-left: 32px
	padding-right: 32px
	height: 100%
	width: 100%

#sp2
	justify-content: space-between


.mandimage
	object-fit: cover
	width: 600px
	height: 500px

.tv2000
	padding-left: 32px
	padding-right: 32px
	h2
		margin-bottom: 32px

.normal
	background: #fe4a49
	border: none
	font-size: 18px
	width: max-content
	padding: 8px
	color: white

.tv8
	padding-left: 32px
	padding-right: 32px
	img
		margin-top: 64px
		object-fit: cover
		width: 600px
		height: 600px

.p4
	.gallery
		padding-top: 16px
		padding-right: 16px
		img
			height: 100px
	.portrait
		img
			height: 240px

.xxx4
	padding-top: 16px
	padding-right: 16px
	.gallery
		padding: 16px
		margin-bottom: 24px
	.detail
		margin-bottom: 32px


.gallery
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	position: absolute
	top: 0
	right: 0
	img
		object-fit: contain
		height: 128px
	img.class
		transform: scale(0.8)

.hid
	h6
		text-transform: uppercase
		font-size: 24px
		background: #fe4a49
		color: white
		padding: 2px

.tv
	h2
		background: #474747
		color: white
		padding: 12px

.listing
	padding-bottom: 16px
	row-gap: 6px
	padding-left: 32px
	border-bottom: 1px solid #ececec
	h5
		font-size: 35px
		font-weight: bold
		text-align: right
		text-transform: capitalize
	a
		&:hover
			color: #fe4a49
	h6
		text-align: right
		font-weight: 400
		color: #878787
	p
		text-align: right

.bottomarrow
	margin-left: -12px
	z-index: 1001
	margin-bottom: -48px
	svg
		object-fit: contain
		width: 24px
		height: 24px


.makered
	color: #fe4a49

.hid
	h5
		color: #878787

.respon
	@media screen and (max-width: 899px)
		display: none

.rightarrow
	overflow: visible
	display: flex
	flex-direction: column
	position: fixed
	top: -12px
	right: 0
	width: 24px
	min-height: 100vh
	z-index: 900
	svg
		object-fit: contain
		width: 24px
		height: 24px
		position: absolute
		top: 0
		right: 0


.portrait
	img
		object-fit: cover
		width: 100%


.hid
	h2
		text-transform: uppercase
		padding-top: 24px

.locker
	background: white
	z-index: 2
	position: relative

.wide40
	width: 60%

.tv12
	text-align: right
	align-items: flex-end
	display: flex
	flex-direction: column
	padding-right: 32px
	h2, h5
		margin: 24px 0
		color: white
		line-height: 1.8
	p
		color: #fe4a49

.s3
	height: 100vh

.tv
	min-height: calc(100vh - 32px)
	

.thebox
	display: grid 
	grid-template-columns: 32% 1fr 
	grid-template-rows: 1fr 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "toprow toprow" "left listing" "left listing" 
	padding-left: 32px
	padding-right: 24px
	height: 100vh

.toprow 
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "hid gallery" 
	grid-area: toprow 

.hid 
	grid-area: hid 

.gallery 
	grid-area: gallery 

.left 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "detail" "portrait" 
	grid-area: left 

.detail 
	grid-area: detail 
	display: flex
	flex-direction: column
	justify-content: flex-start
	height: 100%

.portrait 
	grid-area: portrait 

.listing 
	grid-area: listing 


</style>
