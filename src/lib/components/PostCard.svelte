<script lang="ts">

	import { onMount } from 'svelte'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

	let section: HTMLElement

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      section,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    )		
	})

</script>

<section bind:this={section}>
  <slot></slot>
</section>

