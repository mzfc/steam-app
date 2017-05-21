import React from 'react';
import { Provider } from 'react-redux';

import store from './app/redux/store';
import HomeScreen from './app/screens/HomeScreen';
import TeamListScreen from './app/screens/TeamListScreen';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <TeamListScreen />
      </Provider>
    );
  }
}