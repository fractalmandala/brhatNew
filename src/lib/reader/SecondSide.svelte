<script lang="ts">
	import {
		breakZero,
		breakOne,
		breakTwo,
		secondSide,
		toggleSecondSide
	} from '$lib/stores/globalstores';

	$: if ($breakTwo) {
		$secondSide = false;
	} else $secondSide = true;
</script>

{#if $secondSide}
	<div class:levelzero={$breakZero} class:levelone={$breakOne} class:leveltwo={$breakTwo}>
		<slot />
	</div>
{/if}
