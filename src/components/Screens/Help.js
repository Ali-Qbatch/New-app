import React, { Component } from 'react'
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import Buttons from '../../components/Buttons'
export class Help extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#fff', minHeight: 800 }}>
        <Text style={styles.Help}>
          Having a trouble?
      </Text>
        <Buttons name="Call BWD" />
        <Text style={styles.Email}>
          Email BWD
          </Text>

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  Help: {
    fontFamily: "Avenir-Book",
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    margin: 30
  },
  Email: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 15,
    textAlign: 'center',
    margin: 44,
    borderRadius: 25
  }
})
export default Help
