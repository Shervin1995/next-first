import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// --------------------------------------------
// 1. get Sorted Posts Data
// --------------------------------------------
function getSortedPostsData() {

  // 1. Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  // 2. 
  const allPostsData = fileNames.map(fileName => {

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {id, ...matterResult.data}

  })

  // 3. Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) { return 1 } else { return -1 }
  })

}


// --------------------------------------------
// 2. get All Post IDs
// --------------------------------------------
function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

// --------------------------------------------
// 3. get Post Data
// --------------------------------------------
async function getPostData(id) {

  //
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }

}

// --------------------------------------------
// export 
// --------------------------------------------
export {
  getSortedPostsData, 
  getAllPostIds, 
  getPostData
}