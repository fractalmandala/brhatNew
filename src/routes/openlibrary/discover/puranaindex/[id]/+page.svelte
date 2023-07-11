<script lang="ts">
	import Breaker from '$lib/components/Breaker.svelte';
	import { secondSide } from '$lib/stores/globalstores';
	export let data;

	let prevID = data.id - 1;
	let nextID = data.id + 1;
</script>

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.iast} | {data.hindi}</h5>
		<Breaker text={data.about} />
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/puranaindex/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/puranaindex/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>

<style lang="sass">

.conts
	border: 1px solid var(--contraster)
	padding: 24px
	border-radius: 6px

</style>
