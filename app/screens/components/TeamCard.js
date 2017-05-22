import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AppColors, AppStyles } from '@theme'; 

export default class TeamCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {

    console.log('AppColors: ', AppColors);

    return (
      <View style={AppStyles.containerCentered}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});