<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'
	import { draggable } from '@neodrag/svelte'
	import type { DragOptions } from '@neodrag/svelte'

  let options: DragOptions = {
    axis: 'x',
    bounds: 'parent',
  }

</script>



<div class="rta-grid grid2 left0 minH">
	<div class="rta-column sidebar"></div>
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
	</div>
</div>



<style lang="sass">

.rta-column
	h5
		font-weight: 500
		color: #FFFFFF
	h6
		font-weight: 400
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
		padding-right: 128px
		.trinfinity
			width: 80px
			object-fit: contain
		.one-section
			padding-top: 48px

.greenline
	height: 1px
	background: #10D56C
	width: 40%


</style>
