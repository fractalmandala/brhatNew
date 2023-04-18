<script lang="ts">

	let shift:number

</script>


<svelte:window bind:scrollY={shift}/>
<div class="back" style="transform: translateY({shift/2}px)">
	<slot></slot>
</div>

<style lang="sass">

.back
	height: 100%
	width: 100%
	@media screen and (min-width: 900px)
		background-image: var(--parallax)
	@media screen and (max-width: 899px)
		background-image: var(--parallaxresp)
	

</style>