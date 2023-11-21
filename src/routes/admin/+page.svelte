<script lang="ts">
 import { onMount } from 'svelte';
 import { page } from '$app/stores';
 import type { ActionData } from './$types';
 import Head from '$lib/components/HeadComponent.svelte';
 import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
 import { adminDocs } from '$lib/utils/localpulls';
 import type { PageData } from './$types';

 export let data: PageData;
 export let form: ActionData;
 $: supabase = data.supabase;
 let toggle = false;
 let expansion = false;
 let loading = false;
 let docs: any;

 $metaTitle = 'Bṛhat Admin';
 $metaDescription = 'Internal Admin Links';
 $metaUrl = 'https://www.brhat.in/admin';
 $metaImage =
  'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
 $metaType = 'webpage';

 onMount(async () => {
  docs = await adminDocs();
 });
</script>

<Head
 title={$metaTitle}
 metaDescription={$metaDescription}
 metaUrl={$metaUrl}
 metaImage={$metaImage}
/>

<div class="p-top-128 minH stout rta-column pagila">
 <div class="instout rta-column rowgap200">
  <h3>Admin Area</h3>
  <div class="rta-column rowgap200" id="cutform">
   {#if !data.in}
    <form class="thisforms rta-column rowgap100" method="post" action="?/login">
     <div class="rta-column rowgap100 null xleft">
      <div class="rta-row colgap100 rowgap100">
       <input
       id="email"
       name="email"
       value={form?.values?.email ?? ''}
       class="input"
       type="email"
       placeholder="Email"
       required
      />
      <input
       id="password"
       name="password"
       class="input"
       type="password"
       placeholder="Password"
       required
      />
      </div>
      <button disabled={loading} class="buttonmain">Sign in</button>
     </div>
    </form>
   {/if}
   {#if data.ems !== 'design@brhat.in' && data.ems !== 'authorized@brhat.in' && data.ems !== 'admin@brhat.in'}
   <p class="mid soft">Sorry, this area is for internal admin. Please return to <a href="/"><span class="red">Home.</span></a></p>
  {/if}
  </div>
  {#if data.ems === 'design@brhat.in' || data.ems === 'authorized@brhat.in' || data.ems === 'admin@brhat.in'}
   <div class="rta-column rowgap200">
    {#if docs && docs.length > 0}
     {#each docs as item}
      <h6 class="tt-c title bord-bot p-bot-16"><a href={item.path}>{item.meta.title}</a></h6>
     {/each}
    {/if}
   </div>
  {/if}
  <h6 class="tt-c title bord-bot p-bot-16"><a href="/admin/bot">Bot</a></h6>
 </div>
</div>

<style lang="sass">

.red
 color: #fe4a49 

h6
 color: var(--opposite)
 a
  &:hover
   color: #fe4a49

input
 border: 1px solid var(--contraster2)
 background: white
 padding: 4px 8px
 border-radius: 4px

</style>
