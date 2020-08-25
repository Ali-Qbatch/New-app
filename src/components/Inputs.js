import React from 'react';
import {StyleSheet, SafeAreaView, TextInput} from 'react-native';
function Inputs(props) {
  return (
    <SafeAreaView>
      <TextInput
        clearButtonMode="always"
        placeholder={props.placeholder}
        style={styles.loginInput}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  loginInput: {
    height: 50,
    borderColor: '#098DCD',
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    borderRadius: 5,
    fontFamily: 'Avenir-Book',
  },
});
export default Inputs;
