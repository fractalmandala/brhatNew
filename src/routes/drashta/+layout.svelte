<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { themeMode, menuMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
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
				<a href="/drashta">Draṣṭā Home</a>
				<a href="/drashta/schools">Schools of Thought</a>

				<a href="/drashta/course/shriramswarup">Introduction to Shri Ram Swarup</a>
				<a href="/drashta/course/sitaramgoel">Introduction to Shri Sita Ram Goel</a>
				<a href="/drashta/course/hinduiconography">Introduction to Hindu Iconography</a>
				<a href="/drashta/course/valmikiramayana">Vālmīki Rāmāyaṇa</a>
				<a href="/drashta/course/yogasutra">Patañjali's Yoga Sūtras</a>
				<a href="/drashta/course/comparativecivilisations">Comparative Civilizations</a>
				<a href="/drashta/course/mahabharataparayana">Mahābhārata Pārāyaṇa</a>
				<a href="/drashta/course/ancientindianhistory">Ancient Indian History</a>
				<a href="/drashta/course/kavyashastras">Introduction to Kāvyaśāstras</a>
				<a href="/drashta/course/ayurveda">Introduction to Āyurveda</a>
				<a href="/bhairavadharana">Bhairava Dhāraṇā</a>
        			<a href="/drashta/course/HI2024">Hindu Iconography 2</a>
				<a href="/drashta/course/hindumathematics">History of Hindu Mathematics</a>
			</div>
		{/if}
	</div>
</Header>

<div class="type" class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>
