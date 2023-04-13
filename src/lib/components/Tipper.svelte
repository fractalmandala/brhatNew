<div class="tipper">
	<svg id="ball" width="24" height="128" viewBox="0 0 24 128" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="Frame 12">
		<path id="Vector1" fill-rule="evenodd" clip-rule="evenodd" d="M12 128C15.3137 128 18.3137 126.657 20.4853 124.485C22.6568 122.314 24 119.314 24 116C24 112.686 22.6568 109.686 20.4853 107.515C18.3137 105.343 15.3137 104 12 104C8.68632 104 5.68632 105.343 3.51472 107.515C1.34315 109.686 0 112.686 0 116C0 119.314 1.34315 122.314 3.51472 124.485C5.68632 126.657 8.68632 128 12 128Z" fill="#FE4A49"/>
		</g>
	</svg>
	<svg id="thing" width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0.419854 3.42386C2.10184 1.74187 4.42807 0.699951 6.99595 0.699951C9.56383 0.699951 11.8901 1.74187 13.5721 3.42384C13.9236 3.77531 13.9236 4.34516 13.5721 4.69664C13.2207 5.04811 12.6508 5.04812 12.2993 4.69666C10.941 3.33843 9.06727 2.49995 6.99595 2.49995C4.92463 2.49995 3.05086 3.33843 1.69265 4.69665C1.34117 5.04812 0.771326 5.04812 0.419854 4.69665C0.068382 4.34518 0.068382 3.77533 0.419854 3.42386Z" fill="#FFFBFF"/>
	</svg>
	<p>Help</p>
</div>


<style lang="sass">

.tipper
	width: 64px
	height: 128px
	position: fixed
	bottom: 32px
	right: 32px
	z-index: 1000
	display: flex
	cursor: pointer
	#ball
		position: absolute
		bottom: 0
		right: 0
	#thing
		position: absolute
		bottom: 9px
		right: 10px
		transition: all 0.4s ease
		transform: rotate(-90deg)
	p
		position: absolute
		transition: all 0.4s ease
		left: 0
		bottom: 2px
		opacity: 0
		background: #fe4a49
		font-size: 14px
		color: white
		padding: 2px
		border-radius: 4px
	&:hover
		#thing
			transform: translateX(-64px) scale(1.5) rotate(-90deg)
			path
				fill: #fe4a49
		p
			opacity: 1


</style>

