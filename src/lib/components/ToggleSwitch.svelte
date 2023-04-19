			<div class="boxr toggler"><p>Devanāgarī</p>
				<div class="boxr switch">
			  	<div class="slider">
						<div class="ball"></div>
					</div>
				</div><p>
				IAST</p>
			</div>

<style lang="sass">

.toggler
	p.toggled
		color: #fe4a49

.toggler
	align-items: center
	justify-content: flex-start
	gap: 12px
	color: #878787
	cursor: pointer
	p
		&:hover
			color: #fe4a49
.switch
	height: 29px
	width: 64px
	background: #d7d7d7
	border-radius: 13px
	padding-top: 1px
	padding-left: 2px
	padding-right: 2px
	.ball
		height: 24px
		width: 24px
		background: white
		border-radius: 12px
		transition: 0.15s

.ball.balltag
	transform: translateX(35px)

.switch
	&:hover
		background: #fe4a49


</style>