<script lang="ts">
	export let data;
</script>

<div class="rta-column rowgap200 official">
	<a href="/openlibrary/dhatus">
		<button>Back</button>
	</a>
	<h3 class="hindiadobe">{data.dhatu} | {data.dhatuiast}</h3>
	<div class="rta-column">
		<h6 class="hindiadobe">{data.artha_hindi} | {data.arthaiast} | {data.artha_english}</h6>
	</div>
</div>

<style lang="sass">

h6
	font-weight: 400

</style>
