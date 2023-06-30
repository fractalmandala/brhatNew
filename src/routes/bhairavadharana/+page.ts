import supabase from '$lib/utils/db'

export async function load(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('name','Bhairava Dhāraṇā')
	.single()
	if (error) throw new Error(error.message)
	return data
}