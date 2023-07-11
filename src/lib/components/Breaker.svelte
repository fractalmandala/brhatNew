<script lang="ts">
	export let text = '';

	function breakIntoLines() {
		return text.split('.');
	}
</script>

<div>
	{#each breakIntoLines() as line (line)}
		<p>{line}</p>
	{/each}
</div>

<style lang="sass">

p
	color: var(--themer)
	margin-bottom: 16px

</style>
