import supabase from '$lib/utils/db'

export async function brhatWriters(){
  const { data, error } = await supabase
  .from('brhat-team')
  .select()
  .eq('writer', true)
  .order('name')
  if (error) throw new Error(error.message)
  return data
}

export async function fullDhiti() {
  const allfiles = import.meta.glob('/src/routes/dhiti/*.md')
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const date = new Date(metadata.date as string);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        date,
        formattedDate,
        meta: metadata,
        linkpath: pathitem
      };
    })
  )
  return eachfiled.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function limitedDhiti(begin: number, limit:number) {
  const allfiles = import.meta.glob('/src/routes/dhiti/*.md')
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const date = new Date(metadata.date as string);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        date,
        formattedDate,
        meta: metadata,
        linkpath: pathitem,
      };
    })
  )
  return eachfiled.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(begin,limit);
}

export async function dhitiCategories() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allFiles = { ...posts };
  const files = Object.entries(allFiles);
  const allGroups = await Promise.all(
    files.map(async ([, resolver]) => {
      // @ts-expect-error // TypeScript doesn't know the structure of the imported module
      const { metadata } = await resolver();
      return metadata.category;
    })
  );
  // Flatten the array of arrays and then create a set of distinct tags
  const distinctGroups = [...new Set(allGroups.flat().filter(category => category != null))].sort();
  return distinctGroups;
}

export async function selectedDhitiCategory(group: string) {
  const posts = import.meta.glob('/src/routes/dhiti/*.md')
  const allFiles = { ...posts };
  const filed = Object.entries(allFiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const date = new Date(metadata.date as string);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        date,
        formattedDate,
        meta: metadata,
        linkpath: pathitem
      };
    })
  )
  const validPosts = eachfiled.filter((post): post is NonNullable<typeof post> => post !== null);
  const groupedPosts = validPosts
    .filter((post) => post.meta.category && post.meta.category.includes(group))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return groupedPosts
}

export async function tagsWithCounts() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);
  const tagCounts = new Map(); // Create a map to store tag counts

  await Promise.all(
    filed.map(async ([, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver();
      const tags = metadata.tags || [];

      tags.forEach((tag: string) => {
        if (tagCounts.has(tag)) {
          tagCounts.set(tag, tagCounts.get(tag) + 1); // Increment the count
        } else {
          tagCounts.set(tag, 1); // Initialize the count to 1
        }
      });
    })
  );

  const distinctTags = [...tagCounts.keys()]
  const tagsWithCounts = distinctTags.map((tag) => ({
    tag,
    count: tagCounts.get(tag)
  }));
  return tagsWithCounts.sort((a, b) => b.count - a.count);
}

export async function tagsWithCountsAlphabetical() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);
  const tagCounts = new Map(); // Create a map to store tag counts

  await Promise.all(
    filed.map(async ([, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver();
      const tags = metadata.tags || [];

      tags.forEach((tag: string) => {
        if (tagCounts.has(tag)) {
          tagCounts.set(tag, tagCounts.get(tag) + 1); // Increment the count
        } else {
          tagCounts.set(tag, 1); // Initialize the count to 1
        }
      });
    })
  );

  const distinctTags = [...tagCounts.keys()]
  const tagsWithCounts = distinctTags.map((tag) => ({
    tag,
    count: tagCounts.get(tag)
  }));
  return tagsWithCounts.sort((a, b) => a.tag.localeCompare(b.tag));
}

export async function selectedTag(tag: string) {
  const posts = import.meta.glob('/src/routes/dhiti/*.md')
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const defaultDate = "2023-07-07"
      const date = metadata.date ? new Date(metadata.date as string) : new Date(defaultDate);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        meta: metadata,
        linkpath: pathitem,
        date,
        formattedDate,
      };
    })
  )
  const validPosts = eachfiled.filter((post): post is NonNullable<typeof post> => post !== null);
  const groupedPosts = validPosts
    .filter(post => post.meta.tags && post.meta.tags.includes(tag))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return groupedPosts
}

export async function writersWithCountsAlphabetical() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);
  const writerCounts = new Map(); // Create a map to store tag counts

  await Promise.all(
    filed.map(async ([, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver();
      const writers = metadata.author || [];

      writers.forEach((writer: string) => {
        if (writerCounts.has(writer)) {
          writerCounts.set(writer, writerCounts.get(writer) + 1); // Increment the count
        } else {
          writerCounts.set(writer, 1); // Initialize the count to 1
        }
      });
    })
  );

  const distinctWriters = [...writerCounts.keys()]

  const brhatWriterData = await brhatWriters(); // Use brhatWriters directly
  const brhatWriterNames = brhatWriterData.map((writer) => writer.name);
  const writersWithCounts = distinctWriters.map((writer) => ({
    writer,
    count: writerCounts.get(writer),
    isBrhatWriter: brhatWriterNames.includes(writer) // Add this line
  }));
  return writersWithCounts.sort((a, b) => a.writer.localeCompare(b.writer));
}

