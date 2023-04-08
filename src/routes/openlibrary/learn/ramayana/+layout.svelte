<script lang="ts">

	import SelectorRamayana from '$lib/reader/SelectorRamayana.svelte'

</script>

<div class="type">
	<div class="plain-one x1 pads">
		<h4 style="font-family: 'Old Standard TT', serif; font-weight: 700; letter-spacing: -2px">
			Rāmāyaṇa
		</h4>
	</div>
	<div class="plain-one x2 pads">
		<p>
			Select in sequence: Kāṇḍa &#62; Sarga &#62; Verse &#62; Pāda
		</p>
		<div class="box">
			<SelectorRamayana></SelectorRamayana>
		</div>
	</div>
	<div class="x3">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.x1
	h4
		border-bottom: 1px solid #ececec
		padding-bottom: 8px

.x2
	p
		padding-top: 8px

.type
	width: calc(100% - 12vw)
	margin-left: 6vw
	border: 1px solid #d7d7d7
	padding-top: 6vw
	border-radius: 4px
	margin-bottom: 64px


</style>