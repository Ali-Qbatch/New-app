import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Modal,
  Alert,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reserved from '../Assets/Reserved/Reserved.svg';
export class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
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
    const {modalVisible} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <View style={styles.BackButton}>
            <Icon
              name="angle-left"
              size={35}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <ScrollView>
            <View style={styles.cart}>
              <View style={styles.image}>
                <Image
                  style={styles.cartImage}
                  source={require('../Assets/cart.png')}
                />
              </View>
              <View style={styles.textView}>
                <View style={styles.text}>
                  <Text>Grasser-Yellower</Text>
                  <Text>$200</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.text}>
                  <View style={styles.counterView}>
                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() => this.Decrement()}>
                      <View style={styles.counter}>
                        <Icon name="minus" color={'#1F202033'} size={8} />
                      </View>
                    </TouchableHighlight>
                    <View>
                      <Text style={styles.stateCount}>{this.state.count}</Text>
                    </View>

                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() => this.Increment()}>
                      <View style={styles.counter}>
                        <Icon name="plus" color={'#1F202033'} size={8} />
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.counterView}>
                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() =>
                        navigation.navigate('ItemsDelete', {
                          name: 'ItemsDelete',
                        })
                      }>
                      <View style={styles.crash}>
                        <Icon name="trash" color={'#fff'} size={12} />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}>
                      <View style={styles.crash}>
                        <Icon name="check" color={'#fff'} size={12} />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.CheckOut}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>$400</Text>
              <TouchableHighlight underlayColor="white">
                <View style={styles.addToCart}>
                  <Text style={styles.checkOutText}>Check Out</Text>
                </View>
              </TouchableHighlight>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <ScrollView>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}>
                      <View style={styles.cross}>
                        <Icon name="times" size={20} />
                      </View>
                    </TouchableHighlight>
                    <View style={styles.ReservedModel}>
                      <Reserved />
                    </View>
                    <Text style={styles.modalText}>Items Reserved</Text>
                    <Text style={styles.modalPara}>
                      Grasser-Yellow has been reserved for you collect it
                      immediately
                    </Text>
                    <Text style={styles.expire}>Reserve Expire</Text>
                    <Text style={styles.expireDate}>30 July 2020</Text>
                  </View>
                </View>
              </ScrollView>
            </Modal>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  BackButton: {
    margin: '2%',
  },
  ScrollView: {
    marginBottom: 'auto',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
  },
  cart: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#F3F3F3',
    padding: '3%',
    width: '20%',
  },
  cartImage: {
    maxHeight: 50,
    maxWidth: 50,
  },
  text: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  crash: {
    width: 23,
    height: 23,
    borderRadius: 50,
    padding: 6,
    backgroundColor: '#098DCD',
    marginRight: 3,
  },
  counter: {
    width: 20,
    height: 20,
    borderRadius: 50,
    padding: 6,
    borderWidth: 1,
    borderColor: '#1F202033',
    marginLeft: 5,
  },
  addToCart: {
    backgroundColor: '#098DCD',
    padding: 12,
    color: '#fff',
    fontFamily: 'Avenir-Book',
  },
  total: {
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
    padding: 10,
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    margin: 0,
    minHeight: '100%',
  },
  modalView: {
    backgroundColor: '#F1F1F1',
    padding: 35,
    flex: 1,
  },
  modalText: {
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
    fontSize: 25,
    marginTop: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
  modalPara: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  expire: {
    fontFamily: 'Avenir-Book',
    fontWeight: '600',
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  expireDate: {
    fontSize: 12,
    fontFamily: 'Avenir-Book',
    marginTop: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  cross: {
    marginTop: 20,
    textAlign: 'left',
    alignItems: 'flex-end',
  },
  counterView: {
    display: 'flex',
    flexDirection: 'row',
  },
  stateCount: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
  },
  CheckOut: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  checkOutText: {
    color: '#fff',
    fontWeight: '900',
    fontFamily: 'Avenir-Book',
  },
  ReservedModel: {
    marginBottom: 40,
    marginTop: 100,
    alignItems: 'center',
  },
  border: {
    borderBottomColor: '#f3f3f3',
    borderWidth: 0.4,
    marginLeft: 10,
    marginRight: 10,
  },
  textView: {
    width: '80%',
  },
});
export default Notification;
