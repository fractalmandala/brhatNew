<script lang="ts">
	import { onMount } from 'svelte';
	import { modalStore, hideModal } from '$lib/stores/globalstores';

	let isShown: boolean;
	let ifPDF: boolean;

	const unsubscribe = modalStore.subscribe((value) => {
		({ isShown } = value);
	});

	function handleCloseClick() {
		hideModal(false);
	}

	function handleOverlayClick(e: any) {
		if (e.target === e.currentTarget) {
			hideModal(false);
		}
	}

	onMount(() => {
		return unsubscribe;
	});
</script>

{#if isShown}
	<div
		class="modal-overlay"
		on:click={handleOverlayClick}
		on:keydown={handleOverlayClick}
		data-lenis-prevent
	>
		<div class="modal null">
			<div class="rta-row ycenter between">
				<a
					class="rta-column rowgap100"
					href="https://drive.google.com/uc?id=1B_bfFNmEH6Tpq-si-QaWHfepVTXkbKpc&export=download"
					download
				>
					<button class="genbutton" style="background: #05AE5C; border: 1px solid #05AE5C"
						>Download PDF</button
					>
				</a>
				<button class="rta-row ycenter blank-button" on:click={handleCloseClick}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.4501 37.65L10.3501 35.55L21.9001 24L10.3501 12.45L12.4501 10.35L24.0001 21.9L35.5501 10.35L37.6501 12.45L26.1001 24L37.6501 35.55L35.5501 37.65L24.0001 26.1L12.4501 37.65Z"
							stroke="#474747"
							fill="#474747"
						/>
					</svg>
				</button>
			</div>
			<iframe
				title="Introduction to Ṛta in Design"
				src="https://drive.google.com/file/d/1B_bfFNmEH6Tpq-si-QaWHfepVTXkbKpc/preview"
				width="100%"
				height="560px"
				allow="autoplay"
			/>
		</div>
	</div>
{/if}

<style lang="sass">

svg
	&:hover
		path
			stroke: #05AE5C
			fill: #05AE5C

.modal-overlay
	position: fixed
	top: 0
	left: 0
	width: 100vw
	height: 100%
	background-color: rgba(0, 0, 0, 0.5)
	display: flex
	align-items: center
	justify-content: center
	z-index: 2000

.modal
	background-color: white
	padding: 16px
	border-radius: 4px
	width: 88%
	height: 88vh
	display: flex
	flex-direction: column
	row-gap: 8px
	@media screen and (min-width: 1024px)
		width: 32%

</style>
