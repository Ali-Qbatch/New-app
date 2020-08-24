import React, {Component} from 'react';
import Heart from '../Assets/Heart/Heart.svg';
// import Toll from '../Assets/Icon/toll.svg';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Buttons from './Buttons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Notification from './Notification';
export class ItemsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      count: 0,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  Increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  Decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.BoxView}>
            <View style={styles.BackButton}>
              <Icon
                name="angle-left"
                size={35}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.view}>
              <Image source={require('../Assets/Load/load.png')} />
            </View>
            <Text style={styles.title}>Grasser - Yellower</Text>
            <View style={styles.PriceView}>
              <Text style={styles.price}>$ 200</Text>
              <View style={styles.heart}>
                <Heart />
              </View>
            </View>
          </View>
          <View style={styles.DescriptionView}>
            <Text style={styles.Description}>Description</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </Text>

            <Text style={styles.dollar}>$ 30 Connect to used</Text>
          </View>
          <View style={styles.ButtonsView}>
            <Buttons name="Reserve Now" onPress={this.toggleModal} />
          </View>

          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.model}>
              <View style={styles.modelHeading}>
                <Text>Grasser - Yellower</Text>
                <Text>$200</Text>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity onPress={() => this.Decrement()}>
                  <View style={styles.plus}>
                    <Icon name="minus" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.counter}>{this.state.count}</Text>

                <TouchableOpacity onPress={() => this.Increment()}>
                  <View style={styles.plus}>
                    <Icon name="plus" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.cartView}>
                <TouchableOpacity style={styles.addToCartView}>
                  <View style={styles.addToCart}>
                    <Text style={styles.CheckOutText}>Add To Cart</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartView}>
                  <View style={styles.checkOut}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Notification', {
                          name: 'Notification',
                        })
                      }>
                      <Text
                        style={styles.CheckOutText}
                        onPress={() =>
                          this.props.navigation.navigate('Notification', {
                            name: 'Notification',
                          })
                        }>
                        Check Out
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.CancelView}>
              <Text style={styles.Cancel} onPress={this.toggleModal}>
                Cancel
              </Text>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  BackButton: {
    margin: '3%',
  },
  ScrollView: {
    marginBottom: 'auto',
  },
  BoxView: {
    backgroundColor: '#F3F3F3',
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#5B5B5A',
    fontFamily: 'Avenir-Book',
  },
  price: {
    fontSize: 28,
    color: '#5B5B5A',
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
  },
  PriceView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  DescriptionView: {
    margin: 20,
  },
  heart: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    padding: 6,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  Description: {
    fontSize: 16,
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
  },
  paragraph: {
    fontSize: 10,
    color: '#5B5B5A',
    marginTop: 10,
    textAlign: 'left',
    lineHeight: 16,
  },
  dollar: {
    fontSize: 18,
    fontFamily: 'Avenir-Book',
    color: '#5B5B5A',
    fontWeight: '800',
    marginTop: 22,
  },
  model: {
    width: 300,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#fff',
  },
  modelHeading: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  plus: {
    width: 25,
    height: 25,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    margin: 10,
  },
  counter: {
    margin: 12,
    fontFamily: 'Avenir-Book',
  },
  addToCart: {
    backgroundColor: '#5B5B5A',
    borderBottomLeftRadius: 10,
    borderColor: '#5B5B5A',
    marginTop: 3,
    padding: 10,
  },
  checkOut: {
    backgroundColor: '#098DCD',
    padding: 10,
    borderBottomRightRadius: 10,
    borderColor: '#5B5B5A',
    marginTop: 3,
  },
  Cancel: {
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  addToCartView: {
    width: 150,
  },
  CancelView: {
    marginTop: 150,
  },
  CheckOutText: {
    color: '#fff',
    textAlign: 'center',
  },
  ButtonsView: {
    marginBottom: 20,
  },
  cartView: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default ItemsDetail;
