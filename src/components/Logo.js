import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import styled from 'styled-components';
function Logo() {
  return (
    <View style={styles.logoView}>
      <Image
        style={styles.logo}
        source={require('../Assets/logo/LogoFile.png')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 100,
    marginTop: '15%',
    // marginLeft: '25%',
  },
  logoView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
