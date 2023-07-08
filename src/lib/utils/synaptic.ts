import supabase from '$lib/utils/db'

export async function RVPagination(msr:string){
		const { data, error} = await supabase
		.from ('db-rvpagination')
		.select()
		.eq('msr',msr)
		.order('primvalue')
		if (error) throw new Error(error.message)
		return data
}

export async function SuktasofMandalaFull(mandala: number, start: number, end: number){
		const { data, error} = await supabase
		.from ('db-rigveda')
		.select()
		.eq('mandala',mandala)
		.order('primvalue')
		.range(start, end)
		if (error) throw new Error(error.message)
		return data
	}

export async function SuktasofMandala(mandala: number){
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

export async function RcasofMandala(ms:string){
	const { data, error} = await supabase
	.from('db-rigveda')
	.select()
	.eq('ms', ms)
	if (error) throw new Error(error.message)
	return data
}

export async function RcasofSukta(mandala: number,sukta: number){
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

export async function rvRishis(mandala: number,sukta: number,rca: number){
	const { data, error } = await supabase
	.from('vw-rvrishis')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function rvDevatas(mandala: number,sukta: number,rca: number){
	const { data, error } = await supabase
	.from('vw-rvdevatas')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function rvChandas(mandala: number,sukta: number,rca: number){
	const { data, error } = await supabase
	.from('vw-rvchandas')
	.select()
	.eq('mandala',mandala)
	.eq('suktacorrected',sukta)
	.eq('rca',rca)
	if (error) throw new Error(error.message)
	return data	
}

export async function distinctRishis(){
	const { data, error } = await supabase
	.from('vw-rvdistinctrishis')
	.select()
	if (error) throw new Error(error.message)
	return data	
}

export async function distDevs(){
	const { data, error } = await supabase
	.from('vw-rvdistinctdevas')
	.select()
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

export async function RVWords(msr:string){
	const { data, error } = await supabase
	.from('vw-wordsofrv')
	.select()
	.eq('msr',msr)
	.order('msr')
	if (error) throw new Error(error.message)
	return data
}

	export async function padasofRamayana(kanda:string, sarga:string, verse:string){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.eq('kanda',kanda)
		.eq('sarga',sarga)
		.eq('verse', verse)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function versesofRamayana(kanda:number, sarga:number, start:number, end: number){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.eq('kanda',kanda)
		.eq('sarga',sarga)
		.order('id')
		.range(start, end)
		if (error) throw new Error(error.message)
		return data
	}

	export async function versesByKanda(kanda:number, start:number, end:number){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.eq('kanda',kanda)
		.order('id')
		.range(start,end)
		if (error) throw new Error(error.message)
		return data
	}

	export async function sargasofRamayana(filteredKanda:number){
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

	export async function verseSlug(id:number){
		const { data, error} = await supabase
		.from ('db-ramayanaindex')
		.select()
		.eq('id', id)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

	export async function entireRamayana(upperlimit:number, lowerlimit:number){
		const { data, error} = await supabase
		.from ('db-ramayana')
		.select()
		.lte('id',upperlimit)
		.gte('id',lowerlimit)
		.order('id')
		if (error) throw new Error(error.message)
		return data
	}

export async function vargaGroups(varga:string){
	const { data, error } = await supabase
	.from('db-amarakosha')
	.select()
	.eq('varga',varga)
	.order('primvalue')
	if ( error ) throw new Error(error.message)
	return data
}

export async function dbDictionary(word:string){
	const { data, error } = await supabase
	.from('db-dictionary')
	.select()
	.eq('word',word)
	.order('id')
	if ( error ) throw new Error(error.message)
	return data	
}

export async function allDhatus(){
	const { data, error } = await supabase
	.from('vw-coredhatus')
	.select()
	.order('dhatu')
	if ( error ) throw new Error(error.message)
	return data	
}

export async function dbDhatus(start:number, end:number){
	const { data, error} = await supabase
	.from('db-dhatupathafixed')
	.select()
	.order('id')
	.range(start,end)
	if (error) throw new Error(error.message)
	return data
 }

export async function dhatuNode(dhatu:string){
	const { data, error } = await supabase
	.from('db-dhatupathafixed')
	.select()
	.eq('dhaturomanized',dhatu)
	.order('id')
	if ( error ) throw new Error(error.message)
	return data
}

export async function dhatuKartari(id:string){
	const { data, error} = await supabase
	.from('db-dhatustore')
	.select()
	.eq('ind',id)
	.order('id')
	if ( error ) throw new Error(error.message)
	return data
}

export async function dhatuReference(idx:string,idy:string){
	const { data, error } = await supabase
	.from('db-dhatureference')
	.select()
	.eq('xaxis',idx)
	.eq('yaxis',idy)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function rmLemma(select:string){
	const { data, error } = await supabase
	.from('vw-ramayanalemmawithmeanings')
	.select()
	.eq('newslug',select)
	.order('id')
	if (error) throw new Error(error.message)
	return data	
}

export async function dynamicTable(name:string, limit:number){
	const { data, error } = await supabase
	.from(`db-${name}`)
	.select()
	.order('id')
	.range(0,limit)
	if (error) throw new Error(error.message)
	return data	
}