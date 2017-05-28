import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

@connect(
  state => ({
    env: state.settings.data.env,
    welcome: state.settings.ui.welcome,
  }),
)
export default class ProfileScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    env: PropTypes.string.isRequired,
    welcome: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is profile screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});