import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class TeamDetailScreen extends Component {
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