<script lang="ts">

  import { onMount, afterUpdate } from 'svelte';
  let tables:any = [];
	export let mandala:any
	export let sukta:any
	export let rca:any

  afterUpdate(async () => {
    const response = await fetch(`https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/rigveda/m${mandala}/rigveda_0000_${sukta}_${rca}_9981.conllu`);
    const data = await response.text();
    const rows = data.split('\n');
		console.log(mandala,sukta,rca)
    const sentences: Record<number, string> = {}

    let tableHTML = '<table class="conllu-table">';
    tableHTML += '<tr><th>SENTENCE</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>FEATS</th><th>MISC</th></tr>';

    let currentSentence:any = null;
		let freezeSentence = false

    rows.forEach((row, i) => {
      if (row.trim() === '') {
        return;
      }

      const columns = row.split('\t');
      const wordNumber = columns[0];
      const form = columns[1];
      const lemma = columns[2];
      const upos = columns[3];
      const feats = columns[5];
      const misc = columns[9];


      if (wordNumber.startsWith('# text')) {
        currentSentence = row.slice(row.indexOf('\t') + 9);
        if (!(i + 1 < rows.length && rows[i + 1].startsWith('# sent_id'))) {
          freezeSentence = true;
        }
        return;
      }

		      if (wordNumber.startsWith('#') || form.includes('-')) {
        return;
      }

      if (wordNumber === '1') {
        const sentenceNumber = Object.keys(sentences).length + 1;
        sentences[sentenceNumber] = currentSentence;
      }

      const sentenceNumber = Object.keys(sentences).length;
      if (sentences[sentenceNumber] == null || sentences[sentenceNumber] == undefined || lemma == '_') {
        return;
      }

      tableHTML += '<tr>';
      tableHTML += `<td>${form}</td>`;
      tableHTML += `<td>${lemma}</td>`;
      tableHTML += `<td>${upos}</td>`;
      tableHTML += `<td>${feats}</td>`;
      tableHTML += `<td>${misc}</td>`;
      tableHTML += '</tr>';
    });

    tableHTML += '</table>';

    tables = [...tables, tableHTML];
  });
</script>

 <div class="c-c-c-c istop">
{#each tables as tableHTML}
<table>
{tableHTML}
</table>
{/each}
</div>

<style>
.istop {
	margin-top: 120px;
	overflow-x: scroll;
}
</style>
