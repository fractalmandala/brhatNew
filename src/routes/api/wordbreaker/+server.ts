import { VITE_OPENAI_API_KEY } from '$env/static/private'
import type { CreateChatCompletionRequest, ChatCompletionRequestMessage } from 'openai'
import type { RequestHandler } from './$types'
import { getTokens } from '$lib/utils/tokenizer'
import { json } from '@sveltejs/kit'

export const config = {
	runtime: 'edge'
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		if (!VITE_OPENAI_API_KEY) {
			throw new Error('OPENAI_KEY env variable not set')
		}

		const requestData = await request.json()
		console.log(requestData)
		if (!requestData) {
			throw new Error('No request data')
		}

		const reqMessages: ChatCompletionRequestMessage[] = requestData.messages

		if (!reqMessages) {
			throw new Error('no messages provided')
		}

		let tokenCount = 0

		reqMessages.forEach((msg) => {
			const tokens = getTokens(msg.content)
			tokenCount += tokens
		})

		const moderationRes = await fetch('https://api.openai.com/v1/moderations', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${VITE_OPENAI_API_KEY}`
			},
			method: 'POST',
			body: JSON.stringify({
				input: reqMessages[reqMessages.length - 1].content
			})
		})
		if (!moderationRes.ok) {
			const err = await moderationRes.json()
			throw new Error(err.error.message)
		}

		const moderationData = await moderationRes.json()
		const [results] = moderationData.results

		if (results.flagged) {
			throw new Error('Query flagged by openai')
		}

		const prompt =
			'Simply break down the input you have received into the constituent Sanskrit words, return the Sanskrit words in their original word form. Give the answer as a list of words, and each list item should contain the Sanskrit word, and the word in its IAST form. Explain nothing more, give nothing more or less. Return the response with each word wrapped inside a div tag of its own. These div tags should have the class name of `words`.' 
		tokenCount += getTokens(prompt)

		if (tokenCount >= 4000) {
			throw new Error('Query too large')
		}

		const messages: ChatCompletionRequestMessage[] = [
			{ role: 'system', content: prompt },
			...reqMessages
		]

		const chatRequestOpts: CreateChatCompletionRequest = {
			model: 'gpt-3.5-turbo',
			messages,
			temperature: 0,
			stream: true
		}

		const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
			headers: {
				Authorization: `Bearer ${VITE_OPENAI_API_KEY}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(chatRequestOpts),
		})

		if (!chatResponse.ok) {
			const err = await chatResponse.json()
			throw new Error(err.error.message)
		}
		return new Response(chatResponse.body, {
			headers: {
				'Content-Type': 'text/event-stream'
			}
			
		})
		
	} catch (err) {
		console.error(err)
		return json({ error: 'There was an error processing your request' }, { status: 500 })
	}

}