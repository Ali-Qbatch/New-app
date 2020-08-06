import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import styled from 'styled-components';
const Button = styled.Text`
      background-color:#000;
      padding:15px;
      color:#fff;
      width:70%;
      margin: 0 auto;
      fontWeight:600;
      textAlign:center;
      marginTop:50px;
      overflow:hidden;
      fontSize:16px;
         borderRadius: 25px
        `;
function Buttons(props) {
  return (
    <SafeAreaView>
      <Button >
        {props.name}
      </Button>
    </SafeAreaView>
  )
}

export default Buttons
