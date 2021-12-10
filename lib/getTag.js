import service from "../Axios"

// --------------------------------------------
// 3. get Post Data
// --------------------------------------------
async function getTag(tagSlug) {

  //
  var tag_res = await service.getTags();
  var tags = tag_res.data; 
  var tag = tags.find((i, count) => decodeURI(i.slug) == tagSlug);  
  var tagID = tag.id; 
  var res = await service.getPostsByTag(tagID);

  //
  var articles = res.data.map(article => ({
    id: article.id,
    slug: article.slug,
    img: article.yoast_head_json.og_image ? article.yoast_head_json.og_image[0].url : "/images/profile.jpg",
    title: article.title.rendered,
    content: article.content.rendered
  }));
  
  //
  return articles
  
}

//
export default getTag;