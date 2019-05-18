import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import style from '../Style.js';

export default class About extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return (
        <Image
          source={require('./icons/user.png')}
          style={{ width: 20, height: 20 }}
        />
      );
    }
  };

  search() {
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={style.title}>About Me</Text>
        <Text>Toi ten la: Do Xuan Loc</Text>
        <Button
          color={style.color}
          onPress={() => this.search()}
          title="Tìm kiếm"
        />
      </View>
    );
  }
}
