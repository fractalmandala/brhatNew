<div class="mainpage">
	<div class="mainside" data-lenis-prevent>
		<form autocomplete="off" id="actualform">
    	<input id="dhatu-input" 
				type="text" 
				placeholder="search index"/>
			<button class="formbutton">Search</button>
		</form>
	</div>
	<slot></slot>
</div>

<style lang="sass">

.mainpage
	padding-bottom: 32px
	min-height: 100vh

.mainside
	position: relative
	#items-list
		position: absolute
		left: 0
		top: 32px
		padding: 16px
		height: 320px
		overflow-y: scroll
		overflow-x: hidden
		background: white
		width: 88%
		border-bottom: 1px solid #ececec
		border-left: 1px solid #ececec
		border-right: 1px solid #ececec
		border-top: none
		border-radius: 0 0 4px 4px
		p
			font-size: 14px
			text-transform: uppercase
			color: #272727
			cursor: pointer
			padding: 2px

#actualform
	position: sticky
	top: 0

#items-list p
	&:hover
		background: #fe4a49
		color: white

#dhatu-input
	width: 88%
	outline: none
	border-left: 1px solid #ececec
	border-right: 1px solid #ececec
	border-top: 1px solid #ececec
	border-bottom: 1px solid #ececec
	border-radius: 4px 4px 0 0
	padding: 8px
	margin-bottom: 8px



.sideitems
	padding: 2px

.sideitems
	h5
		font-size: 16px
	@media screen and (max-width: 1023px)
		h5
			font-size: 16px

.mainside
	@media screen and (min-width: 1024px)
		height: calc(100vh - 368px)
		padding-bottom: 32px
		overflow-y: scroll

</style>