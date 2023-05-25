import supabase from '$lib/utils/db'

export async function load(){
	const { data, error } = await supabase
	.from('brhat-actions')
	.select()
	.eq('link','/rta')
	.single()
	if (error) throw new Error(error.message)
	return data	
}