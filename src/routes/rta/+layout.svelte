<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { browser } from '$app/environment'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Header from '$lib/components/SubHeader.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import RtaLinks from '$lib/links/RtaLinks.svelte'

	let sidebar = false
	let flytime = true
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

	afterUpdate(() => {
		sidebar = false
		flytime = true
	})

</script>

<svelte:head>
	<HeadComponent>
		Ṛta in Design at
	</HeadComponent>
</svelte:head>

<Header sidebar={sidebar}>
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>
<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>