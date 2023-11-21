<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import Parallax from '$lib/components/ParallaxImage.svelte';
	let panel3: HTMLElement | null;
	let panel2: HTMLElement | null;
	let panel4: HTMLElement | null;
	let panel5: HTMLElement | null;
	let panel6: HTMLElement | null;
	let panel9: HTMLElement | null;
	let ifPanel5 = false;
	let ifPanel6 = false;
	let ifPanel9 = false;
	let yPanel2 = 100;
	let yPanel3 = 100;
	let yPanel4 = 100;
	let yPanel5 = 0;
	let yPanel6 = 0;
	let yPanel9 = 0;
	let scaling: number;
	let options = {};
	let sY: number;
	let oH: number;
	let iW: number;
	let stringed3: string;
	let stringed2: string;
	let breakLeft = false;
	let breakRight = false;
	let breakPoint: boolean;

	$metaTitle = 'Fractal Maṇḍala';
	$metaDescription =
		'Civilization with multi-level coherence. Research, exploration, and furtherance of Indian civilizational consciousness.';
	$metaUrl = 'https://www.brhat.in/mandala';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/fmhomehero.webp';
	$metaType = 'webpage';

	const updateTwoPosition = () => {
		if (!panel2 || breakPoint === true) return;
		const { top, height } = panel2.getBoundingClientRect();
		yPanel2 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateThreePosition = () => {
		if (!panel3 || breakPoint === true) return;
		const { top, height } = panel3.getBoundingClientRect();
		yPanel3 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateFourPosition = () => {
		if (!panel4 || breakPoint === true) return;
		const { top, height } = panel4.getBoundingClientRect();
		yPanel4 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateFivePosition = () => {
		if (!panel5) return;
		const { top, height } = panel5.getBoundingClientRect();
		yPanel5 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateSixPosition = () => {
		if (!panel6 || breakPoint === true) return;
		const { top, height } = panel6.getBoundingClientRect();
		yPanel6 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateNinePosition = () => {
		if (!panel9 || breakPoint === true) return;
		const { top, height } = panel9.getBoundingClientRect();
		yPanel9 = Math.max(0, ((oH - top) / height) * 100);
	};

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	$: stringed3 = yPanel3.toFixed(1);
	$: stringed2 = yPanel2.toFixed(1);
	$: if (yPanel5 >= 95) {
		ifPanel5 = true;
	} else {
		ifPanel5 = false;
	}
	$: if (yPanel6 >= 100) {
		ifPanel6 = true;
	} else {
		ifPanel6 = false;
	}
	$: if (yPanel6 >= 150) {
		breakLeft = true;
	} else {
		breakLeft = false;
	}
	$: if (yPanel6 >= 256) {
		breakRight = true;
	} else {
		breakRight = false;
	}

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		} else {
			breakPoint = false;
		}
		panel3 = document.querySelector('.panel3');
		panel2 = document.querySelector('.panel2');
		panel4 = document.querySelector('.panel4');
		panel5 = document.querySelector('.panel5');
		panel6 = document.querySelector('.panel6');
		panel9 = document.querySelector('.panel9');
		updateTwoPosition();
		updateThreePosition();
		updateFourPosition();
		updateFivePosition();
		updateSixPosition();
		updateNinePosition();
		window.addEventListener('scroll', updateThreePosition);
		window.addEventListener('scroll', updateTwoPosition);
		window.addEventListener('scroll', updateFourPosition);
		window.addEventListener('scroll', updateFivePosition);
		window.addEventListener('scroll', updateSixPosition);
		window.addEventListener('scroll', updateNinePosition);
	});
</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="section sec1" data-lenis-scroll-snap-align="start">
	<Parallax
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"
	/>
</div>
<div class="rta-column p-top-128 stout">
	<div class="rta-column instout pagila rowgap400">
		<div class="rta-column rowgap400">
			<h5>
				To be a history in the true sense of the word, a work must be a story of the people
				inhabiting a country.
			</h5>
			<h5>
				It must be a record of their life from age to age presented through the life and
				achievements of men whose exploits become the beacon lights of tradition; through efforts of
				the people to will themselves into organic unity.
			</h5>
			<h4>Such a history of India is still to be written.</h4>
			<div class="citation">Shri KM Munshi</div>
		</div>
		<div class="rta-grid grid2 stay2 rowgap400 p-top-64">
			<div class="rta-image">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/itihaas.webp"
					alt="itihasa"
				/>
			</div>
			<div class="rta-column rowgap400">
				<p class="typett">
					with a continuity of untold millennia, the passage of time visible to us in
				</p>
				<h4>itihāsa</h4>
			</div>
		</div>
		<div class="rta-grid grid2 stay2 rowgap400 p-top-64">
			<div class="rta-column rowgap400">
				<p class="typett">
					information was processed in increasingly complex ways within the physical environment
					best described as
				</p>
				<h4>bhārata</h4>
			</div>
			<div class="rta-image">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/bharata.webp"
					alt="bharata"
				/>
			</div>
		</div>
		<div class="rta-grid grid2 stay2 rowgap400 p-top-64">
			<div class="rta-image">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/dharma.webp"
					alt="dharma"
				/>
			</div>
			<div class="rta-column rowgap400">
				<p class="typett">
					emerged a civilizational consciousness, with multi-level coherence. It is known to us as
				</p>
				<h4>dharma</h4>
			</div>
		</div>
		<h2 class="ta-c p-top-64" class:emergence={ifPanel5}>and it is alive...</h2>
		<div class="ballholder">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/fractallogo.webp"
				alt="fractalmandala"
				style="transform: rotate({sY / 4}deg); opacity: {1 - yPanel9 / 100}"
			/>
		</div>
		<div class="rta-column rowgap400 p-top-64 p-bot-64">
			<h4>Fractal</h4>
			<h5 class="typett">
				A curve or geometrical figure, each part of which has the same statistical character as the
				whole. Any of various extremely irregular curves or shapes for which any suitably chosen
				part is similar in shape to a given larger or smaller part.
			</h5>
			<h6 class="typett2">
				A fractal displays the same properties at any magnification level, ie., it is multi-level.
			</h6>
		</div>
		<div class="rta-column rowgap400 p-bot-64">
			<h4>Maṇḍala</h4>
			<h5 class="typett">
				A circle or anything circular- globe, circumference, orbit of a celestial object, an array
				of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete,
				satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).
			</h5>
			<h5 class="typett">
				A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is
				coherent. The Fractal Maṇḍala is an exploration, study and articulation of the <span
					style="color: #10D56C"
				>
					Indian civilizational consciousness</span
				>
			</h5>
		</div>
		<div class="onpagelinks rta-column rowgap400 p-bot-64">
			<h3><a href="/mandala/macrohistoriccase">the macrohistoric case</a></h3>
			<h3><a href="/mandala/aphorisms">caturasūtra - 4 aphorisms</a></h3>
			<h3><a href="/mandala/indiancivcon">indian civilizational consciousness</a></h3>
			<h3><a href="/mandala/rathaasbija">ratha as a bīja</a></h3>
			<h3><a href="/mandala/historyvsitihasa">history is ontic, itihāsa ontologic</a></h3>
			<h3><a href="/mandala/ancestors">ancestors outside of time</a></h3>
			<h3><a href="/mandala/ramasjourney">the avatāra in you</a></h3>
			<h3><a href="/mandala/synrec">synaptic reconnection</a></h3>
		</div>
	</div>
</div>

<style lang="sass">

.onpagelinks h3
	text-transform: uppercase
	cursor: pointer
	transition: 0.15s
	&:hover
		background: linear-gradient(95.13deg, #5CFC11 -5.26%, #53DD6C 20.27%, #11FC8B 61.7%, #10C56E 85.77%)
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
		background-clip: text
		text-fill-color: transparent

.section
	overflow: hidden
	width: 100vw
	@media screen and (min-width: 1024px)
		height: 100vh

.sec1
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh


@media screen and (min-width: 1024px)
	.ballholder
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center				
		img
			object-fit: cover
			transform-origin: center center
			width: 400px
			height: 400px

@media screen and (max-width: 1023px)
	.ballholder
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center				
		img
			object-fit: cover
			transform-origin: center center
			width: 200px
			height: 200px

@keyframes fallingdown
	0%
		transform: translateY(-80px)
	100%
		transform: translateY(0px)

@keyframes slidingleft
	0%
		padding-right: 0
	100%
		padding-right: 50%

@keyframes slidingright
	0%
		transform: translateX(0px)
		padding-right: 50%
		width: 100%
	100%
		transform: translateX(400px)
		padding-right: 0%
		width: 40%

</style>
