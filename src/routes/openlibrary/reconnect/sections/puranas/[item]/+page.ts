import supabase from '$lib/utils/db'

export async function load({params}:{params: { item:any }}){
	const { data, error } = await supabase
	.from('vw-puranaindex')
	.select()
	.eq('item',`${params.item}`)
	.single()
	if (error) throw new Error(error.message)
	return data	
} 