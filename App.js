import React from 'react';
import { Provider } from 'react-redux';

import store from '@redux';
import HomeScreen from '@screens/HomeScreen';
import TeamListScreen from '@screens/teams/TeamListScreen';
import AppWithNavigationState from '@nav/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppWithNavigationState />
      </Provider>
    );
  }
}