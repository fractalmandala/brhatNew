<script lang="ts">
	import { onMount } from 'svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { testimonialsSvarn } from '$lib/utils/supapulls';
	import '@splidejs/splide/css/core';

	let tests: any;
	export let height = 200;
	export let tituling = 'What People are Saying';

	onMount(async () => {
		tests = await testimonialsSvarn();
	});
</script>

<div class="rta-column ycenter rowgap600" data-lenis-scroll-snap-align="start">
	<h4 class="ta-c-d p-top-32">{tituling}</h4>
	{#if tests && tests.length > 0}
		<Splide
			hasTrack={false}
			options={{
				drag: true,
				keyboard: 'global',
				waitForTransition: true,
				type: 'loop',
				gap: '32px',
				wheelMinThreshold: 1.1,
				speed: 900,
				direction: 'ltr',
				perPage: 3,
				pagination: false,
				height: height,
				breakpoints: {
					1023: {
						perPage: 1
					}
				}
			}}
		>
			<SplideTrack>
				{#each tests as item}
					<SplideSlide>
						<div class="rta-column">
							<p class="hindiadobe">{item.content}</p>
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div
				class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 bord-bot p-bot-16"
			>
				<button
					class="splide__arrow splide__arrow--prev"
					type="button"
					aria-label="Previous slide"
					aria-controls="splide01-track"
				>
					PREV
				</button>
				<button
					class="splide__arrow splide__arrow--next"
					type="button"
					aria-label="Next slide"
					aria-controls="splide01-track"
				>
					NEXT
				</button>
			</div>
		</Splide>
	{/if}
</div>

<style lang="sass">


.splide__arrows
	button
		font-size: 12px
		background: none
		border: 1px solid var(--onlyblack)
		border-radius: 6px
		padding-top: 4px
		padding-bottom: 4px
		cursor: pointer
		transform-origin: center center
		color: var(--onlyblack)
		transition: 0.09s
		box-shadow: 2px 2px 5px var(--shadowline)
		&:hover
			transform: scale(0.9)
			color: white
			background: #fe4a49

.rta-column
	p
		line-height: 1.2

</style>
