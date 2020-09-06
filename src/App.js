import React from 'react';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import PostLearnMore from './components/PostLearnMore/PostLearnMore';


function App() {
  return (
    <div>
   
      <Router>
      <Switch>
         {/* <Route path="/posts">
        <HomePage></HomePage>
        </Route> */}
        <Route exact path="/">
        <HomePage></HomePage>
        </Route>
        <Route path="/posts/:id">
         <PostLearnMore></PostLearnMore>
        </Route>
        <Route path="/posts">
        <HomePage></HomePage>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>

      </Router>
   
    </div>
  );
}

export default App;
