<script lang="ts">
 
	import { onMount } from 'svelte';
	import StarterKit from '@tiptap/starter-kit';
	import { Editor } from '@tiptap/core';
	import { page } from '$app/stores';
	import Header from '$lib/components/NewHeader.svelte';
	import { breakZero, breakOne, breakTwo, themeMode, innerWidth } from '$lib/stores/globalstores';
	import type { PageData } from './$types';
	import '$lib/styles/tiptap.scss';

	let element: any;
	let editor: any;

	export let data: PageData;
	$: supabase = data.supabase;

	let loadedData: any[] = [];
	async function loadData() {
		const { data, error } = await supabase.from('test').select('*');

		if (!error) {
			loadedData = data;
		}
	}

	$: if ($page.data.session) {
		loadData();
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
			}
		});
	});
</script>

<Header isSwitch={false}>
</Header> 
<div
	class="rta-grid grid2 appshell minH"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="rta-side rta-column rowgap200">
		<div class="rta-column">
			<form method="POST" action="?login" class="loginform rta-column rowgap100">
				<div class="rta-column rowgap100">
					<input name="email" type="email" placeholder="email" />
					<input name="password" type="password" placeholder="password" />
				</div>
				<div class="rta-row colgap100">
					<button>Log In</button>
					<!--
					<button class="glass">Sign Up</button>
					-->
				</div>
			</form>
   <form method="POST" action="?signout">
    <button class="newbutton red">Log Out</button>
   </form>
		</div>
		{#if !$page.data.session}
			<button
				class="blank-button rta-row ycenter colgap100"
				on:click={() => {
					supabase.auth.signInWithOAuth({
						provider: 'google',
						options: { scopes: 'https://www.googleapis.com/auth/userinfo.email' }
					});
				}}
			>
				<p>Sign In with Google</p>
				<img class="iconimage" src="/images/icongoogle.png" alt="google" />
			</button>
		{:else}
			<p>user:</p>
			<pre>{JSON.stringify($page.data.session.user, null, 2)}</pre>
			<p>client-side data fetching with RLS</p>
			<pre>{JSON.stringify(loadedData, null, 2)}</pre>
		{/if}
	</div>
	<div class="rta-main">
		<div class="editorbox">
			{#if editor}
				<div class="buttonsofeditor">
					<button
						on:click={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						class={editor.isActive('bold') ? 'is-active' : ''}
					>
						bold
					</button>
					<button
						on:click={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						class={editor.isActive('italic') ? 'is-active' : ''}
					>
						italic
					</button>
					<button
						on:click={() => editor.chain().focus().toggleStrike().run()}
						disabled={!editor.can().chain().focus().toggleStrike().run()}
						class={editor.isActive('strike') ? 'is-active' : ''}
					>
						strike
					</button>
					<button
						on:click={() => editor.chain().focus().toggleCode().run()}
						disabled={!editor.can().chain().focus().toggleCode().run()}
						class={editor.isActive('code') ? 'is-active' : ''}
					>
						code
					</button>
					<button on:click={() => editor.chain().focus().unsetAllMarks().run()}>
						clear marks
					</button>
					<button on:click={() => editor.chain().focus().clearNodes().run()}> clear nodes </button>
					<button
						on:click={() => editor.chain().focus().setParagraph().run()}
						class={editor.isActive('paragraph') ? 'is-active' : ''}
					>
						paragraph
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						class={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
					>
						h1
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						class={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
					>
						h2
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						class={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
					>
						h3
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
						class={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
					>
						h4
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
						class={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
					>
						h5
					</button>
					<button
						on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
						class={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
					>
						h6
					</button>
					<button
						on:click={() => editor.chain().focus().toggleBulletList().run()}
						class={editor.isActive('bulletList') ? 'is-active' : ''}
					>
						bullet list
					</button>
					<button
						on:click={() => editor.chain().focus().toggleOrderedList().run()}
						class={editor.isActive('orderedList') ? 'is-active' : ''}
					>
						ordered list
					</button>
					<button
						on:click={() => editor.chain().focus().toggleCodeBlock().run()}
						class={editor.isActive('codeBlock') ? 'is-active' : ''}
					>
						code block
					</button>
					<button
						on:click={() => editor.chain().focus().toggleBlockquote().run()}
						class={editor.isActive('blockquote') ? 'is-active' : ''}
					>
						blockquote
					</button>
					<button on:click={() => editor.chain().focus().setHorizontalRule().run()}>
						horizontal rule
					</button>
					<button on:click={() => editor.chain().focus().setHardBreak().run()}> hard break </button>
					<button
						on:click={() => editor.chain().focus().undo().run()}
						disabled={!editor.can().chain().focus().undo().run()}
					>
						undo
					</button>
					<button
						on:click={() => editor.chain().focus().redo().run()}
						disabled={!editor.can().chain().focus().redo().run()}
					>
						redo
					</button>
				</div>
			{/if}
			<div class="mypad" bind:this={element} />
		</div>
	</div>
</div>

<style lang="sass">

.light, .dark
	background: var(--background)

.buttonsofeditor
	background: var(--opposite)
	padding: 16px
	border-radius: 8px 8px 0 0 
	button
		background: var(--opposite)
		border: 1px solid var(--background)
		color: var(--background)
		font-size: 12px
		text-transform: uppercase
		font-weight: 500
		border-radius: 4px
		&:hover
			background: #fe4a49

.mypad
	min-height: 600px


.appshell
	display: grid
	grid-auto-flow: row
	min-height: 100vh

.appshell.levelzero
	grid-template-columns: 320px 1fr
	grid-template-areas: "side main"
	padding-left: 48px
	padding-right: 48px
	column-gap: 64px	
	.rta-side
		grid-area: side
		padding-top: 128px
		position: sticky
		top: 0
	.rta-main
		grid-area: main
		.editorbox
			border: 2px solid var(--opposite)
			border-radius: 10px
			width: 88%
			.mypad
				padding: 16px

.appshell.leveltwo
	grid-template-columns: 1fr
	grid-template-areas: "side" "main"
	padding-top: 88px
	padding-left: 32px
	padding-right: 32px

input
	border: 1px solid var(--borderline)
	border-radius: 4px
	padding: 5px

.blank-button
	border: 1px solid var(--borderline)
	border-radius: 4px
	padding: 2px 8px
	cursor: pointer
	max-width: 200px
	&:hover
		background: var(--opposite)
		p
			color: var(--background)

.iconimage
	object-fit: contain
	width: 24px
	height: 24px

</style>
