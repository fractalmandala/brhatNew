import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import supabase from '$lib/utils/db'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user:any

export const load: PageLoad = async ({ params, parent }) => {
    // parent-based operation
	const { session, supabase: parentSupabase } = await parent();
	if (!session) {
		user = 'sessionuser';
	} else {
		user = session.user;
	}
    // params-based operation
	const { data: issueData, error } = await supabase
		.from('brhat-newsletter')
		.select()
		.eq('type','issue')
		.eq('issueno',`${params.issue}`)
		.single()
	if (error) throw new Error(error.message)

    // return merged properties
	return {
		supabase: parentSupabase,
		session,
		issueData,
		user
	};
};
