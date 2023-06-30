import { VITE_GITHUB_TOKEN } from '$env/static/private';

export async function GET() {
  const owner = 'fractalmandala';
  const repo = 'BrhatOpenLibrary';
  const path = 'tree/main/teifiles';

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    headers: {
      'Authorization': `token ${VITE_GITHUB_TOKEN}`
    }
  });

  const data = await response.json();
  const content = atob(data.content);  // The content is base64 encoded

  return { 
    status: 200, 
    body: content 
  };
}
