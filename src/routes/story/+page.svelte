<script lang="ts">

	import { onMount } from 'svelte'
	import { draw } from 'svelte/transition';
	import { quintOut, backIn, backOut } from 'svelte/easing'
	import { StoryBoard1, StoryBoard2, StoryBoard3, brCalendar, brCalendar2 } from '$lib/utils/story'
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte'
	import Parallax from '$lib/components/ParallaxImage.svelte'
	import { inview } from 'svelte-inview'
	let svgDraw = false
	let isLight = false
	let fake = false
	let dates:any
	let dates2:any
	let fillcolor = 'none'
	let bullet = 'bullet'
	let callout = 'callout'
	let redcolor = 'none'
	let typeBullets1:any
	let typeCallouts1:any
	let typeBullets2:any
	let typeCallouts2:any
	let typeBullets3:any
	let typeCallouts3:any
	const options = {}

	function toggleMode(){
		isLight = !isLight
	}

	function fauxfake(){
		fake = !fake
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
	})

</script>
<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="x1">
	<Parallax --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/about-parambika.webp?t=2023-04-21T20%3A35%3A19.875Z')"></Parallax>
</div>
<div class="sec x2 type cc topcc" class:lightsec={isLight}>
<svg width="733" height="287" viewBox="0 0 733 287" fill="none" xmlns="http://www.w3.org/2000/svg"
	use:inview={options}
	on:inview_enter={() => {svgDraw = true}}
	>
	{#if svgDraw}
<path
	transition:draw="{{duration: 1000, easing: quintOut}}"
	d="M47.3829 201.069V208.205H1V1H48.5213V75.3931V77.214L50.0579 76.2369C52.7317 74.5367 55.6179 73.0609 58.7181 71.8105L58.7281 71.8064L58.738 71.8022C66.196 68.6062 74.2198 67.0045 82.8201 67.0045C96.1293 67.0045 107.802 70.121 117.872 76.326L117.872 76.3261L117.883 76.3331C127.961 82.3548 135.803 90.8213 141.413 101.759L141.42 101.771C147.216 112.705 150.126 125.168 150.126 139.183C150.126 153.005 147.217 165.372 141.42 176.309L141.417 176.314C135.806 187.063 127.96 195.537 117.872 201.754C107.802 207.959 96.1293 211.075 82.8201 211.075C74.0385 211.075 65.9301 209.381 58.4818 206.003C55.0323 204.35 51.8671 202.439 48.984 200.27L47.3829 199.066V201.069ZM98.4996 154.295L98.5039 154.287L98.5082 154.279C100.867 149.72 102.035 144.585 102.035 138.896C102.035 133.397 100.866 128.45 98.5041 124.08C96.1435 119.521 92.7901 115.94 88.4549 113.357C84.1116 110.769 79.1883 109.486 73.7128 109.486C68.2373 109.486 63.3139 110.769 58.9706 113.357L58.9618 113.363L58.953 113.368C54.8187 115.949 51.5686 119.426 49.211 123.785C46.8433 128.162 45.6753 133.209 45.6753 138.896C45.6753 144.77 46.8412 150.002 49.2024 154.566L49.2066 154.574L49.211 154.582C51.575 158.952 54.9287 162.431 59.2552 165.009L59.2701 165.018L59.2852 165.026C63.6235 167.412 68.536 168.594 73.9974 168.594C79.4681 168.594 84.3022 167.312 88.4636 164.717C92.786 162.14 96.1371 158.662 98.4996 154.295Z" stroke="white" stroke-width="2" style="fill: {fillcolor}"/>
<path
	transition:draw="{{duration: 1300, delay: 200, easing: backOut}}"
	d="M220.37 79.3433C220.464 79.261 220.557 79.1793 220.651 79.0979C220.651 79.0977 220.651 79.0974 220.652 79.0972C229.584 71.3459 241.221 67.4131 255.696 67.4131C262.353 67.4131 267.982 68.2771 272.617 69.9599L272.626 69.9631L272.635 69.9662C277.038 71.5032 280.802 73.8111 283.946 76.8881L256.387 114.033C254.786 112.669 252.782 111.602 250.423 110.803C247.507 109.553 244.219 108.947 240.588 108.947C233.674 108.947 228.104 111.113 224.085 115.584C220.052 119.873 218.169 126.165 218.169 134.179V140.472V140.478L217.878 175.112V175.125C217.878 184.13 215.766 190.761 212.462 195.671C209.155 200.585 204.578 203.89 199.466 206.114C189.807 210.316 178.427 210.594 170.613 210.612V70.3429H218.169V77.9643V81.2519L220.369 79.3421L220.37 79.3433Z" stroke="#FE4A49" stroke-width="3" style="fill: {redcolor}"/>
<path
	transition:draw="{{duration: 1600, delay: 100, easing: quintOut}}"
	d="M434.186 118.521V208.205H386.664V130C386.664 123.297 384.703 117.943 380.673 114.077C376.674 110.049 371.574 108.051 365.457 108.051C361.324 108.051 357.555 108.945 354.171 110.751L354.16 110.757L354.149 110.764C350.953 112.576 348.45 115.101 346.654 118.321C344.844 121.564 343.966 125.472 343.966 130V208.205H296.444V1H343.966V77.3289V79.3699L345.578 78.1192C347.66 76.5053 349.89 75.0561 352.271 73.772L352.279 73.7678L352.287 73.7634C360.274 69.2683 369.587 67.0045 380.257 67.0045C391.313 67.0045 400.814 69.2711 408.796 73.7634L408.808 73.7701L408.82 73.7765C417.006 78.0912 423.217 84.079 427.481 91.7445L427.486 91.7525L427.49 91.7604C431.944 99.4317 434.186 108.341 434.186 118.521Z" stroke="white" stroke-width="2" style="fill: {fillcolor}"/>
<path
	transition:draw="{{duration: 1200, delay: 600, easing: backIn}}"
	d="M556.292 78.1848V69.8746H602.96V208.206H556.292V199.761V197.608L554.647 198.997C551.257 201.858 547.353 204.289 542.927 206.285C535.859 209.474 528.033 211.076 519.432 211.076C506.701 211.076 495.409 207.963 485.526 201.758C475.627 195.543 467.873 187.07 462.26 176.318C456.65 165.38 453.834 153.009 453.834 139.184C453.834 125.163 456.652 112.696 462.262 101.759C467.875 90.8169 475.625 82.3497 485.514 76.3292L485.514 76.3293L485.526 76.322C495.409 70.1172 506.701 67.0049 519.432 67.0049C528.033 67.0049 535.859 68.6067 542.927 71.795L542.937 71.7996L542.948 71.8039C547.363 73.6787 551.259 76.0604 554.643 78.9457L556.292 80.3517V78.1848ZM515.504 113.358L515.496 113.363L515.487 113.369C511.349 115.951 508.01 119.523 505.468 124.059L505.464 124.066L505.46 124.072C503.095 128.444 501.924 133.394 501.924 138.897C501.924 144.585 503.093 149.72 505.452 154.279L505.456 154.287L505.46 154.295C507.824 158.665 511.178 162.145 515.504 164.723C519.842 167.307 524.669 168.594 529.962 168.594C538.36 168.594 545.183 165.827 550.329 160.243C555.65 154.676 558.284 147.531 558.284 138.897C558.284 133.209 557.116 128.162 554.748 123.785C552.386 119.418 549.035 115.94 544.713 113.363C540.552 110.768 535.717 109.486 530.247 109.486C524.771 109.486 519.848 110.77 515.504 113.358Z" stroke="white" stroke-width="2" style="fill: {fillcolor}"/>
<path
	transition:draw="{{duration: 1500, delay: 500, easing: quintOut}}"
	d="M652.926 110.486V109.486H651.926H622.188V69.8744H651.926H652.926V68.8744V11.9053H700.447V68.8744V69.8744H701.447H731.185V109.486H701.447H700.447V110.486V208.206H652.926V110.486Z" stroke="white" stroke-width="2" style="fill: {fillcolor}"/>
	{/if}
<circle cx="194.413" cy="261.613" r="23.8" stroke="#FE4A49" stroke-width="3" fill="{redcolor}"/>
</svg>

	<h5>completing 1 year as the</h5>
	<h3 style="font-family: JetBrains Mono, monospace;"><span class="makered">&lt;</span><span style="color: white">culture_engine</span><span class="makered">&gt;</span></h3>

</div>
<div class="sec x2 back type cc topcc first" class:lightsec={isLight}>
 <h5>a report and update on the tailwinds...</h5>
</div>
<div class="sec gridof2 x2 back type textleft pads second" class:lightsec={isLight}>
	<div class="box">
		<h2>22 April 2022</h2>
		<p>Was the auspicious date when we launched Bṛhat with a team of six members, each at pivotal transitions in their lives.</p>
		<p>A year later we are twelve strong, and (complete)...</p>
		<h5>This informal report takes you through the past twelve months as we lived them.<br>
			We hope to give you a clear picture on the work accomplished thus far, and the roadmap we set for ourselves as our ambition to create the<span class="makered"> self-perpetuating civilizational moment </span>begins to find tailwinds.
		</h5>
		<p>Select dark or light mode: {isLight}</p>
			{#if isLight}
			<button on:click={toggleMode} on:keydown={fauxfake}>go dark</button>
			{:else}
			<button on:click={toggleMode} on:keydown={fauxfake}>bring light</button>
			{/if}
	</div>
	<div class="box leftboxgrid">
		<button class="pageball" class:lightsec={isLight}>
			<a href="/story/20">Click to Begin</a>
		</button>
	</div>
</div>
<div class="thepanel">
	<div class="leftpan">

	</div>
	<div class="midpan">

	</div>
	<div class="rightpan"></div>
</div>

<style lang="sass">

	.thepanel
		display: grid
		grid-auto-flow: row
		grid-template-columns: 280px 1fr 80px
		grid-template-rows: 1fr
		grid-template-areas: "leftpan midpan rightpan"
		.leftpan
			grid-area: leftpan
		.midpan
			grid-area: midpan
		.rightpan
			grid-area: rightpan

	.gridof2
		align-content: center
		align-items: end
		.leftboxgrid
			align-items: flex-end

	.pageball
		background: #fe4a49
		border: none
		color: white
		font-weight: bold
		font-size: 24px
		height: 120px
		width: 120px
		border-radius: 50%
		transform-origin: center center
		transition: 0.13s ease
		cursor: pointer
		&:hover
			transform: scale(0.8)
			background: white
			color: #fe4a49

	.pageball.lightsec
		&:hover
			transform: scale(0.8)
			background: var(--strong)
			color: white

	.togglebox
		align-items: flex-start
		margin-top: 32px
		
	button
		width: max-content

	.wide40
		width: 40%
		margin-right: 40%

	.textleft
		text-align: left
		h2
			text-align: left
			width: 100%

	.topcc
		display: flex
		flex-direction: column
		justify-content: center
		svg
			text-align: center
			margin-left: auto
			margin-right: auto
	
	.makered
		color: #fe4a49

	.cc
		text-align: center
	
	.sec
		background: #171717
		height: 100vh
		color: white
		h2
			margin-bottom: 32px
			color: white
		h5
			color: white
			margin-top: 24px
			line-height: 1.4
			margin-bottom: 24px
		p
			color: white
			line-height: 1.8

	.sec.lightsec
		background: white
		color: #474747
		h5, p, h2
			color: #474747

	.sec.first
		background-image: url('/images/storywall2.png')

	.sec.second
		background-image: url('/images/storywall1.png')

	.sec.lightsec.first
		background-image: url('/images/storywallwhite2.png')

	.sec.lightsec.second
		background-image: url('/images/storywallwhite1.png')

	.x1
		height: 100vh
		overflow: hidden


</style>