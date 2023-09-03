<script lang="ts">
	import { breakZero, breakOne, breakTwo, themeMode } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import P01 from '$lib/svpanels/english/panel01.svelte';
	import P02 from '$lib/svpanels/english/panel02.svelte';
	import P03 from '$lib/svpanels/english/panel03.svelte';
	import P04 from '$lib/svpanels/english/panel04.svelte';
	import P05 from '$lib/svpanels/english/panel05.svelte';
	import P06 from '$lib/svpanels/english/panel06.svelte';

	$metaTitle = 'Svarṇāñjali';
	$metaDescription =
		'Svarṇāñjali is a weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.';
	$metaUrl = '/svarnanjali';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/krishnaradha.webp';
	$metaType = 'webpage';
</script>

<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class:lightmode={!$themeMode}
	class:darkmode={$themeMode}
>
	<P01 />
	<P02 />
	<P03 />
	<P04 />
	<P05 />
</div>
