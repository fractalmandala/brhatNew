<script lang="ts">

	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { elasticOut } from 'svelte/easing'
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'

	let sampler:any

	onMount(async() => {
		sampler = message
	})

	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string

</script>

<div class="boxofchat {type === 'user' ? 'chat-end' : 'chat-start'}" in:fade={{ duration: 300, delay: 50, easing: elasticOut }}>
	<div class="agent {type === 'user' ? 'user' : 'brhatGPT'}">
		{type === 'user' ? 'user' : 'brhatGPT'}:
	</div>
	<pre class="commbody {type === 'user' ? 'user' : 'brhatGPT'}">
		{@html message}
	</pre>
</div>


<style lang="sass">

pre
	margin: 4px 0 0 0
	line-height: 1.6

.agent
	font-size: 12px

.agent.user
	text-transform: uppercase
	text-align: right
	color: #272727

.agent.brhatGPT
	color: #fe4a49

.commbody.user, .commbody.brhatGPT
	color: #272727
	font-family: 'Spline Sans', sans-serif

.commbody.brhatGPT
	font-size: 14px

.commbody.user
	text-align: right
	color: #575757
	font-size: 14px

.commbody
	white-space: pre-line

@keyframes theglowing
	0%
		background-position: 0% 50%
	33%
		background-position: 50% 100%
	66%
		background-position: 100% 50%
	100%
		background-position: 50% 0%

</style>