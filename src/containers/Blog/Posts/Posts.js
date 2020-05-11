import React, {Component} from 'react';
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
class Posts extends Component {

    state =  {
        posts: [],
        selectedpostId: null,
        error: false

    }

    showselectedPost(id){
        this.setState({selectedpostId: id})
        this.props.history.push( '/post/' + id );
        // this.props.history.push( '/posts/' + id );
        
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
 

    render(){
        console.log('this.props.match.path',this.props.location.pathname)
        let posts = null
        if (!this.state.error){
        posts = this.state.posts.map(post => (
            // <Link to={'/post/'+post.id} key={post.id}>
        <Post title={post.title}  
              author={post.author}
              key={post.id}
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
                {/* <Route path={this.props.match.url + '/:id'} exact Component={FullPost} /> */}
                <Route path="/post/:id" exact component={FullPost}/>
               
            </div>
        )
    }

}

export default Posts