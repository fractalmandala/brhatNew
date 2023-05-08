<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'


</script>

<div class="switch rta-column" class:light={$visibilityMode} class:dark={!$visibilityMode}>
  <div class="slider rta-in-col"></div>
</div>

<style lang="sass">

.switch 
	cursor: pointer
	height: 22px
	width: 48px
	border-radius: 11px
	padding-top: 2px
	padding-right: 2px
	padding-left: 2px
	padding-bottom: 2px
	transition: all 0.2s cubic-bezier(0.515, 0.130, 0.295, 0.450)

.switch.light
	border: 1px solid #474747
	.slider
		background: #FFFFFF
	&:hover
		.slider
			background: #FFFFFF

.switch.dark
	border: 1px solid #474747
	.slider
		transform: translateX(26px)
	&:hover
		.slider
			background: #FFFFFF

.slider 
	width: 16px
	height: 16px
	border-radius: 8px
	transition: all 0.2s cubic-bezier(0.515, 0.130, 0.295, 0.450)
	background: #474747


</style>