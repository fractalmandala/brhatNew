<script lang="ts">

	import { onMount } from 'svelte'
	import ChatMessage from '$lib/components/ChatMessages.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let chatTitle: ChatCompletionRequestMessage[] = []
	let userprompt:any
	export let showBreak:boolean[] = Array(20).fill(false)
	export let query:any
	export let i:any
	let fake = false
	
	function fauxfake() {
		fake = !fake
	}

	function toggleDetails(index:number){
		showBreak[index] = !showBreak[index]
		for ( let i = 0; i < showBreak.length; i++) {
			if ( i !== index && showBreak[i] === true ) {
				showBreak[i] = false
			}
		} 
	}

	const handleSubmit = async () => {
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]
		userprompt = query
		const eventSource = new SSE('/api/wordbreaker', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		})

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e: {data: string;}) => {
			try {
				loading = false
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
					console.log(answer)
					answer = ''
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
	}


	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}

</script>

<div class="readingcard">
	<slot name="cite"></slot>
	<slot name="title"></slot>
	<slot name="iast"></slot>
	{#if showBreak[i]}
	<button on:click={() => toggleDetails(i)} on:keydown={fauxfake}>Hide Details</button>
		<div style="margin-top: 16px; font-weight: bold; color: #878787">Each word of the verse:</div>
				{#each chatMessages as message}
					<ChatMessage type={message.role} message={message.content} />
				{/each}
				{#if answer}
					<ChatMessage type="assistant" message={answer}/>
				{/if}
		{#if loading}
			<ChatMessage type="assistant" message="Loading.." />
		{/if}
	{:else}
	<button on:click={handleSubmit} on:click={() => toggleDetails(i)} on:keydown={fauxfake}>Show Details</button>
	{/if}	
</div>

<style lang="sass">

.readingcard
	button
		background: white
		border: none
		text-transform: uppercase
		color: var(--strong)
		font-weight: bold
		width: max-content
		padding-left: 0
		padding-top: 4px
		margin-top: 24px
		padding-bottom: 4px
		cursor: pointer
		&:hover
			text-decoration: underline
			background: #474747
			color: white
			padding-left: 4px

</style>


