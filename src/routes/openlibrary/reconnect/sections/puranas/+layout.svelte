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

#actualform
	position: sticky
	top: 0

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

.mainside
	@media screen and (min-width: 1024px)
		height: calc(100vh - 368px)
		padding-bottom: 32px
		overflow-y: scroll

</style>