import React, { Component } from 'react';
import axios from 'axios' 
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state =  {
        posts: [],
        selectedpostId: null,
        error: false

    }


    componentDidMount(){
        axios.get('/posts')
        .then(response =>{
            console.log(response)
            let fewpost=response.data.slice(0,4);
            let updatedpost=fewpost.map(post=>({...post,author: 'Akshay'}))
            this.setState({
                posts: updatedpost
            })
        }
        // ,reject=>{
        //     console.log("rejected")
        // }
        )
        .catch(error => {
            console.log('Error',error);
            
            this.setState({error: true,
                            posts: <p>ERROR WHILE FETCHING THE DATA</p>})
        });
    }

    showselectedPost(id){
       this.setState({selectedpostId: id})
       
    }

   

    render () {
        let posts = null
        if (!this.state.error){
        posts = this.state.posts.map(post => (
        <Post title={post.title} 
              key={post.id} 
              author={post.author}
              clicked={() => this.showselectedPost(post.id)}/>
        ))
        }else {
        posts = this.state.posts
        }



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