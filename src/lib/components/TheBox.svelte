<div class="thebox">
  <div class="toprow">
    <div class="hid"></div>
    <div class="gallery"></div>
  </div>
  <div class="left">
    <div class="detail"></div>
    <div class="portrait"></div>
  </div>
  <div class="listing"></div>
</div>

<style lang="sass">

.thebox
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "toprow toprow" "left listing" "left listing" 

.toprow 
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "hid gallery" 
	grid-area: toprow 

.hid 
	grid-area: hid 

.gallery 
	grid-area: gallery 

.left 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "detail" "portrait" 
	grid-area: left 

.detail 
	grid-area: detail 

.portrait 
	grid-area: portrait 

.listing 
	grid-area: listing 

</style>