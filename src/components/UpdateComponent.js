import React, { Component } from 'react'
import { TextInput, SafeAreaView, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export class UpdateComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <View style={{ marginLeft: 20 }}>
          <Icon
            name="angle-left"
            size={35}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={{ backgroundColor: '#0000001A', padding: 20, position: 'relative' }} >
          <TextInput
            clearButtonMode="always"
            placeholder="Username"

          />
        </View>

      </SafeAreaView>
    )
  }
}
export default UpdateComponent
