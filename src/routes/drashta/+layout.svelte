<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { browser } from '$app/environment'
	import { themeMode } from '$lib/stores/globalstores'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	let onHead = true
	let sidebar = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleVisibility() {
	  if (browser) {
	    themeMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('themeMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<DrashtaLinks flytime={onHead}></DrashtaLinks>
	</div>
</Header>
<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot></slot>
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>