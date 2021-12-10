import axios from "axios";

// ---------------------------------------------------
// get token from browser
// ---------------------------------------------------
// function authHeader() { 
//   let data = localStorage.getItem('psyAccessToken');
//   if (data) { return { "x-access-token": data }; } else { return {}; }
// };

// ---------------------------------------------------
// set API for axios 
// ---------------------------------------------------
const http = axios.create({ 
  baseURL: "https://juniorfrontend.ir/wp-json",
  headers: {
    "Content-type": "application/json"
  }
}); 

//-----------------------------------------------------
// call APIs
//-----------------------------------------------------
class service {
  
  // --------------------------------------------
  // authorization
  // --------------------------------------------

  sendMobile(mobile){
    return http.get(`/login?mobile=${mobile}`);
  } 

  // --------------------------------------------
  //  
  // --------------------------------------------
 
  // profile() { 
  //   return http.get(`/profile`, { headers: authHeader() });
  // }
   

  // ---------------------------------------------------
  // get single
  // ----------------------------------------------------

  // posts, tags, categories, pages, products
  
  //
  getTags() { 
    return http.get(`/wp/v2/tags?per_page=100`);
  }
 
  //
  getPostBySlug(slug){
    return http.get(`/wp/v2/posts?slug=${slug}`)
  }

  // 
  getPostsByTag(tagID){
    return http.get(`/wp/v2/posts?per_page=100&tags=${tagID}`);
  }

  //
  getPosts(){
    return http.get(`/wp/v2/posts?per_page=100`);
  }
 

}

// 
export default new service();