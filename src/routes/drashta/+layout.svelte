<script lang="ts">
	import Header from '$lib/components/SubHeader.svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import autoAnimate from '@formkit/auto-animate';
	import { fly } from 'svelte/transition';
	let dropdown = false;
	function toggleDropdown() {
		dropdown = !dropdown;
	}

	function offDropdown() {
		if (dropdown === true) {
			dropdown = false;
		}
	}

	function onDropdown() {
		if (dropdown === false) {
			dropdown = true;
		}
	}
</script>

<Header>
	<div slot="local" class="boxmidrow">
		<a href="/drashta">Draṣṭā Home</a>
		<a href="/drashta/schools">Schools of Thought</a>
		<div class="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}>
			<div
				class="rta-row colgap100 dropper-visible"
				class:expanded={dropdown}
				on:mouseenter={onDropdown}
			>
				Courses
				<div class="dropper-chevron" class:rotated={dropdown}>
					<svg
						width="15"
						height="9"
						viewBox="0 0 15 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.6284 0.016602L0.983398 1.6616L7.9834 8.6616L14.9834 1.6616L13.3384 0.0166016L7.9834 5.35993L2.6284 0.016602Z"
							fill="#FE4A49"
						/>
					</svg>
				</div>
			</div>
			{#if dropdown}
				<div
					class="rta-column dropper-invisible invisibletype2"
					on:mouseleave={offDropdown}
					use:autoAnimate
				>
					<a
						id="link11"
						href="/drashta/course/shriramswarup"
						in:fly={{ duration: 100, delay: 50, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Introduction to Shri Ram Swarup</a
					>
					<a
						id="link22"
						href="/drashta/course/sitaramgoel"
						in:fly={{ duration: 100, delay: 100, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Introduction to Sita Ram Goel</a
					>
					<a
						id="link33"
						href="/drashta/course/hinduiconography"
						in:fly={{ duration: 100, delay: 150, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Hindu Iconography</a
					>
					<a
						id="link44"
						href="/drashta/course/valmikiramayana"
						in:fly={{ duration: 100, delay: 200, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Vālmīki Rāmāyaṇa</a
					>
					<a
						id="link55"
						href="/drashta/course/yogasutra"
						in:fly={{ duration: 100, delay: 200, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Patañjali's Yoga Sūtras</a
					>
					<a
						id="link66"
						href="/drashta/course/comparativecivilisations"
						in:fly={{ duration: 100, delay: 200, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Comparative Civilizations</a
					>
				</div>
			{/if}
		</div>
	</div>
</Header>
<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>
