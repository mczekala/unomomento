import React, { Component } from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
  generateList=() => {
      return <ul>
        {this.props.posts.map(post=>
          <li>
            <PostListItem props={this.props} post={post}/>
          </li>
        )}</ul>;
  }
  render() {
    return (
      <div className="postList">
        {this.generateList()}
      </div>
    );
  }
}
export default PostList;