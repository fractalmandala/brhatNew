<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { themeMode } from '$lib/stores/globalstores'
	import { fly } from 'svelte/transition'

	let sidebar = false
	let flytime = true
	let dropdown = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function offDropdown(){
		if (dropdown === true){
			dropdown = false
		}
	}

	function onDropdown(){
		if (dropdown === false ){
			dropdown = true
		}
	}


</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/about">About</a>
		<a href="/about/svatahsiddha">Svataḥsiddha</a>
		<a href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
		<a href="/about/anatomy">Civilizational Moment</a>
		<div class="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}>
			<div class="rta-row colgap100 dropper-visible" class:expanded={dropdown} on:mouseenter={onDropdown}>
				Organization
				<div class="dropper-chevron" class:rotated={dropdown}>
					<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.6284 0.016602L0.983398 1.6616L7.9834 8.6616L14.9834 1.6616L13.3384 0.0166016L7.9834 5.35993L2.6284 0.016602Z" fill="#FE4A49"/>
					</svg>
				</div>
			</div>
			{#if dropdown}
			<div class="rta-column dropper-invisible" on:mouseleave={offDropdown} use:autoAnimate>
				<a id="link11" href="/about/namelogo" in:fly={{ duration: 100, delay: 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Nāmarūpa - Name and Logo</a>
				<a id="link22" href="/about/values" in:fly={{ duration: 100, delay: 100, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Pratijñā - Values</a>
				<a id="link33" href="/about/#advisors" in:fly={{ duration: 100, delay: 150, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Advisors</a>
				<a id="link44" href="/about/#partners" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Partners</a>
				<a id="link55" href="/about/#team" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Team</a>
			</div>
			{/if}	
		</div>	
	</div>
</Header>

<div class="themer" class:light={$themeMode} class:dark={!$themeMode}>
<slot></slot>
</div>

<style lang="sass">

.light
	background: #FFFFFF

.dark
	background: #171717


</style>

