<script lang="ts">
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	export let data;

	let nextID: number;
	let prevID: number;

	$: nextID = data.id + 1;
	$: if (data.id > 1) {
		prevID = data.id - 1;
	}
</script>

<div class="rta-grid grid2" class:lzero={$breakZero} class:lone={$breakOne} class:ltwo={$breakTwo}>
	<div class="rta-column rta-image">
		<img
			src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/{data.image.substr(
				92,
				20
			)}"
			alt={data.id}
		/>
	</div>
	<div class="rta-column text-col">
		<div class="text rta-column">
			<small class="hindiadobe">{data.id}</small>
			<p class="hindiadobe">{data.text}</p>
		</div>
		<div class="buttons rta-row colgap200">
			{#if data.id !== 1}
				<a class="genbutton" href="/aryavarta/{prevID}">Prev</a>
			{/if}
			<a class="genbutton" href="/aryavarta/{nextID}">Next</a>
		</div>
	</div>
</div>

<style lang="sass">

.ltwo.rta-grid.grid2
	display: flex
	flex-direction: column
	min-height: 100vh
	margin-top: 64px
	.rta-image
		height: 40vh
	.text-col
		padding: 32px
		p
			font-size: 24px
		small
			font-size: 16px
			color: #fe4a49
			font-weight: bold
		row-gap: 16px

.lone.rta-grid.grid2
	display: flex
	flex-direction: column
	min-height: 100vh
	margin-top: 64px
	.rta-image
		height: 40vh
	.text-col
		padding: 32px
		p
			font-size: 24px
		small
			font-size: 16px
			color: #fe4a49
			font-weight: bold
		row-gap: 16px

.lzero.rta-grid.grid2
	height: calc(100vh - 64px)
	margin-top: 64px
	.rta-image
		align-items: center
		justify-content: center
		img
			object-fit: cover
			height: 88%
			width: 88%
	.text-col
		padding: 6%
		justify-content: space-between
		p
			font-size: 24px
			padding-top: 16px
			line-height: 1.2
			color: var(--opposite)
		small
			font-size: 16px
			font-weight: bold
			color: #fe4a49
			


</style>
