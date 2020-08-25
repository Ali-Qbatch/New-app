import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Reservation from './Reservation';
import Notification from './Notification';
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen from './Screens/Screen';
Icon.loadFont();

const Tab = createBottomTabNavigator();

function NavigateScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffff',
        },
      }}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'rgb(0, 0, 0)',
      }}
      activeColor="rgb(0,0,0)">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: '#000',
          tabBarIcon: () => <Icon name="home" color={'#098DCD'} size={25} />,
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarLabel: 'Reservation',
          tabBarIcon: '#000',
          tabBarIcon: () => <Icon name="hotel" color={'#098DCD'} size={25} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#000'}}
        options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="shopping-cart" color={'#098DCD'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen"
        component={Screen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="user-circle" color={'#098DCD'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default NavigateScreen;
