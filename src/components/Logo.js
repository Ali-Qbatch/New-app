import React from 'react'
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import styled from 'styled-components';
function Logo() {
  return (
    <SafeAreaView>

      <Image style={styles.logo} source={require('../Assets/WebLogoBlue.png')} />
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  logo: {
    width: 250,
    marginTop: 120,
    marginLeft: 40
  },

});

export default Logo
