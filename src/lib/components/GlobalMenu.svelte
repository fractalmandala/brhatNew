<script lang="ts">
	import { menuMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';

	function toggleMenuMode() {
		$menuMode = !$menuMode;
	}

	function handleOverlayClick() {
		if ($menuMode === true) {
			$menuMode = false;
		}
	}
</script>

{#if $menuMode}
	<nav class="rta-column" use:clickOutsideAction on:clickOutside={handleOverlayClick}>
		<p>link1</p>
		<p>link1</p>
		<p>link1</p>
		<p>link1</p>
		<p>link1</p>
		<p>link1</p>
	</nav>
{/if}

<style lang="sass">

nav
	background: #171717
	position: absolute
	top: 64px
	right: 0
	p
		color: white

</style>
