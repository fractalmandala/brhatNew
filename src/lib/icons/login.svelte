<script lang="ts">
	export let dimension = 16;
	export let color = 'var(--opposite)';
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
	class="feather feather-log-in"
	><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line
		x1="15"
		y1="12"
		x2="3"
		y2="12"
	/></svg
>

<style lang="sass">

svg
	transform: rotate(180deg)

</style>
