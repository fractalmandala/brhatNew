export async function load({ params }: { params: { mandala: string } }){
  const post = await import(`../${params.mandala}.md`)
  const { title, image } = post.metadata
  const content = post.default

  return {
    content,
    title,
		image,
  }
}