<script lang="ts">

	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte'
	import BrhadMrdanga from '$lib/links/BrhadMrdanga.svelte'
	import DhitiLink from '$lib/links/DhitiLink.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	import MandalaLinks from '$lib/links/MandalaLinks.svelte'
	import OpenLibLink from '$lib/links/OpenLibLink.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'

</script>

<div class="footer">
	<div class="footertop"></div>
	<div class="footermain">
		<div class="footerlogo">
			<div class="logoimage">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/horizontal%20white-%20600.png" alt="logo of brhat"/>
			</div>
			<div class="boxr icons">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png" alt="twitter"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png" alt="facebook"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png" alt="linkedin"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/youtube-red.png" alt="youtube"/>
			</div>
		</div>
		<div class="spacer">
			<DhitiLink></DhitiLink><br>
			<OpenLibLink></OpenLibLink>
			<BrhadMrdanga></BrhadMrdanga>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/anveshi" target="_self">Bṛhat Anveṣī</a>
			<AnveshiLinks></AnveshiLinks>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/aryavarta" target="_self">Scrolls of Āryavarta</a>
			<AryavartaLinks></AryavartaLinks>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/mandala" target="_self">Fractal Maṇḍala</a>
			<MandalaLinks></MandalaLinks>
		</div>
	</div>
	<div class="footerbot"></div>
</div>

<style lang="sass">

.footer
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	background: var(--beau)
	width: 100vw
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
		padding-left: 6vw
		padding-right: 6vw

.footermain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "footerlogo footerlogo . . . ." ". . . . . ."
		padding-top: 32px
		.footerlogo
			grid-area: footerlogo
			width: 50%
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "footerlogo footerlogo" ". ." ". ." ". ."
		padding-top: 32px
		padding-bottom: 32px
		row-gap: 32px
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

</style>