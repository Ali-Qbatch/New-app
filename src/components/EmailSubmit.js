import React from 'react';
import Email from '../Assets/ForgetPassword/Emailsent.svg';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Buttons from './Buttons';
function EmailSubmit({navigation}) {
  const Detail =
    'Please Check your email,we have sent the instructions to change password.';
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Email style={styles.Email} />
      <Text style={styles.EmailSent}>Email Sent</Text>
      <Text style={styles.paragraph}>{Detail}</Text>
      <Buttons
        name="Continue Login"
        onPress={() => navigation.navigate('SignIn', {name: 'SignIn'})}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmailSent: {
    fontSize: 18,
    color: '#5B5B5A',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    fontFamily: 'Avenir-Book',
  },
  paragraph: {
    width: 230,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Avenir-Book',
    color: '#9B9B9B',
  },
});
export default EmailSubmit;
