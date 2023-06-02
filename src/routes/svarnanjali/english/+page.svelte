<script lang="ts">
	import { breakZero, breakOne, breakTwo, themeMode } from '$lib/stores/globalstores';
	import P01 from '$lib/svpanels/english/panel01.svelte';
	import P02 from '$lib/svpanels/english/panel02.svelte';
	import P03 from '$lib/svpanels/english/panel03.svelte';
	import P04 from '$lib/svpanels/english/panel04.svelte';
	import P05 from '$lib/svpanels/english/panel05.svelte';
	import P06 from '$lib/svpanels/english/panel06.svelte';
</script>

<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class:lightmode={$themeMode}
	class:darkmode={!$themeMode}
>
	<P01 />
	<P02 />
	<P03 />
	<P04 />
	<P05 />
</div>
