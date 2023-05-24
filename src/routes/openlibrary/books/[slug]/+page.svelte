<script lang="ts">

	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores'

	export let data

</script>

<div class="rta-column"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	>
	<div class="type">
	<h3>
		{data.Text}
	</h3>
	<div class="rta-row">
		<p>{data.Description}</p>
		<h5>{data.author}</h5>
	</div>
	</div>
	<div class="boxc frameholder">
		<iframe 
		data-lenis-prevent
		title={data.Text}
		src={data.Extract} 
		width="100%"
		height="720" 
		allow="autoplay">
		</iframe>
	</div>
</div>

<style lang="sass">

.levelzero
	iframe
		width: 720px

.levelone
	iframe
		width: 640px

.type
	h3
		font-family: 'Space Grotesk', sans-serif
		border-bottom: 1px solid #d7d7d7
		padding-bottom: 16px
	h5, p
	font-family: 'Space Grotesk', sans-serif
	.rta-row
		gap: 32px
		padding-top: 24px
		align-items: flex-start
		h5
			width: 35%
			color: #474747
			line-height: 1.5
			font-weight: 400
		p
			width: calc(65% - 32px)
			text-align: right
	@media screen and (max-width: 1023px)
		padding-top: 32px
		h3
			text-align: left
		.rta-row
			flex-wrap: wrap
			flex-direction: column-reverse
			column-gap: 0
			row-gap: 16px
			h5, p
				width: 100%
				text-align: left

iframe
	margin-top: 32px

.frameholder
	display: flex
	flex-direction: column
	@media screen and (min-width: 1024px)
		align-items: flex-start
	@media screen and (max-width: 1023px)
		align-items: center


</style>