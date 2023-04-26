<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	let onHead = true
	let sidebar = false
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

</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<DrashtaLinks flytime={onHead}></DrashtaLinks>
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