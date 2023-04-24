<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'

	onMount(() => {
		const { Textify } = Animations
		new Textify({
			selector: 'h6',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false
		})		
	})

</script>

<h6 style="color: var(--thisheadcolor); font-weight: 400">
<slot></slot>
</h6>

