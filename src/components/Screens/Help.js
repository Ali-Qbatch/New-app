import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Buttons from '../../components/Buttons';
export class Help extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.Help}>Having a trouble?</Text>
        <Buttons name="Call BWD" />
        <Text style={styles.Email}>Email BWD</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Help: {
    fontFamily: 'Avenir-Book',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginTop: '5%',
  },
  Email: {
    borderWidth: 2,
    borderColor: '#098DCD',
    padding: 15,
    textAlign: 'center',
    margin: '10%',
    borderRadius: 25,
    color: '#098DCD',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
});
export default Help;
