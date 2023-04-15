<script lang="ts">

	import { onMount } from 'svelte'
	import ChatMessage from '$lib/reader/AgentIAST.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'
	let query: string = ''
	let answer: string = ''
	let userprompt:any
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []

	const handleSubmit = async () => {
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]
		userprompt = query
		const eventSource = new SSE('/api/iast', {
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

	function handleKeyDownInput(e:any){
		if (e.shiftkey && e.key === 'enter') {
			e.preventDefault(),
			query += '\n'
		}
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}

</script>


<div class="inputmodal type">
	<div class="inputtab">
		<h5 style="font-weight: 600; text-align: center">IAST Conversion</h5>
		<slot name="describe"></slot>
		<div class="modalform">
				<textarea bind:value={query}
					on:keydown={handleKeyDownInput}
					/>
			<div class="boxr">
				<button class="formbutton" type="submit" on:click={() => handleSubmit()} on:keydown={handleKeyDownInput}> Send </button>
				<slot name="close"></slot>
			</div>
			<small>Enter your search in Devanāgarī, IAST, or regular English.</small>
		</div>
		<div class="output">
		{#each chatMessages as message}
			<ChatMessage type={message.role} message={message.content} />
		{/each}
		{#if answer}
			<ChatMessage type="assistant" message={answer}/>
		{/if}
		{#if loading}
			<ChatMessage type="assistant" message="Loading.." />
		{/if}		
		</div>
	</div>
</div>


<style lang="sass">

.inputmodal
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	width: 100vw
	height: 100%
	position: fixed
	top: 0
	left: 0
	backdrop-filter: blur(6px)
	background: rgba(0,0,0,0.8)
	z-index: 888

.inputtab
	display: flex
	flex-direction: column
	align-items: center
	width: 32%
	background: white
	height: 60%
	row-gap: 32px
	padding: 32px
	border: 1px solid #ececec
	border-radius: 4px

.modalform
	display: flex
	flex-direction: column
	align-items: center
	textarea
		width: 60%
		margin-bottom: 8px
	.boxr
		margin-bottom: 16px
		gap: 16px

.searchresults h6
	padding-top: 8px

.searchresults p
	border-bottom: 1px solid #ececec
	padding-bottom: 16px
	

</style>