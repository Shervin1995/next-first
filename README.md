# my1stNextjs ;)
1400 azar 19 Fri

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