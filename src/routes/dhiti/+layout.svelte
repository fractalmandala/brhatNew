<script lang="ts">
	import { themeMode } from '$lib/stores/globalstores';
</script>

<div class="type" class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: #ffffff

.dark
	background: #171717

</style>
