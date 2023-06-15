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
		<a href="/mandala/aphorisms">Caturasūtra</a>
		<a href="/mandala/ancestors">Ancestors</a>
		<a href="/mandala/synrec">Synaptic Reconnection</a>
		<div class="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}>
			<div
				class="rta-row colgap100 dropper-visible"
				class:expanded={dropdown}
				on:mouseenter={onDropdown}
			>
				Core Essays
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
				<div class="rta-column dropper-invisible" on:mouseleave={offDropdown} use:autoAnimate>
					<a
						id="link11"
						href="/mandala/macrohistoriccase"
						in:fly={{ duration: 100, delay: 50, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Macrohistoric Case</a
					>
					<a
						id="link22"
						href="/mandala/historyvsitihasa"
						in:fly={{ duration: 100, delay: 100, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>History vs. Itihāsa</a
					>
					<a
						id="link33"
						href="/mandala/rathaasbija"
						in:fly={{ duration: 100, delay: 150, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Ratha as a Bīja</a
					>
					<a
						id="link44"
						href="/mandala/ramasjourney"
						in:fly={{ duration: 100, delay: 200, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}>Avatāra in You</a
					>
					<a
						id="link55"
						href="/mandala/indiancivcon"
						in:fly={{ duration: 100, delay: 200, x: 0, y: 32 }}
						out:fly={{ duration: 100, delay: 0, x: 0, y: 32 }}
						>Indian Civilizational Consciousness</a
					>
				</div>
			{/if}
		</div>
	</div>
</Header>

<div class="type p-bot-64" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717



</style>
