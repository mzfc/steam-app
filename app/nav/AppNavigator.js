import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

//4 main tabbed screens
import HomeScreen from '@screens/tabs/HomeScreen';
import TaskListScreen from '@screens/tabs/TaskListScreen';
import ProfileScreen from '@screens/tabs/ProfileScreen';
import TeamListScreen from '@screens/tabs/TeamListScreen';

import TeamDetailScreen from '@screens/teams/TeamDetailScreen';
import LoginScreen from '@screens/LoginScreen';


export const TabbedScreen = TabNavigator({
  Home: {screen: HomeScreen},
  TaskList: {screen: TaskListScreen},
  TeamList: {screen: TeamListScreen},
  Profile: {screen: ProfileScreen},
});

export const AppNavigator = StackNavigator({
  Login: {screen: LoginScreen},
  Authorized: {screen: TabbedScreen},
  TeamDetail: {screen: TeamDetailScreen},
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
