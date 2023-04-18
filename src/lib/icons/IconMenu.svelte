<script lang="ts">

	export let expanded:boolean

</script>

<div id="menumain" class:expandedForm={expanded}>
	<div class="topline"></div>
	<div class="midline"></div>
	<div class="botline"></div>
</div>

<style lang="sass">

.topline, .midline, .botline
	height: 4px
	width: 22px
	background: white

.topline
	transform-origin: left top
	transition: 0.23s

.botline
	transform-origin: left bottom
	transition: 0.23s

#menumain
	height: 24px
	width: 28px
	display: flex
	flex-direction: column
	row-gap: 5px

#menumain
	.midline
		transition: 0.23s
	&:hover
		.topline, .midline, .botline
			background: #fe4a49

#menumain.expandedForm
	.midline
		opacity: 0
	.topline
		transform: rotate(45deg)
		width: 27px
	.botline
		transform: rotate(-45deg)
		width: 27px

</style>
