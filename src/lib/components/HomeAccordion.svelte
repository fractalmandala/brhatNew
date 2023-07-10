<script lang="ts">
	let sy: number;
	import CompButton1 from '$lib/ridunits/CompButton.svelte';
	import CompButton2 from '$lib/ridunits/CompButton.svelte';
	import CompButton3 from '$lib/ridunits/CompButton.svelte';
</script>

<svelte:window bind:scrollY={sy} />
<div class="accordion">
	<div class="panel back" id="panel1">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/creative-culture-1024-1.webp"
			alt="cc"
		/>
		<button class="blank-button">
			<CompButton1><a href="/about/culturecreatives">Culture Creatives</a></CompButton1>
		</button>
	</div>
	<div class="panel back" id="panel2">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/research-policy-1024-1.webp"
			alt="pr"
		/>
		<button class="blank-button">
			<CompButton2><a href="/about/policyresearch">Policy Research</a></CompButton2>
		</button>
	</div>
	<div class="panel back" id="panel3">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/develop-leader-1024-1.webp"
			alt="ld"
		/>
		<button class="blank-button">
			<CompButton3><a href="/about/leadershipdevelopment">Leadership Development</a></CompButton3>
		</button>
	</div>
</div>

<style lang="sass">

.blank-button
	position: absolute
	bottom: 128px
	left: 32px
	transition: 0.08s

.accordion .panel
	&:hover
		.blank-button
			background: #fe4a49
			transform: scale(1.2) translateY(-32px)
			&:hover
				background: var(--strong)

.accordion
	display: flex
	flex-direction: row
	height: 100vh
	width: 100%
	column-gap: 0
	overflow: hidden
	@media screen and (max-width: 1023px)
		flex-wrap: wrap
		margin-top: 64px
		height: calc(100vh - 64px)

.panel
	display: flex
	flex-direction: column
	transition: all 1.5s ease
	position: relative
	@media screen and (min-width: 1024px)
		height: 100%
		width: 33.33%
		border: 2px solid white
	@media screen and (max-width: 1023px)
		height: 33.33%
		width: 100%
		border: 2px solid white

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

.back
	background-blend-mode: luminosity

.panel img
	object-fit: cover
	width: 100%
	height: 100%


</style>
