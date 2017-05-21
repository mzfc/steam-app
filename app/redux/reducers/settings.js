import { combineReducers } from 'redux';

const initialState = {
  data: {
    env: 'Dev',
    initialized: false,
  },
  ui: {
    welcome: 'Welcome to Small Smart Team',
  },
};

function data(prevState = initialState.data, action = {}) {
  
  switch (action.type) {
    case 'SOME_ACTION_TYPE':
      return {
        ...prevState,
        env: action.env,
      };
    default:
      return prevState;
  }

}

function ui(prevState = initialState.ui, action = {}) {
  switch (action.type) {
    case 'SOME_ACTION_TYPE' :
      return {
        ...prevState,
        welcome: action.welcome,
      };
    default: 
      return prevState;
  }
}

export default combineReducers({data, ui});