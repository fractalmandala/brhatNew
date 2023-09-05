<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { breakOne, breakZero, breakTwo } from '$lib/stores/globalstores';
	import { BOLSelect } from '$lib/utils/supapulls';
	import { get, writable } from 'svelte/store';
	import supabase from '$lib/utils/db';
	import { fly } from 'svelte/transition';

	let y: number;
	let height: number;
	let isInvisible: boolean = false;
	let mouseY: number = 0;
	let latestScrollY: number;

	let books: any;
	let category: any = 'Essentials';
	let opencategory: boolean = false;
	let fake = false;
	let iconmobile = true;
	let expandmenu = false;
	let visibility = true;

	let opensearchbar = false;
	const searchStore = writable('');
	let searchinput;
	const resultsStore = writable([]);
	let showResults = false;
	let loadingStore = false;
	let width: number;
	let sidebar = false;

	function toggleSidebar() {
		sidebar = !sidebar;
	}

	function toggleMenu() {
		expandmenu = !expandmenu;
	}

	function newcategory(newCategory: any) {
		category = newCategory;
		if (opensearchbar === true) {
			opensearchbar = false;
		}
	}

	function fauxfake() {
		fake = !fake;
	}

	function togglecategory() {
		opencategory = !opencategory;
	}

	const searchWord = async () => {
		loadingStore = true;
		showResults = true;
		const searchTerm = get(searchStore);
		let results: any[] = [];
		const { data: dataone, error: errorone } = await supabase
			.from('brhat-openlibrary')
			.select()
			.textSearch('fts', searchTerm)
			.order('id');
		if (errorone) throw new Error(errorone.message);
		results = results.concat(dataone);
		// @ts-ignore
		resultsStore.set(results);
		loadingStore = false;
		searchinput = '';
	};

	$: if (category) {
		(async () => {
			books = await BOLSelect(category);
		})();
	}

	$: if (category === 'search') {
		opensearchbar = !opensearchbar;
	}

	$: if (width <= 1023) {
		visibility = expandmenu;
	} else {
		visibility = true;
	}

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		} else {
			isInvisible = false;
		}
		latestScrollY = y;
	}

	onMount(async () => {
		books = await BOLSelect(category);
		height = document.body.scrollHeight;
		const handleMouse = (event: { clientY: number }) => {
			mouseY = event.clientY;
			if (mouseY <= 128) {
				isInvisible = false;
			}
		};
		window.addEventListener('mousemove', handleMouse);
		return () => {
			window.removeEventListener('mousemove', handleMouse);
		};
	});
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={height} />

<div
	class="docugrid"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="documain">
		<slot />
	</div>
</div>

<style lang="sass">



.docugrid
	display: flex
	flex-direction: column
	position: relative
	justify-content: flex-start
	.documain
		display: flex
		flex-direction: column
		justify-content: flex-start
	@media screen and (min-width: 1024px)
		padding-bottom: 128px
		padding-top: 80px
	@media screen and (max-width: 1023px)
		padding-top: 80px
		.documain
			padding-bottom: 64px


</style>
