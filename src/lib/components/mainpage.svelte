<script lang="ts">

 import { onMount } from 'svelte'
 import { newPages, createCurateConsult, svEpisodes, bodhaEpisodes } from '$lib/utils/supapulls'

 let pages:any
 let threeactions:any
 let sveps: any
 let bodheps: any

 onMount(async() => {
  pages = await newPages();
  threeactions = await createCurateConsult();
  sveps = await svEpisodes();
  bodheps = await bodhaEpisodes()
 })

</script>

<section class="mainpagebox pagila">
 <div class="sliderbox" id="aboutbrhat">
  <div class="sliver carries" style="background-image: url('/images/newpages/brhat.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>B<span class="red">ṛ</span>hat is a Culture Engine</h3>
   <p class="small bord-top p-top-8">culture | policy | leadership</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/brhat.webp')" href="/about">
   <img src="/images/newpages/brhat.webp" alt="about brhat"/>
  </a>
  <div class="rest rta-column rowgap300 ybot">
   <p class="mid">To power creatives, research and design rooted in the Indian civilizational consciousness, we convert individual, institutional and collective intent into these actions:</p>
   <!--
       {#if threeactions && threeactions.length > 0}
    <div class="rta-column rowgap200">
     {#each threeactions as item}
      <div class="rta-column bord-bot p-bot-8">
       <h6>{item.name}</h6>
       <pre class="small soft">{item.content}</pre>
      </div>
     {/each}
    </div>
   {/if}
   -->
   <a href="/about">
    <button class="buttonmain">About Us</button>
   </a>
  </div>
 </div>
 <div class="sliderbox" id="nitividhana">
  <div class="sliver carries" style="background-image: url('/images/newpages/nitividhana.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Nītividhāna</h3>
   <p class="small bord-top p-top-8">civilizational public policy</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/nitividhana.webp')" href="/nitividhana">
   <img src="/images/newpages/nitividhana.webp" alt="nitividhana"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">This online policy learning program offered by Chinmaya International Foundation and Brhat is an intensive immersive program in today's burning issues.</p>
   <a href="/nitividhana">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div> 
 <div class="sliderbox" id="samikshana">
  <div class="sliver carries" style="background-image: url('/images/newpages/samikshana.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Samīkṣaṇā</h3>
   <p class="small bord-top p-top-8">why are we the way we are</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/samikshana.webp')" href="/samikshana">
   <img src="/images/newpages/samikshana.webp" alt="samikshana"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <!--
       <h5 style="color: var(--opposite)">“What is the purpose in knowing everything without knowing your own Self?” - Pravrājika
				Divyanandaprāṇa</h5>
   <p class="mid">Time and again, scientists from the Orient as well as the Occident have believed that human
				nature is kaleidoscopic. The study of Human Evolution and Counselling is witnessing an
				exciting phase of growth; moving beyond the Euro-American theories and thus further
				exploring culturally rooted perspectives.</p>
   -->
   <p class="mid">A multidisciplinary and innovative study integrating the perspectives of the Orient (Vedic) and the Occident (Modern).</p>
   <a href="/samikshana">
    <button class="buttonmain">Learn More</button>
   </a>
  </div>
 </div>
 <div class="sliderbox" id="bodha">
  <div class="sliver carries" style="background-image: url('/images/newpages/bodha.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Bodha</h3>
   <p class="small bord-top p-top-8">conversations on civilization and culture</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/bodha.webp')" href="/bodha">
   <img src="/images/newpages/bodha.webp" alt="bodha"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Essential conversations on culture and civilization. The lenses of svayaṃbodha and śatrubodha explored in video format.</p>
   <a href="/bodha">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>  
 <div class="sliderbox" id="svarnanjali">
  <div class="sliver carries" style="background-image: url('/images/newpages/svarnanjali.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Svarṇāñjali</h3>
   <p class="small bord-top p-top-8">hindu cultural renaissance</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/svarnanjali.webp')" href="/svarnanjali">
   <img src="/images/newpages/svarnanjali.webp" alt="svarnanjali"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Video series to discuss literature, arts, drama, architecture, sculpture and cinema from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.</p>
   <a href="/svarnanjali">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>    
 <div class="sliderbox" id="anveshi">
  <div class="sliver carries" style="background-image: url('/images/newpages/anveshi.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Bṛhat Anveṣī</h3>
   <p class="small bord-top p-top-8">culture travel and discovery</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/anveshi.webp')" href="/anveshi">
   <img src="/images/newpages/anveshi.webp" alt="anveshi"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">A culture experience and discovery travel program that curates guided temple tours to hitherto rarely explored sites across India.</p>
   <a href="/anveshi">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>  
 <div class="sliderbox" id="drashta">
  <div class="sliver carries" style="background-image: url('/images/newpages/drashta.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Bṛhat Draṣṭā</h3>
   <p class="small bord-top p-top-8">online courses on bhārata, itihāsa and dharma</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/drashta.webp')" href="/drashta">
   <img src="/images/newpages/drashta.webp" alt="drashta"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Shared online learning program and community. Courses on firekeepers of civilization and Indian Knowledge Systems.</p>
   <a href="/drashta">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div> 
 <div class="sliderbox" id="mrdanga">
  <div class="sliver carries" style="background-image: url('/images/newpages/mrdanga.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Bṛhad Mṛdaṅga</h3>
   <p class="small bord-top p-top-8">visual and creative cultural content</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/mrdanga.webp')" href="/mrdanga">
   <img src="/images/newpages/mrdanga.webp" alt="mrdanga"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">The fundamental human aesthetic experience, explored in visual medium. Content that cover kalās, rasas, utsavas and more.</p>
   <a href="/mrdanga">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>   
 <div class="sliderbox" id="openlibrary">
  <div class="sliver carries" style="background-image: url('/images/newpages/openlibrary.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Bṛhat Open Library</h3>
   <p class="small bord-top p-top-8">online library for indian knowledge systems</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/openlibrary.webp')" href="/openlibrary">
   <img src="/images/newpages/openlibrary.webp" alt="openlibrary"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Online repository of Books, Papers, Texts and Scriptures. Gathering point for digitized scripture, civilizational literature and more.</p>
   <a href="/openlibrary">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>
 <div class="sliderbox" id="dhiti">
  <div class="sliver carries" style="background-image: url('/images/newpages/dhiti.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Dhīti</h3>
   <p class="small bord-top p-top-8">essays on culture, policy and more</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/dhiti.webp')" href="/dhiti">
   <img src="/images/newpages/dhiti.webp" alt="dhiti"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Our blog, featuring long-reads, research essays, cinema reviews, historical work, book reviews and much more.</p>
   <a href="/dhiti">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>  
 <div class="sliderbox" id="aryavarta">
  <div class="sliver carries" style="background-image: url('/images/newpages/aryavarta.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Scrolls of Āryavarta</h3>
   <p class="small bord-top p-top-8">a bhārata that once was or could have been</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/aryavarta.webp')" href="/aryavarta">
   <img src="/images/newpages/aryavarta.webp" alt="aryavarta"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Imaginations of the Bhārata that once was and could have been. Visual storytelling combining AI-art with narrative plot and exploration. </p>
   <a href="/aryavarta">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div> 
 <div class="sliderbox" id="mandala">
  <div class="sliver carries" style="background-image: url('/images/newpages/mandala.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Fractal Maṇḍala</h3>
   <p class="small bord-top p-top-8">investigations into indian civilizational consciousness</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/mandala.webp')" href="/mandala">
   <img src="/images/newpages/mandala.webp" alt="mandala"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">Civilization with multi-level coherence. Research, exploration, and furtherance of Indian civilizational consciousness.</p>
   <a href="/mandala">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div> 
 <div class="sliderbox" id="rta">
  <div class="sliver carries" style="background-image: url('/images/newpages/rta.webp')"></div>
  <div class="title rta-column rowgap100">
   <h3>Ṛta in Design</h3>
   <p class="small bord-top p-top-8">a new system for design, rooted in dharma</p>
  </div>
  <a class="image carries" style="background-image: url('/images/newpages/rta.webp')" href="/rta">
   <img src="/images/newpages/rta.webp" alt="rta"/>
  </a>
  <div class="rest rta-column rowgap200 ybot">
   <p class="mid">A new framework for design thinking, centred on the mind of the designer. Inspired by universal principles of Dharma.</p>
   <a href="/rta">
    <button class="buttonmain">Visit</button>
   </a>
  </div>
 </div>            
</section>

<style lang="sass">

.red
 color: #fe4a49  

.sliderbox
 .image
  img
   filter: saturate(0.1)
   transition: all 0.2s
 &:hover
  .image
   img
    filter: saturate(1)  
 @media screen and (min-width: 769px)
  position: sticky
  top: 0
  left: 0
  background: var(--background)   

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