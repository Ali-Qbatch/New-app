import React from 'react'
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components';
function Logo() {
  return (
    <Image style={styles.logo} source={require('../Assets/logo/LogoFile.png')} />
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 100,
    marginTop: 70,
    marginLeft: 115,
  },

});

export default Logo
