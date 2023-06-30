import { VITE_GITHUB_TOKEN } from '$env/static/private';
import type { RequestHandler } from './$types'

export const get = (async ({ params }) => {
  const owner = 'fractalmandala';
  const repo = 'BrhatOpenLibrary';
  const path = `tree/main/teifiles/${params}`;

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    headers: {
      'Authorization': `token ${VITE_GITHUB_TOKEN}`
    }
  });

  const data = await response.text();
    return {
        body: data
    };
})
