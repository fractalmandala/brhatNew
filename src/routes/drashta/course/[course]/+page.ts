import supabase from '$lib/utils/db'

export async function load({ params }: { params: { course: string } }){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	.eq('course',`${params.course}`)
	.single()
	if (error) throw new Error(error.message)
	return data
}