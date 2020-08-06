import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
function Inputs(props) {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={props.placeholder}
        style={styles.loginInput}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  loginInput: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    borderRadius: 5
  },
})
export default Inputs
