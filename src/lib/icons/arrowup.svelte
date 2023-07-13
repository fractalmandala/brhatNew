<script lang="ts">
	export let dimension = 20;
	export let color = 'var(--darkseven)';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={dimension}
	height={dimension}
	viewBox="0 0 24 24"
	fill="none"
	stroke={color}
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-arrow-up"
	><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg
>

<style lang="sass">

svg
	&:hover
		stroke: #fe4a49

</style>
