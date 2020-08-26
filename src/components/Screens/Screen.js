import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import Notification from './Notification';
import Setting from './Setting';
import MyCredit from './MyCredit';
import Help from './Help';
import Feedback from './Feedback';
import SignIn from '../SignIn';
import Bars from '../../Assets/Icon/Bars.svg';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <TouchableHighlight underlayColor="white" onPress={() => toggleDrawer()}>
      <View style={styles.barsViews}>
        <Bars />
      </View>
    </TouchableHighlight>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Setting',
        }}
      />
    </Stack.Navigator>
  );
}
function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Setting',
        }}
      />
    </Stack.Navigator>
  );
}
function forthScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="MyCredit"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="MyCredit"
        component={MyCredit}
        options={{
          title: 'MyCredit',
        }}
      />
    </Stack.Navigator>
  );
}
function fiveScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Help"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          title: 'Help & Supports',
        }}
      />
    </Stack.Navigator>
  );
}
function sixScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Feedback"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          title: 'Share Feedback',
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContentOptions={
        ({
          activeTintColor: '#000',
          itemStyle: {marginVertical: 5},
        },
        {
          contentOptions: {
            style: {
              backgroundColor: '#ccc',
            },
          },
        })
      }>
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Profile',

          drawerIcon: () => <Icon name="user" color={'#000'} size={25} />,
        }}
        component={firstScreenStack}
      />
      <Drawer.Screen
        name="Notification"
        options={{
          drawerLabel: 'Notification Setting ',
          drawerIcon: () => <Icon name="bell" color={'#000'} size={25} />,
        }}
        component={secondScreenStack}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: 'Setting ',
          drawerIcon: () => <Icon name="cog" color={'#000'} size={25} />,
        }}
        component={thirdScreenStack}
      />
      <Drawer.Screen
        name="MyCredit"
        options={{
          drawerLabel: 'MyCredit ',
          drawerIcon: () => (
            <Icon name="credit-card" color={'#000'} size={25} />
          ),
        }}
        component={forthScreenStack}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: 'Help ',
          drawerIcon: () => <Icon name="phone" color={'#000'} size={25} />,
        }}
        component={fiveScreenStack}
      />
      <Drawer.Screen
        name="Feedback"
        options={{
          drawerLabel: 'Feedback ',
          drawerIcon: () => <Icon name="cube" color={'#000'} size={25} />,
        }}
        component={sixScreenStack}
      />
      <Drawer.Screen
        name="Log Out"
        options={{
          drawerLabel: 'log out ',
          drawerIcon: () => (
            <Icon
              name="outdent"
              color={'#000'}
              size={25}
              onPress={() => navigation.navigate('SignUp', {name: 'SignUp'})}
            />
          ),
        }}
        component={SignIn}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  barsViews: {
    backgroundColor: '#F8F8F8',
    width: 35,
    height: 35,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
});
export default App;
