<script lang="ts">
	import Libshell from '$lib/reader/Libshell.svelte';
	import { thisLib } from '$lib/stores/metastores';
	import { page } from '$app/stores';

	let inthis: string;
	let inthat = 'yes';

	$: inthis = $page.url.pathname.slice(13, 18);
</script>

<Libshell>
	<div slot="pagenamer" class="inthis">{inthis}</div>
	<slot />
	<div class="rta-column" slot="specificer">
		{#if inthis === 'ramay'}
			<h6>Vālmīki Rāmāyaṇa</h6>
			<p>Kāṇḍa 1</p>
		{/if}
		{#if inthis === 'rigve'}
			<h6>Ṛgveda Saṃhitā</h6>
		{/if}
		{#if inthis === 'dhatu'}
			<h6>Dhātupāṭha</h6>
		{/if}
	</div>
</Libshell>

<style lang="sass">

.inthis
	color: var(--opposite)
	size: 100px

</style>
