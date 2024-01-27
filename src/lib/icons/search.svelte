<script lang="ts">
	export let dimension = 27;
	export let color = 'var(--opposite)';

  export let onHover:boolean = false
</script>

<svg xmlns="http://www.w3.org/2000/svg" height={dimension} viewBox="0 -960 960 960" width={dimension} class:hovering={onHover}><path d="M375.035-305q-112.747 0-192.391-79.703Q103-464.406 103-577.203T182.703-769.5q79.703-79.5 192.5-79.5T567.5-769.356Q647-689.712 647-576.965q0 43.381-10 78.173T609-435l204 205q19 20 19 44.478T812-141q-19.8 19-44.9 19-25.1 0-45.1-19L520.472-343Q491-326 454.208-315.5 417.416-305 375.035-305Zm-.447-128q61.588 0 103-41T519-576.588q0-61.588-41.412-103t-103-41.412Q313-721 272-679.588q-41 41.412-41 103T272-474q41 41 102.588 41Z" fill={color}/></svg>

<style lang="sass">

svg.hovering
	path
		fill: var(--opposite)

svg
	&:hover
		stroke: #fe4a49
		fill: #fe4a49


</style>
