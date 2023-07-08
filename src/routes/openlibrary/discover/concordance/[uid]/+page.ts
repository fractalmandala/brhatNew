import supabase from '$lib/utils/db'

export async function load({params}:{params: { uid:any }}){
	const { data, error } = await supabase
	.from('vedicconcordance2')
	.select()
	.eq('uid',`${params.uid}`)
	.order('uid')
	.single()
	if (error) throw new Error(error.message)
	return data	
}