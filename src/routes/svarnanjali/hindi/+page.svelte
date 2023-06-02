<script lang="ts">
	import { breakZero, breakOne, breakTwo, themeMode } from '$lib/stores/globalstores';
	import P01 from '$lib/svpanels/hindi/panel01.svelte';
	import P02 from '$lib/svpanels/hindi/panel02.svelte';
	import P03 from '$lib/svpanels/hindi/panel03.svelte';
	import P04 from '$lib/svpanels/hindi/panel04.svelte';
	import P05 from '$lib/svpanels/hindi/panel05.svelte';
	import P06 from '$lib/svpanels/hindi/panel06.svelte';
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
