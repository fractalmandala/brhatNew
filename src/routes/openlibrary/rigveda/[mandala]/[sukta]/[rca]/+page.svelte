<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import IconLoading from '$lib/icons/IconLoading.svelte';
	import { rvRishis, rvDevatas, rvChandas, RVWords, RVPagination } from '$lib/utils/synaptic';
	let textDev: any;
	let breakDev: any;
	let joinDev: any;
	let textIAST: any;
	let breakIAST: any;
	let joinIAST: any;
	let msr: any;
	let dets: any;
	let pagination: any;
	let allwords: any;
	let nextNum: number;
	let prevNum: number;
	let showPrev = false;
	let currentMandala: any;
	let currentSukta: any;
	let currentRca: any;

	$: if (prevNum > 0) {
		showPrev = true;
	} else {
		showPrev = false;
	}

	$: (async () => {
		pagination = await RVPagination(msr);
		msr = $page.url.pathname.substr(40, 100);
		rshis = await rvRishis(data.mandala, data.suktacorrected, data.rca);
		devas = await rvDevatas(data.mandala, data.suktacorrected, data.rca);
		chandas = await rvChandas(data.mandala, data.suktacorrected, data.rca);
		dets = data.msr;
		nextNum = data.primvalue + 1;
		prevNum = data.primvalue - 1;
		currentMandala = data.mandala;
		currentSukta = data.suktacorrected;
		currentRca = data.rca;
		allwords = await RVWords(dets);
		textDev = data.devanagari;
		breakDev = textDev.split('।');
		joinDev = breakDev.join('<br>');
		textIAST = data.iast;
		breakIAST = textIAST.split('|');
		joinIAST = breakIAST.join('<br>');
	})();

	let rshis: any;
	let devas: any;
	let chandas: any;

	export let data: any;

	onMount(async () => {
		msr = $page.url.pathname.substr(40, 100);
		rshis = await rvRishis(data.mandala, data.suktacorrected, data.rca);
		devas = await rvDevatas(data.mandala, data.suktacorrected, data.rca);
		chandas = await rvChandas(data.mandala, data.suktacorrected, data.rca);
		pagination = await RVPagination(msr);
		dets = data.msr;
		nextNum = data.primvalue + 1;
		prevNum = data.primvalue - 1;
		currentMandala = data.mandala;
		currentSukta = data.suktacorrected;
		currentRca = data.rca;
		allwords = await RVWords(dets);
		textDev = data.devanagari;
		breakDev = textDev.split('।');
		joinDev = breakDev.join('<br>');
		textIAST = data.iast;
		breakIAST = textIAST.split('|');
		joinIAST = breakIAST.join('<br>');
	});
</script>

<div class="rta-row colgap200 forlegend p-bot-16 bord-bot">
	<small>
		<a href="/openlibrary/rigveda/{data.mandala}">Maṇḍala {data.mandala}</a> |
		<a href="/openlibrary/rigveda/{data.mandala}/{data.suktacorrected}"
			>Sūkta {data.suktacorrected}</a
		>
	</small>
	<h3 class="hindiadobe">Ṛca {data.rca}</h3>
</div>

<div class="rta-column rowgap300 p-top-16 thekey">
	{#if joinIAST && joinIAST.length > 0}
		<h5 class="hindiadobe">{@html joinDev}</h5>
		<h6 class="hindiadobe">{@html joinIAST}</h6>
	{:else}
		<IconLoading />
	{/if}
	<div class="rta-row xstart colgap600 p-bot-32">
		{#if devas && devas.length > 0}
			{#each devas as item}
				<div class="rta-column">
					<p>Devatā</p>
					<h6 class="thin">{item.iast}</h6>
				</div>
			{/each}
		{/if}
		{#if rshis && rshis.length > 0}
			{#each rshis as item}
				<div class="rta-column">
					<p>Ṛṣī</p>
					<h6 class="thin">{item.iast}</h6>
				</div>
			{/each}
		{/if}
		{#if chandas && chandas.length > 0}
			{#each chandas as item}
				<div class="rta-column">
					<p>Chanda</p>
					<h6 class="thin">{item.iast}</h6>
				</div>
			{/each}
		{/if}
	</div>
	<div class="rta-column p-bot-32">
		<p>Griffith's Translation:</p>
		<h6 class="thin">{data.griffith}</h6>
	</div>
	<div class="readernavigation">
		{#if pagination && pagination.length > 0}
			{#each pagination as item}
				{#if showPrev}
					<button class="blank-button">
						<a href="/openlibrary/reconnect/sections/rigveda/{item.prev}">
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
				{/if}
				<button class="blank-button">
					<a href="/openlibrary/reconnect/sections/rigveda/{item.next}">
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
