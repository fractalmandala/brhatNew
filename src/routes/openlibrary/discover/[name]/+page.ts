import supabase from '$lib/utils/db'

export async function load({params}:{params: { name:string }}){
	const { data, error } = await supabase
	.from('db-textsmeta')
	.select()
	.eq('name',`${params.name}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	
}