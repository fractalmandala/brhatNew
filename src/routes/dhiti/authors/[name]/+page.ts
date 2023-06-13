import supabase from '$lib/utils/db'

export async function load({ params }: { params: { name: string } }){
	const { data, error } = await supabase
	.from('brhat-authors')
	.select()
	.eq('name',`${params.name}`)
	.single()
	if (error) throw new Error(error.message)
	return data
}