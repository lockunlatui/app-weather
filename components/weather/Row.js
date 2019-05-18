import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import 'moment/locale/vi';


import FadeInView from '../animation/fadeInView.js';

moment.locale('vi');

export default class Row extends React.Component {

  day() {
    let day = moment(this.props.day.dt * 1000).format('ddd');
    return <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>;
  }

  icon(size = 50) {
    const type = this.props.day.weather[0].main.toLowerCase();
    switch (type) {
      case 'clouds':
        image = require('./icons/clouds.png');
        break;
      case 'rain':
        image = require('./icons/rain.png');
        break;
      default:
        image = require('./icons/sun.png');
    }
    return <Image source={image} style={{ width: size, height: size }} />;
  }

  date() {
    let day = moment(this.props.day.dt * 1000).format('DD/MM');
    return <Text>{day}</Text>;
  }

  render() {
    if (this.props.index === 0) {
      return (
        <FadeInView delay={this.props.index * 50}>
          <View style={[style.flex, style.view, style.firstView]}>
            <View>
              <Text style={{ color: '#FFF' }}>
                {this.day()} {this.date()}>
              </Text>
              {this.icon(90)}
            </View>
            <Text style={[style.temp, { fontSize: 35 }]}>
              {Math.round(this.props.day.temp.day)} °C
            </Text>
          </View>
        </FadeInView>
      );
    } else {
      return (
        <FadeInView delay={this.props.index * 50}>
          <View style={[style.flex, style.view]}>
            <View style={style.flex}>
              {this.icon()}
              <Text style={{ marginLeft: 10 }}>{this.day()} {this.date()}</Text>
            </View>
            <Text style={style.temp}>
              {Math.round(this.props.day.temp.day)} °C
            </Text>
          </View>
        </FadeInView>
      );
    }
  }
}

Row.propTypes = {
  day: PropTypes.object,
  index: PropTypes.number
}

const style = StyleSheet.create({
  white: {
    color: '#FFF'
  },
  bold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstView: {
    backgroundColor: '#e54b65'
  },
  view: {
    backgroundColor: '#394163',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  temp: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
});
