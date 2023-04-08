import supabase from '$lib/utils/db'

export async function SuktasofMandala(mandala: any){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',mandala)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala1(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',1)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala2(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',2)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala3(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',3)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala4(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',4)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala5(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',5)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala6(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',6)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala7(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',7)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala8(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',8)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala9(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',9)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala10(){
		const { data, error} = await supabase
		.from ('db-rigvedasuktas')
		.select()
		.eq('mandala',10)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function RcasofSukta(mandala: any,sukta: any){
	const { data, error} = await supabase
	.from('db-rigveda')
	.select()
	.eq('mandala', mandala)
	.eq('suktacorrected',sukta)
	.order('primvalue')
	if (error) throw new Error(error.message)
	return data
}

export async function Paginator(prim: number){
	const { data, error} = await supabase
	.from('db-rigveda')
	.select()
	.eq('primvalue',prim)
	.order('primvalue')
	if (error) throw new Error(error.message)
	return data
}

export async function rvRishis(mandala: any,sukta: any,rca: any){
	const { data, error } = await supabase
	.from('vw-rvrishis')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function rvDevatas(mandala: any,sukta: any,rca: any){
	const { data, error } = await supabase
	.from('vw-rvdevatas')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function rvChandas(mandala: any,sukta: any,rca: any){
	const { data, error } = await supabase
	.from('vw-rvchandas')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function searchRV(inputword: string){
	const { data, error} = await supabase
	.from('db-rigveda')
	.select()
	.textSearch('ftsman',inputword)
	.order('primvalue')
	if (error) throw new Error(error.message)
	return data
}

	export async function padasofRamayana(kanda:any, sarga:any, verse:any, pada:any){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.eq('kanda',kanda)
		.eq('sarga',sarga)
		.eq('verse', verse)
		.eq('pada', pada)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function versesofRamayana(kanda:any, sarga:any){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.eq('kanda',kanda)
		.eq('sarga',sarga)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function sargasofRamayana(filteredKanda:any){
		const { data, error} = await supabase
		.from ('db-ramayanaindex')
		.select()
		.eq('kanda',filteredKanda)
		.eq('type', 'kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function kandasofRamayana(){
		const { data, error} = await supabase
		.from ('db-ramayanaindex')
		.select()
		.eq('type', 'kandakanda')
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function entireRamayana(upperlimit:any, lowerlimit:any){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.lte('id',upperlimit)
		.gte('id',lowerlimit)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}
