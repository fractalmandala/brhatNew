<script lang="ts">
	export let dimension = 20;
	export let color = 'var(--themer)';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={dimension}
	height={dimension}
	viewBox="0 0 24 24"
	fill={color}
	stroke={color}
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
>

<style lang="sass">

svg
	&:hover
		stroke: #fe4a49
		fill: #fe4a49


</style>
