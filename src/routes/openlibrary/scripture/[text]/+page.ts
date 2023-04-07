export async function load({ params }: { params: { text: string } }){
  const post = await import(`../${params.text}.md`)
  const { title, author, version } = post.metadata
  const content = post.default

  return {
    content,
    title,
    author,
		version
  }
}