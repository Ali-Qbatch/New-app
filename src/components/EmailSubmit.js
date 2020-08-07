import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import Logo from "./Logo"
import Buttons from './Buttons';
function EmailSubmit({ navigation }) {
  const Detail = "Please Check your email,we have sent the instructions to change password."
  return (
    <SafeAreaView style={styles.SafeAreaView}>

      <Logo />
      <Text style={styles.emailsent}>
        Email Sent
      </Text>
      <Text style={styles.paragraph}>
        {Detail}
      </Text>
      <Buttons name="Continue Login" onPress={() =>
        navigation.navigate('SignIn', { name: 'SignIn' })
      } />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeAreaView: {
    margin: 15
  },
  emailsent: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20
  },
  paragraph: {
    width: 300,
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto"
  }
})
export default EmailSubmit
