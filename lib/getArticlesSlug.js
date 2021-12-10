
import service from "../Axios"

// --------------------------------------------
// 2. get All tags slug
// --------------------------------------------
async function getArticlesSlug() {
    
    // 
    var arr;

    //
    await service.getPosts().then(res => {
      arr = res.data
    }).catch(e => console.log(e));
    
    // 
    var slugs = arr.map(one => ({
        params: {
          slug: decodeURI(one.slug)
        }
      }))

    //
    return slugs

}

//
export default getArticlesSlug