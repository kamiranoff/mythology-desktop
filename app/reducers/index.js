// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import figures from './figures';

const rootReducer = combineReducers({
  figures,
  routing
});

export default rootReducer;
