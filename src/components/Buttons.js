import React from 'react'
import styled from 'styled-components';
const Button = styled.Text`
      background-color:#098DCD;
      padding:17px;
      color:#fff;
      width:80%;
      margin: 0 auto;
      fontWeight:600;
      textAlign:center;
      marginTop:50px;
      overflow:hidden;
          fontSize:16px;
         borderRadius: 25px;

        `;
function Buttons(props) {
  return (

    <Button onPress={props.onPress}>
      {props.name}
    </Button>
  )
}

export default Buttons
