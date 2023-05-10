<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'
	import { draggable } from '@neodrag/svelte'
	import type { DragOptions } from '@neodrag/svelte'

	let fake = true
	let iW:number
	let breakPoint:boolean

	$: if ( iW <= 1023 ) {
		breakPoint = true
	} else {
		breakPoint = false
	}
	
	function fauxfake(){
		fake = !fake
	}

  let options: DragOptions = {
    axis: 'x',
    bounds: 'parent',
  }

</script>

<svelte:window bind:innerWidth={iW}/>


<div class="rta-grid grid2 left0 p-bot-64 minH" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div class="rta-column sidebar">
	
	</div>
	<div class="rta-column rowgap100 mainpage">
		<div class="greenline"></div>
			<div class="rta-row fixed ytop-m m-top-16 colgap200">
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
			<p>Tabs are quite frequent on our site, being required for instances like chapter or course listings, blog categories etc. Our tabs are responsive, contracting into a dropdown menu below breakpoint. We have both horizontal and vertical tab drawers.</p>
			<em class="is-p p-top-16">
				Horizontal Tabs
			</em>
			<p>Horizontal tabs can be aligned left, right or center.</p>
			<div class="rta-column component-section">

			</div>
		</div>
	</div>
</div>



<style lang="sass">

.component-section
	border-radius: 8px
	@media screen and (min-width: 1024px)
		padding: 24px
	@media screen and (max-width: 1023px)
		padding: 16px

.dark
	p
		color: #474747
	h5
		color: #FFFFFF
	em.is-p
		color: #676767
	.component-section
		background: #101010
		box-shadow: 5px 5px 12px #090909

.light
	h5
		color: #878787
	.component-section
		background: #f1f1f1
		box-shadow: 5px 5px 12px #e1e1e1
		

.rta-column
	h5
		font-weight: 600
	h6
		font-weight: 500
		line-height: 1.6
	li.em
		margin-bottom: 4px

.one-section
	em.is-p
		line-height: 1.8
		margin-bottom: 0
		font-weight: 700
	em
		margin-bottom: 20px
		padding-bottom: 0

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
	@media screen and (max-width: 1023px)
		padding-top: 128px
		padding-left: 24px
		padding-right: 24px
		.trinfinity
			width: 80px
			object-fit: contain
			height: max-content

.greenline
	height: 1px
	background: #10D56C
	width: 40%


</style>
