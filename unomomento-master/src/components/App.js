import React, { Component } from 'react';
import '../style/reset.css';
import PostList from './PostList';
import Post from './Post';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import '../style/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft,faChevronRight)

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    let url = "https://www.unomomento.pl/wp-json/wp/v2/posts";
    fetch(url)
    .then(response=>response.json())
    .then(response =>{
      this.setState({
        posts: response
      });
    })
  }
  PostList=(props)=> {
    return <PostList posts={this.state.posts} {...props}/>
  }
  Post=(props)=> {
    return <Post posts={this.state.posts} {...props}/>
  }
  render() {
    return (
      <Router>        
        <Header/>
        <Route path="/" exact component={this.PostList}/>
        <Route path="/:id" component={this.Post}/>
        <Footer/>
      </Router>
    );
  }
}
export default App;