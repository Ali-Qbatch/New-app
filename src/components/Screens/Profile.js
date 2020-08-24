import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export class Profile extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UpdateComponent', {name: 'UpdateComponent'})
          }>
          <View style={styles.profile}>
            <View>
              <Text style={styles.text}>Name</Text>
            </View>
            <View style={styles.ArrowView}>
              <View>
                <Text style={styles.text}>John Doe</Text>
              </View>
              <View>
                <Icon name="angle-right" size={25} style={styles.Icon} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UpdateComponent', {name: 'UpdateComponent'})
          }>
          <View style={styles.profile}>
            <View>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.ArrowView}>
              <View>
                <Text style={styles.text}>johndoe@gmail.com</Text>
              </View>
              <View>
                <Icon name="angle-right" size={25} style={styles.Icon} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UpdateComponent', {name: 'UpdateComponent'})
          }>
          <View style={styles.profile}>
            <View>
              <Text style={styles.text}>Mobile</Text>
            </View>
            <View style={styles.ArrowView}>
              <View>
                <Text style={styles.text}>03001234567</Text>
              </View>
              <View>
                <Icon name="angle-right" size={25} style={styles.Icon} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#0000001A',
    borderBottomWidth: 0.5,
    borderTopColor: '#0000001A',
    borderTopWidth: 1,
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 30,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'Avenir-Book',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  ArrowView: {
    display: 'flex',
    flexDirection: 'row',
  },
  Icon: {
    marginLeft: 15,
    marginTop: -5,
  },
});
export default Profile;
