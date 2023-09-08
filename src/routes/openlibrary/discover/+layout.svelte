<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';
	import BOLSidebar from '$lib/reader/BOLSidebar.svelte';
	import '$lib/styles/discover.sass';

	let y: number;
	let mouseY: number;
	let latestScrollY: number;
	let isInvisible = false;
	let expandSub = false;

	function toggleSub() {
		expandSub = !expandSub;
	}

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		} else {
			isInvisible = false;
		}
		latestScrollY = y;
	}

	onMount(() => {
		const handleMouse = (event: { clientY: number }) => {
			mouseY = event.clientY;
			if (mouseY <= 128) {
				isInvisible = false;
			}
		};
		window.addEventListener('mousemove', handleMouse);
		return () => {
			window.removeEventListener('mousemove', handleMouse);
		};
	});
</script>

<svelte:window bind:scrollY={y} />

<div
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
	class:light={!$themeMode}
	class:dark={$themeMode}
>
	<slot />
</div>
