
# full list of WP APIs 

[home](../README.md)



before learning fetch data in next.js we should get a full list of apis with its method, necessary inputs to receive wanted.

note: add `https://juniorfrontend.ir/wp-json/` before each one.
 
### Overview

1. login 
2. post (post-type) 
    * getAll, getOne
    * create one
    * update one
    * delete one


### 1. Login

Login: 
* POST `jwt-auth/v1/token` - {username, password} - res.token, err.responseJSON.message
note: to logout just remove localStorage

### 2. post (post-type)

GetAll:
* GET `wp/v2/posts?per_page=5&_embed=true` - (empty)
note: doesn't need token

Create: 
* POST `wp/v2/posts/`- {title, content, status: 'publish'}
    * setRequestHeader('Authorization', 'Bearer' + token)

Update: 
* POST `wp/v2/posts/:id` - {title, content}
    * setRequestHeader('Authorization', 'Bearer' + token )

Delete:
* DELETE `wp/v2/posts/:id` - (empty)
    * setRequestHeader('Authorization', 'Bearer' + token )



[next](./new-endpoints.md)