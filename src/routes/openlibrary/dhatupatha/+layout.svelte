<script lang="ts">

 import { onMount } from 'svelte'
 import { dbDhatus } from '$lib/utils/synaptic'
 import Search from '$lib/items/dhatusearch.svelte'

 let dhatus:any
 let limit = 15

 function increaseLimit(){
  limit += 15;
  (async() => {
   dhatus = await dbDhatus(limit)
  })();
 }

 function decreaseLimit(){
  if (limit >= 30) {
   limit -= 15;
   (async() => {
    dhatus = await dbDhatus(limit)
   })();
  }
 }

 onMount(async() => {
  dhatus = await dbDhatus(limit)
 })

</script>

<div class="documentationbox pagila">
 <div class="doc-side rowgap200 rta-column">
  <div class="searcharea">
   <Search/>
  </div>
  <h6>Browse Dhatus:</h6>
  {#if dhatus && dhatus.length > 0}
   <div class="lister rta-column rowgap100">
    {#each dhatus as item}
     <p class="small"><a href="/openlibrary/dhatupatha/{item.id}">{item.dhatu} | {item.dhatuiast}</a></p>
    {/each}
   </div>
  {/if}
  <div class="rta-row colgap100">
   <button class="nav" on:click={increaseLimit}>More</button>
   <button class="nav" on:click={decreaseLimit}>Less</button>
  </div> 
 </div>
 <div class="doc-main">
  <slot/>
 </div>
</div>

<style lang="sass">

button.nav
 background: var(--darkseven)
 color: var(--background)
 border: none
 cursor: pointer
 &:hover
  background: #fe4a49
  color: white 

.lister
 p
  &:hover
   a
    &:hover
     color: #fe4a49  

.documentationbox
 display: grid
 grid-auto-flow: row
 grid-template-rows: auto
 grid-template-columns: 256px 1fr
 grid-template-areas: "side main"
 width: 100vw
 min-height: 100vh
 padding: 104px 32px 64px 32px
 .doc-side
  grid-area: side
  height: calc(100vh - 136px)
  position: sticky
  top: 0
  left: 0
  overflow-y: scroll
 .doc-main
  padding-right: 256px 

</style>