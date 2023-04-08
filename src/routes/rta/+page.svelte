<script lang="ts">

	import { onMount } from 'svelte'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let yy:number

</script>

<svelte:window bind:scrollY={yy}/>
<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')"></ParallaxImage>
	</div>
	<div class="columnwithparallax x1">
		<div class="columnplain">
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
		<div class="columnparallax back" style="transform: translateY({yy-900}px)">
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>
				Ṛta in Design
			</h4>
			<div class="boxr">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinityball.png" alt="ball"/>
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinity.png" alt="trinfinity"/>
			</div>
		</div>
		<div class="a-box">
			<h5>
				A framework for modern design that derives from dharma for its principles, mindsets and processes.
			</h5>
			<div class="gridof2">
				<div class="card-nix">
					<h6>The Design Process</h6>
					<p>
						1. Svataḥ Siddha- Preparing the Mind of the Creator<br>
						2. Purohita- Leading One’s Own Yajña to Completion<br>
						3. Saṃskartṛ- The Design Being
					</p>
				</div>
				<div class="card-nix">
					<h6>Principles of Ṛta in Design</h6>
					<p>
						A. Intent- Design of the Designer<br>
						B. Agency- From Intent to Manifestation<br>
						C. Grounding- Cultural Grounding for Ultimate Purpose<br>
						D. Consonance- Sense-making At All Levels
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="plain-one x4 pads">
		<div class="onpagelinks">
			<h4><a href="/rta/dharmaisdesign">Dharma is Design</a></h4>
		</div>
	</div>
</div>


<style lang="sass">

.x1.columnwithparallax
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "columnplain columnparallax"
		gap: 0 64px
		height: 100vh
		overflow: hidden
		.columnplain
			height: 100vh
			display: flex
			flex-direction: column
			justify-content: center
			grid-area: columnplain

.x1
	@media screen and (min-width: 1024px)
		padding-left: 6vw


.x1
	.columnplain h4
		margin-bottom: 24px


.x1 .columnparallax
	grid-area: columnparallax
	height: 100vh
	background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/12.webp')

.x0
	height: 100vh
	overflow: hidden

.x3
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center
		.a-title
			.boxr img
				object-fit: contain
				height: 32px
		.a-box
			.gridof2
				padding-top: 32px
				.card-nix
					h6
						border-top: 1px solid #ececec
						padding-top: 16px

</style>