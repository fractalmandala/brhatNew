<script lang="ts">

	export let isPads:boolean
	export let isRev:boolean

</script>

<div class="stickycols" class:pads={isPads} class:alt={isRev}>
	<div class="holds-sticky">
		<slot name="holds"></slot>
	</div>
	<div class="scrolls-sticky">
		<slot name="scrolls"></slot>
	</div>
</div>

<style lang="sass">

.stickycols
	display: flex
	@media screen and (min-width: 1024px)
		flex-direction: row
		column-gap: 64px
		padding-top: 120px
		.holds-sticky
			width: 24%
			row-gap: 24px
			position: sticky
			left: 0
			top: 120px
		.scrolls-sticky
			row-gap: 32px
			width: calc(76% - 64px)
			height: 100%
	@media screen and (max-width: 1023px)
		flex-direction: column
		padding-top: 32px
		row-gap: 32px
		.holds-sticky
			row-gap: 16px
		.scrolls-sticky
			row-gap: 24px

.stickycols.alt
	@media screen and (min-width: 1024px)
		flex-direction: row-reverse
	@media screen and (max-width: 1023px)
		flex-direction: column


.holds-sticky, .scrolls-sticky
	display: flex
	flex-direction: column


</style>