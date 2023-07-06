<script lang="ts">
	export let data;
</script>

<div class="outer-box limit doc-bar">
	<h2 class="bord-bot p-bot-16 m-bot-16">{data.title}</h2>
	<svelte:component this={data.content} />
</div>

<style lang="sass">

.limit
	padding-top: 128px

</style>
