<script lang="ts">

	export let rotated = false

</script>

<div class="rta-iconsvg rta-row ycenter" class:around={rotated}>
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.9992 21.2667L7.19922 12.4667L9.43255 10.2334L15.9992 16.8334L22.5659 10.2667L24.7992 12.5001L15.9992 21.2667Z" fill="#474747"/>
	</svg>
</div>

<style lang="sass">

.rta-iconsvg
	transform-origin: center center
	transition: 0.15s

.rta-iconsvg.around
	transform: rotate(180deg)
	svg path
		fill: var(--opposite)

</style>