import supabase from '$lib/utils/db'

export async function load({params}:{params: { kanda:any, sarga:any, verse:any }}){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.eq('type','sargaverse')
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	
}