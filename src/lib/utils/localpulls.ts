/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export async function completeDhiti(){
	const allfiles = import.meta.glob('/src/routes/dhiti/*.md')
	const filed = Object.entries(allfiles)
	const eachfiled = await Promise.all(
		filed.map(async([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const pathitem = path
			const date = new Date(metadata.date as string)
			const month = date.toLocaleString('default', { month: 'long' })
			const year = date.getFullYear().toString()
			return {
				date,
				meta: metadata,
				formattedDate: `${month}, ${year}`,
				linkpath: pathitem
			}
		})
	)
	eachfiled.sort((a, b) => b.date.getTime() - a.date.getTime()) // compare Date objects directly
	return eachfiled
}

export async function getAllTags() {
    const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md');
    const files = Object.entries(allPostFiles);

    const allTags = await Promise.all(
        files.map(async(file) => { // here, we're not destructuring the array
            // @ts-ignore
            const { metadata } = await file[1](); // access the resolver directly
            return metadata.tags; // return the tags of each post
        })
    );

    // allTags is an array of arrays, so we need to flatten it into a single array
		const flattenedTags = [].concat(...allTags);

    // remove duplicates using a Set
    const uniqueTags = Array.from(new Set(flattenedTags));

    return uniqueTags;
}


export async function periodicDhiti(band:string){
	const allfiles = import.meta.glob('/src/routes/dhiti/*.md')
	const filed = Object.entries(allfiles)
	const eachfiled = await Promise.all(
		filed.map(async([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const pathitem = path.slice(11,-3)
			const date = new Date(metadata.date as string)
			const month = date.toLocaleString('default', { month: 'long' })
			const year = date.getFullYear().toString()
			return {
				date,
				meta: metadata,
				formattedDate: `${month}, ${year}`,
				linkpath: pathitem
			}
		})
	)
	eachfiled.sort((a, b) => b.date.getTime() - a.date.getTime()) // compare Date objects directly
	const featuredPosts = eachfiled.filter((post) => post.formattedDate === band)
	return featuredPosts
}

export async function singleTagDhiti(band:string){
	const allfiles = import.meta.glob('/src/routes/dhiti/*.md')
	const filed = Object.entries(allfiles)
	const eachfiled = await Promise.all(
		filed.map(async([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const pathitem = path
			const date = new Date(metadata.date as string)

			return {
				date,
				meta: metadata,
				linkpath: pathitem,
				tags: metadata.tags,
			}
		})
	)
	eachfiled.sort((a, b) => b.date.getTime() - a.date.getTime()) // compare Date objects directly
	const featuredPosts = eachfiled.filter((post) => post.tags.includes(band));
	return featuredPosts
}

export async function adminDocs(){
	const allfiles = import.meta.glob('/src/routes/admin/*.md')
	const filed = Object.entries(allfiles)
	const eachfiled = await Promise.all(
		filed.map(async([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath
			}
		})
	)
	return eachfiled
}

export async function latestDhitiFour(start:any, limit:any){
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	return allPosts.slice(start, limit)
} //latest posts 2, 3 and 4

export async function latestDhitiTen(){
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	return allPosts.slice(0, 9)
} //latest 10 posts

export async function latestDhitiSix(){
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	return allPosts.slice(0, 6)
}

export const allFeaturedPosts = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Featured")
	return featuredPosts
} //all posts in featured category


export async function allBodhas(limit:number) {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Svayambodha" || post.meta.category === "Shatrubodha")
	return featuredPosts.slice(0, limit)

} 


export async function allIKS(limit:number) {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Indian Knowledge Systems")
	return featuredPosts.slice(0, limit)
} 

export async function allCandP(limit:number) {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Culture and Policy")
	return featuredPosts.slice(0, limit)
} 

export async function allDharmaToday(limit:number) {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Dharma Today")
	return featuredPosts.slice(0, limit)
} 


export const filterChosen = async(category:string) => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === category)
	return featuredPosts
} 

export const authorPankaj = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Pankaj Saxena" || post.meta.authortwo === "Pankaj Saxena")
	return authorPosts
} 

export const authorSai = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Sai Priya Chodavarapu" || post.meta.authortwo === "Sai Priya Chodavarapu")
	return authorPosts
} 

export const authorAnurag = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Anurag Shukla" || post.meta.authortwo === "Anurag Shukla")
	return authorPosts
} 

export const authorKavita = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Kavita Krishna Meegama" || post.meta.authortwo === "Kavita Krishna Meegama")
	return authorPosts
} 

export const authorNivedita = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Nivedita Tiwari" || post.meta.authortwo === "Nivedita Tiwari")
	return authorPosts
} 

export const authorAkshay = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Akshay Jha" || post.meta.authortwo === "Akshay Jha")
	return authorPosts
} 

export const authorAnshuman = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Anshuman Panda" || post.meta.authortwo === "Anshuman Panda")
	return authorPosts
} 

export const authorfiltered = async(author:string) => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === author || post.meta.authortwo === author)
	return authorPosts
} 

export const authorJash = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Jash Dholani" || post.meta.authortwo === "Jash Dholani")
	return authorPosts
} 

export const authorSushant = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Sushant Gangoli" || post.meta.authortwo === "Sushant Gangoli")
	return authorPosts
} 

export const authorGuest = async() => {
    const authors = [
        "Jash Dholani",
        "Shri Ramachandra Roddam",
        "Ghora Angirasa",
        "Akshay Shankar",
        "Kate Herse",
        "Prabhav Paturi",
        "Samyak Dixit",
				"Deepak Srinivasan"
    ];

    const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);
    
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // @ts-ignore
            const { metadata } = await resolver();
            const postPath = path.slice(11,-3);
            return {
                meta: metadata,
                path: postPath,
            }
        })
    );
    // @ts-ignore
    allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
    
    const authorPosts = allPosts.filter((post) => authors.includes(post.meta.author) || authors.includes(post.meta.authortwo));
    
    return authorPosts;
} 


export const authorRama = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Shri Ramachandra Roddam" || post.meta.authortwo === "Shri Ramachandra Roddam")
	return authorPosts
} 

export const authorGhora = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Ghora Angirasa" || post.meta.authortwo === "Ghora Angirasa")
	return authorPosts
} 

export const authorShankar = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Akshay Shankar" || post.meta.authortwo === "Akshay Shankar")
	return authorPosts
} 

export const authorKate = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Kate Herse" || post.meta.authortwo === "Kate Herse")
	return authorPosts
} 

export const authorPrabhav = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Prabhav Paturi" || post.meta.authortwo === "Prabhav Paturi")
	return authorPosts
} 

export const authorSamyak = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Samyak Dixit" || post.meta.authortwo === "Samyak Dixit")
	return authorPosts
} 

export const authorRaghav = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Raghava Krishna" || post.meta.authortwo === "Raghava Krishna")
	return authorPosts
} 

export const authorAmrit = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const authorPosts = allPosts.filter((post) => post.meta.author === "Amritanshu Pandey" || post.meta.authortwo === "Amritanshu Pandey")
	return authorPosts
} 


export const mandalaAll = async() => {
	const allPostFiles = import.meta.glob('/src/routes/mandala/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	const tagPosts = allPosts.filter((post) => post.meta.tag === "yes")
	return tagPosts
} 

export const aboutAll = async() => {
	const allPostFiles = import.meta.glob('/src/routes/mandala/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)
			return {
				meta: metadata,
				path: postPath,
			}
		})
	)
	// @ts-ignore
	const tagPosts = allPosts.filter((post) => post.meta.tag === "yes")
	return tagPosts
} 
