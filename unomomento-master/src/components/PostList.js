import React, { Component } from 'react';
import PostListItem from './PostListItem';
import '../style/PostList.css';
import { Link } from "react-router-dom";

class PostList extends Component {
  generateList=() => {
    if(this.props.posts.length>0) {
      var list=[];
      for(var i=0;i<this.props.posts.length;i++) {
        var post = this.props.posts[i];
        list[i]=<Link  style={{ color: '#000', textDecoration: 'none' }} to={`/${post.slug}`}>
            <PostListItem content={post.content.rendered} title={post.title.rendered}/>
          </Link>
      }
      return list;
    }
  }
  getRandomPost=(list)=> {
    return list?list[Math.floor(Math.random() * 2)]:'';
  }
  render() {
    var postList = this.generateList();
    return (
      <div className="postList main">
        <div className='randomPost'>{this.getRandomPost(postList)}</div>
        <div className='wrapper'>{postList}</div>
      </div>
    );
  }
}
export default PostList;