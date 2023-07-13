<script lang="ts">
	export let color = 'var(--svara)';
</script>

<svg width="44" height="27" viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path id="two" d="M24 13.5L41 24V3L24 13.5Z" fill={color} />
		<path id="one" d="M21.334 13.3335L43.334 26.3335V0.333496L21.334 13.3335Z" fill={color} />
	</g>
</svg>

<style lang="sass">

svg
	transform: scale(1)
	cursor: pointer
	&:hover
		path
			fill: var(--svara)
		#two
			animation: inminus 0.2s ease forwards

@keyframes inminus
	0%
		transform: translateX(0px)
	100%
		transform: translateX(-16px)


</style>
