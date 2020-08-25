import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import Buttons from '../../components/Buttons';
export class Help extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <TouchableOpacity>
          <Text style={styles.Help}>Having a trouble?</Text>
        </TouchableOpacity>

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
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  Email: {
    borderWidth: 2,
    borderColor: '#098DCD',
    padding: 15,
    textAlign: 'center',
    margin: 44,
    borderRadius: 25,
    color: '#098DCD',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
});
export default Help;
