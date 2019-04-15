import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PostListItem extends Component {
  render() {
    return (
      <Link to ={`/${this.props.post.id}`}>
      <div className="postListItem">
        <img width='200px' src={this.props.post.img}/>
        <p>{this.props.post.title}</p>
      </div>
      </Link>
    );
  }
}
export default PostListItem;