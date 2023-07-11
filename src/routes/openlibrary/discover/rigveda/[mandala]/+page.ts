import supabase from '$lib/utils/db'

export async function load({params}:{params: { mandala:number }}){
	const { data, error } = await supabase
	.from('mandalalinks')
	.select()
	.eq('mandala',`${params.mandala}`)
	.single()
	if (error) throw new Error(error.message)
	return data	
}