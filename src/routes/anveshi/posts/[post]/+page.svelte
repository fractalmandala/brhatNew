<script lang="ts">

	export let data

</script>

<div class="type">
	<h4>{data.title}</h4>
	<div class="pads">
		<svelte:component this={data.content}/>
	</div>
</div>