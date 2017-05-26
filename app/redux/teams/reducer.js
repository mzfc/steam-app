import { combineReducers } from 'redux';
import { types } from './actions';

const initialState = {
  data: [],
  ui: {
    dataFetched: false,
    isFetching: false,
    error: null,
  },
};

function data(prevState = initialState.data, action = {}) {
  switch (action.type) {
    case types.TEAMS_FETCHING_DATA_SUCCESS:
      return action.teams;
    default:
      return prevState;
  }
}

function ui(prevState = initialState.ui, action = {}) {
  switch (action.type) {
    case types.TEAMS_FETCHING_DATA:
      return {
        ...prevState,
        isFetching: true,
        dataFetched: false,
        error: null,
      };
    case types.TEAMS_FETCHING_DATA_SUCCESS: 
      return {
        ...prevState,
        isFetching: false,
        dataFetched: true,
        error: null,
      };
    case types.TEAMS_FETCHING_DATA_FAILURE:
      return {
        ...prevState,
        isFetching: false,
        error: action.error,
      };
    default: 
      return prevState;
  }
}

export default combineReducers({data, ui});