<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import { fly } from 'svelte/transition'

	let sidebar = false
	let flytime = true
	let dropdown = false
	let fake = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function fauxfake(){
		fake = !fake
	}

</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/about/svatahsiddha">Svataḥsiddha</a>
		<a href="/about/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
		<a href="/about/anatomy">Civilizational Moment</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}><p class="dropperp">Organization</p>
			{#if dropdown}
				<a id="link11" href="/about/namelogo" in:fly={{ duration: 100, delay: 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Nāmarūpa - Name and Logo</a>
				<a id="link22" href="/about/values" in:fly={{ duration: 100, delay: 100, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Pratijñā - Values</a>
				<a id="link33" href="/about/#advisors" in:fly={{ duration: 100, delay: 150, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Advisors</a>
				<a id="link44" href="/about/#partners" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Partners</a>
				<a id="link55" href="/about/#team" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Team</a>
			{/if}	
		</div>	
	</div>
</Header>
<slot></slot>
<style lang="sass">

#dropper
	position: relative
	a
		position: absolute
		min-width: 200px
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