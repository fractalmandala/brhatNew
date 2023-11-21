<script lang="ts">

	export let dimension = 32

</script>

<div class="rta-icon">
<svg width="{dimension}" height="{dimension}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6987 28C8.16536 28 7.6987 27.8 7.2987 27.4C6.8987 27 6.6987 26.5333 6.6987 26V7H5.33203V5H11.5987V4H20.3987V5H26.6654V7H25.2987V26C25.2987 26.5333 25.0987 27 24.6987 27.4C24.2987 27.8 23.832 28 23.2987 28H8.6987ZM12.232 23.1333H14.232V9.83333H12.232V23.1333ZM17.7654 23.1333H19.7654V9.83333H17.7654V23.1333Z" fill="#474747"/>
</svg>
</div>


<style lang="sass">

.rta-icon
	cursor: pointer
	svg
		height: 24px
		object-fit: contain
		transition: 0.13s
		transform-origin: center center
	&:hover
		svg path
			fill: #10D56C
		svg
			transform: scale(0.88)

</style>