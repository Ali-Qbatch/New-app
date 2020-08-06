

import React from 'react';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import ForgetPassword from './src/components/ForgetPassword';
import EmailSubmit from './src/components/EmailSubmit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailSubmit" component={EmailSubmit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
