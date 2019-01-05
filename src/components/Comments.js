import React, { Component } from 'react';
import * as firebase from 'firebase';

class Comments extends Component {

    // constructor(props){
    //     super(props)
    // }

    state = {

    }

    componentDidMount = () => {
        let value = this.props.postId
        this.grabComments(value);
    }

    grabComments = (postId) => {
        let commentsRef = firebase.database().ref('comments').orderByChild('postId').equalTo(postId);
        let _this = this;
        // commentsRef.orderByChild('postId').equalTo(this.props.postId).on('value', function(snapshot) {
        //     console.log(snapshot.val());
        // })

        commentsRef.on('value', function(snapshot){
            console.log(snapshot.val())
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
};

export default Comments;