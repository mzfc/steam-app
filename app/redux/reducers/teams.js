import { combineReducers } from 'redux';
import { 
  TEAMS_FETCHING_DATA, 
  TEAMS_FETCHING_DATA_SUCCESS, 
  TEAMS_FETCHING_DATA_FAILURE,
 } from '../actions/types';

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
    case TEAMS_FETCHING_DATA_SUCCESS:
      return action.teams;
    default:
      return prevState;
  }
}

function ui(prevState = initialState.ui, action = {}) {
  switch (action.type) {
    case TEAMS_FETCHING_DATA:
      return {
        ...prevState,
        isFetching: true,
        dataFetched: false,
        error: null,
      };
    case TEAMS_FETCHING_DATA_SUCCESS: 
      return {
        ...prevState,
        isFetching: false,
        dataFetched: true,
        error: null,
      };
    case TEAMS_FETCHING_DATA_FAILURE:
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