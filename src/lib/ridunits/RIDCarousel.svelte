<script lang="ts">

	export let items:any[] = []

	let currentIndex = 0

  const showNext = () => {
    if (currentIndex < items.length - 3) currentIndex++;
  };

  const showPrev = () => {
    if (currentIndex > 0) currentIndex--;
  };

</script>

<div class="rta-carousel">
  {#each items as item, i}
    <div class={`carousel-item ${currentIndex <= i && i < currentIndex + 3 ? 'visible' : ''}`}>
      {item}
    </div>
  {/each}
</div>
<button on:click={showPrev}>Previous</button>
<button on:click={showNext}>Next</button>

<style lang="sass">

.rta-carousel
	display: grid
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
	grid-auto-rows: 1fr
	grid-gap: 1rem
	overflow: hidden
	width: 100%

.carousel-item
	display: none

.carousel-item:nth-child(n + 1):nth-child(-n + 3)
	display: block

.carousel-item:nth-child(n + 4):nth-child(-n + 6), .carousel-item:nth-child(n + 7):nth-child(-n + 9), .carousel-item:nth-child(n + 10):nth-child(-n + 12), .carousel-item:nth-child(n + 13):nth-child(-n + 15), .carousel-item:nth-child(n + 16):nth-child(-n + 18), .carousel-item:nth-child(n + 19):nth-child(-n + 21)
	display: none

@media screen and (min-width: 1024px)
	.carousel-item
		display: block

</style>