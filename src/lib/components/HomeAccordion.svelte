<script lang="ts">

	let sy:number

</script>

<svelte:window bind:scrollY={sy}/>
<div class="accordion">
	<div class="panel back" id="panel1">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/creative-culture-1024-1.webp" alt="cc"/>
	</div>
	<div class="panel back" id="panel2">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/research-policy-1024-1.webp" alt="pr"/>
	</div>
	<div class="panel back" id="panel3">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/develop-leader-1024-1.webp" alt="ld"/>
	</div>
</div>


<style lang="sass">

.accordion
	display: flex
	flex-direction: row
	height: calc(100vh - 64px)
	width: 100%
	column-gap: 0
	overflow: hidden

.panel
	display: flex
	flex-direction: column
	transition: all 0.32s var(--cubea)
	@media screen and (min-width: 1024px)
		height: 100%
		width: 33.33%
		border: 2px solid white

.accordion
	&:hover
		.panel
			width: 25%
			&:hover
				width: 50%

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