import service from "../Axios"

// --------------------------------------------
// 3. get Post Data
// --------------------------------------------
async function getArticle(postSlug) {

  //
  var res = await service.getPostBySlug(postSlug);
  var article = res.data[0];

  //
  return {
    id: article.id,
    slug: article.slug,
    img: article.yoast_head_json.og_image ? article.yoast_head_json.og_image[0].url : "/images/profile.jpg",
    title: article.title.rendered,
    content: article.content.rendered
  }
   
  
}

//
export default getArticle;