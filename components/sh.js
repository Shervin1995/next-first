import React, { Component } from "react";
import service from "../Axios" 
import sh from "./sh.module.css"

// -------------------------------------
// 
// -------------------------------------
class Sh extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        service.getRecentPosts().then(res => {
            this.setState({
                articles: res.data.map(article => ({
                    id: article.id,
                    slug: article.slug,
                    img: article.yoast_head_json.og_image ? article.yoast_head_json.og_image[0].url : "/images/profile.jpg",
                    title: article.title.rendered,
                    content: article.content.rendered
                }))
            })
        }).catch(e => console.log(e))
    }

    render(){

        const {articles} = this.state;

        if (articles.length == 0) {
            return "wait!"
        }

        return articles.map((article, i) => (
            <div key={i+1} style={{marginTop: "2em"}}>
                <div className={sh.bg} style={{backgroundImage: `url(${article.img})`}} />  
                <h3 style={{margin: 0, direction: "rtl"}}> 
                    {article.title}
                </h3>
            </div>
        ))

    }
}

export default Sh