<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'

	onMount(() => {
		const { TextifyTitle } = Animations
		new TextifyTitle({
			selector: 'h3',
			duration: 700,
			stagger: 40,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 1.2
		})		
	})

</script>

<h3 style="color: var(--thisheadcolor)">
<slot></slot>
</h3>

