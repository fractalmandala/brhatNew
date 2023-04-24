export async function load({ params }: { params: { scene: string } }){
  const post = await import(`../${params.scene}.md`)
  const { title, tag, image, snip } = post.metadata
  const content = post.default

  return {
    content,
    title,
		image,
		tag,
		snip
  }
}