<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'

</script>

<button class="comp-button" class:pale={$visibilityMode} class:deep={!$visibilityMode}>
<slot></slot>
</button>

<style lang="sass">

.comp-button
	border: none
	color: white
	padding: 8px 16px
	border-radius: 2px
	width: max-content
	min-width: 80px
	cursor: pointer
	transition: all 0.18s ease
	transform-origin: center center
	overflow: hidden
	position: relative
	text-transform: capitalize
	background: #fe4a49
	font-size: 14px
	&:hover
		transform: scale(0.96)
		&::before
			animation: buttonmovement 0.18s ease forwards
	&::before
		position: absolute
		background: linear-gradient(96.89deg, #FF7272 6.93%, #FE4A40 58.12%, #DF2015 92.63%)
		top: 0
		left: 50%
		content: ''
		height: 100%
		width: 0
		border-radius: 2px
		z-index: -1
		transition: all 0.18s ease
	&:active
		transform: scale(0.85)

@keyframes buttonmovement
	0%
		left: 50%
		width: 0
	100%
		left: 0
		width: 100%

</style>