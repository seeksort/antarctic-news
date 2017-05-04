import React, { Component } from 'react';
import ListArticlesContainer from './ListArticlesContainer';
import ArticleContainer from './ArticleContainer';
import EditArticleContainer from './EditArticleContainer';

// React Router DOM is a DOM-aware version. Auto installs React Router as well
// Switch - allows use of Route render that is shown when path does not match a route
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Antarctic News</h1>
          <Switch>
            <Route path='/' component={ListArticlesContainer} />
            <Route path='/article' component={ArticleContainer} />
            <Route exact path='/edit' component={EditArticleContainer} />
            <Route render={() => <h1>404 Page Not Found.</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
