import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
function Reservation() {
  return (
    <SafeAreaView style={{ margin: 15 }}>
      <Text style={styles.heading}>
        My Reserved Items
      </Text>
      <ScrollView>
        <Row>
          <Col smSize={100} mdSize={100} lgSize={100} style={styles.listRow}>
            <Row>
              <Col smSize={20} mdSize={20} lgSize={20} style={{ backgroundColor: "#ccc", padding: 20 }}>
                <Image style={{ width: 50, height: 50 }} source={require('../Assets/mobile.png')}></Image>
              </Col>
              <Col smSize={50} mdSize={50} lgSize={50}>
                <View style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                  <Text>
                    Grasser
                  </Text>
                  <Text style={{ fontSize: 10 }}>
                    Easy to trim grass
                  </Text>
                </View>
              </Col>
              <Col smSize={30} mdSize={30} lgSize={30}>
                <View style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600' }}>
                    $ 200
                  </Text>
                  <Text>
                    per item
                  </Text>
                </View>
              </Col>

            </Row>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
              }}
            />
            <Row>
              <Col smSize={60} mdSize={60} lgSize={60}>


                <Text style={styles.history}><Icon style={{ marginRight: 10 }} name="history"></Icon>Exprires on 31 july,2020</Text>
              </Col>
            </Row>
          </Col>
        </Row>

      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: "Avenir-Book",
    fontWeight: '600'
  },
  listRow: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    margin: 10,
    overflow: 'hidden'
  },
  history: {
    backgroundColor: '#000',
    color: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    overflow: "hidden",
    padding: 5,
    fontSize: 12,
    textAlign: 'center'

  }
})
export default Reservation
