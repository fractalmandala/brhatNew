<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	let isSwitch = false;
</script>

<Header {isSwitch} hasMenu={false} />
<slot />
