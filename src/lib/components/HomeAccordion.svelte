<script lang="ts">

	let sy:number

</script>

<svelte:window bind:scrollY={sy}/>
<div class="accordion">
	<div class="panel back" id="panel1">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/creative-culture-1024-1.webp" alt="cc"/>
		<button class="accordionbutton"><a href="/about/culturecreatives">Culture Creatives</a></button>
	</div>
	<div class="panel back" id="panel2">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/research-policy-1024-1.webp" alt="pr"/>
			<button class="accordionbutton"><a href="/about/policyresearch">Policy Research</a></button>
	</div>
	<div class="panel back" id="panel3">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/develop-leader-1024-1.webp" alt="ld"/>
		<button class="accordionbutton"><a href="/about/leadershipdevelopment">Leadership Development</a></button>
	</div>
</div>


<style lang="sass">

button.accordionbutton
	border: 1px solid white
	padding: 5px 20px
	color: white
	border-radius: 2px
	background: #171717
	transform-origin: left center
	transition: all 0.3s ease
	border-radius: 3px
	@media screen and (max-width: 1023px)
		font-size: 18px
	@media screen and (min-width: 1024px)
		font-size: 16px

.accordionbutton
	position: absolute
	bottom: 64px
	left: 32px

.accordion .panel
	&:hover
		button.accordionbutton
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
	transition: all 0.32s var(--cubea)
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
	transition: all 0.32s var(--cubea)
	&:hover
		filter: saturate(1)

.back
	background-blend-mode: luminosity

.panel img
	object-fit: cover
	width: 100%
	height: 100%


</style>