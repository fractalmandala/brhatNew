<script lang="ts">

import { onMount } from 'svelte'; 
import Lenis from '@studio-freight/lenis' 

onMount(async() => { 
 const lenis = new Lenis({ 
  duration: 1.2,
  direction: 'vertical',
  gestureDirection: 'vertical',
  lerp: 0.6,
  smooth: true,
  mouseMultiplier: 0.7,
  smoothTouch: false,
  touchMultiplier: 1,
  infinite: false,
 })
 function raf(time: any) { 
  lenis.raf(time) 
  requestAnimationFrame(raf) 
 } 
 requestAnimationFrame(raf) })

</script>

<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		<div class="swiper-slide">Slide 1</div>
		<div class="swiper-slide">Slide 2</div>
		<div class="swiper-slide">Slide 3</div>
		...
	</div>
	<!-- If we need pagination -->
	<div class="swiper-pagination" />

	<!-- If we need navigation buttons -->
	<div class="swiper-button-prev" />
	<div class="swiper-button-next" />

	<!-- If we need scrollbar -->
	<div class="swiper-scrollbar" />
</div>

<style lang="sass">

.swiper
 width: 100vw
 height: 100vh

</style>
