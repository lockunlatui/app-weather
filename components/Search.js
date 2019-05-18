import React from 'react';
import { TextInput, Image, Button, View, Keyboard } from 'react-native';
import style from '../Style.js';
import { createStackNavigator } from 'react-navigation';
import List from './List.js';

class Search extends React.Component {
  static navigationOptions = {
    title: 'Tìm kiếm thành phố của bạn',
    tabBarIcon: () => {
      return (
        <Image
          source={require('./icons/home.png')}
          style={{ width: 20, height: 20 }}
        />
      );
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      city: 'Ha Noi'
    };
  }

  setCity(city) {
    this.setState({ city });
  }

  submit() {
    Keyboard.dismiss();
    this.props.navigation.navigate('Result', { city: this.state.city });
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          underlineColorAndroid="transparent"
          onChangeText={text => this.setCity(text)}
          onSubmitEditing={() => this.submit()}
          style={style.input}
          value={this.state.city}
        />
        <Button
          color={style.color}
          onPress={() => this.submit()}
          title="Tìm kiếm thành phố của bạn"
        />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};

export default createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  }
});
