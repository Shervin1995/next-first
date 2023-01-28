import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import getTags from "../lib/getTags"


// ------------------------------------------ 
// Home
// ------------------------------------------ 
function Home({ tags }) {

  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
      {
        tags.map((tag, i) => (
          <div key={i+1} style={{marginTop: 20}} > 
            <Link href={`/tag/${tag.slug}`} >
              {tag.title}
            </Link> 
          </div>
        ))
      }
      </section>

    </Layout>
  )
}

// ------------------------------------------ 
// getStaticProps
// ------------------------------------------ 
export async function getStaticProps() {
   
  const tags = await getTags("tags");
  
  return {
    props: {
      tags: tags
    }
  }
}

export default Home
