<button class="download-button">
  <div class="docs">
		<svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
		</svg>
	<slot></slot>
	</div>
  <div class="download">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line>
		</svg>
  </div>
</button>

<style lang="sass">

.download-button
	position: relative
	border-width: 0
	font-size: 15px
	font-weight: 600
	border-radius: 4px
	height: 32px
	z-index: 1
	background: transparent
	cursor: pointer
	.docs
		display: flex
		align-items: center
		justify-content: space-between
		gap: 10px
		height: 32px
		padding: 0 10px
		border-radius: 4px
		z-index: 1
		transition: all .5s cubic-bezier(0.77, 0, 0.175, 1)
	&:hover
		.download
			transform: translateX(32%)
			
.download
	position: absolute
	inset: 0
	display: flex
	align-items: center
	height: 30px
	justify-content: flex-end
	width: 80%
	padding-right: 8px
	margin: 2px auto 0 auto
	z-index: -1
	border-radius: 4px
	transform: translateY(0%)
	background-color: var(--red)
	transition: all .5s cubic-bezier(0.77, 0, 0.175, 1)
	svg
		transform: rotate(-90deg)
		polyline, line
			animation: docs 1s infinite

@keyframes docs
	0%
		transform: translateY(0%)
	
	50%
		transform: translateY(-15%)

	100%
		transform: translateY(0%)

</style>