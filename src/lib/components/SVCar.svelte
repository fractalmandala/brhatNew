<script lang="ts">
	import ButtonEmerge from '$lib/anims/ButtonEmerge.svelte';
	import { reveal } from 'svelte-reveal';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css/core';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import SVTests from '$lib/components/SVTestimonials.svelte';

	export let tituling = 'What People are Saying';
</script>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js"></script>
</svelte:head>

<div class="rta-column ycenter rowgap200 outer-box minH" data-lenis-scroll-snap-align="start">
	<div
		class="rta-row row-col ycenter between rowgap100 colgap400 glass-top p-top-32 bord-bot p-bot-32"
	>
		<div class="rta-row row-col ycenter colgap300">
			<h3 class="typett">SVARṆĀÑJALI</h3>
			<div class="holds-button-emerge" use:reveal>
				<ButtonEmerge><a href="/svarnanjali">Learn More</a></ButtonEmerge>
			</div>
		</div>
		<div class="colgap100 rta-row selfend xend ycenter">
			<div class="arrowsanimation">
				<svg
					width="94"
					height="24"
					viewBox="0 0 94 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_15_2638)">
						<path
							id="arrowl"
							d="M94.0712 4.6096L90.4616 1L75.1016 16.36L90.4616 31.72L94.0712 28.1104L82.3464 16.36L94.0712 4.6096Z"
							fill="#FE4A49"
						/>
						<path
							id="arrowc"
							d="M64.2839 5.29L61.1606 2L47.8701 16L61.1606 30L64.2839 26.71L54.1388 16L64.2839 5.29Z"
							fill="#FE4A49"
						/>
						<path
							id="arrowr"
							d="M35.9675 8.4675L33.5 6L23 16.5L33.5 27L35.9675 24.5325L27.9525 16.5L35.9675 8.4675Z"
							fill="#FE4A49"
						/>
					</g>
					<defs>
						<clipPath id="clip0_15_2638">
							<rect width="94" height="32" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<small class="typett2">Hindi Cultural Renaissance</small>
		</div>
	</div>
	<div class="rta-column rowgap300 p-top-32">
		<Splide
			hasTrack={false}
			options={{
				drag: true,
				keyboard: 'global',
				waitForTransition: true,
				type: 'loop',
				gap: '20px',
				wheelMinThreshold: 1.1,
				speed: 900,
				direction: 'ltr',
				perPage: 3,
				pagination: false,
				breakpoints: {
					1023: {
						perPage: 1
					}
				}
			}}
		>
			<SplideTrack>
				<SplideSlide>
					<div class="rta-video">
						<Youtuber youTubeId={'jZ6YddYWH9U'} />
						<small>
							<a href="https://youtu.be/jZ6YddYWH9U" target="_blank" rel="noreferrer">
								E1 - Saundaryabodha - Bhasha, Kalaa aur Nagarika (Intro) - सौंदर्यबोध - भाषा, कला और
								नागरिक
							</a>
						</small>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div class="rta-video">
						<Youtuber youTubeId={'gkAaT9XBURE'} />
						<small>
							<a href="https://youtu.be/gkAaT9XBURE" target="_blank" rel="noreferrer">
								E2 - Ram Ki Shakti Puja - राम की शक्ति पूजा
							</a>
						</small>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div class="rta-video">
						<Youtuber youTubeId={'weF2xsunKOs'} />
						<small>
							<a href="https://youtu.be/weF2xsunKOs" target="_blank" rel="noreferrer">
								E3 - Ashadh Ka Ek Din
							</a>
						</small>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div class="faker" style="background-image: url('/images/svthumbs/4.jpeg')">
						<div class="inscreen">Coming Soon</div>
					</div>
				</SplideSlide>
			</SplideTrack>
			<div class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200">
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
	</div>
	<div class="rta-column xcenter m-top-16">
		<div class="rta-column rowgap100 xcenter bord-top p-top-32 bord-bot p-bot-32 subbuttonrow">
			<small>Subscribe:</small>
			<div
				class="g-ytsubscribe"
				data-channelid="UCpmTZwM36xdAuHbBaaE2asg"
				data-layout="default"
				data-count="hidden"
			/>
		</div>
	</div>
	<SVTests {tituling} />
	<div class="rta-column xcenter">
		<a
			href="https://www.youtube.com/watch?v=OeCFCHwSpd0&list=PLMUDDn9MulpwRIZLxPRXFrPBDQJzMZEmm&pp=gAQBiAQB"
			target="_blank"
			rel="noreferrer"
		>
			<button class="newbutton red big">See on Youtube</button>
		</a>
	</div>
</div>

<style lang="sass">

.subbuttonrow
	@media screen and (min-width: 1024px)
		width: 50%

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


.holds-button-emerge
	@media screen and (max-width: 1023px)
		display: none

.faker
	background-position: center center
	background-size: cover !important
	background-repeat: no-repeat
	border-radius: 16px
	.inscreen
		width: 100%
		height: 100%
		background: rgba(0,0,0,0.75)
		border-radius: 16px
		display: flex
		align-items: center
		justify-content: center
		color: white
	@media screen and (min-width: 1024px)
		width: 400px
		height: 204px
		background: #878787
	@media screen and (max-width: 1023px)
		width: 100%
		height: 204px

</style>
