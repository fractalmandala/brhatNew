<script lang="ts">

export let title = ''
export let content:string = ''
export let url = ''
export let type = 'website'
export let description = ''
export let imagelink = ''

</script>


<svelte:head>
<title>{title}</title>
<meta name="description" content={content}>
<link rel="canonical" href={url}>
<meta property="og:title" content={title}>
<meta property="og:description" content={content}>
<meta property="og:url" content={url}>
<meta property="og:type" content={type}>
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:image:alt" content={content}>
<meta property="og:image" content={imagelink}>
</svelte:head>