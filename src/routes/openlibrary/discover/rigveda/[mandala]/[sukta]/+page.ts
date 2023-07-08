import supabase from '$lib/utils/db'

export async function load({ params }:{ params: { mandala: number, sukta: string }}){
	const { data, error } = await supabase
	.from('dbrv-suktas')
	.select()
	.eq('suktacorrected',`${params.sukta}`)
	.eq('mandala',`${params.mandala}`)
	.single()
	if (error) throw new Error(error.message)
	return data
}