import { fail, redirect, type ActionFailure } from '@sveltejs/kit';
import type { Actions } from './$types';
import { showChip } from '$lib/stores/globalstores';

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  if (!session) {
    const inner = false
		const profile = 'none'
		return { inner, profile }
  }
	const inner = true
  const { data: profile } = await supabase
    .from('profiles')
    .select(`username, full_name, website, avatar_url`)
    .eq('id', session.user.id)
    .single()

  return { session, profile, inner }
}

export const actions: Actions = {

  update: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const fullName = formData.get('fullName') as string
    const username = formData.get('username') as string
    const website = formData.get('website') as string
    const avatarUrl = formData.get('avatarUrl') as string
    const session = await getSession()
    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      full_name: fullName,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    })

    if (error) {
      return fail(500, {
        fullName,
        username,
        website,
        avatarUrl,
      })
    }

    return {
      fullName,
      username,
      website,
      avatarUrl,
    }
  },

  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/members')
    }
  },

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
		throw redirect(303, '/members');
	},

	signup: async({
		request,
		locals: { supabase }
	}): Promise<ActionFailure<{ error: string; values?: { email: string } }>> => {
			const signupData = await request.formData();
			const email = signupData.get('email') as string;
			const password = signupData.get('password') as string;
			if (!email) {
				showChip('enter email!', '#fe4a49');
			}
			if (!password) {
				showChip('password!', '#fe4a49');
			}
			const { error } = await supabase.auth.signUp({
				email: email,
				password: password,
				options: { emailRedirectTo: '/members' }
			});
		if (error) {
			showChip('Error! Please check submitted details again.', '#fe4a49');
		} 

		throw redirect(303, '/members');
		},

}
