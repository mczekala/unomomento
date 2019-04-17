import React, { Component } from 'react';
import '../style/Post.css';
class Post extends Component {
  render() {
      var id = this.props.match.params.id;
    return (
      <div className="post main">
        <img src={this.props.posts[id].img}/>
        <p>{this.props.posts[id].title}</p>
        <p>{this.props.posts[id].content}</p>
      </div>
    )
  }
}
export default Post;