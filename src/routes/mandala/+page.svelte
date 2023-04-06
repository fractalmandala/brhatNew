<script lang="ts">

	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let rot:number

</script>

<svelte:window bind:scrollY={rot}/>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"></ParallaxImage>
	</div>
	<div class="plain-one x1 extra pads">
		<h5 class="wide60">
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
		</h5>
		<h5 class="wide60">
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</h5>
		<h4>
			Such a history of India is still to be written.
		</h4>
		<p>- Shri KM Munshi</p>
	</div>
	<div class="gridof2 x2 pads">
		<div class="box">
			<h5>
				with a continuity of untold millennia, the passage of time visible to us in
			</h5>
			<h3 class="green">itihāsa</h3>
		</div>
		<div class="box">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/itihaas.webp" alt="itihas"/>
		</div>
	</div>
	<div class="gridof2 x3 pads">
		<div class="box">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/bharata.webp" alt="bharata"/>
		</div>
		<div class="box">
		<h5>
			information was processed in increasingly complex ways within the physical environment best described as
		</h5>
		<h3>bhārata</h3>
		</div>
	</div>
	<div class="gridof2 x4 pads">
		<div class="box">
			<h5>
				emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h5>
			<h3>
				dharma
			</h3>
		</div>
		<div class="box">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/dharma.webp" alt="dharma"/>
		</div>
	</div>
	<div class="plain-one x5 pads">
		<h2 style="text-align: center">and it is alive...</h2>
		<img class="rotatingmandala" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/rotator.webp" alt="rotator" style="transform: rotate({rot/10}deg)"/>
		<div class="gridof2">
			<div class="card-c extra">
				<h6>
					Fractal
				</h6>
				<p>
					A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.<br>
					A fractal displays the same properties at any magnification level, ie., it is multi-level.
				</p>
			</div>
			<div class="card-c extra">
				<h6>
					Maṇḍala
				</h6>
				<p>
					A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).<br>
					A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
				</p>
			</div>
		</div>
	</div>
	<div class="plain-one x6 pads">
		<h3 class="wide60">
			the Fractal Maṇḍala is an exploration, study and articulation of the Indian civilizational consciousness
		</h3>
		<div class="onpagelinks">
			<h4><a href="/mandala/macrohistoriccase" target="_self">the macrohistoric case</a></h4>
			<h4><a href="/mandala/aphorisms" target="_self">caturasūtra - 4 aphorisms</a></h4>
			<h4><a href="/mandala/indiancivcon" target="_self">indian civilizational consciousness</a></h4>
			<h4><a href="/mandala/rathaasbija" target="_self">ratha as a bīja</a></h4>
			<h4><a href="/mandala/historyvsitihasa" target="_self">history is ontic, itihāsa ontologic</a></h4>
			<h4><a href="/mandala/ancestors" target="_self">ancestors outside of time</a></h4>
			<h4><a href="/mandala/ramasjourney" target="_self">the avatāra in you</a></h4>
			<h4><a href="/mandala/synrec" target="_self">synaptic reconnection</a></h4>
		</div>
	</div>
</div>


<style lang="sass">

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center

.x2
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

.x3
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

.x4
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

.x2, .x4
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 30%
		grid-template-areas: ". ."
		height: 100%
		gap: 0 32px
		padding-top: 32px
		padding-bottom: 32px
		.box
			overflow: hidden
		.box img
			height: 120px

.x3
	@media screen and (max-width: 1023px)
		grid-template-columns: 30% 1fr
		grid-template-areas: ". ."
		height: 100%
		gap: 0 32px
		padding-top: 32px
		padding-bottom: 32px
		.box
			overflow: hidden
		.box img
			height: 120px
	

.x5
	padding-bottom: 64px
	@media screen and (min-width:1024px)
		height: 100vh
		justify-content: center

.rotatingmandala
	object-fit: contain
	transform-origin: center center
	@media screen and (min-width: 1024px)
		height: 280px
		width: 280px
		margin-left: auto
		margin-right: auto
	@media screen and (max-width: 1023px)
		height: 160px
		width: 160px
		margin-left: auto
		margin-right: auto

.x6
	padding-bottom: 64px

.onpagelinks
	a
		transition: var(--snap)
		&:hover
			color: var(--mand)


</style>