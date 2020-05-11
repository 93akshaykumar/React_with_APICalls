import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import './Blog.css'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
//import FullPost from '../Blog/FullPost/FullPost'
import ShowError from '../../components/404_error/404_error'
import AsyncComponent from '../../hoc/asyncComponent'

// const asyncCoAsyncNewPost = AsyncComponent(()=> {
//     return  import('../Blog/NewPost/NewPost')
// }) 

class Blog extends Component {
   
    render () {
        



        return (
            <div className='Blogs'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' exact >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'

                            }} exact>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/h1/Posts" exact render={() => <Posts />}/>
                    <Route path="/h1" render={() => <h1>Hello</h1>}/> */}
                    <Switch>              
                    {/* <Route path="/new-post" exact component={NewPost}/> */}
                    <Route path="/posts" exact component={Posts}/>
                    
                    <Redirect to='/posts' from='/' exact />

                    {/* <Route component={ShowError}/> */}
                    
                    </Switch>
                    
            </div>
        );
    }
}

export default Blog;