import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import settings from '@redux/settings/reducer';
import teams from '@redux/teams/reducer';
import { nav, auth } from '@redux/nav';

const rootReducer = combineReducers({
  nav,
  auth,
  settings,
  teams,
});

const enhance = applyMiddleware(thunk);
const create = enhance(createStore);

export default (create((rootReducer)));
