<script lang="ts">
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
</script>

<div class="official" class:lzero={$breakZero} class:lone={$breakOne} class:ltwo={$breakTwo}>
	<div class="p-bot-32 rta-column rowgap200">
		<p>
			The Puranic Encyclopaedia is a meticulously put together text by Shri Vettam Mani. It is a
			comprehensive dictionary with special reference to the Itihāsa-Purāṇa corpus. We find here an
			index of each proper noun in the corpus- names, places, rivers, entities, and more.
		</p>
	</div>
	<div class="pagesider">
		<p>p</p>
	</div>
</div>

<style lang="sass">

.official
	display: flex
	p
		line-height: 1.5
		color: var(--textone)
		a 
			color: var(--mand)

.official.lzero, .official.lone
	flex-direction: row

.official.lzero
	.pagesider
		width: 320px
		padding-left: 48px
	.rta-column
		width: calc(100% - 320px)
		border-right: 1px solid var(--contraster)
		padding-right: 64px

.official.lone
	.pagesider
		max-width: 240px
		min-width: 200px
		padding-left: 32px
	.rta-column
		max-width: calc(100% - 240px)
		min-width: calc(100% - 200px)
		border-right: 1px solid var(--contraster)
		padding-right: 48px

.official.ltwo
	flex-direction: column-reverse
	.pagesider
		width: 100%
		height: 40px
		border-bottom: 1px solid var(--contraster)
	.rta-column
		width: 100%

</style>
