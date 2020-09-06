import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Posts from './Components/Posts/Posts';
import Header from './Components/Header/Header';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';
import Container from '@material-ui/core/Container';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
  
    <Router>
    <Header></Header>
    <Container>  
      <Switch>
        <Route path="/home">
        <Banner></Banner>
        </Route>
        <Route path="/posts">
          <Posts></Posts>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
        <Banner></Banner>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      </Container>  
    </Router>
    
    </div>
  );
}

export default App;
