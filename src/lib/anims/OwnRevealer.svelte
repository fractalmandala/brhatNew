<script lang="ts">

	import { onMount } from 'svelte'

	let panel1:HTMLElement | null
	let ifPanel1 = false
	let yPanel1 = 0
	let sY:number
	let iW:number
	let oH:number

</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>

<div class="box panel1">
	<div class="translater">
		<slot></slot>
	</div>
</div>