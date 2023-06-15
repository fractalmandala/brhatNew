<script lang="ts">
	import Libshell from '$lib/reader/Libshell.svelte';
	import { thisLib } from '$lib/stores/metastores';
	import { page } from '$app/stores';

	let inthis: string;
	let inthat = 'yes';

	$: inthis = $page.url.pathname.slice(13, 18);
</script>

<Libshell>
	<slot />
	<div class="rta-column rowgap200" slot="specificer">
		<h6>Ṛgveda Saṃhitā</h6>
		<p>
			<a href="/openlibrary/rigveda/1">Maṇḍala 1</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/2">Maṇḍala 2</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/3">Maṇḍala 3</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/4">Maṇḍala 4</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/5">Maṇḍala 5</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/6">Maṇḍala 6</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/7">Maṇḍala 7</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/8">Maṇḍala 8</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/9">Maṇḍala 9</a>
		</p>
		<p>
			<a href="/openlibrary/rigveda/10">Maṇḍala 10</a>
		</p>
	</div>
</Libshell>

<style lang="sass">

p
	a
		&:hover
			color: #fe4a49

</style>
