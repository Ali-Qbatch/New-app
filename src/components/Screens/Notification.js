import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Notification() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View>
          <View style={styles.tollBarView}>
            <Text>Allow push notification</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <Text style={styles.Notification}>Types Of Notification</Text>
        <View>
          <View style={styles.tollBarView}>
            <Text>Reservation Confirm</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 30,
              justifyContent: 'space-between',
            }}>
            <Text>Reservation Failure</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View>
          <View style={styles.tollBarView}>
            <Text>Reservation Expiration</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View>
          <View style={styles.tollBarView}>
            <Text>Reservation Near Expire</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View>
          <View style={styles.tollBarView}>
            <Text>New Items Availability</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
        <View></View>
        <View>
          <View style={styles.tollBarView}>
            <Text>Items Collected from Store</Text>
            <Switch
              trackColor={{false: '#098DCD', true: '#098DCD'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.border} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Notification: {
    fontFamily: 'Avenir-Book',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: '800',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  tollBarView: {
    display: 'flex',
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between',
  },
  border: {
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    width: '80%',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default Notification;
