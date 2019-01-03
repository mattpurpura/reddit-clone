import React, { Component } from 'react';
import * as firebase from "firebase";

class PostPage extends Component {

    state = {
        postId: '', 
        title: '', 
        body: '', 
    }

    componentDidMount = () => {
        this.setState({
            postId: this.props.match.params.id
        }, () => {
            this.grabPost()
        })
    }

    grabPost = () => {
        let postRef = firebase.database().ref(`posts/${this.state.postId}`);
        let _this = this;
        postRef.on('value', function(snapshot) {
            _this.setState({
                title: snapshot.val().title, 
                body: snapshot.val().body
            })
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h5>{this.state.body}</h5>
            </div>
        )
    }
}

export default PostPage;

