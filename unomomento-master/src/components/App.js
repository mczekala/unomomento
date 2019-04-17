import React, { Component } from 'react';
import '../style/reset.css';
import PostList from './PostList';
import Post from './Post';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import '../style/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
      //   {
      //     id:0,
      //     img: strike,
      //     title: 'ZNP nie odpuści!',
      //     content: 'ZNP nie przerwie strajku i zapowiada,ze stajk bedzie kontynuowany bezterminowo. Co nasuwa pytanie co z tegorocznymi maturami. W kraju nie tylko nauczyciele strajkuja, gdyz nadal trwa protest pracownikow administracyjnych sadow i prokurator.A  lekarze rezydenci rowniez rozwazaja ponoeny strajk.'
      //   },
      //   {
      //     id:1,
      //     img: food,
      //     title: 'Posilki polakow, czy nadal lubimy tradyjna kuchnie?',
      //     content: 'Wydawac sie moze ze polacy jako coraz bardziej zapracowany narod, wybiera coraz wiecej fastfood. jednak badania mowia cos innego az 60% polakow uwaza dania kuchni tradycyjnej za ich ulubione. Mozemy byc spokojni burger i frytki nadal przegrywaja ze schabowym i kapustka.'
      //   },
      //   {
      //     id:0,
      //     img: strike,
      //     title: 'ZNP nie odpuści!',
      //     content: 'ZNP nie przerwie strajku i zapowiada,ze stajk bedzie kontynuowany bezterminowo. Co nasuwa pytanie co z tegorocznymi maturami. W kraju nie tylko nauczyciele strajkuja, gdyz nadal trwa protest pracownikow administracyjnych sadow i prokurator.A  lekarze rezydenci rowniez rozwazaja ponoeny strajk.'
      //   },
      //   {
      //     id:1,
      //     img: food,
      //     title: 'Posilki polakow, czy nadal lubimy tradyjna kuchnie?',
      //     content: 'Wydawac sie moze ze polacy jako coraz bardziej zapracowany narod, wybiera coraz wiecej fastfood. jednak badania mowia cos innego az 60% polakow uwaza dania kuchni tradycyjnej za ich ulubione. Mozemy byc spokojni burger i frytki nadal przegrywaja ze schabowym i kapustka.'
      //   },
      //   {
      //     id:0,
      //     img: strike,
      //     title: 'ZNP nie odpuści!',
      //     content: 'ZNP nie przerwie strajku i zapowiada,ze stajk bedzie kontynuowany bezterminowo. Co nasuwa pytanie co z tegorocznymi maturami. W kraju nie tylko nauczyciele strajkuja, gdyz nadal trwa protest pracownikow administracyjnych sadow i prokurator.A  lekarze rezydenci rowniez rozwazaja ponoeny strajk.'
      //   },
      //   {
      //     id:1,
      //     img: food,
      //     title: 'Posilki polakow, czy nadal lubimy tradyjna kuchnie?',
      //     content: 'Wydawac sie moze ze polacy jako coraz bardziej zapracowany narod, wybiera coraz wiecej fastfood. jednak badania mowia cos innego az 60% polakow uwaza dania kuchni tradycyjnej za ich ulubione. Mozemy byc spokojni burger i frytki nadal przegrywaja ze schabowym i kapustka.'
      //   },
      // ]
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