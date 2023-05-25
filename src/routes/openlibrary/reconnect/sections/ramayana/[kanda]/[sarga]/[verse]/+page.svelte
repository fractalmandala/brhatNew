<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import IconLoading from '$lib/icons/IconLoading.svelte';
	import { padasofRamayana, verseSlug, rmLemma } from '$lib/utils/synaptic';
	let url: any;
	let url2: any;
	let nextID: any;
	let prevID: any;
	let currentKanda: any;
	let currentSarga: any;
	let currentVerse: any;
	let pads: any;
	let newID: any;
	let prevData: any;
	let nextData: any;
	let fake = false;
	let lemmas: any;

	function fauxfake() {
		fake = !fake;
	}

	$: url = $page.url.pathname;
	$: url2 = $page.url.pathname.substr(41, 20);
	$: newID = data.id;
	$: currentKanda = data.kanda;
	$: currentSarga = data.sarga;
	$: currentVerse = data.verse;
	$: nextID = data.id + 1;
	$: prevID = data.id - 1;
	$: (async () => {
		pads = await padasofRamayana(currentKanda, currentSarga, currentVerse);
		prevData = await verseSlug(prevID);
		nextData = await verseSlug(nextID);
		lemmas = await rmLemma(url2);
	})();

	onMount(async () => {
		url = $page.url.pathname;
		url2 = $page.url.pathname.substr(41, 20);
		newID = data.id;
		currentKanda = data.kanda;
		currentSarga = data.sarga;
		currentVerse = data.verse;
		pads = await padasofRamayana(currentKanda, currentSarga, currentVerse);
		nextID = data.id + 1;
		prevID = data.id - 1;
		prevData = await verseSlug(prevID);
		nextData = await verseSlug(nextID);
		lemmas = await rmLemma(url2);
	});

	export let data;
</script>

<div class="bol-page">
	{#if pads && pads.length > 0}
		{#each pads as item, i}
			<div class="rta-column p-bot-32">
				<small>{item.kanda} - {item.sarga} - {item.verse} - {item.pada}</small>
				<h5 class="dev">
					{item.devanagari}
				</h5>
				<h6 class="thin">{item.iast}</h6>
			</div>
		{/each}
	{:else}
		<IconLoading />
	{/if}
	<div class="rta-grid grid3 colgap600 rowgap500">
		{#if lemmas && lemmas.length > 0}
			{#each lemmas as item}
				<div class="rta-column lemmabox">
					<p>{item.form}</p>
					<small class="tt-l">{item.meanings}</small>
				</div>
			{/each}
		{/if}
	</div>

	<div class="readernavigation">
		{#if prevData && prevData.length > 0}
			{#each prevData as item}
				<button class="blank-button">
					<a href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}">
						<svg
							width="24"
							height="24"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.0333 15L16.4667 21.4666L18.5333 19.3333L14.2 15L18.5333 10.6666L16.4667 8.53331L10.0333 15ZM0.833328 15.0046C0.833328 13.046 1.20093 11.2057 1.93613 9.48375C2.67131 7.76179 3.68255 6.25716 4.96986 4.96985C6.25717 3.68253 7.76027 2.67129 9.47916 1.93611C11.198 1.20091 13.0368 0.833313 14.9954 0.833313C16.9762 0.833313 18.8276 1.20091 20.5496 1.93611C22.2715 2.67129 23.7712 3.68079 25.0485 4.96461C26.3259 6.24844 27.3372 7.7506 28.0823 9.47111C28.8274 11.1916 29.2 13.0321 29.2 14.9926C29.2 16.9753 28.8283 18.8289 28.0849 20.5535C27.3415 22.2781 26.3326 23.7782 25.0581 25.0539C23.7837 26.3296 22.2851 27.3396 20.5622 28.0837C18.8394 28.8279 16.9853 29.2 15 29.2C13.0383 29.2 11.1967 28.8274 9.47509 28.0823C7.75352 27.3371 6.25043 26.3259 4.96583 25.0485C3.6812 23.7712 2.67131 22.273 1.93613 20.5541C1.20093 18.8353 0.833328 16.9854 0.833328 15.0046Z"
								fill="#fe4a49"
							/>
						</svg>
					</a>
				</button>
			{/each}
		{/if}

		{#if nextData && nextData.length > 0}
			{#each nextData as item}
				<button class="blank-button">
					<a
						href="/openlibrary/reconnect/sections/ramayana/{item.kanda}/{item.sarga}/{item.verse}"
						target="_self"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.9667 15L13.5333 8.53332L11.4667 10.6667L15.8 15L11.4667 19.3333L13.5333 21.4667L19.9667 15ZM29.1667 14.9954C29.1667 16.954 28.7991 18.7943 28.0639 20.5162C27.3287 22.2382 26.3174 23.7428 25.0301 25.0301C23.7428 26.3174 22.2397 27.3287 20.5208 28.0639C18.802 28.7991 16.9632 29.1667 15.0046 29.1667C13.0238 29.1667 11.1724 28.7991 9.45043 28.0639C7.72848 27.3287 6.22882 26.3192 4.95147 25.0354C3.67409 23.7515 2.66283 22.2494 1.9177 20.5289C1.17257 18.8083 0.799999 16.9678 0.799999 15.0074C0.799999 13.0247 1.17171 11.171 1.91513 9.44646C2.65853 7.7219 3.66744 6.22177 4.94187 4.94606C6.21629 3.67034 7.71492 2.6604 9.43777 1.91622C11.1606 1.17207 13.0147 0.799988 15 0.799988C16.9617 0.799988 18.8033 1.17255 20.5249 1.91769C22.2465 2.66282 23.7496 3.67408 25.0342 4.95145C26.3188 6.22881 27.3287 7.72693 28.0639 9.44582C28.7991 11.1647 29.1667 13.0145 29.1667 14.9954Z"
								fill="#fe4a49"
							/>
						</svg>
					</a>
				</button>
			{/each}
		{/if}
	</div>
</div>
