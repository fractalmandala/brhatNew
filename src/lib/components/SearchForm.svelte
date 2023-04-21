<script lang="ts">

	import { onMount } from 'svelte'
	import { searchitems } from '$lib/filed/searchindex'
	import { brhatIndex } from '$lib/utils/supapulls'
	import IconChevron from '$lib/icons/IconChevron.svelte'
	import AutoComplete from 'simple-svelte-autocomplete'
	let items:any
	let searches:any
	let input:string
	let selectedItem:any

	onMount(async() => {
		items = await brhatIndex()
	})

</script>


<form class="row">
	<input type="text"
	/>	
	<button type="submit">
		<IconChevron/>
	</button>
</form>

<style lang="sass">


form
	background: white
	border-radius: 16px
	height: 32px
	padding: 2px

button
	background: none
	color: #ffffff
	border: none
	border-radius: 50%
	height: 30px
	width: 30px
	padding: 0
	display: flex
	align-items: center
	justify-content: center


.row
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	gap: 12px

</style>