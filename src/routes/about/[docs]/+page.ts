export async function load({ params }: { params: { docs: string } }){
  const post = await import(`../${params.docs}.md`)
  const { title, about, prev, next } = post.metadata
  const content = post.default

  return {
    content,
    title,
    about,
		prev,
		next
  }
}