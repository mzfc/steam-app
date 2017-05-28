import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppStyles } from '@theme/';
import {
  Card,
} from '@components/ui';


export default class TeamDetailScreen extends Component {

  static navigationOptions = {
    title: 'Team Details',
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { team } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Card
          image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
        >
          <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
            <Text h3>{team.name}</Text>
            <Text>
              Lorem ipsum diem or seckt original de pingdo of the lespec.
            </Text>
          </View>
        </Card>
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