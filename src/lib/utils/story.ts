import supabase from '$lib/utils/db'

export async function StoryBoard1(type:string){
		const { data, error} = await supabase
		.from('db-brhatstory')
		.select()
		.eq('panel',1)
		.eq('type',type)
		.order('seq')
		if (error) throw new Error(error.message)
		return data		
	}

export async function StoryBoardPanel(id:any){
		const { data, error} = await supabase
		.from('db-brhatstory')
		.select()
		.eq('panel',id)
		.eq('type','panelhead')
		.order('seq')
		if (error) throw new Error(error.message)
		return data		
	}

export async function StoryBoardBullet(id:any){
		const { data, error} = await supabase
		.from('db-brhatstory')
		.select()
		.eq('panel',id)
		.eq('type','bullet')
		.order('seq')
		if (error) throw new Error(error.message)
		return data		
	}

export async function StoryBoardCallout(id:any){
		const { data, error} = await supabase
		.from('db-brhatstory')
		.select()
		.eq('panel',id)
		.eq('type','callout')
		.order('seq')
		if (error) throw new Error(error.message)
		return data		
	}

export async function brCalendar(pagelim:any){
	const { data, error} = await supabase
	.from('brhatstorycalendar')
	.select()
	.lte('id',pagelim)
	.order('id',{ascending: false})
	if (error) throw new Error(error.message)
	return data		
}

export async function brCalendar2(){
	const { data, error} = await supabase
	.from('brhatstorycalendar')
	.select()
	.gte('id',10)
	.order('id')
	if (error) throw new Error(error.message)
	return data		
}

export async function brCalendar3(){
	const { data, error} = await supabase
	.from('brhatstorycalendar')
	.select()
	.neq('type','calendaritem')
	.order('id')
	if (error) throw new Error(error.message)
	return data		
}