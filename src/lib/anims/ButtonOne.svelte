<div class="buttonone"><slot></slot></div>

<style lang="sass">

.buttonone
	min-height: 32px
	width: max-content
	text-align: center
	border-radius: 3px
	background: #fe4a49
	padding-left: 20px
	padding-right: 20px
	padding-top: 4px
	padding-bottom: 4px
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
		background: var(--strong)

</style>