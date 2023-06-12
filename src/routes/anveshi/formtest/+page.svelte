<script lang="ts">
	import { onMount } from 'svelte';
	import supabase from '$lib/utils/db';

	let file: File | null = null;
	const handleFileChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			file = input.files[0];
		}
	};

	const handleSubmit = async () => {
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);

		const { data, error } = await supabase.storage.from('formuploads').upload(file.name, file);
		if (error) {
			console.error(error);
		} else {
			console.log(data);
		}
	};
</script>

<div class="rta-column minH">
	<form on:submit|preventDefault={handleSubmit}>
		<label for="file-input">Choose a file:</label>
		<input type="file" id="file-input" name="file" accept=".jpg,.jpeg,.png,.gif" required />
		<button type="submit">Upload</button>
	</form>
</div>

<style lang="sass">

.minH
	padding-top: 128px

</style>
