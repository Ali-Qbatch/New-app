

import React from 'react';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import ForgetPassword from './src/components/ForgetPassword';
import EmailSubmit from './src/components/EmailSubmit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from './src/components/Onboard';
import NavigateScreen from './src/components/NavigateScreen'
import ItemsDetail from './src/components/ItemsDetail'
import ItemsDelete from './src/components/ItemsDelete'
import { UpdateComponent } from "./src/components/UpdateComponent"
const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        cardStyle={{}}
        initialRouteName="Onboard"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ffff',
          },

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailSubmit" component={EmailSubmit} />
        <Stack.Screen name="NavigationScreen" component={NavigateScreen} />
        <Stack.Screen name="ItemsDetail" component={ItemsDetail} />
        <Stack.Screen name="ItemsDelete" component={ItemsDelete} />
        <Stack.Screen name="UpdateComponent" component={UpdateComponent} />
      </Stack.Navigator>
    </NavigationContainer>



  );
};
export default App;
