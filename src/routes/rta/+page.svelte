<script lang="ts">

	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let yy:number

</script>

<svelte:window bind:scrollY={yy}/>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')"></ParallaxImage>
	</div>
	<div class="gridof2 x1 pads">
		<div class="box">
			<h6 style="font-weight: 300; margin-bottom: 24px">
				From user flows to adoption curves, learning paths to zoning regulations,
			</h6>
			<h4 style="color: var(--greenb)">We live in a world of design...</h4>
			<h6 style="font-weight: 300; margin-bottom: 24px">
				But human creation is breaking the planet, and bringing the ruin of life and species. Introspection and a radical recalibration are our only chance of reversing the situation.
			</h6>
			<h6 style="font-weight: 300; margin-bottom: 24px">
				What’s needed is a “wisdom of gods,” found encoded across culture- or dharma. Through culture, we have a shot. The evolution needed in design is that of culture-rooting. More specifically, of dhārmika design thinking. And since dharma is the endeavor to conduct life and society in harmony with the natural order- which is ṛta (ऋत)- 
			</h6>
			<h4 style="color: var(--greenb)">
			dharma-led design is effectively ṛta in design.
			</h4>
		</div>
		<div class="box"></div>
	</div>
	<div class="gridof2 x3 pads">
		<div class="box">
			<div class="a-title boxr" style="gap: 24px; align-items: center">
				<h4>
					Ṛta in Design
				</h4>
				<div class="boxr">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinityball.png" alt="ball"/>
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinity.png" alt="trinfinity"/>
				</div>
			</div>
			<h5>
				A framework for modern design that derives from dharma for its principles, mindsets and processes.
			</h5>
			<div class="boxr">
				<div class="card-nix">
					<h6>The Design Process</h6>
					<p>
						1. Svataḥ Siddha<br>
						2. Purohita<br>
						3. Saṃskartṛ
					</p>
				</div>
				<div class="card-nix">
					<h6>Principles of Ṛta in Design</h6>
					<p>
						A. Intent<br>
						B. Agency<br>
						C. Grounding<br>
						D. Consonance
					</p>
				</div>
			</div>
		</div>
		<div class="box onpagelinks">
			<h4><a href="/rta/prologue">Prologue</a></h4>
			<h4><a href="/rta/intro">Introduction</a></h4>
			<h4><a href="/rta/dharmaisdesign">Dharma is Design</a></h4>
			<h4><a href="/rta/designatbrhat">Design at Bṛhat</a></h4>
		</div>
	</div>
</div>


<style lang="sass">

.x1
	padding-top: 64px


.x1
	.columnplain h4
		margin-bottom: 24px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh

.x3
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center
		.a-title
			.boxr img
				object-fit: contain
				height: 32px
	@media screen and (max-width: 1023px)
		padding-bottom: 64px
		.box
			img
				object-fit: contain
				height: 80px
		.boxr
			gap: 32px

.x3
	.card-nix
		h6
			border-top: 1px solid #ececec
			padding-top: 16px

.onpagelinks
	h4
		&:hover
			color: #10D56C

</style>