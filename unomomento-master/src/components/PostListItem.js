import React, { Component } from 'react';
import '../style/PostListItem.css';
import Parser from 'react-render-html';

class PostListItem extends Component {
  render() {
    return ( 
        <div className="postListItem">
          <div>{Parser(this.props.content+'')}</div>
          <h2>{this.props.title}</h2>
        </div>
    )
  }
}
export default PostListItem;