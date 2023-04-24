<script lang="ts">

	import { onMount } from 'svelte'
	import { searchitems } from '$lib/filed/searchindex'
	import { brhatIndex } from '$lib/utils/supapulls'
	import IconChevron from '$lib/icons/IconChevron.svelte'
	let items:any
	let isInputWide:any = false
	let searches:any
	let input:string
	let selectedItem:any
	let fake = false

	function handleButtonClick(){
		isInputWide = !isInputWide
	}	

	function fauxfake(){
		fake = !fake
	}

	onMount(async() => {
		items = await brhatIndex()
	})

</script>


<form class="row">
	<input class="invisible" class:expanded={isInputWide} type="text"
	/>	
	<button type="submit" on:click={handleButtonClick} class:rotated={isInputWide}>
		<IconChevron/>
	</button>
</form>

<style lang="sass">


form
	background: rgba(0,0,0,0)
	border-radius: 16px
	height: 32px
	padding: 2px
	width: 32px

button
	background: rgba(0,0,0,0)
	color: #ffffff
	border: none
	border-radius: 50%
	height: 30px
	width: 30px
	padding: 0
	display: flex
	align-items: center
	justify-content: center
	transform-origin: center center
	transition: 0.45s ease

button.rotated
	transform: rotate(180deg)


.row
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	gap: 12px

.invisible
	width: 0
	background: rgba(0,0,0,0)
	outline: none
	border: none
	transition: 0.53s ease-in

.invisible.expanded
	width: 280px
	background: white
	height: 27px
	border-radius: 14px

</style>