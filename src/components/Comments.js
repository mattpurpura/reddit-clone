import React, { Component } from 'react';
import * as firebase from 'firebase';

class Comments extends Component {

    // constructor(props){
    //     super(props)
    // }

    state = {
        comments: []
    }

    componentDidMount = () => {
        this.setState({
            postId: this.props.postId
        }, () => {
            this.grabComments()
        })
    }

    grabComments = () => {
        let commentsRef = firebase.database().ref('comments').orderByChild('postId').equalTo(this.props.postId);
        let _this = this;
        // commentsRef.orderByChild('postId').equalTo(this.props.postId).on('value', function(snapshot) {
        //     console.log(snapshot.val());
        // })

        commentsRef.on('value', function(snapshot){
            console.log(snapshot.val());
            let comments = Object.values(snapshot.val())
            _this.setState({
                comments: comments
            })
        })

    }

    render(){
        return(
            <div>
                {this.state.comments.map((comment) => {
                    return(
                        <div>
                            {comment.body}
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default Comments;