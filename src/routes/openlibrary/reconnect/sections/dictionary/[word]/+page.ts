import supabase from '$lib/utils/db'

export async function load({params}:{params: { word:any }}){
	const { data, error } = await supabase
	.from('vw-corewords')
	.select()
	.eq('word',`${params.word}`)
	.single()
	if (error) throw new Error(error.message)
	return data	
}