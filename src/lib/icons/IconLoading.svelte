<svg width="48" height="48" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="patha" d="M6.58203 39.5002C6.58203 57.6795 21.3193 72.4168 39.4987 72.4168C57.6781 72.4168 72.4154 57.6795 72.4154 39.5002C72.4154 21.3208 57.6781 6.5835 39.4987 6.5835" stroke="#FE4A49" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<path id="pathb" d="M59.25 39.5C59.25 28.5924 50.4076 19.75 39.5 19.75C28.5924 19.75 19.75 28.5924 19.75 39.5C19.75 50.4076 28.5924 59.25 39.5 59.25" stroke="#272727" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<style lang="sass">

svg
	height: 40px
	height: 40px

svg, svg path
	transform-origin: center center

#patha
	animation: rotateclock 2s ease infinite

#pathb
	animation: rotateanti 2s ease infinite


@keyframes rotateclock
	0%
		transform: rotate(0deg)
	50%
		transform: rotate(360deg)
	100%
		transform: rotate(0deg)		

@keyframes rotateanti
	0%
		transform: rotate(0deg)
	50%
		transform: rotate(-360deg)
	100%
		transform: rotate(0deg)		

	


</style>
