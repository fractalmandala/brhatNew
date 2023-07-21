<script lang="ts">
	import CompButton1 from '$lib/ridunits/CompButton.svelte';
	import CompButton2 from '$lib/ridunits/CompButton.svelte';
	import CompButton3 from '$lib/ridunits/CompButton.svelte';
</script>

<div class="accordion">
	<div class="panel back" id="panel1">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/creative-culture-1024-1.webp"
			alt="cc"
		/>

		<a href="/about/culturecreatives"><button class="newbutton big">Culture Creatives</button></a>
	</div>
	<div class="panel back" id="panel2">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/research-policy-1024-1.webp"
			alt="pr"
		/>

		<a href="/about/policyresearch"><button class="newbutton big">Policy Research</button></a>
	</div>
	<div class="panel back" id="panel3">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/develop-leader-1024-1.webp"
			alt="ld"
		/>

		<a href="/about/leadershipdevelopment"
			><button class="newbutton big">Leadership Development</button></a
		>
	</div>
</div>

<style lang="sass">

.accordion
	display: flex
	flex-direction: row
	height: 100vh
	width: 100%
	column-gap: 0
	overflow: hidden
	@media screen and (max-width: 1023px)
		flex-wrap: wrap
		height: 100vh

.panel
	display: flex
	flex-direction: column
	transition: all 1.5s ease
	@media screen and (min-width: 1024px)
		height: 100%
		width: 33.33%
		border: 2px solid white
		align-items: center
	@media screen and (max-width: 1023px)
		height: 33.33%
		width: 100%
		border: 2px solid white
		align-items: center

.accordion
	@media screen and (min-width: 1024px)
		&:hover
			.panel
				width: 25%
				&:hover
					width: 50%
	@media screen and (max-width: 1023px)
		&:hover
			.panel
				height: 25%
				&:hover
					height: 50%

.panel img
	filter: saturate(0.1)
	transition: all 0.72s ease
	&:hover
		filter: saturate(1)
	@media screen and (min-width: 769px)
		margin-bottom: -128px
	@media screen and (max-width: 768px)
		margin-bottom: -64px

.back
	background-blend-mode: luminosity

.panel img
	object-fit: cover
	width: 100%
	height: 100%


</style>
