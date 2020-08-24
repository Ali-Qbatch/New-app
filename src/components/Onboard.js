import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import First from '../Assets/SliderImages/first.svg'
import Second from '../Assets/SliderImages/second.svg'
import Third from '../Assets/SliderImages/third.svg'
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay={true} activeDotColor={"#098DCD"} showsButtons={false}>
        <View style={styles.slide1}>
          <First maxheight="100%" maxwidth="100%" />
          <Text style={styles.text}>
            Find New Items
          </Text>
          <Text style={styles.title}>
            Explore the items which are available only, No hassle.
          </Text>
          <Text style={styles.button} title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
        <View style={styles.slide1}>
          <Text>
            <Second maxheight="100%" maxwidth="100%" />
          </Text>
          <Text style={styles.text}>
            Quick Reservation
          </Text>
          <Text style={styles.title}>
            Explore the items which are available only, No hassle.
          </Text>
          <Text style={styles.button} title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
        <View style={styles.slide1}>
          <Third maxheight="100%" maxwidth="100%" />
          <Text style={styles.text}>
            Quick Notification
          </Text>
          <Text style={styles.title}>
            Get the notifications of our new and demanded items.
          </Text>
          <Text style={styles.button} title="hello" onPress={() =>
            this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
          <Text style={styles.login} onPress={() =>
            this.props.navigation.navigate('SignIn', { name: 'SignIn' })
          }>Log In </Text>
        </View>
      </Swiper>
    )
  }
}
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 100
  },
  text: {
    color: '#5B5B5A',
    fontSize: 24,
    fontWeight: '900',
    fontFamily: "Avenir-Book",
    marginTop: 40
  },
  title: {
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 10,
    fontFamily: "Avenir-Book",
    color: '#5B5B5A85',
    textAlign: "center"
  },
  login: {
    fontSize: 14,
    margin: 20,
    fontFamily: "Avenir-Book",
    fontWeight: '600'
  },
  button: {
    backgroundColor: '#098DCD',
    padding: 16,
    color: '#fff',
    width: '80%',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 50,
    overflow: 'hidden',
    fontSize: 16,
    borderRadius: 28,
    fontFamily: "Avenir-Book",
  }
})
