<script lang="ts">

 import { onMount } from 'svelte'
 import { newPages } from '$lib/utils/supapulls'

 let pages:any

 onMount(async() => {
  pages = await newPages();
 })

</script>

{#if pages && pages.length > 0}
 {#each pages as item}
  <div class="sliderbox">
   <div class="sliver carries" style="background-image: url('{item.image}')">
   </div>
   <div class="title rta-column rowgap100">
    <h3>{item.name}</h3>
    <p class="small bord-top p-top-8">{item.short}</p>
   </div>
   <a class="image carries" style="background-image: url('{item.image}')" href={item.link}>
    <img src={item.image} alt={item.name}/>
   </a>
   <div class="rest rta-column rowgap200 ybot">
    <p>{item.about}</p>
    <a href={item.link}>
     <button class="buttonmain">Visit</button>
    </a>
   </div>
  </div>
 {/each}
{/if}

<style lang="sass">

.sliderbox
 .image
  img
   filter: saturate(0.1)
   transition: all 0.2s
 &:hover
  .image
   img
    filter: saturate(1)  

.carries
 background-size: cover
 background-repeat: no-repeat

.sliver.carries
 background-position: center left
 filter: saturate(0.1)

.image.carries
 background-position: center center

.buttonmain
 background: #fe4a49
 border: 1px solid #fe4a49
 color: white
 text-transform: uppercase
 font-size: 15px
 padding: 4px 16px
 border-radius: 4px
 transform-origin: center center
 transition: all 0.08s
 cursor: pointer
 &:hover
  transform: scale(0.9)
 &:active
  background: transparent
  color: #fe4a49 

.sliderbox
 height: 100vh
 width: 100vw
 display: grid
 grid-template-rows: auto
 grid-auto-flow: row
 .sliver
  grid-area: sliver
 .title
  grid-area: title
  z-index: 1
  h3
   color: var(--opposite)
   text-transform: uppercase
  p
   color: var(--peach) 
 .image
  grid-area: image
  img
   object-fit: cover
   width: 100%
   height: 100%
 .rest
  grid-area: rest  
  p
   color: var(--greyish)
 @media screen and (min-width: 1024px)
  grid-template-columns: 4.5% 23.5% 32% 40%
  grid-template-areas: "sliver title image rest"
  padding-top: 64px
  padding-bottom: 64px
  .title, .rest
   padding: 32px
  .title h3, .title p
   text-align: right
 @media screen and (max-width: 1023px) and (min-width: 769px)
  grid-template-columns: 6% 24% 30% 40%  
  grid-template-areas: "sliver title image rest"
  padding-top: 64px
  padding-bottom: 64px
  .title, .rest
   padding: 32px
  .title h3, .title p
   text-align: right   
 @media screen and (max-width: 768px)
  grid-template-columns: 36% 64%
  grid-template-areas: "image title" "image rest"
  height: 40vh
  align-content: start
  align-items: start
  padding-top: 16px
  padding-bottom: 16px
  overflow-y: hidden
  .sliver
   display: none
  .image
   img
    height: 300px
  .title, .rest
   padding: 0 16px  

</style>