<script lang="ts">
	export let title: string;
	export let metaDescription: string;
	export let metaUrl: string;
	export let metaImage: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:url" content="https://www.brhat.in{metaUrl}" />
	<meta property="og:image" content={metaImage} />
	<meta property="og:image:alt" content="{title} hero image" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />
	<meta property="og:locale" content="en_IN" />
	<link rel="canonical" href="https://www.brhat.in{metaUrl}" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6NPMDTQVDE"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-6NPMDTQVDE');
	</script>
</svelte:head>
