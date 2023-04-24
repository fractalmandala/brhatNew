<script lang="ts">

	export let data
	let widD:number = 800
	let widM:number
	let width:number
	let iframeWidth = widD

	$: widM = 0.9*width

	$: if ( width <= 1023 ) {
		iframeWidth = widM 
	} else {
		iframeWidth = widD
	}

</script>


<svelte:window bind:innerWidth={width}/>
<div class="type">
	<h3>
		{data.Text}
	</h3>
	<div class="boxr">
		<p>{data.Description}</p>
		<h5>{data.author}</h5>
	</div>
</div>
<div class="boxc frameholder" data-lenis-prevent>
	<iframe 
		title={data.Text}
		src={data.Extract} 
		width={iframeWidth}
		height="720" 
		allow="autoplay">
</iframe>
</div>

<style lang="sass">

.type
	h3
		text-align: right
		border-bottom: 1px solid #d7d7d7
		padding-bottom: 16px
	.boxr
		gap: 32px
		padding-top: 24px
		align-items: flex-start
		h5
			text-align: right
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
		.boxr
			flex-wrap: wrap
			column-gap: 0
			row-gap: 16px
			h5, p
				width: 100%
				text-align: left

iframe
	margin-top: 32px
	margin-left: 64px
	@media screen and (max-width: 1023px)
		margin-left: 0

.frameholder
	display: flex
	flex-direction: column
	@media screen and (min-width: 1024px)
		align-items: flex-end
	@media screen and (max-width: 1023px)
		align-items: center


</style>