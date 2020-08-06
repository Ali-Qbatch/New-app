import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import Inputs from './Inputs';
import styled from 'styled-components';
import Buttons from './Buttons';
function ForgetPassword({ navigation }) {
  const Container = styled.View`
    margin:15px
  `;
  const Title = "Please Enter the email address to reset the password"
  return (
    <SafeAreaView>
      <Container>
        <Text style={styles.titleText}>
          {Title}
        </Text>
        <Inputs placeholder="Email" />
        <Buttons onPress={() =>
          navigation.navigate('EmailSubmit', { name: 'EmailSubmit' })
        } name="Send" />
      </Container>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 12,
    marginTop: 250,
    color: "#000"
  },
});
export default ForgetPassword
