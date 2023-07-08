<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';
	import BOLSidebar from '$lib/reader/BOLSidebar.svelte';

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
	class="rta-row"
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="row-side" class:hiddenHeader={isInvisible}>
		{#if $breakTwo}
			<button class="blank-button" on:click={toggleSub}>
				<Menu />
			</button>
		{/if}
		{#if !$breakTwo || expandSub}
			<BOLSidebar>
				<button class="blank-button" slot="closebutton" on:click={toggleSub}>
					<Close dimension={20} />
				</button>
			</BOLSidebar>
		{/if}
	</div>
	<div class="row-main rta-column">
		<slot />
	</div>
</div>

<style lang="sass">

.rta-row.lzero
	min-height: 100vh
	padding-top: 128px
	width: 100%
	padding-left: 32px
	padding-right: 32px
	padding-bottom: 80px
	.row-side
		width: 256px
	.row-main
		width: calc(100% - 256px)
		padding-left: 64px

.rta-row.lone
	min-height: 100vh
	padding-top: 128px
	width: 100%
	padding-left: 32px
	padding-right: 32px
	padding-bottom: 80px
	.row-side
		width: 256px
	.row-main
		width: calc(100% - 256px)
		padding-left: 64px

.rta-row.ltwo
	min-height: 100vh
	padding-top: 0
	width: 100%
	.row-side
		width: 100%
		border-bottom: 1px solid var(--contraster)
		border-top: 1px solid var(--contraster)
		padding-bottom: 8px
		padding-top: 8px
		height: 40px
		position: sticky
		top: 64px
		background: var(--background)
		transition: 0.5s cubic-bezier(0.635, 0.405, 0.535, 0.035)
		padding-right: 16px
		padding-left: 16px
		z-index: 300
	.row-side.hiddenHeader
		transform: translateY(-66px)
	.row-main
		padding-bottom: 64px
		padding-right: 16px
		padding-left: 16px
		padding-top: 88px


</style>
