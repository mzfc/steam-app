//teams
import getTeams from '@services/getTeams';
import { NavigationActions } from 'react-navigation';

export const types = {
  TEAMS_FETCHING_DATA: 'TEAMS/FETCHING_DATA',
  TEAMS_FETCHING_DATA_SUCCESS: 'TEAMS/FETCHING_DATA_SUCCESS',
  TEAMS_FETCHING_DATA_FAILURE: 'TEAMS/FETCHING_DATA_FAILURE',
};


export function getData() {
  return {
    type: types.TEAMS_FETCHING_DATA,
  };
}

export function getDataSuccess(teams) {
  return {
    type: types.TEAMS_FETCHING_DATA_SUCCESS,
    teams,
  };
}

export function getDataFailure(error) {
  return {
    type: types.TEAMS_FETCHING_DATA_FAILURE,
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

export function showTeamDetail() {
  return NavigationActions.navigate({ routeName: 'TeamDetail' });
}
