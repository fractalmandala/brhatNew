<script lang="ts">
	export let data;

	let prevID = data.id - 1;
	let nextID = data.id + 1;
</script>

<div class="rta-column rowgap300">
	<div class="conts rta-column rowgap200">
		<h5 style="color: var(--opposite)">{data.dhatuiast} | {data.dhatu}</h5>
		<p>{data.artha_hindi} | {data.artha_english}</p>
	</div>
	<div class="rta-row ycenter colgap200">
		<a href="/openlibrary/discover/dhatupatha/{prevID}"
			><button class="newbutton">Previous</button></a
		>
		<a href="/openlibrary/discover/dhatupatha/{nextID}"><button class="newbutton">Next</button></a>
	</div>
</div>
