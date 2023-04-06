export async function load({ params }: { params: { docs: string } }){
  const post = await import(`../${params.docs}.md`)
  const { title } = post.metadata
  const content = post.default

  return {
    content,
    title,
  }
}