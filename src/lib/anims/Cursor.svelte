<script lang="ts">
	import { mouseStore } from '$lib/stores/mousestore';

	let mY: number;
	let mX: number;

	const position = mouseStore();

	mY = $position.y;
	mX = $position.x;
</script>

<svg>
	<circle class="the-cursor" cx={$position.x} cy={$position.y} r={100} />
</svg>

<style lang="sass">

.the-cursor
	z-index: 10000
	fill: #fe4a49
	filter: blur(80px)
	opacity: 0.15


</style>
