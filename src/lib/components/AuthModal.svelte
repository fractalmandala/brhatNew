<script lang="ts">
	import { onMount } from 'svelte';
	import { authStore, showAuth, hideAuth, authState, themeMode } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import Close from '$lib/icons/close.svelte';

	let isShown: boolean;
	let type: boolean;
	let closeDimension = 24;
	let color = 'var(--opposite)';
	let loading = false;
	export let form: any;

	const unsubscribe = authStore.subscribe((value) => {
		({ isShown } = value);
	});

	function handleCloseClick() {
		hideAuth();
	}

	onMount(() => {
		return unsubscribe;
	});
</script>

{#if isShown}
	<div class="rta-column authmodaloverlay" class:light={$themeMode} class:dark={!$themeMode}>
		<div
			class="rta-column authmodal rowgap100"
			use:clickOutsideAction
			on:clickOutside={handleCloseClick}
		>
			<div class="rta-row between">
				<p class="oppositer"><b>Are you sure you want to log out?</b></p>
				<button class="blank-button" on:click={handleCloseClick}>
					<Close dimension={closeDimension} {color} />
				</button>
			</div>
			<div class="rta-column rowgap100 areaofforms">
				{#if $authState}
					<form class="thisform" method="post" action="?/signout">
						<button class="newbutton red">Yes</button>
					</form>
				{:else}
					<h6 class="nohemi">Sign In</h6>
					<form class="thisforms" method="post" action="?/login">
						<div class="rta-column rowgap100 null">
							<input
								id="email"
								name="email"
								value={form?.values?.email ?? ''}
								class="input"
								type="email"
								placeholder="Email"
								required
							/>

							<input
								id="password"
								name="password"
								class="input"
								type="password"
								placeholder="Password"
								required
							/>

							<button disabled={loading} class="newbutton red">Sign in</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style lang="sass">


.authmodaloverlay
	position: fixed
	top: 0
	left: 0
	width: 100vw
	height: 100vh
	backdrop-filter: blur(5px)
	z-index: 2000
	align-items: center
	justify-content: center
	.authmodal
		z-index: 2000
		background: var(--background)
		border: 1px solid var(--opposite)
	@media screen and (min-width: 1024px)
		.authmodal
			width: 400px
			min-height: 120px
			padding: 24px
			justify-content: center
	@media screen and (max-width: 1023px)
		.authmodal
			width: calc(100% - 64px)
			height: 160px
			padding: 16px

.thisforms
	input
		background: transparent !important
		border: 1px solid var(--shadowline)
		font-size: 14px
		padding: 4px 8px
		border-radius: 6px

</style>
