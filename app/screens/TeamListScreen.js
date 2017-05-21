import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

import { fetchData } from '../redux/actions/actions';

@connect(
  state => ({
    teams: state.teams.data,
    ui: state.teams.ui,
  }),
  {
    fetchData,
  }
)
export default class TeamListScreen extends Component {

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired,
    teams: PropTypes.array.isRequired,
  }

  _fetchData =() => {
    this.props.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Redux Examples</Text>
        <TouchableHighlight style={styles.button} onPress={this._fetchData}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>
        <View style={styles.mainContent}>
          {
            this.props.ui.isFetching && <Text>Loading</Text>
          }
          {
            this.props.ui.error && <Text>{this.props.ui.error}</Text>
          }
          {
            this.props.teams.length ? (
              this.props.teams.map((team, i) => {
                return <View key={i} >
                  <Text>Name: {team.name}</Text>
                  <Text>Age: {team.members}</Text>
                </View>;
              })
            ) : null
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
  },
  buttonText: {
    color: 'white',
  },
  mainContent: {
    margin: 10,
  },
});

