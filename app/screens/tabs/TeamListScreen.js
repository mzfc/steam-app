import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';


import { AppStyles } from '@theme/';
import {
  Card,
} from '@components/ui';

import { fetchData, showTeamDetail } from '@redux/teams/actions';

@connect(
  state => ({
    teams: state.teams.data,
    ui: state.teams.ui,
  }),
  {
    fetchData, showTeamDetail,
  }
)
export default class TeamListScreen extends Component {

  static navigationOptions = {
    title: 'Teams',
  };

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    showTeamDetail: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired,
    teams: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData =() => {
    this.props.fetchData();
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={[AppStyles.container]}
        >

          {
          this.props.teams.length ? (
              this.props.teams.map((team, i) => {
                return <TouchableOpacity key={i}
                    activeOpacity={0.8}
                    onPress={() => this.props.showTeamDetail()}
                  >
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
                </TouchableOpacity>;
              })
            ) : null
          }

        </ScrollView>
      </View>
    );
  }
}
