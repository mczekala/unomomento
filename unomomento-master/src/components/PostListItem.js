import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/PostListItem.css';
import Parser from 'react-render-html';

class PostListItem extends Component {
  render() {
    return (
      <Link  style={{ color: '#000', textDecoration: 'none' }} to ={`/${this.props.id}`}>
        <div className="postListItem">
          <div>{Parser(this.props.content+'')}</div>
          <p>{this.props.title}</p>
        </div>
      </Link>
    );
  }
}
export default PostListItem;