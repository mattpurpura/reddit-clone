import React, { Component } from 'react';
import * as firebase from "firebase";


class AddPost extends Component {

    state = {
        title: ''
    }

    handleChange = event => {
        this.setState({
            title: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let postsRef = firebase.database().ref('posts')

        postsRef.push({
            title: this.state.title
        })
    }

    render(){
        return(
            <div>
                <input type='text' placeholder='Choose a title for your post'  onChange={this.handleChange} value={this.state.title}>
                </input>
                <button type='submit' onClick={this.handleSubmit}>
                Submit
                </button>
            </div>
        )
    }
}

export default AddPost;