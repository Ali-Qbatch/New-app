import React from 'react';
import {Text, TouchableHighlight, StyleSheet, Button} from 'react-native';
function Buttons(props) {
  return (
    <TouchableHighlight
      underlayColor="white"
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#098DCD',
    padding: 17,
    color: '#fff',
    width: '80%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3%',
    overflow: 'hidden',
    fontSize: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'Avenir-Book',
  },
});
export default Buttons;
