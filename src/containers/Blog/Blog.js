import React, { Component } from 'react';
import axios from 'axios' 
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state =  {
        posts: [],
        selectedpostId: null

    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            let fewpost=response.data.slice(0,4);
            let updatedpost=fewpost.map(post=>({...post,author: 'Akshay'}))
            this.setState({
                posts: updatedpost
            })
        },reject=>{
            console.log("rejected")
        });
    }

    showselectedPost(id){
       this.setState({selectedpostId: id})
       
    }

   

    render () {

        const posts = this.state.posts.map(post => (
        <Post title={post.title} 
              key={post.id} 
              author={post.author}
              clicked={() => this.showselectedPost(post.id)}/>
        ))



        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedpostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;