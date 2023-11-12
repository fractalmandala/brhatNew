<script lang="ts">
    import Header from '$lib/components/NewHeader.svelte';
    import Shell from '$lib/components/PageShell.svelte';
    import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

    $metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
	$metaImage = '/images/cover-brhat.webp'; 
</script>

<Header isSwitch={false} />
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
    <section class="rta-column p-top-128">
        Bodha
    </section>
</Shell>    