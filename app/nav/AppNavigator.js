import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import TeamListScreen from '@screens/teams/TeamListScreen';
import TeamDetailScreen from '@screens/teams/TeamDetailScreen';
import LoginScreen from '@screens/LoginScreen';
import MainScreen from '@screens/nvex/MainScreen';
import ProfileScreen from '@screens/nvex/ProfileScreen';


export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  TeamList: { screen: TeamListScreen },
  TeamDetail: { screen: TeamDetailScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
