import supabase from '$lib/utils/db'

export async function load({params}:{params: { id:any }}){
	const { data, error } = await supabase
	.from('db-brhatstory')
	.select()
	.eq('id',`${params.id}`)
	.eq('type','panelhead')
	.single()
	if (error) throw new Error(error.message)
	return data	
} 