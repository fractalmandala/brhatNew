<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import { fly } from 'svelte/transition'

	let sidebar = false
	let flytime = true
	let dropdown = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	function toggleDropdown(){
		dropdown = !dropdown
	}


</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/about/svatahsiddha">Svataḥsiddha</a>
		<a href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
		<a href="/about/anatomy">Civilizational Moment</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}><p class="dropperp">Organization</p>
			{#if dropdown}
				<a id="link11" href="zz" in:fly={{ duration: 100, delay: 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Nāmarūpa - Name and Logo</a>
				<a id="link22" href="/about/values" in:fly={{ duration: 100, delay: 100, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Pratijñā - Values</a>
				<a id="link33" href="/about/#advisors" in:fly={{ duration: 100, delay: 150, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Advisors</a>
				<a id="link44" href="/about/#partners" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Partners</a>
				<a id="link55" href="/about/#team" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Team</a>
			{/if}	
		</div>	
	</div>
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>

<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>

<style lang="sass">

#dropper
	position: relative
	a
		position: absolute
		min-width: 240px
		background: #171717
		padding: 8px


#link11
	top: 32px
	min-width: 320px
#link22
	top: 56px
	min-width: 320px
#link33
	top: 80px
	min-width: 320px
#link44
	top: 104px
	min-width: 320px
#link55
	top: 128px
	min-width: 320px

</style>