import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();
	if (!session) {
		console.log(session)
	}
	const { data: testTable } = await supabase.from('test').select('*');
	return {
		a: 'signed in',
		in: true,
		testTable,
		supabase, 
		session, 
	};
};
