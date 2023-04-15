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
	<div class="commbody {type === 'user' ? 'user' : 'brhatGPT'}">
		{@html message}
	</div>
</div>


<style lang="sass">

.boxofchat
	padding: 4px 16px 16px 16px

.commbody.user, .commbody.brhatGPT
	color: #272727
	font-family: 'Spline Sans', sans-serif

.commbody.brhatGPT
	font-size: 18px

.commbody.user
	display: none

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