import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ViewBase } from 'react-native';
import { Button } from 'react-native-paper';
import Buttons from '../Buttons'
export class Mycredit extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
          <View style={styles.Credit}>
            <Text style={styles.Price}>
              $ 95

            </Text>
            <Text style={styles.priceCredit}>
              Available Credit
              </Text>
          </View>
          <Text style={styles.creditUsed}>
            Details of Credit Used:
        </Text>
          <View style={styles.listRow}>
            <View style={styles.ImageView}>
              <Image style={styles.Image} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={styles.TextView}>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    Grasser
              </Text>
                  <Text style={styles.smallFont}>
                    Easy to trim grass
              </Text>
                </View>
                <View>

                </View>
              </View>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    $200
              </Text>
                  <Text style={styles.smallFont}>
                    Creadit Used
              </Text>
                </View>
                <View>

                </View>
              </View>

            </View>
          </View>
          <View style={styles.listRow}>
            <View style={styles.ImageView}>
              <Image style={styles.Image} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={styles.TextView}>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    Grasser
              </Text>
                  <Text style={styles.smallFont}>
                    Easy to trim grass
              </Text>
                </View>
                <View>

                </View>
              </View>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    $200
              </Text>
                  <Text style={styles.smallFont}>
                    Creadit Used
              </Text>
                </View>
                <View>

                </View>
              </View>

            </View>
          </View>
          <View style={styles.listRow}>
            <View style={styles.ImageView}>
              <Image style={styles.Image} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={styles.TextView}>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    Grasser
              </Text>
                  <Text style={styles.smallFont}>
                    Easy to trim grass
              </Text>
                </View>
                <View>

                </View>
              </View>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    $200
              </Text>
                  <Text style={styles.smallFont}>
                    Creadit Used
              </Text>
                </View>
                <View>

                </View>
              </View>

            </View>
          </View>
          <View style={styles.listRow}>
            <View style={styles.ImageView}>
              <Image style={styles.Image} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={styles.TextView}>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    Grasser
              </Text>
                  <Text style={styles.smallFont}>
                    Easy to trim grass
              </Text>
                </View>
                <View>

                </View>
              </View>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    $200
              </Text>
                  <Text style={styles.smallFont}>
                    Creadit Used
              </Text>
                </View>
                <View>

                </View>
              </View>

            </View>
          </View>
          <View style={styles.listRow}>
            <View style={styles.ImageView}>
              <Image style={styles.Image} source={require('../../Assets/mobile.png')}></Image>
            </View>
            <View style={styles.TextView}>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    Grasser
              </Text>
                  <Text style={styles.smallFont}>
                    Easy to trim grass
              </Text>
                </View>
                <View>

                </View>
              </View>
              <View styles={styles.priceDetail}>
                <View>
                  <Text style={styles.BoldFont}>
                    $200
              </Text>
                  <Text style={styles.smallFont}>
                    Creadit Used
              </Text>
                </View>
                <View>

                </View>
              </View>

            </View>
          </View>

          <Buttons name="Go to My Reservations" onPress={() =>
            this.props.navigation.navigate('Reservation', { name: 'Reservation' })} />
        </ScrollView>

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%'
  },
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
    margin: 50,
  },
  Image: {
    width: 50,
    height: 50
  },
  Price: {
    fontWeight: '900',
    fontSize: 42,
    textAlign: 'center',
    fontFamily: "Avenir-Book"
  },
  priceCredit: {
    textAlign: 'center',
    color: '#9B9B9B',
    fontSize: 14
  },
  creditUsed: {
    fontSize: 18,
    fontFamily: "Avenir-Book",
    marginLeft: 40,
    fontWeight: '700'

  },
  listRow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,

    backgroundColor: '#ffff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  ImageView: {
    backgroundColor: '#F3F3F3', padding: 20, width: '20%'
  },
  TextView: {
    width: '80%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  smallFont: {
    fontSize: 10,
    color: '#5B5B5A',
    fontFamily: "Avenir-Book",

  },
  BoldFont: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: "Avenir-Book",
  }
})
export default Mycredit
