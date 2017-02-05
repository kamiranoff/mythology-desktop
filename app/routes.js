// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import FiguresListPage from './containers/FiguresListPage';
import FigurePage from './containers/FigurePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/figures" component={FiguresListPage} >
    </Route>
    <Route path="/figures/:id" component={FigurePage} />
  </Route>
);
