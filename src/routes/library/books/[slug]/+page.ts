import supabase  from '$lib/utils/db'

export async function load({params}:{params: { slug:string }}){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('slug',`${params.slug}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}