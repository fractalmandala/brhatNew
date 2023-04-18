<script lang="ts">

	import { onMount, onDestroy } from 'svelte'
	let scrollPercent:any

	const Progress = () => {
		const maincol = document.querySelector('.heightmeasure');
		if (!maincol) return; // add null check
			const readingHeight = maincol.scrollHeight;
			const scrollTop = window.scrollY;
			const totalScroll = readingHeight - window.innerHeight;
			const scrollPercentage = Math.min(scrollTop / totalScroll, 1);
		scrollPercent = Math.round(scrollPercentage * 100);
	}

	onMount(async() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', Progress)
		}
	})
	onDestroy(() => {
		if (typeof window !== 'undefined') {
  		window.removeEventListener('scroll', Progress);
		}
	});

</script>

<div class="scroll-progress" style="width: {scrollPercent}%; background: var(--thispagebackground)"></div>

<style lang="sass">

.scroll-progress
	width: 100%
	height: 2px
	position: fixed
	top: 0
	left: 0
	z-index: 1000

</style>