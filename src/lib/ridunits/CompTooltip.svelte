<script lang="ts">

	import { browser } from '$app/environment'
	import { themeMode } from '$lib/stores/globalstores'
	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	let fake = false
	export let arrowPosition:string
	let showTooltip = false

	function toggleTooltip(){
		showTooltip = !showTooltip
	}

	function toggleVisibility() {
	  if (browser) {
	    themeMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('themeMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<div class="rta-column comp-tooltip" class:light={$themeMode} class:dark={!$themeMode} use:autoAnimate={{ duration: 50}} on:mouseenter={toggleTooltip} on:mouseleave={toggleTooltip}>
	{#if showTooltip}
	<div class="rta-in-col tooltip-item">
		<slot name="tooltip"></slot>
		<div class="arrowpart {arrowPosition}">
			<svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24.1953 0.513672L12.1953 12.5137L0.195311 0.513674" fill="white"/>
			</svg>
		</div>
	</div>
	{/if}
	<slot name="container-area"></slot>
</div>


<style lang="sass">

.comp-tooltip
	position: relative
	overflow: visible
	.tooltip-item
		position: absolute
		top: -48px
		left: 0
	@media screen and (min-width: 1024px)
		.tooltip-item
			padding: 6px

.dark
	.tooltip-item
		background: linear-gradient(90deg, #FFFFFF 0.81%, #F0E9E9 89.55%)
		box-shadow: 5px 7px 16px #020202
		svg path
			fill: #FFFFFF

.light
	.tooltip-item
		background: linear-gradient(90deg, #171717 0.81%, #272727 89.55%)
		box-shadow: 5px 7px 6px #ececec
		svg path
			fill: #171717
	
.arrowpart
	position: absolute

</style>