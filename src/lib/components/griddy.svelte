<div class="griddy">
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>
 <div class="griddycol"></div>       
</div>

<style lang="sass">

.griddy
 display: grid
 grid-auto-flow: row
 grid-template-rows: auto
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
 grid-template-areas: ". . . . . . . ."
 column-gap: 32px
 padding: 0 32px
 height: 100vh
 width: 100vw
 position: fixed
 top: 0
 left: 0
 pointer-events: none
 z-index: 10000
 .griddycol
  border: 1px solid #d7d7d7
 @media screen and (max-width: 1023px) and (min-width: 769px)
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr
  grid-template-areas: ". . . . . ." 
  column-gap: 24px
  padding: 0 24px
 @media screen and (max-width: 768px)
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr
  grid-template-areas: ". . . . . ."
  column-gap: 16px 
  padding: 0 16px

</style>