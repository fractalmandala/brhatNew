<script lang="ts">

	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'

</script>

<div class="rta-column minH is-padded" class:dark={!visibilityMode} class:light={visibilityMode}>
	<div class="glass rta-in-col all-p-32 rowgap-16">
		<h4>Ṛta in Design</h4>
		<h6>web design system</h6>
		<div class="rta-grid grid4 rowgap-16 colgap-16">
			<div class="rta-in-col" style="background: #fe4a49">
				primary
				#fe4a49
			</div>
		</div>	
	</div>
</div>

<style lang="sass">

.glass
	-webkit-backdrop-filter: blur( 11.5px )
	border-radius: 10px
	height: 80%

.dark
	.glass
		box-shadow: 0 8px 32px 0 rgba( 5, 36, 15, 0.37 )
		backdrop-filter: blur( 11.5px )
		border: 1px solid rgba( 255, 255, 255, 0.18 )

.light
	.glass
		box-shadow: 0 8px 32px 0 rgba( 5, 36, 15, 0.37 )
		backdrop-filter: blur( 17px )
		-webkit-backdrop-filter: blur( 17px )
		border-radius: 10px
		border: 1px solid rgba( 255, 255, 255, 0.18 )

</style>