import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import styled from 'styled-components';
import Logo from "./Logo"
import Inputs from "./Inputs"
import Buttons from "./Buttons"
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
function SignUp({ navigation }) {
  const Container = styled.View`
    margin:15px
  `;
  const titleText = "Lets find some Amazing items"
  const Account = "Already Have a Account?"
  const Connect = "Or Connect With"
  return (
    <SafeAreaView>
      <Container>
        <Logo />
        <Text style={styles.titleText}>
          {titleText}
        </Text>
        <Inputs placeholder="Full Name" />
        <Inputs placeholder="Email" />
        <Inputs placeholder="Password" />
        <Buttons name="Sign Up" />
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
          <Text style={styles.Account}>
            {Account}
          </Text>
          <Text style={styles.signUp} onPress={() =>
            navigation.navigate('SignIn', { name: 'SignIn' })}>
            Log In
          </Text>
        </View>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          {Connect}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Icon style={styles.facebook} name="facebook" ></Icon>
          <Icon style={styles.Icon} name="twitter">
          </Icon>
          <Icon style={styles.Icon} name="envelope">

          </Icon>
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
    color: "#000",
  },
  Account: {
    fontSize: 12,
    margin: 10,
    textAlign: "center",
    color: "grey",
  },
  signUp: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
    paddingRight: 8,
    marginTop: 7.5
  },
  Icon: {
    margin: 9,
    backgroundColor: "#000",
    borderRadius: 24,
    overflow: "hidden",
    paddingLeft: 12,
    paddingTop: 10,
    borderWidth: 1,
    color: '#fff',
    fontSize: 24,
    width: 50,
    height: 50
  },
  facebook: {
    margin: 10,
    backgroundColor: "#000",
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    color: '#fff',
    fontSize: 24,
    width: 50,
    height: 50,
    paddingLeft: 15,
    paddingTop: 12,
  }
})
export default SignUp
