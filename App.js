import React from 'react';
import { Provider } from 'react-redux';

import store from './app/redux/index';
import HomeScreen from './app/screens/HomeScreen';
import TeamListScreen from '@screens/teams/TeamListScreen';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <TeamListScreen />
      </Provider>
    );
  }
}