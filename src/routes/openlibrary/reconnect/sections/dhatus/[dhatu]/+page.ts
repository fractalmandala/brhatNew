import supabase from '$lib/utils/db'

export async function load({params}:{params: { dhatu:any }}){
	const { data, error } = await supabase
	.from('vw-coredhatus')
	.select()
	.eq('dhatu',`${params.dhatu}`)
	.single()
	if (error) throw new Error(error.message)
	return data	
} 