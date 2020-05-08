import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        showPost: null
    }
     
    componentDidUpdate(){
        if (this.props.id) {
            if ( !this.state.showPost || (this.state.showPost && this.state.showPost.id !== this.props.id) ) {
            
                let response = axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id);
                response.then(response => {
                    this.setState({showPost: response.data})
                },reject=>{
                    console.log('rejected')
                })
        }
    }
    }

    deleteMethod= () =>{

        let response = axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id);
        response.then(response => {
            console.log('DEleted:',response)
        },reject=>{
            console.log('rejected')
        })


    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id && this.state.showPost!=null){
            post = (
                <div className="FullPost">
                    <h1>{this.state.showPost.title}</h1>
                    <p>{this.state.showPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteMethod} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;