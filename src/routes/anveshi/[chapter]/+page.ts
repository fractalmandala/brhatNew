import supabase from '$lib/utils/db'

export async function load({ params }: { params: { chapter: string } }){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.eq('live', true)
	.eq('chapter',`${params.chapter}`)
	.single()
	if (error) throw new Error(error.message)
	return data
}