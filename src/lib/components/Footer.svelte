<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import { isModal } from '$lib/stores/modal';
	import Contact from '$lib/ridunits/RIDContact.svelte';
	import AboutLinks from '$lib/links/AboutLinks.svelte';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte';
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte';
	import MandalaLinks from '$lib/links/MandalaLinks.svelte';
	import RtaLinks from '$lib/links/RtaLinks.svelte';
	import IconTop from '$lib/icons/IconTop.svelte';

	let fake: boolean = false;
	let active: boolean = true;
	let modalStatus: any;

	const unsubscribe = isModal.subscribe((value) => {
		modalStatus = value;
	});

	function toggleModal() {
		isModal.update((value) => !value);
	}

	function fauxfake() {
		fake = !fake;
	}

	onMount(() => {
		active = true;
	});

	onDestroy(unsubscribe);
</script>

<footer class="footer back" class:light={$themeMode} class:dark={!$themeMode}>
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
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/horizontal%20white-%20600.png"
					alt="logo of brhat"
				/>
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
				<p class="mainlinks" on:click={toggleModal} on:keydown={fauxfake}>Contact Us</p>
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
			<AnveshiLinks flytime={active} />
			<div class="creategap" />
			<a class="mainlinks" href="/drashta">Bṛhat Draṣṭā</a>
			<DrashtaLinks flytime={active} />
		</div>
		<div class="spacer">
			<a class="mainlinks" href="/mrdanga">Bṛhad Mṛdaṅga</a>
			<a class="mainlinks" href="/mandala">Fractal Maṇḍala</a>
			<a class="mainlinks" href="/aryavarta">Scrolls of Āryavarta</a>
			<a class="mainlinks" href="/rta">Ṛta in Design</a>
			<div class="creategap" />
		</div>
	</div>
	<div class="footerbot">
		<small>2023 Bṛhat | All Rights Reserved.</small>
		<small
			>Also visit <a
				href="https://www.brhateducation.in"
				target="_blank"
				rel="noreferrer"
				style="color: #fe4a49">Bṛhat Education.</a
			></small
		>
		<small><a href="/about/privacy" style="color: white">Privacy</a> | contact@brhat.in</small>
	</div>
</footer>
{#if modalStatus}
	<Contact />
{/if}

<style lang="sass">

.topbutton
	height: 24px

.mainlinks
	cursor: pointer

.footer
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	width: 100vw
	position: sticky
	top: 0
	z-index: 999
	grid-template-rows: auto 1fr auto
	grid-template-areas: "footertop" "footermain" "footerbot"
	background: url('/images/glassdark.webp')
	background-size: cover
	.footertop
		grid-area: footertop
		height: 64px
	.footerbot
		grid-area: footerbot
		height: 128px
	.footermain
		grid-area: footermain
		border: 1px solid #373737
		background: rgba(17,17,17,0.90)
		backdrop-filter: blur(5px)
		border-radius: 12px
	@media screen and (min-width: 1024px)
		min-height: 100vh
		padding-left: 6vw
		padding-right: 6vw
	@media screen and (max-width: 1023px)
		padding-left: 4vw
		padding-right: 4vw

.footermain
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "footerlogo . . ."
		padding: 64px 32px
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
	@media screen and (min-width: 1024px)
		padding-bottom: 16px

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
	small
		margin: 0 0 4px 0
		line-height: 1
		color: #474747

.mainlinks
	color: white
	font-weight: 700
	margin-bottom: 8px
	&:hover
		color: #fe4a49

</style>
