<script lang="ts">

 export let data
 let next:number
 let prev:number

 $: next = data.id + 1
 $: prev = data.id - 1

</script>

<section class="library">

 <h5 class="title p-bot-8">{data.dhatu} | {data.dhatuiast}</h5>
 <p class="small bord-bot p-bot-16">{data.pada} | {data.settva} | {data.karma}</p>
 <div class="rta-column rowgap100 p-top-32 bord-bot p-bot-16">
  <p class="small">artha | meaning:</p>
  <p>{data.artha} | {data.arthaiast} | {data.artha_english} | {data.artha_hindi}</p>
 </div>
 <div class="rta-row colgap100 p-top-16">
  {#if data.id >= 1010002}
  <a href="/openlibrary/dhatupatha/{prev}"><button class="zip">Prev</button></a>
  {/if}
  {#if data.id <= 1100509}
  <a href="/openlibrary/dhatupatha/{next}"><button class="zip">Next</button></a>
  {/if}
 </div>
</section>

<style lang="sass">

h5.title
 text-transform: lowercase

button.zip
 cursor: pointer
 border: none
 background: var(--peach) 
 color: white
 transform-origin: center center
 transition: 0.1s
 &:hover
  transform: scale(0.9)
 &:active
  color: #fe4a49 

</style>