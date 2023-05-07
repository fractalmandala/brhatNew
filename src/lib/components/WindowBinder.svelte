<script lang="ts">

  import { onMount } from 'svelte';
  import { innerWidth, outerHeight, scrollY } from '$lib/stores/windows';

  let iW:number
	let oH:number
	let sY:number

  function updateValues() {
    innerWidth.set(iW);
    outerHeight.set(oH);
    scrollY.set(sY);
  }

  onMount(() => {
    updateValues();
    window.addEventListener('resize', updateValues);
    window.addEventListener('scroll', updateValues);

    return () => {
      window.removeEventListener('resize', updateValues);
      window.removeEventListener('scroll', updateValues);
    };
  });
</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW} />
