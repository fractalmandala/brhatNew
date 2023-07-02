import { redirect, type ActionFailure } from '@sveltejs/kit';
import { showChip } from '$lib/stores/globalstores';
import type { Actions } from './$types';

export const actions: Actions = {

	login: async ({
		request,
		locals: { supabase }
	}): Promise<ActionFailure<{ error: string; values?: { email: string } }>> => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (!email) {
			showChip('enter email!', '#fe4a49');
		}
		if (!password) {
			showChip('password!', '#fe4a49');
		}

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			showChip('invalid credentials!', '#fe4a49');
		}

		throw redirect(303, '/newsletter/1');
	},

	signout: async ({ 
		locals: { supabase } 
	}) => {
		await supabase.auth.signOut();
		throw redirect(303, '/');
	}
};