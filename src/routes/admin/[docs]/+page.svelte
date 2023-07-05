<script lang="ts">
	export let data;
</script>

<div class="outer-box limit">
	<h4>{data.title}</h4>
	<svelte:component this={data.content} />
</div>

<style lang="sass">

.limit
	padding-top: 128px

</style>
