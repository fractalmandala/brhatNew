import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();
	if (!session) {
		return {
			a: 'not',
			in: false,
			ems: 'none'
		}
	}
	const { data: testTable } = await supabase.from('test').select('*');
	return {
		a: 'signed in',
		in: true,
		testTable,
		supabase, 
		sessionID: session,
		ems: session.user.email
	};
};
