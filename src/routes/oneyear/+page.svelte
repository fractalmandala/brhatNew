<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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
	let yPanel2 = 0;
	let yPanel3 = 0;
	let yPanel4 = 0;
	let yPanel5 = 0;
	let yPanel6 = 0;
	let yPanel9 = 0;
	let scaling: number;
	let options = {};
	let sY: number;
	let oH: number;
	let stringed3: string;
	let stringed2: string;
	let breakLeft = false;
	let breakRight = false;

	const updateTwoPosition = () => {
		if (!panel2) return;
		const { top, height } = panel2.getBoundingClientRect();
		yPanel2 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateThreePosition = () => {
		if (!panel3) return;
		const { top, height } = panel3.getBoundingClientRect();
		yPanel3 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateFourPosition = () => {
		if (!panel4) return;
		const { top, height } = panel4.getBoundingClientRect();
		yPanel4 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateFivePosition = () => {
		if (!panel5) return;
		const { top, height } = panel5.getBoundingClientRect();
		yPanel5 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateSixPosition = () => {
		if (!panel6) return;
		const { top, height } = panel6.getBoundingClientRect();
		yPanel6 = Math.max(0, ((oH - top) / height) * 100);
	};

	const updateNinePosition = () => {
		if (!panel9) return;
		const { top, height } = panel9.getBoundingClientRect();
		yPanel9 = Math.max(0, ((oH - top) / height) * 100);
	};

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

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} />

<div class="areabackground">
	<div class="section sec1">
		<Parallax
			--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"
			--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"
		/>
	</div>
	<div class="section type sec2 pads panel2">
		<div class="box">
			<h6>with a continuity of untold millennia, the passage of time visible to us in</h6>
			<h3>itihāsa</h3>
		</div>
		<div class="box">
			<div class="parallaxbox" style="transform: translateY({-100 + yPanel2}%)">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/itihaas.webp"
					alt="itihasa"
				/>
			</div>
		</div>
	</div>
	<div class="section type sec3 pads panel3">
		<div class="box">
			<div class="parallaxbox" style="transform: translateY({-100 + yPanel3}%)">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/bharata.webp"
					alt="bharata"
				/>
			</div>
		</div>
		<div class="box">
			<h6>
				information was processed in increasingly complex ways within the physical environment best
				described as
			</h6>
			<h3>bhārata</h3>
		</div>
	</div>
	<div class="section type sec4 pads panel4">
		<div class="box">
			<h6>
				emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h6>
			<h3>dharma</h3>
		</div>
		<div class="box parallaxbox" style="transform: translateY({-100 + yPanel4}%)">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/dharma.webp"
				alt="dharma"
			/>
		</div>
	</div>
	<div class="type sec5 pads panel5">
		<div class="headholder">
			<h2 class="green-gradient" class:emergence={ifPanel5}>and it is alive...</h2>
		</div>
	</div>
	<div class="type pads sec6 panel6">
		<div
			class="box ballholder"
			class:fixIt={ifPanel6}
			class:moveLeft={breakLeft}
			class:moveRight={breakRight}
		>
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/fractallogo.webp"
				alt="fractalmandala"
				style="transform: rotate({sY / 4}deg); opacity: {1 - yPanel9 / 100}"
			/>
		</div>
	</div>
	<div class="section sec7 pads panel7 type">
		<div class="box textholder">
			<h3>Fractal</h3>
			<h6 class="white">
				A curve or geometrical figure, each part of which has the same statistical character as the
				whole. Any of various extremely irregular curves or shapes for which any suitably chosen
				part is similar in shape to a given larger or smaller part.
			</h6>
			<h6 class="green">
				A fractal displays the same properties at any magnification level, ie., it is multi-level.
			</h6>
		</div>
	</div>
	<div class="section sec8 pads panel8 type">
		<div class="box textholder">
			<h3>Maṇḍala</h3>
			<h6 class="white">
				A circle or anything circular- globe, circumference, orbit of a celestial object, an array
				of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete,
				satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).
			</h6>
			<h6 class="green">
				A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is
				coherent.
			</h6>
		</div>
	</div>
	<div class="section sec9 pads panel9 type">
		<div class="box">
			<h6>the Fractal Maṇḍala is an exploration, study and articulation of the</h6>
			<h2>Indian civilizational consciousness</h2>
		</div>
	</div>
	<div class="section sec10 pads panel10 type">
		<div class="onpagelinks dark">
			<h4><a href="/mandala/macrohistoriccase">the macrohistoric case</a></h4>
			<h4><a href="/mandala/aphorisms">caturasūtra - 4 aphorisms</a></h4>
			<h4><a href="/mandala/indiancivcon">indian civilizational consciousness</a></h4>
			<h4><a href="/mandala/rathaasbija">ratha as a bīja</a></h4>
			<h4><a href="/mandala/historyvsitihasa">history is ontic, itihāsa ontologic</a></h4>
			<h4><a href="/mandala/ancestors">ancestors outside of time</a></h4>
			<h4><a href="/mandala/ramasjourney">the avatāra in you</a></h4>
			<h4><a href="/mandala/synrec">synaptic reconnection</a></h4>
		</div>
	</div>
</div>

<style lang="sass">

.onpagelinks
	h4
		color: white
		cursor: pointer
		&:hover
			color: #10C56D

.headholder
	overflow: hidden

.section
	overflow: hidden
	width: 100vw
	@media screen and (min-width: 1024px)
		height: 100vh

.parallaxbox
	transition: var(--cubec)
	border: 2px solid white
	img
		object-fit: cover
		width: 100%
		height: 100%

.sec1
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh

.sec2, .sec3, .sec4
	display: flex
	.box
		h3
			color: #10C56D
		h6
			color: white
			font-weight: 400
	@media screen and (min-width: 1024px)
		flex-direction: row
		align-items: center
		column-gap: 64px
		height: 100vh
		.box
			width: calc(50% - 32px)
			overflow: hidden
	@media screen and (max-width: 1023px)
		flex-direction: column
		padding-top: 16px
		.box
			padding-top: 16px
			padding-bottom: 16px
			.parallaxbox
				width: 260px
				img
					width: 256px
					height: 256px
	
.sec5
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	@media screen and (min-width: 1024px)
		padding-top: 64px
		padding-bottom: 64px


.sec6
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	img
		transform-origin: center center
	@media screen and (min-width: 1024px)
		min-height: 100vh
		.ballholder
			height: 100vh
			display: flex
			flex-direction: column
			align-items: center
			justify-content: center				
			img
				object-fit: cover
				width: 400px
				height: 400px
		.box.ballholder.fixIt
			position: fixed
			top: 0px
		.ballholder.box.moveLeft
			animation: slidingleft 1s ease forwards
		.ballholder.box.moveLeft.moveRight
			animation: slidingright 1.4s ease forwards

.sec7
	.textholder
		width: 36%
		margin-left: 60%
		align-items: flex-end
		justify-content: center
		text-align: right
		height: 100%
		h3
			color: white
		.white
			color: white
		.green
			color: #10C56D
		h6
			font-weight: 400

.sec8
	.textholder
		width: 36%
		align-items: flex-start
		justify-content: center
		text-align: left
		height: 100%
		padding-top: 256px
		h3
			color: white
		.white
			color: white
		.green
			color: #10C56D
		h6
			font-weight: 400

.sec9
	min-height: 200vh
	.box
		justify-content: center
		height: 100vh
	@media screen and (min-width: 1024px)
		.box
			h6
				font-weight: 400
				color: white
			h2
				line-height: 1
				color: #10D56C
		

.green-gradient
	transform: translateY(-80px)

.green-gradient.emergence
	animation: fallingdown 0.8s var(--cubea) forwards

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

.areabackground
	background: #171717

</style>
