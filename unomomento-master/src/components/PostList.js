import React, { Component } from 'react';
import PostListItem from './PostListItem';
import '../style/PostList.css';

class PostList extends Component {
  generateList=() => {
    if(this.props.posts.length>0) {
      return this.props.posts.map(post=><PostListItem content={post.content.rendered} title={post.title.rendered} id={post.id}/>);
    }
  }
  getRandomPost=(list)=> {
    return list[Math.floor(Math.random() * 2)];
  }
  render() {
    var postList = this.generateList();
    console.log(this.props.posts);
    return (
      <div className="postList main">
        {/* <div className='randomPost'>{this.getRandomPost(postList)}</div> */}
        <div className='wrapper'>{postList}</div>
      </div>
    );
  }
}
export default PostList;