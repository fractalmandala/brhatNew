<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'

</script>

<button class="rid-button" class:light={$visibilityMode} class:dark={!$visibilityMode}>
  <span>
		<slot></slot>
	</span>
</button>

<style lang="sass">

.rid-button.light
	background: #FFFFFF

.rid-button.dark
	background: #171717

.rid-button
	position: relative 
	display: flex 
	justify-content: center 
	align-items: center 
	border-radius: 25px 
	border: 2px solid var(--thisbuttoncolor)
	overflow: hidden 
	max-width: max-content
	cursor: pointer
	&:after 
		content: " " 
		width: 0% 
		height: 100% 
		background: var(--thisbuttoncolor)
		position: absolute 
		transition: all 0.4s ease-in-out 
		right: 0 
	&:hover 
		&::after 
			right: auto 
			left: 0 
			width: 100% 
		span 
			color: #FFFFFF
			animation: scaleUp 0.3s ease-in-out 
	span 
		text-align: center 
		text-decoration: none 
		width: 100% 
		padding: 4px 14px 
		color: var(--thisbuttoncolor)
		font-size: 14px
		font-weight: 600
		z-index: 20 
		transition: all 0.3s ease-in-out 

@keyframes scaleUp 
	0%
		transform: scale(1) 
	50%
		transform: scale(0.95)
	100%
		transform: scale(1) 



</style>