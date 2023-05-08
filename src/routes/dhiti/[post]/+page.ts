export async function load({ params }: { params: { post: string } }){
  const post = await import(`../${params.post}.md`)
  const { title, author, authortwo, category, tags, date, image, excerpt } = post.metadata
  const content = post.default

  return {
    content,
    title,
    author,
		authortwo,
    category,
    tags,
    date,
    image,
		excerpt,
  }
}