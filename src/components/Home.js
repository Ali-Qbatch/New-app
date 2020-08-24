import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Row, Column as Col} from 'react-native-responsive-grid';
import Heart from '../Assets/Heart/Heart.svg';
import Bars from '../Assets/Icon/Bars.svg';
Icon.loadFont();
function Home({navigation}) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.View}>
        <View style={styles.InnerView}>
          <View style={styles.searchView}>
            <TextInput
              placeholder="Search Item"
              style={styles.searchInput}></TextInput>
            <Icon style={styles.searchIcon} name="search"></Icon>
          </View>
          <TouchableOpacity>
            <View style={styles.menuView}>
              <Bars />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Super Discount Detail</Text>
        <ScrollView style={styles.ScrollView}>
          <Row>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/mobile.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    <Text style={styles.badge}>30% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/load.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 200</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per item</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/load.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 200</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    <Text style={styles.badge}>30% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {
                    name: 'ItemsDetail',
                    image: 'mobile.png',
                  })
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/mobile.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={50}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/mobile.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    <Text style={styles.badge}>30% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/load.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    {/* <Text style={styles.badge}>
                    30% off
              </Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/mobile.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    <Text style={styles.badge}>30% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
            <Col smSize={50} mdSize={50} lgSize={25}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsDetail', {name: 'ItemsDetail'})
                }>
                <View style={styles.list}>
                  <View style={styles.listView}>
                    <Image source={require('../Assets/mobile.png')}></Image>
                    <View style={styles.HeartView}>
                      <Heart />
                    </View>
                  </View>
                  <Text style={styles.pack}>Pack Bag</Text>
                  <Text style={styles.bag}>Super Hardly Bag</Text>
                  <Text style={styles.price}>$ 7</Text>
                  <View style={styles.badgeView}>
                    <Text style={styles.bag}>per bag</Text>
                    <Text style={styles.badge}>30% OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#fff',
  },
  ScrollView: {
    marginBottom: 'auto',
  },
  View: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20,
  },
  InnerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 250,
    marginLeft: 5,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 14,
    left: 225,
    fontSize: 15,
    color: '#808080',
  },
  menuView: {
    width: 40,
    height: 40,
    backgroundColor: '#F8F8F8',
    padding: 7,
    borderRadius: 5,
    marginLeft: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#F8F8F8',
  },
  menuIcon: {
    fontSize: 20,
    color: '#808080',
  },
  heading: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Avenir-Book',
  },
  listView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    margin: 5,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  HeartView: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    padding: 6,
    borderRadius: 50,
  },
  badgeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#098DCD',
    color: '#fff',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#098DCD',
    overflow: 'hidden',
    fontSize: 10,
    fontFamily: 'Avenir-Book',
  },
  pack: {
    fontWeight: '800',
    marginTop: 5,
    fontSize: 14,
    color: '#5B5B5A',
    fontFamily: 'Avenir-Book',
  },
  price: {
    color: '#5B5B5A',
    fontWeight: '900',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Avenir-Book',
  },
  bag: {
    fontSize: 10,
    marginTop: 5,
    color: '#5B5B5A',
    fontFamily: 'Avenir-Book',
  },
});
export default Home;
