import supabase from '$lib/utils/db';

export async function load({ params }: { params: { id: number } }) {
	const { data, error } = await supabase
		.from('soaChapter1')
		.select()
		.eq('id', `${params.id}`)
		.single();
	if (error) throw new Error(error.message);
	return data;
}
