import React from 'react';
import { View, ActivityIndicator, ListView } from 'react-native';
import style from '../Style.js';
import axios from 'axios';
import WeatherRow from './weather/Row.js';

export default class List extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Thời tiết / ${navigation.state.params.city}`
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      city: this.props.navigation.state.params.city,
      report: null
    };
    setTimeout(() => {
      this.fetchWeather();
    }, 1000);
  }

  fetchWeather() {
    axios
      .get(
        `https://samples.openweathermap.org/data/2.5/forecast/daily?q=${this.state
          .city}&appid=b1b15e88fa797225412429c1c50c122a1`
      )
      .then(response => {
        this.setState({
          report: response.data
        });
      });
  }

  render() {
    if (this.state.report === null) {
      return <View>
    <ActivityIndicator color={style.color} size="large" /></View>;
    } else {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      return (

        <ListView
          dataSource={ds.cloneWithRows(this.state.report.list)}
          renderRow={(row, j, k) =>
            <WeatherRow day={row} index={parseInt(k, 10)} />}
        />

        // <View>
        //   {console.log('report', this.state.report)}
        // </View>
      );
    }
  }
}
