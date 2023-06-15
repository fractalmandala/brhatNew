/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from '$lib/utils/db'

export async function load({params}:{params: { kanda:any, sarga:any, verse:any }}){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('type','sargaverse')
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	
}