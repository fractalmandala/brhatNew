<script lang="ts">

	import { onMount, onDestroy } from 'svelte'
	let scrollPercent:any

	const Progress = () => {
		const maincol = document.querySelector('.maincol')
		const readingHeight = maincol.scrollHeight
		const scrollTop = window.scrollY
		const totalScroll = readingHeight - window.innerHeight
		const scrollPercentage = Math.min(scrollTop / totalScroll, 1)
		scrollPercent = Math.round(scrollPercentage * 100)
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

<div class="scroll-progress" style="width: {scrollPercent}%;"></div>

<style lang="sass">

.scroll-progress
	width: 100%
	background: #fe4a49
	height: 4px
	margin-bottom: 80px
	position: sticky
	top: 0
	left: 0
	z-index: 1000

</style>