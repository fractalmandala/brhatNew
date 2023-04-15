<script lang="ts">

	import { onMount } from 'svelte'
	import ChatMessage from '$lib/components/ChatMessages.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'

	let query: string = ''
	let answer: string = ''
	let userprompt:any
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let fake = false
	let showChat = false

	function fauxfake(){
		fake = !fake
	}

	function handleChat(){
		showChat = !showChat
	}

	const handleSubmit = async () => {
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]
		userprompt = query
		console.log(query)
		const eventSource = new SSE('/api/dictionary', {
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

	function handleKeyDownInput(e:any){
		if (e.shiftkey && e.key === 'enter') {
			e.preventDefault(),
			query += '\n'
		}
	}

</script>

<svelte:head>
<title>Bṛhat Open LibraryT</title>
<meta name="description" content="the Culture Engine"/>
</svelte:head>


<div class="mainpage">
	<div class="mainside">
		<div class="sidebaritem">
			<p>Show Chat</p>
		</div>
	</div>
	<div class="mainmain">
		{#if showChat}
		<div class="boxc chats">
			<ChatMessage type="assistant" message="Namaste. How may I help you?" />	
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
		<div class="boxc ofform">
			<form on:submit|preventDefault>
				<textarea bind:value={query}
					on:keydown={handleKeyDownInput}
					/>
				<button class="glowing" type="submit" on:click={() => handleSubmit()} on:keydown={handleKeyDownInput}> Send </button>
			</form>
		</div>
		{/if}
	</div>
</div>


