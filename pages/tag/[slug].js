import Head from 'next/head'

import Layout from '../../components/layout' 
import Link from 'next/link'
import getTag from '../../lib/getTag'
import getTagsSlug from "../../lib/getTagsSlug"


// --------------------------------------------------
// 1. Post 
// --------------------------------------------------
export default function Post({ articles, tagSlug }) {
  
  return (
    <Layout>
      <Head>
        <title>مقالات مربوط به تگ {tagSlug}</title>
      </Head>
      <div>
        {
          articles.map((article, i) => (
            <div key={i+1}
            style={{display: "flex", borderBottom: "solid black 1px", paddingBottom: "10px", paddingTop: "10px"}}
            >
 
              <div style={{direction: "rtl"}}>  
              <h4> 
                <Link href={`/${article.slug}`}>
                  {article.title}
                </Link>
                </h4>
              </div>  

              <div style={{marginLeft: "20px"}}>  
                <img width="100px" src={article.img} />
              </div>

            </div>
          ))
        }
      </div>
    </Layout>
  )
}

// --------------------------------------------------
// 2. getStaticPaths
// --------------------------------------------------
export async function getStaticPaths() {
  const paths = await getTagsSlug( );
  return {
    paths,
    fallback: false
  }
}

// --------------------------------------------------
// 3. getStaticProps
// --------------------------------------------------
export async function getStaticProps({ params }) {
  const articles = await getTag(params.slug);
  return {
    props: {
      articles,
      tagSlug: params.slug
    }
  }
}
