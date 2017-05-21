import { 
  TEAMS_FETCHING_DATA, 
  TEAMS_FETCHING_DATA_FAILURE, 
  TEAMS_FETCHING_DATA_SUCCESS,
} from './types';
import getTeams from '../../api/getTeams';

export function getData() {
  return {
    type: TEAMS_FETCHING_DATA,
  };
}

export function getDataSuccess(teams) {
  return {
    type: TEAMS_FETCHING_DATA_SUCCESS,
    teams,
  };
}

export function getDataFailure(error) {
  return {
    type: TEAMS_FETCHING_DATA_FAILURE,
    error,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    getTeams()
      .then((teams) => {
        dispatch(getDataSuccess(teams));
      })
      .catch((err) => dispatch(getDataFailure(err)));
  };
}