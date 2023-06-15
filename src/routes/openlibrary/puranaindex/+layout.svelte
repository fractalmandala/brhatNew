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
		<h6>Purāṇa Index</h6>
	</div>
</Libshell>
