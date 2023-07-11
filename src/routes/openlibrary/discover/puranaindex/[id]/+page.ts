import supabase from '$lib/utils/db'

export async function load({params}:{params: { id:number }}){
	const { data, error } = await supabase
	.from('db-puranaindex')
	.select()
	.eq('id',`${params.id}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	
}