import React, { Component } from 'react';
import * as firebase from "firebase";
import CommentBox from '../components/CommentBox';
import Comments from '../components/Comments';
import HomeButton from '../components/HomeButton';


class PostPage extends Component {

    state = {

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
                <HomeButton />
                <h1>{this.state.title}</h1>
                <h5>{this.state.body}</h5>
                <CommentBox postId={this.state.postId} />
                <Comments postId={this.state.postId} />
            </div>
        )
    }
}

export default PostPage;

