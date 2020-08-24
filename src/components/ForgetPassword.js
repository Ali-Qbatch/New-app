import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Inputs from './Inputs';
import Buttons from './Buttons';
function ForgetPassword({ navigation }) {

  const Title = "Please Enter the email address to reset the password"
  return (
    <SafeAreaView style={{ margin: 15 }}>
      <Text style={styles.titleText}>
        {Title}
      </Text>
      <Inputs placeholder="Email" />
      <Buttons onPress={() =>
        navigation.navigate('EmailSubmit', { name: 'EmailSubmit' })
      } name="Send" />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 250,
    color: "#5B5B5A",
    fontFamily: "Avenir-Book",
  },

});
export default ForgetPassword
