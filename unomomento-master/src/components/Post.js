import React, { Component } from 'react';
import '../style/Post.css';
import Parser from 'react-render-html';
import MetaTags from 'react-meta-tags';

class Post extends Component {
  render() {
      var post = this.props.posts.filter(post=>post.slug===this.props.match.params.id);
      post=post[0];
      var title = post?post.title.rendered:'';
      var content = post?Parser(post.content.rendered+''):'';
      var excerpt = post?Parser(post.excerpt.rendered+''):'';
    return (
      <div className="post main">
        <MetaTags>
            <meta name="description" content={excerpt} />
            <meta property="og:title" content={title} />
        </MetaTags>
        <div>{content}</div>
        <h2>{title}</h2>
      </div>
    )
  }
}
export default Post;