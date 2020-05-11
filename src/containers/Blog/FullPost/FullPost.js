import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        showPost: null
    }
     
//     componentDidUpdate(prevProps,prevState) {
//         if (this.prevProps !== this.prevState) {
//         console.log('userId changed ');
//      }
//    }

    Constructor(){
        console.log("gfdhjggfhjk")
    }

    componentDidMount(){
        console.log('component---',this.props)

        if (this.props.match.params.id) {
            if ( !this.state.showPost || (this.state.showPost && this.state.showPost.id !== this.props.match.params.id) ) {
            
                let response = axios.get('/posts/'+this.props.match.params.id);
                response.then(response => {
                    console.log("dataa",response.data)
                    this.setState({showPost: response.data})
                },reject=>{
                    console.log('rejected')
                })
        }
    }
    }

    deleteMethod= () =>{

        let response = axios.delete('/posts/'+this.props.match.params.id);
        response.then(response => {
            console.log('DEleted:',response)
        },reject=>{
            console.log('rejected')
        })


    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        console.log('HELLO---',this.props)
        if(this.props.match.params.id && this.state.showPost!=null){
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