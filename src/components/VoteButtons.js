import React, { Component } from 'react';
import * as firebase from 'firebase';

class VoteButtons extends Component {

    state = {
        votes: 0
    }

    componentDidMount = () => {
        this.grabVotes()
    }

    grabVotes = () => {
        let votesRef = firebase.database().ref(`posts/${this.props.postId}/votes`);

        let _this = this;

        votesRef.on('value', function(snapshot) {
            _this.setState({
                votes: snapshot.val()
            })
        })
    }

    handleUpVote = () => {
        let votes = this.state.votes;
        votes++;

       let postRef = firebase.database().ref(`posts/${this.props.postId}`)
       
       postRef.update({votes: votes})
    }

    handleDownVote = () => {
        let votes = this.state.votes;
        votes--;
        
        let postRef = firebase.database().ref(`posts/${this.props.postId}`)

        postRef.update({votes: votes})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleUpVote}>Up Vote</button>
                <button onClick={this.handleDownVote}>Down Vote</button>
            </div>
        )
    }
}

export default VoteButtons;