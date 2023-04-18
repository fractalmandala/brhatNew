<div class="whitecard">
<slot name="image"></slot>
<slot name="body"></slot>
</div>

<style lang="sass">

.whitecard
	display: flex
	flex-direction: column
	row-gap: 16px
	@media screen and (max-width: 1023px)
		flex-direction: var(--thisflexdir)

</style>