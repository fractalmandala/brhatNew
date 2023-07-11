<script lang="ts">
	import Breaker from '$lib/components/Breaker.svelte';
	import { secondSide } from '$lib/stores/globalstores';
	export let data;

	let prevID = data.uid - 1;
	let nextID = data.uid + 1;
</script>

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.word} | {data.hindi}</h5>
		<p>{data.occurence}</p>
		<small class="tt-u">{data.reference}</small>
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/concordance/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/concordance/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>

<style lang="sass">

.conts
	border: 1px solid var(--contraster)
	padding: 24px
	border-radius: 6px

small
	color: var(--contraster2)

</style>
