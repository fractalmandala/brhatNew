<script lang="ts">

	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'

</script>


<title>{$metaTitle}</title>
<meta name="description" content={$metaDescription}>
<meta property="og:title" content={$metaTitle}>
<meta property="og:description" content={$metaDescription}>
<meta property="og:url" content="https://www.brhat.in{$metaUrl}">
<meta property="og:image" content={$metaImage}>
<meta property="og:image:alt" content='{$metaTitle} hero image'>
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="675">
<meta property="og:locale" content="en_IN">
<link rel="canonical" href="https://www.brhat.in{$metaUrl}">
<meta property="og:type" content={$metaType}>
<meta name="robots" content="index,follow">
<meta name="googlebot" content="index,follow">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@brhat_in">
<meta name="twitter:creator" content="@brhat_in">