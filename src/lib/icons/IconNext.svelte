<svg width="44" height="27" viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="springnext" clip-path="url(#clip0_210_2)">
<path id="two" d="M20 13.5L3 3L3 24L20 13.5Z" fill="#ff3d00"/>
<path id="one" d="M22.666 13.6665L0.666013 0.666506L0.666016 26.6665L22.666 13.6665Z" fill="#ff3d00"/>
</g>
<defs>
<clipPath id="clip0_210_2">
<rect width="44" height="27" fill="white" transform="translate(44 27) rotate(180)"/>
</clipPath>
</defs>
</svg>


<style lang="sass">

svg
	transform: scale(1.5)
	&:hover
		#two
			animation: inplus 0.2s ease forwards

@keyframes inplus
	0%
		transform: translateX(0px)
	100%
		transform: translateX(16px)

</style>