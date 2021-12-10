
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout' 
import getArticle from "../lib/getArticle"
import getArticlesSlug from "../lib/getArticlesSlug"


// --------------------------------------------------
// 1. Post 
// --------------------------------------------------
export default function Post({ article }) {
  
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
         
        <article style={{direction: "rtl"}}>
        
          <Image width={100} height={100} src={article.img} />

          <h1> {article.title} </h1> 
        
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        
        </article>

      </div>
    </Layout>
  )
}

// --------------------------------------------------
// 2. getStaticPaths
// --------------------------------------------------
export async function getStaticPaths() {
  const paths = await getArticlesSlug( );
  return {
    paths,
    fallback: false
  }
}

// --------------------------------------------------
// 3. getStaticProps
// --------------------------------------------------
export async function getStaticProps({ params }) {
  const article = await getArticle(encodeURI(params.slug));
  return {
    props: {
      article
    }
  }
}
