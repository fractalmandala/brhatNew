<script lang="ts">

	import { onMount } from 'svelte'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	import MandalaLinks from '$lib/links/MandalaLinks.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'
	import IconTop from '$lib/icons/IconTop.svelte'

	let fake:boolean = false
	let active:boolean

	function fauxfake(){
		fake = !fake
	}

	onMount(() => {
		active = true
	})

</script>

<div class="footer">
	<div class="footertop">
		<div class="box" on:click={() => { window.scrollTo(0, 0)}} on:keydown={fauxfake}>
			<IconTop></IconTop>
		</div>
	</div>
	<div class="footermain">
		<div class="footerlogo">
			<a class="logoimage" href="/" data-sveltekit-reload>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/horizontal%20white-%20600.png" alt="logo of brhat"/>
			</a>
			<div class="boxr icons">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="facebook"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/youtube-red.png" alt="youtube"/>
			</div>
		</div>
		<div class="spacer">
			<p class="mainlinks">Contact Us</p>
			<a class="mainlinks" href="/dhiti">Dhīti</a>
			<a class="mainlinks" href="/openlibrary">Bṛhat Open Library</a>
			<a class="mainlinks" href="/mrdanga">Bṛhad Mṛdaṅga</a>
			<a class="mainlinks" href="/about">About</a>
			<AboutLinks flytime={active}></AboutLinks>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/anveshi">Bṛhat Anveṣī</a>
			<AnveshiLinks flytime={active}></AnveshiLinks>
			<div class="creategap"></div>
			<a class="mainlinks" href="/drashta">Bṛhat Draṣṭā</a>
			<DrashtaLinks flytime={active}></DrashtaLinks>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/aryavarta">Scrolls of Āryavarta</a>
			<AryavartaLinks flytime={active}></AryavartaLinks>
			<div class="creategap"></div>
			<a class="mainlinks" href="/rta">Ṛta in Design</a>
			<RtaLinks flytime={active}></RtaLinks>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/mandala">Fractal Maṇḍala</a>
			<MandalaLinks flytime={active}></MandalaLinks>
		</div>
	</div>
	<div class="footerbot">
		<small>2023 Bṛhat | All Rights Reserved.</small>
		<small>Also visit <a href="https://www.brhateducation.in" target="_blank" rel="noreferrer" style="color: #fe4a49">Bṛhat Education.</a></small>
		<small><a href="/about/privacy" style="color: white">Privacy</a> | contact@brhat.in</small>
	</div>
</div>

<style lang="sass">

.footer
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	background: var(--beau)
	width: 100vw
	position: sticky
	top: 0
	z-index: 1200
	grid-template-rows: auto 1fr auto
	grid-template-areas: "footertop" "footermain" "footerbot"
	.footertop
		grid-area: footertop
		height: 64px
	.footerbot
		grid-area: footerbot
		height: 128px
	.footermain
		grid-area: footermain
		border-top: 1px solid #272727
		border-bottom: 1px solid #272727
	@media screen and (min-width: 1024px)
		min-height: 100vh
		padding-left: 6vw
		padding-right: 6vw
	@media screen and (max-width: 1023px)
		padding-left: 8vw
		padding-right: 8vw

.footermain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "footerlogo . . . ."
		padding-top: 32px
		gap: 0 40px
		.footerlogo
			grid-area: footerlogo
			margin-right: 64px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "footerlogo footerlogo" ". ." ". ." ". ."
		padding-top: 32px
		padding-bottom: 32px
		gap: 32px 48px
		.footerlogo
			grid-area: footerlogo
			width: 50%
			margin-bottom: 32px

.icons
	justify-content: space-between
	align-items: center
	margin-top: 16px

.logoimage img
	object-fit: contain
	width: 100%

.icons img
	object-fit: contain
	width: 24px
	height: 24px
	opacity: 0.4
	filter: saturate(0.01)
	transition: var(--snap)
	transform-origin: center center
	cursor: pointer
	&:hover
		transform: scale(1.1)
		opacity: 1
		filter: saturate(1.0)

.spacer
	display: flex
	flex-direction: column

.creategap
	height: 32px

.footertop
	.box
		height: 24px
		width: 24px

.footertop
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center

.footerbot
	display: flex
	flex-direction: column
	justify-content: center
	small
		margin: 0 0 4px 0
		line-height: 1
		color: #474747

</style>