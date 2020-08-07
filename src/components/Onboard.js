import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'
import styled from 'styled-components';

import Swiper from 'react-native-swiper'
import Buttons from './Buttons'
import { max } from 'react-native-reanimated'
const Button = styled.Text`
      background-color:#000;
      padding:17px;
      color:#fff;
      width:80%;
      margin: 0 auto;
      fontWeight:800;
      textAlign:center;
      marginTop:50px;
      overflow:hidden;
      fontSize:16px;
         borderRadius: 25px
        `;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  },
  title: {
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10
  },
  login: {
    fontSize: 15,
    margin: 20
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} activeDotColor={"black"} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}><Image source={require('../Assets/WebLogoBlue.png')} />
          </Text>
          <Text style={styles.text}>
            Find New Items
          </Text>
          <Text style={styles.title}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </Text>
          <Button title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Button>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
        <View style={styles.slide2}>
          <Text ><Image source={require('../Assets/WebLogoBlue.png')} /></Text>
          <Text style={styles.text}>
            Quick Reservation
          </Text>
          <Text style={styles.title}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </Text>
          <Button title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Button>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}><Image source={require('../Assets/WebLogoBlue.png')} /></Text>
          <Text style={styles.text}>
            Quick Notifaction
          </Text>
          <Text style={styles.title}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </Text>
          <Button title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Button>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
      </Swiper >
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)
