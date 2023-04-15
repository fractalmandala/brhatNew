import supabase from '$lib/utils/db'

export async function load({params}:{params: { kanda:any }}){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('type','kandakanda')
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	
}