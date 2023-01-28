import {Link, Head} from 'next'
import Layout from '../../components/layout' 
import getTag from '../../lib/getTag'
import getTagsSlug from "../../lib/getTagsSlug"


//
var single_article = {
  display: "flex", 
  borderBottom: "solid black 1px", 
  paddingBottom: "10px", 
  paddingTop: "10px"
};

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
            <div key={i+1} style={single_article} >
 
              {/* 1 */}
              <div style={{direction: "rtl"}}>  
              <h4> 
                <Link href={`/${article.slug}`}>
                  {article.title}
                </Link>
                </h4>
              </div>  

              {/* 2 */}
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
  return {
    paths: await getTagsSlug(),
    fallback: false
  }
}

// --------------------------------------------------
// 3. getStaticProps
// --------------------------------------------------
export async function getStaticProps({params}) {
  return {
    props: {
      articles: await getTag(params.slug),
      tagSlug: params.slug
    }
  }
}
