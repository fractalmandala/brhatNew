<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import AboutLinks from '$lib/links/AboutLinks.svelte';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte';
	import IconTop from '$lib/icons/IconTop.svelte';
	let fake = false;
	let active: boolean = true;

	function fauxfake() {
		fake = !fake;
	}
	onMount(() => {
		active = true;
	});
</script>

<footer class="footer back" class:light={!$themeMode} class:dark={$themeMode}>
	<div class="footertop">
		<div
			class="topbutton"
			on:click={() => {
				window.scrollTo(0, 0);
			}}
			on:keydown={fauxfake}
		>
			<IconTop />
		</div>
	</div>
	<div class="footermain">
		<div class="footerlogo">
			<a class="logoimage" href="/">
				{#if !$themeMode}
					<img src="/images/logos/logo-brhat-black.png" alt="Brhat logo black" />
				{:else if $themeMode}
					<img src="/images/logos/logo-brhat-white.png" alt="Brhat logo white" />
				{/if}
			</a>
			<div class="rta-row icons">
				<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-red.png"
						alt="twitter"
					/>
				</a>
				<a href="https://www.facebook.com/brhat.in/" target="_blank" rel="noreferrer">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-red.png"
						alt="facebook"
					/>
				</a>
				<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-red.png"
						alt="linkedin"
					/>
				</a>
				<a
					href="https://www.youtube.com/channel/UCpmTZwM36xdAuHbBaaE2asg"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/youtube-red.png"
						alt="youtube"
					/>
				</a>
			</div>
		</div>
		<div>
			<div class="spacer">
				<a class="mainlinks" href="/members">Contact Us</a>
				<a class="mainlinks" href="/dhiti">Dhīti</a>
				<a class="mainlinks" href="/openlibrary">Bṛhat Open Library</a>
			</div>
			<div class="spacer">
				<a class="mainlinks" href="/about">About</a>
				<AboutLinks flytime={active} />
			</div>
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/anveshi">Bṛhat Anveṣī</a>
			<AnveshiLinks />
			<div class="creategap" />
			<a class="mainlinks" href="/drashta">Bṛhat Draṣṭā</a>
			<DrashtaLinks flytime={active} />
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/svarnanjali">Svarṇāñjali</a>
			<a class="mainlinks" href="/mrdanga">Bṛhad Mṛdaṅga</a>
			<a class="mainlinks" href="/mandala">Fractal Maṇḍala</a>
			<a class="mainlinks" href="/aryavarta">Scrolls of Āryavarta</a>
			<a class="mainlinks" href="/rta">Ṛta in Design</a>
			<div class="creategap" />
		</div>
	</div>
	<div class="footerbot">
		<small class="tt-c"
			>2023 Bṛhat | All Rights Reserved | <a
				href="https://www.brhateducation.in"
				target="_blank"
				rel="noreferrer">Bṛhat Education.</a
			></small
		>
		<small class="tt-c"
			><a href="/about/privacy">Privacy</a> |
			<a href="/about/termsandconditions">T & C</a> |
			<a href="/about/refunds">Refunds Policy</a> |
			<span class="tt-l">contact@brhat.in</span></small
		>
	</div>
</footer>

<style lang="sass">

.footer.light
	background-color: #FFFFFF


.footer.dark
	background-color: #171717

small
	a
		color: var(--textone)
		&:hover
			color: white

.topbutton
	height: 24px

.mainlinks
	cursor: pointer
	font-weight: 600

.footer
	display: flex
	flex-direction: column
	align-items: center
	width: 100vw
	position: sticky
	top: 0
	z-index: 999
	.footertop
		height: 64px
	.footerbot
		height: 64px
	.footermain
		border-top: 1px solid var(--contraster)
		border-bottom: 1px solid var(--contraster)
	@media screen and (min-width: 1200px)
		min-height: 100vh
		.footertop, .footerbot, .footermain
			width: 1072px
	@media screen and (max-width: 1199px) and (min-width: 1024px)
		min-height: 100vh
		.footertop, .footerbot, .footermain
			width: 896px
	@media screen and (max-width: 1023px) and (min-width: 769px)
		min-height: 100vh
		.footertop, .footerbot, .footermain
			width: 640px
	@media screen and (max-width: 768px) and (min-width: 576px)
		min-height: 100vh
		.footertop, .footerbot, .footermain
			width: 512px			
	@media screen and (max-width: 575px)
		padding-left: 16px
		padding-right: 16px
		.footertop, .footerbot, .footermain
			width: 100%
	@media screen and (min-width: 769px)
		min-height: 100vh
		padding-top: 64px
		.footertop
			border-top: 1px solid var(--contraster2)
		.footermain
			min-height: calc(100vh - 192px)

.footermain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "footerlogo . . ."
		padding: 32px
		gap: 0 40px
		align-items: start
		.footerlogo
			grid-area: footerlogo
			margin-right: 64px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "footerlogo footerlogo" ". ." ". ." ". ."
		padding: 24px
		gap: 32px 48px
		.footerlogo
			grid-area: footerlogo
			width: 60%
			row-gap: 0px

.footerlogo
	display: flex
	flex-direction: column

.icons
	justify-content: space-between
	align-items: center
	margin-top: 16px
	column-gap: 16px
	width: 80%

.logoimage img
	object-fit: contain
	width: 80%

.icons img
	object-fit: contain
	width: 20px
	height: 20px
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
	@media screen and (min-width: 1024px)
		padding-bottom: 16px
	@media screen and (min-width: 769px)
		row-gap: 2px

.creategap
	height: 32px

.footertop
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center

.footerbot
	display: flex
	flex-direction: column
	justify-content: center
	row-gap: 4px
	small
		margin: 0 0 4px 0
		line-height: 1
	a
		&:hover
			color: #fe4a49

.mainlinks
	color: var(--grade2)
	margin-bottom: 8px
	&:hover
		color: #fe4a49

</style>
