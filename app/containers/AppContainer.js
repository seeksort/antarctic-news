import React, { Component } from 'react';
import ListArticlesContainer from './ListArticlesContainer';
import ArticleContainer from './ArticleContainer';
import EditArticleContainer from './EditArticleContainer';

// React Router DOM is a DOM-aware version. Auto installs React Router as well
// Switch - allows use of Route render that is shown when path does not match a route
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="container">
      <h1 style={{"color":"#007896", "fontWeight": "bold"}}>Antarctic News</h1>
      <Switch>
        <Route exact path="/" component={ListArticlesContainer} />
        <Route exact path="/article" component={ArticleContainer} />
        <Route path="/edit" component={EditArticleContainer} />
        <Route render={() => <h1>404 Page Not Found.</h1>} />
      </Switch>
    </div>
  </Router>
)

module.exports = App;