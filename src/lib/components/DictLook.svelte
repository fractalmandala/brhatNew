<script>
  import { onMount } from 'svelte';
  let word = '';
  /**
	 * @type {any[]}
	 */
  let dictionaryData = [];

  onMount(async () => {
    const response = await fetch('/files/testdict.json');
    dictionaryData = await response.json();
  });

  function searchWord() {
    const foundWord = dictionaryData.find((entry) => entry.word === word);
    return foundWord ? foundWord.meaning : 'Word not found';
  }
</script>

<label for="word">Search for a word:</label>
<input type="text" id="word" bind:value="{word}" placeholder="Enter a word" />
<button on:click="{searchWord}">Search</button>
<p>{searchWord()}</p>
