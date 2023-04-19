import supabase from '$lib/utils/db'

export async function load({ fetch, params }:{ fetch: Function, params: { mandala: number, sukta: number, rca: number }}){
	
	const { data, error } = await supabase
	.from('db-rigveda')
	.select()
	.eq('rca',`${params.rca}`)
	.eq('suktacorrected',`${params.sukta}`)
	.eq('mandala',`${params.mandala}`)
	.order('primvalue')
	.single()
	if (error) throw new Error(error.message)
	return { props: { data, fetch } }
}