import supabase from '$lib/utils/db'

export async function load({ params }: { params: { issue: number } }){
	const { data, error } = await supabase
	.from('brhat-newsletter')
	.select()
	.eq('type','issue')
	.eq('issueno',`${params.issue}`)
	.single()
	if (error) throw new Error(error.message)
	return data
}