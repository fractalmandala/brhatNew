<script lang="ts">
    import { onMount } from 'svelte'
    import { bodhaVids } from '$lib/utils/supapulls'
    import Header from '$lib/components/NewHeader.svelte';
    import Shell from '$lib/components/PageShell.svelte';
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import Youtuber from '$lib/components/Youtuber.svelte';
    import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
    import '@splidejs/splide/css/core';

    $metaTitle = 'Bṛhat';
	  $metaDescription = 'the Culture Engine';
	  $metaUrl = 'https://www.brhat.in';
	  $metaImage = '/images/cover-brhat.webp'; 

    let vids:any

    onMount(async() => {
      vids = await bodhaVids();
    })
</script>

<Header isSwitch={false} />
<div class="gifhold">
  <img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/22bodha/bodhagifnew.gif" alt="bodhagif"/>
</div>
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
    <section class="rta-column p-top-128 bord-top">
      <h5 class="title ta-c">Civilizational and Cultural Discourse</h5>
    </section>
</Shell>    

<style lang="sass">

.gifhold
  height: 100vh
  width: 100vw
  display: flex
  flex-direction: column
  justify-content: center
  img 
    object-fit: contain
    height: 80%

</style>