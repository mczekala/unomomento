import React, { Component } from 'react';
import PostList from './PostList';
import Post from './Post';
import food from './img/food.jpg';
import strike from "./img/strike.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id:0,
          img: strike,
          title: 'ZNP nie odpuści!',
          content: 'ZNP nie przerwie strajku i zapowiada,ze stajk bedzie kontynuowany bezterminowo. Co nasuwa pytanie co z tegorocznymi maturami. W kraju nie tylko nauczyciele strajkuja, gdyz nadal trwa protest pracownikow administracyjnych sadow i prokurator.A  lekarze rezydenci rowniez rozwazaja ponoeny strajk.'
        },
        {
          id:1,
          img: food,
          title: 'Posilki polakow, czy nadal lubimy tradyjna kuchnie?',
          content: 'Wydawac sie moze ze polacy jako coraz bardziej zapracowany narod, wybiera coraz wiecej fastfood. jednak badania mowia cos innego az 60% polakow uwaza dania kuchni tradycyjnej za ich ulubione. Mozemy byc spokojni burger i frytki nadal przegrywaja ze schabowym i kapustka.'
        }
      ]
    }
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
        <Route path="/" exact component={this.PostList}/>
        <Route path="/:id" component={this.Post}/>
      </Router>
    );
  }
}
export default App;