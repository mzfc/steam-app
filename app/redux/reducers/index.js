import { combineReducers } from 'redux';

import settings from './settings';
import teams from './teams';

const rootReducer = combineReducers({
  settings,
  teams,
});
export default rootReducer;