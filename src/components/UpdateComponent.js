import React, {Component} from 'react';
import {TextInput, SafeAreaView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export class UpdateComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={{marginLeft: 20}}>
          <Icon
            name="angle-left"
            size={35}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.UpdateComponent}>
          <TextInput clearButtonMode="always" placeholder="Username" />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  UpdateComponent: {
    backgroundColor: '#0000001A',
    padding: '3%',
  },
});
export default UpdateComponent;
