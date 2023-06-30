import supabase  from '$lib/utils/db'

export async function load({params}:{params: { texts:string }}){
	const { data, error } = await supabase
	.from('brhat-bolraw')
	.select()
	.eq('slug',`${params.texts}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}