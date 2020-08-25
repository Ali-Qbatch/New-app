import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Inputs from './Inputs';
import Buttons from './Buttons';
function ForgetPassword({navigation}) {
  const Title = 'Please Enter the email address to reset the password';
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.BackButton}>
        <Icon
          name="angle-left"
          size={35}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={styles.titleText}>{Title}</Text>
      <Inputs placeholder="Email" />
      <Buttons
        onPress={() =>
          navigation.navigate('EmailSubmit', {name: 'EmailSubmit'})
        }
        name="Send"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    margin: '5%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '60%',
    color: '#5B5B5A',
    fontFamily: 'Avenir-Book',
  },
  BackButton: {
    margin: '2%',
  },
});
export default ForgetPassword;
