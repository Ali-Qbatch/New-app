import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
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
  },
  logoView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
