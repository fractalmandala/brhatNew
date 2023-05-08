<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'
	import { draggable } from '@neodrag/svelte'
	import type { DragOptions } from '@neodrag/svelte'
	import ButtonOne from '$lib/anims/ButtonBlue.svelte'

  let options: DragOptions = {
    axis: 'x',
    bounds: 'parent',
  }

</script>


<div class="rta-grid grid2 left0 p-bot-64 minH" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div class="rta-column sidebar">
	
	</div>
	<div class="rta-column rowgap100 mainpage">
		<div class="greenline"></div>
			<div class="rta-row m-top-16 colgap200">
				<h4>Ṛta in Design Web Components</h4>
				<img class="trinfinity" src="/images/trinfinity.png" alt="trinfinity"
					use:draggable={options}
					/>
			</div>
		<p>(development version, not ready for use.)</p>
		<div class="rta-column one-section">
			<em>
				Brhat.in and <a href="www.brhateducation.in" target="_blank" rel="noreferrer">brhateducation.in</a> are developed on the Sveltekit framework and deployed at Vercel. We keep most of our code typesafe, and prefer original SASS for styling over SCSS. Our (somewhat messy) code is public at <a href="https://github.com/fractalmandala/brhatNew" target="_blank" rel="no-referrer">Github.</a> 
			</em>
			<em>
				With this components library we want to make simple, low-dependency design accessible and easy to adopt.
				While the list of beautiful design systems runs large, we are particularly inspired by The Washington Post's <a href="https://build.washingtonpost.com/" target="_blank" rel="no-referrer">design system</a> and CRED's <a href="https://playground.cred.club/" target="_blank" rel="no-referrer">Neopop library.</a>
				We will move towards zero dependency as this system is readied for production, but we start with the libraries <a href="https://auto-animate.formkit.com/" target="_blank" rel="no-referrer">Auto Animate</a> and <a href="https://sveltelegos.com/" target="_blank" rel="no-referrer">Svelte Legos,</a> both for their sheer convenience.
			</em>
		</div>
		<div class="rta-column rowgap200 one-section">
			<h5 class="p-bot-32">Tabs</h5>
			<p>Tabs are quite frequent on our site, being required for instances like chapter or course listings, blog categories etc. Our tabs are responsive, contracting into a dropdown menu below breakpoints. We have both horizontal and vertical tab drawers.</p>
			<h6 class="p-top-16">
				Horizontal Tabs
			</h6>
			<p>Horizontal tabs can be aligned left, right or center.</p>
			<div class="rta-row colgap400">
				<div class="drawer-item">Label 1</div>
				<div class="drawer-item">Label 2</div>
				<div class="drawer-item">Label 3</div>
				<div class="drawer-item">Label 4</div>
				<div class="drawer-item">Label 5</div>
				<div class="drawer-item">Label 6</div>
			</div>
		</div>
	</div>
</div>



<style lang="sass">

.dark
	.drawer-item
		color: white
		font-size: 20px
		font-weight: 700
	

.rta-column
	h5
		font-weight: 600
		color: #FFFFFF
	h6
		font-weight: 500
		line-height: 1.6
	em
		line-height: 1.8
		margin-bottom: 20px
	li.em
		margin-bottom: 4px

.sidebar
	border-right: 1px solid var(--borderline)


.mainpage
	a
		transition: 0.08s
		color: #10D56C
		position: relative
		&::after
			transition: 0.15s
			width: 0%
			position: absolute
			bottom: 4px
			left: 0
			height: 1px
			background: white
			content: ''
		&:hover
			&::after
				width: 100%
	@media screen and (min-width: 1024px)
		padding-top: 128px
		padding-left: 64px
		padding-right: 200px
		.trinfinity
			width: 80px
			object-fit: contain
		.one-section
			padding-top: 48px
			h5
				border-top: 1px solid var(--borderline)
				padding-top: 32px

.greenline
	height: 1px
	background: #10D56C
	width: 40%


</style>
