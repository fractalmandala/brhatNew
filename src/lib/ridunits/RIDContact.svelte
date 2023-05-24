<script lang="ts">

	import { onDestroy } from 'svelte'
	import supabase from '$lib/utils/db'
	import { themeMode } from '$lib/stores/globalstores'
	import { isModal } from '$lib/stores/modal'
	import IconClose from '$lib/icons/IconClose.svelte'

	let fake:boolean = false
	let name:string = ''
	let email:string = ''
	let message:string = 'Your message...'
	let modalStatus:any

	export async function submitForm(){
		if ( name === '' || email === '' || message === '' ) {
			alert('Sorry, one or more of the form values are blank, please recheck.')
		} else {
			try {
				const { error } = await supabase
				.from('brhat-contactform')
				.insert( {name: name, email: email, message: message} )
				if (error ) throw new Error(error.message)
				name = ''
				email = ''
				message = ''
			} finally {
				alert('Thank you. Your message has been submitted, and we will revert on the email address you have provided.')
			}
		}
	}

	const unsubscribe = isModal.subscribe(value => {
		modalStatus = value
	})

	function toggleModal(){
		isModal.update(value => !value)
	}

	function fauxfake(){
		fake = !fake
	}

	onDestroy(unsubscribe)

</script>

<div class="rta-column rta-modal" class:light={$themeMode} class:dark={!$themeMode}>
	<div class="rta-column inside-modal">
		<div class="rta-row closebutton" on:click={toggleModal} on:keydown={fauxfake}>
			<h6>Contact Form</h6>
			<IconClose/>
		</div>
		<div class="rta-column message">
			<p>Use this form to send to us your queries, inquiries about any course or program, proposals for collaboration, suggestions, and more.</p>
		</div>
		<form class="rta-column contact-form rowgap200 p-all-16">
			<input type="text" placeholder="Name" bind:value={name}/>
			<input type="email" placeholder="Email Address" bind:value={email}/>
			<textarea bind:value={message}/>
			<button type="submit" class="label-button" on:click={submitForm} on:keydown={submitForm}>Submit</button>
		</form>
	</div>
</div>

<style lang="sass">

input
	font-size: 14px
	color: #878787
	&::placeholder
		font-size: 14px
		color: #878787

textarea
	font-size: 14px
	color: #878787
	&::value
		font-size: 14px
		color: #878787

.light
	backdrop-filter: blur(10px)
	.inside-modal
		background: #171717

.dark
	backdrop-filter: blur(10px)
	.inside-modal
		background: #FFFFFF
	input, textarea
		border: 1px solid #878787
	h6
		color: #474747

@media screen and (min-width: 1024px)
	.rta-modal
		align-items: center
		justify-content: center
		.inside-modal
			width: 400px
			height: 480px
			padding: 32px
			border-radius: 6px
			.message
				padding-right: 16px
				padding-left: 16px
				padding-top: 32px
				p
					line-height: 1.2
			.closebutton
				justify-content: space-between
				padding-right: 16px
				padding-left: 16px
			input, textarea
				padding: 4px 8px
				border-radius: 8px
			textarea
				height: 64px

@media screen and (max-width: 1023px)
	.rta-modal
		align-items: center
		justify-content: center
		height: 100vh
		width: 100vw
		.inside-modal
			width: 100%
			height: 100%
			padding: 24px
			border-radius: 0
			justify-content: center
			.message
				padding-right: 12px
				padding-left: 12px
				padding-top: 24px
				p
					line-height: 1.2
			.closebutton
				justify-content: space-between
				padding-right: 12px
				padding-left: 12px
			input, textarea
				padding: 4px 8px
				border-radius: 8px
			textarea
				height: 64px


</style>