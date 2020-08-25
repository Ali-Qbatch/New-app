import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
function Buttons(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
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
