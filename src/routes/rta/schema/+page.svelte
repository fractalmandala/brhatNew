<script lang="ts">

	import { themeMode } from '$lib/stores/globalstores'

</script>

<div class="rta-column minH cc-all is-padded">
	<div class="circle" class:light={$themeMode} class:dark={!$themeMode}>
		<h5>sat</h5>
	</div>
</div>

<style lang="sass">

.circle
	padding: 24px
	border-radius: 50%

.circle.dark
	box-shadow: 4px 4px 12px #111111, -4px -4px 8px #161616
	&:hover
		h5
			color: white

</style>