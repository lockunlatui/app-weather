import About from './About';
import Search from './Search';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator(
  {
    Search: {
      screen: Search
    },
    About: {
      screen: About
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        height: 2,
        backgroundColor: '#FFF'
      },
      style: {
        backgroundColor: '#A2273C',
        borderTopWidth: 1,
        borderColor: '#3F101C'
      }
    }
  }
);

export default createAppContainer(Tabs);
