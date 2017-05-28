import React from 'react';
import { Provider } from 'react-redux';

import store from '@redux';
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