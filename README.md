# next-demo v1.0
1400 azar 20 Sat | my1stNextjs ;)

## about this version

[watch video](https://archive.org/download/nextjs-demo-v1.0/nextjs-demo-v1.0.mp4)

### benefits

1. get list of tags (with no pagination)
2. get articles of a tag 
3. get article (not styled)
4. Routes are same as recorded links in google console.

### disadvantages

1. slow connecting 

## dev path

1. [vercel dashboard](https://vercel.com/shervin1995/next-demo)
2. [vercel app](https://next-demo-tan.vercel.app/)
3. [nextjs docs > navigate-between-pages](https://nextjs.org/learn/basics/navigate-between-pages)
4. [wp docs > rest api](https://developer.wordpress.org/rest-api/using-the-rest-api/backbone-javascript-client/)
5. [156 indexed routes](https://docs.google.com/spreadsheets/d/1CKLqb_hHedFjxzPamxiFAPpVxHGTKmj16X2Spa06VKI/edit#gid=185234004)
	* /article-slug/
	* /tag/tag-slug/
	* /tag/tag-slug/feed/
	* /category/category-slug/
	* /category/category-slug/feed/
6. [full list of WP APIs](./README/wp-apis.md)


## routing

any folder name in `pages` directory is a sub route. keep it as same as wordpress routes:

* archive posts by tag 			`/tag/:slug`

* archive posts by category 	`/category/:slug`
* single post: 					`/:postSlug`
* single page: 					`/:pageSlug`

### optional 

* archive posts by month 
* archive fifu, mag, vid


## useful link

[Learn Next.js](https://nextjs.org/learn)

```
<Link href={`/tag/${id}`}>
	<a>{title}</a>
</Link>
```