<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';

	let fake = false;
	let isSwitch = false;

	function fauxfake() {
		fake = !fake;
	}

	function offDropdown() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}
</script>

<Header {isSwitch} hasMenu={true}>
	<div slot="local" class="boxmidrow">
		{#if $menuMode}
			<div
				class="rta-column rowgap100 pagedropdown"
				in:slide={{ axis: 'y', easing: quintOut, duration: 128 }}
				out:slide={{ axis: 'y', easing: quintIn, duration: 80 }}
				use:clickOutsideAction
				on:clickOutside={offDropdown}
				on:click={offDropdown}
				on:keydown={fauxfake}
			>
				<a href="/about">About</a>
				<a href="/about/#advisors">Advisors</a>
				<a href="/about/#partners">Partners</a>
				<a href="/about/#team">Team</a>
				<a href="/about/namelogo">Nāmarūpa</a>
				<a href="/about/values">Pratijñā - Values</a>
				<a href="/about/svatahsiddha">Svataḥsiddha</a>
				<a href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
				<a href="/about/anatomy">Civilizational Moment</a>
				<a href="/about/culturecreatives">Culture Creatives</a>
				<a href="/about/policyresearch">Policy Research</a>
				<a href="/about/leadershipdevelopment">Leadership Development</a>
			</div>
		{/if}
	</div>
</Header>

<div class="themer" class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: #FFFFFF

.dark
	background: #171717

.themer
	width: 100vw

</style>
