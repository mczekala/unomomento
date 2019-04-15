import React, { Component } from 'react';

class Post extends Component {
  render() {
      var id = this.props.match.params.id;
    return (
      <div className="post">
        <img width='200px' src={this.props.posts[id].img}/>
        <p>{this.props.posts[id].title}</p>
        <p>{this.props.posts[id].content}</p>
      </div>
    );
  }
}
export default Post;