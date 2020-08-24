import React, {Component} from 'react';
import Buttons from '../Buttons';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
export class Feedback extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.Feedback}>How can we improve?</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}
          />
        </View>
        <TouchableOpacity>
          <Buttons name="Submit" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Feedback: {
    fontFamily: 'Avenir-Book',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  textAreaContainer: {
    borderColor: '#979797',
    borderWidth: 1,
    padding: 5,
    margin: 20,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
});
export default Feedback;
