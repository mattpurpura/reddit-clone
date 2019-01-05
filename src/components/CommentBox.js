import React, { Component } from 'react';
import * as firebase from 'firebase';

class CommentBox extends Component {

    state = {
        commentBody: ''
    }

    handleChange = (event) => {
        this.setState({
            commentBody: event.target.value
        })
    }

    postComment = (event) => {
        event.preventDefault();

        let commentsRef = firebase.database().ref('comments');

        commentsRef.push({
            postId: this.props.postId,
            body: this.state.commentBody
        })
    }

    render(){
        return(
            <div>
                <input type='text' placeholder='Leave a comment' onChange={this.handleChange}></input>
                <button type='submit' onClick={this.postComment}>Submit</button>
            </div>
        )
    };
};

export default CommentBox;