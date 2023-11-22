<script lang="ts">
	import { onMount } from 'svelte';
	import supabase from '$lib/utils/db';
	import StarterKit from '@tiptap/starter-kit';
	import { Editor } from '@tiptap/core';
	import '$lib/styles/tiptap.scss';
	import '$lib/styles/newtap.sass';
	import Bold from '$lib/padicons/bold.svelte';
	import Italic from '$lib/padicons/italic.svelte';
	import Clear from '$lib/padicons/clear.svelte';
	import Code from '$lib/padicons/code.svelte';
	import H1 from '$lib/padicons/h1.svelte';
	import H2 from '$lib/padicons/h2.svelte';
	import H3 from '$lib/padicons/h3.svelte';
	import H4 from '$lib/padicons/h4.svelte';
	import H5 from '$lib/padicons/h5.svelte';
	import H6 from '$lib/padicons/h6.svelte';
	import Para from '$lib/padicons/para.svelte';
	import Strike from '$lib/padicons/strike.svelte';
	import Bullet from '$lib/padicons/bullet.svelte';
	import Order from '$lib/padicons/order.svelte';
	import Codeblock from '$lib/padicons/codeblock.svelte';
	import Blockquote from '$lib/padicons/blockquote.svelte';
	import Horiz from '$lib/padicons/hori.svelte';
	import Break from '$lib/padicons/break.svelte';
	import Error from '../../+error.svelte';

	let element: HTMLDivElement;
	let editor: Editor;
	let title = 'x';
	let note = '';

	async function newNote() {
		const { error } = await supabase.from('amrit-notes').insert([{ title, note }]).select();
		if (error) throw new Error(error.message);
	}

	function handleSave() {
		newNote(); // Corrected the function call
	}

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: `
            <p>
              Namaste,
            </p>
          `,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				note = editor.getHTML();
			}
		});
	});
</script>

<div class="editorbox p-top-64 minH">
	<div class="container rta-column rowgap200">
  <div class="rta-row colgap200 rowgap100">
   <input type="text" bind:value={title}/>
   <button class="buttonmaingrain" on:click={handleSave}>Save</button>
  </div>
		<div class="mypad" bind:this={element} />
	</div>
</div>

<style lang="sass">

.editorbox
 display: flex
 flex-direction: column
 align-items: center
 row-gap: 16px
 input
  border: 1px solid var(--contraster2)
  padding: 4px 8px
  border-radius: 4px
  width: 100%

.container
 width: 720px
 .rta-row
  justify-content: space-between

.mypad
 min-height: 680px
 padding: 16px
 border: 1px solid var(--contraster2)
 border-radius: 4px

.buttonsofeditor
 button
  background: none
  padding: 0
  border: none
  height: 20px

</style>
