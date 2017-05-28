import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class TeamDetailScreen extends Component {

  static navigationOptions = {
    title: 'Team Details',
  };

  static propTypes = {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is team detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});