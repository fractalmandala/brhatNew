<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'
	import autoAnimate from '@formkit/auto-animate'


</script>

<div class="switch rta-column" use:autoAnimate class:light={$visibilityMode} class:dark={!$visibilityMode}>
  <div class="slider rta-in-col"></div>
</div>

<style lang="sass">

.switch 
	cursor: pointer
	height: 20px
	width: 48px
	border: 1px solid var(--primaryalt)
	border-radius: 10px
	padding-top: 1px
	padding-right: 2px
	padding-left: 2px
	transition: all 0.23s ease
	&:hover
		.slider
			background: var(--primary)

.switch.light
	align-items: flex-end

.switch.dark
	align-items: flex-start

.slider 
	width: 16px
	height: 16px
	border-radius: 8px
	transition: all 0.23s ease
	background: var(--primaryalt)


</style>