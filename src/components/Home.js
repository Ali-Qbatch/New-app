import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import styled from 'styled-components';
Icon.loadFont();
function Home() {
  return (

    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'center', marginTop: 50 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TextInput placeholder="Search Item" style={styles.searchInput}>

            </TextInput>
            <Icon style={styles.searchIcon} name="search">
            </Icon>
          </View>

          <Text style={styles.menuView} >
            <Icon style={styles.menuIcon} name="bars"></Icon>
          </Text>
        </View>
        <Text style={styles.heading}>
          Super Discount Detail
    </Text>
        <ScrollView>
          <Row  >
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col><Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
            <Col smSize={100} mdSize={50} lgSize={25}>
              <View style={styles.list}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Image style={{ width: 50, height: 50, }} source={require('../Assets/mobile.png')}></Image>
                  <View style={styles.HeartView}>
                    <Icon name="heart"></Icon>
                  </View>
                </View>
                <Text style={styles.pack} >
                  pack Bag
            </Text>
                <Text style={{ fontSize: 10, margin: 5 }}>
                  Super Hardly Bag
            </Text>
                <Text style={{ fontSize: 12, margin: 5 }}>
                  $ 7
            </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Text style={{ fontSize: 10, margin: 5 }}>
                    per bag
              </Text>
                  <Text style={styles.badge}>
                    30% off
              </Text>
                </View>
              </View>
            </Col>
          </Row>
        </ScrollView>
      </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 250,
    marginLeft: 5,
    position: "relative",

  },
  searchIcon: {
    position: "absolute",
    top: 14,
    left: 225,
    fontSize: 15,
    color: "#808080"
  },
  menuView: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#ccc"
  },
  menuIcon: {
    fontSize: 20,
    color: "#808080"
  },
  heading: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: "Avenir-Book"
  },
  list: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    margin: 5,
    padding: 20
  },
  HeartView: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  badge: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    fontSize: 12
  },
  pack: {
    fontWeight: '600',
    margin: 5,
    fontSize: 16
  }
})
export default Home
