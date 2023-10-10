export async function load({ params }: { params: { post: string } }){
  const post = await import(`../${params.post}.md`)
  const { title, about, author } = post.metadata
  const content = post.default

  return {
    content,
    title,
    about,
		author
  }
}