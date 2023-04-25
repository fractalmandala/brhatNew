<script lang="ts">

	export let expanded:boolean


</script>

<div id="menumain" class:expandedForm={expanded}>
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.7747 11.795C15.7418 12.8549 15.7418 14.5731 16.7747 15.633L21.5164 20.4998L16.7747 25.3666C15.7418 26.4266 15.7418 28.1448 16.7747 29.2047C17.2906 29.7354 17.9678 30 18.645 30C19.3222 30 19.9994 29.7354 20.5152 29.2047L29 20.4998L20.5152 11.795C19.4835 10.735 17.8064 10.735 16.7747 11.795Z" fill="white"/>
		
				<path 

					d="M41 21C41 32.0457 32.0457 41 21 41C9.95431 41 1 32.0457 1 21C1 9.95431 9.95431 1 21 1C32.0457 1 41 9.95431 41 21Z" stroke="white" stroke-width="2"/>

			</svg>


</div>

<style lang="sass">

svg
	background: #171717


#menumain
	height: 24px
	width: 28px
	display: flex
	flex-direction: column
	row-gap: 5px

</style>
