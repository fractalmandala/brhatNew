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
		<h6>Vālmīki Rāmāyaṇa</h6>
		<p>
			<a href="/openlibrary/ramayana/1">Kāṇḍa 1</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/2">Kāṇḍa 2</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/3">Kāṇḍa 3</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/4">Kāṇḍa 4</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/5">Kāṇḍa 5</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/6">Kāṇḍa 6</a>
		</p>
		<p>
			<a href="/openlibrary/ramayana/7">Kāṇḍa 7</a>
		</p>
	</div>
</Libshell>

<style lang="sass">

p
	a
		&:hover
			color: #fe4a49

</style>
