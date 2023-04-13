<div class="buttonone"><slot></slot></div>

<style lang="sass">

.buttonone
	height: 32px
	width: max-content
	border-radius: 3px
	background: #fe4a49
	padding-left: 20px
	padding-right: 20px
	color: white
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	cursor: pointer
	transition: all 0.16s cubic-bezier(0.000, -0.600, 1.000, -0.600)
	transform-origin: center center
	position: relative
	z-index: 1
	&:hover
		transform: scale(0.85)
		&::before
			filter: blur(0px)
	&::before
		position: absolute
		border-radius: 3px
		content: ''
		top: 0
		left: 0
		height: 100%
		width: 100%
		background: #fe4a49
		z-index: -1
		filter: blur(5px)
		transition: all 0.16s cubic-bezier(0.000, -0.600, 1.000, -0.600)
		animation: shining 2s ease infinite

@keyframes shining
	0%
		filter: blur(5px)
	50%
		filter: blur(2px)
	100%
		filter: blur(5px)

</style>