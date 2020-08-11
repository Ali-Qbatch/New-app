
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './Home'
import Reservation from './Reservation'
import Profile from './Profile'
import Notification from './Notification'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const Tab = createBottomTabNavigator();

function NavigateScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffff',
        }
      }}
      initialRouteName="Home"
      tabBarOptions={
        {
          activeTintColor: "rgb(0, 0, 0)",

        }
      }

      activeColor="rgb(0,0,0)"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="home" color={'#000'} size={25} />
          )
        }}

      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#000' }}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="bell" color={'#000'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="user-circle" color={'#000'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarLabel: 'Reservation',
          tabBarIcon: '#000',
          tabBarIcon: () => (
            <Icon name="hotel" color={'#000'} size={25} />
          ),
        }}
      />
    </Tab.Navigator >
  );
}
export default NavigateScreen
