import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import Logo from './Logo'
import Inputs from './Inputs';
import Buttons from "./Buttons"
import styled from 'styled-components';
function SignIn({ navigation }) {
  const Container = styled.View`
    margin:15px
  `;
  const titleText = "Welcome Back to the Discount"
  const forgetPassword = "Forget Password?"
  const havingAccount = "Don't have an Account?"
  return (
    <SafeAreaView>
      <Container>
        <Logo />

        <Text style={styles.titleText}>{titleText}</Text>
        <Inputs placeholder="Email" />
        <Inputs placeholder="Password" />
        <Text style={styles.forgetPassword}>{forgetPassword}</Text>
        <Buttons name="Log In" />
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
          <Text style={styles.Account}>{havingAccount}</Text>
          <Text style={styles.signUp} onPress={() =>
            navigation.navigate('SignUp', { name: 'SignUp' })}>
            Sign Up

          </Text>

        </View>
      </Container>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 15,
    color: "#000"
  },
  forgetPassword: {
    display: "flex",
    textAlign: "right",
    fontSize: 12,
    margin: 10
  },
  Account: {
    fontSize: 12,
    margin: 10,
    textAlign: "center",
    color: "grey",
    paddingLeft: 10
  },
  signUp: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
    paddingRight: 8,
    marginTop: 7.5
  },
});

export default SignIn
