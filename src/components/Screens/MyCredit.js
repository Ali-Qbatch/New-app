import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Buttons from '../Buttons'
export class Mycredit extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <ScrollView>
          <View style={styles.Credit}>
            <Text style={styles.Price}>
              $ 95
            </Text>
          </View>
          <View style={styles.listRow}>
            <View style={{ padding: 10, backgroundColor: '#ccc' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                Grasser
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                Easy to trim grass
          </Text>
            </View>
            <View style={{ padding: 20, paddingLeft: 50 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                $ 200
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                per item
          </Text>
            </View>
          </View>
          <View style={styles.listRow}>
            <View style={{ padding: 10, backgroundColor: '#ccc' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                Grasser
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                Easy to trim grass
          </Text>
            </View>
            <View style={{ padding: 20, paddingLeft: 50 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                $ 200
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                per item
          </Text>
            </View>
          </View>
          <View style={styles.listRow}>
            <View style={{ padding: 10, backgroundColor: '#ccc' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                Grasser
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                Easy to trim grass
          </Text>
            </View>
            <View style={{ padding: 20, paddingLeft: 50 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                $ 200
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                per item
          </Text>
            </View>
          </View>
          <View style={styles.listRow}>
            <View style={{ padding: 10, backgroundColor: '#ccc' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                Grasser
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                Easy to trim grass
          </Text>
            </View>
            <View style={{ padding: 20, paddingLeft: 50 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                $ 200
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                per item
          </Text>
            </View>
          </View>
          <View style={styles.listRow}>
            <View style={{ padding: 10, backgroundColor: '#ccc' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                Grasser
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                Easy to trim grass
          </Text>
            </View>
            <View style={{ padding: 20, paddingLeft: 50 }}>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                $ 200
          </Text>
              <Text style={{ fontSize: 11, marginTop: 8 }}>
                per item
          </Text>
            </View>
          </View>

          <Buttons name="Hello" />
        </ScrollView>

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  Credit: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 8,
    padding: 30,
    margin: 50
  },
  Price: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: "Avenir-Book"
  },
  listRow: {
    backgroundColor: '#F5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5f5f5',
    marginTop: 5,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    minHeight: 70
  },

})
export default Mycredit
