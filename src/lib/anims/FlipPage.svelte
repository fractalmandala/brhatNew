<div>
<slot></slot>
</div>

<style lang="sass">

div
	border-radius: 1em
	perspective: 600px
	box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.25), 0 0.02125em 0.06125em rgba(0, 0, 0, 0.25)
	position: relative
	&::before
		position: absolute
		top: 0
		left: 0
		content: ''
		border-radius: 0 0 1em 1em
		height: 100%
		width: 50%
		transform-origin: center top
		transform: rotateY(180deg)
		background: white
		transition: 0.7s ease-in-out transform
	&:hover
		&::before
			transform: rotateY(0)

</style>