export async function writersWithCounts() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);
  const writerData = new Map<string, { count: number, totalWords: number }>();

  await Promise.all(
    filed.map(async ([, resolver]) => {
      // @ts-expect-error thus
      const { metadata } = await resolver();
      const writers = metadata.author || [];
      const words = parseInt(metadata.words, 10) || 0;

      writers.forEach((writer: string) => {
        const data = writerData.get(writer);
        if (data) {
          writerData.set(writer, { count: data.count + 1, totalWords: data.totalWords + words });
        } else {
          writerData.set(writer, { count: 1, totalWords: words });
        }
      });
    })
  );

  const distinctWriters = [...writerData.keys()]

  const brhatWriterData = await brhatWriters();
  const brhatWriterNames = brhatWriterData.map((writer) => writer.name);
  const writersWithCounts = distinctWriters.map((writer) => {
    const data = writerData.get(writer) || { count: 0, totalWords: 0 }; // Fallback default object
    return {
      writer,
      ...data,
      isBrhatWriter: brhatWriterNames.includes(writer)
    };
  });
  return writersWithCounts.sort((a, b) => (b.count - a.count)).slice(0, 4);
}

export async function writersWithWordCounts(writerName: string) {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);
  let totalWords = 0;
  let count = 0;

  await Promise.all(
    filed.map(async ([, resolver]) => {
      // @ts-expect-error thus
      const { metadata } = await resolver();
      if (metadata.author && metadata.author.includes(writerName)) {
        const words = parseInt(metadata.words, 10) || 0;
        totalWords += words;
        count++;
      }
    })
  );

  const brhatWriterData = await brhatWriters();
  const isBrhatWriter = brhatWriterData.some(({ name }) => name === writerName);
  console.log(totalWords)
  return {
    writer: writerName,
    count,
    totalWords,
    isBrhatWriter
  };
}

export async function selectedWriter(writer: string) {
  const posts = import.meta.glob('/src/routes/dhiti/*.md')
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const defaultDate = "2023-07-07"
      const date = metadata.date ? new Date(metadata.date as string) : new Date(defaultDate);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      return {
        meta: metadata,
        linkpath: pathitem,
        date,
        formattedDate
      };
    })
  )
  const validPosts = eachfiled.filter((post): post is NonNullable<typeof post> => post !== null);
  const groupedPosts = validPosts
    .filter(post => post.meta.author && post.meta.author.includes(writer))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return groupedPosts
}


export async function archiveGroups() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allFiles = { ...posts };
  const files = Object.entries(allFiles);
  const allGroups = await Promise.all(
    files.map(async ([, resolver]) => {
      // @ts-expect-error // TypeScript doesn't know the structure of the imported module
      const { metadata } = await resolver();
      const date = new Date(metadata.date as string);
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear().toString();
      return { monthYear: `${month}, ${year}`, date };
    })
  );
  allGroups.sort((a, b) => b.date.getTime() - a.date.getTime());
  // Flatten the array of arrays and then create a set of distinct tags
  const distinctGroups = [...new Set(allGroups.map(item => item.monthYear))];
  return distinctGroups;
}

export async function selectedPeriod(period: string) {
  const posts = import.meta.glob('/src/routes/dhiti/*.md')
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles)
  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver()
      const pathitem = path.slice(11, -3)
      const defaultDate = "2023-07-07"
      const date = metadata.date ? new Date(metadata.date as string) : new Date(defaultDate);
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear().toString();
      return {
        meta: metadata,
        linkpath: pathitem,
        date,
        monthYear: `${month}, ${year}`
      };
    })
  )
  const validPosts = eachfiled.filter((post): post is NonNullable<typeof post> => post !== null);
  const groupedPosts = validPosts
    .filter(post => post.monthYear && post.monthYear.includes(period))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return groupedPosts
}

export async function searchList() {
  const posts = import.meta.glob('/src/routes/dhiti/*.md');
  const allfiles = { ...posts };
  const filed = Object.entries(allfiles);

  const eachfiled = await Promise.all(
    filed.map(async ([path, resolver]) => {
      // @ts-expect-error//why
      const { metadata } = await resolver();
      const pathitem = path.slice(11, -3);

      return {
        title: metadata.title,
        category: metadata.category,
        linkpath: pathitem,
        tags: metadata.tags,
        author: metadata.author
      };
    })
  );

  return eachfiled.sort((a, b) => a.title.localeCompare(b.title));
}

export function formatYear(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(date);
};

export function formatDOM(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
  }).format(date);
};

export function formatMonth(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(date);
};