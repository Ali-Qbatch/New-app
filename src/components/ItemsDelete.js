import React, {Component} from 'react';
import Buttons from './Buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checked from '../Assets/Reserved/checked.svg';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
export class ItemsDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
          <View style={styles.BackButton}>
            <Icon
              name="angle-left"
              size={35}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View>
            <View style={styles.viewItem}>
              <View>
                <Image
                  style={styles.cartImage}
                  source={require('../Assets/Load/load.png')}
                />
              </View>
              <View style={styles.information}>
                <View>
                  <Text style={styles.Name}>Grasser</Text>
                  <Text style={styles.DownText}>$ 200</Text>
                </View>
                <View>
                  <Text style={styles.Name}>Expiration</Text>
                  <Text style={styles.DownText}>30 July, 2020</Text>
                </View>
                <View>
                  <Text>
                    <View>
                      <Text style={styles.Name}>Connects to used</Text>
                      <Text style={styles.DownText}>$ 30</Text>
                    </View>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptionHeading}>Description</Text>
              <Text style={styles.descriptionPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </Text>
              <Buttons
                name="Cancel Item Reservation"
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </ScrollView>
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
                <View style={styles.removeView}>
                  <Checked />
                </View>
                <Text style={styles.modalText}>Items Rmoved</Text>
                <Text style={styles.modalPara}>
                  Grasser-Yellow has been removed for{'\n'}
                  from your reserve list
                </Text>
                <Buttons
                  name="Go to Reservation"
                  onPress={() =>
                    navigation.navigate('Reservation', {name: 'Reservation'})
                  }
                />
              </View>
            </View>
          </ScrollView>
        </Modal>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#fff',
  },
  BackButton: {
    margin: '2%',
  },
  viewItem: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '5%',
  },
  information: {
    marginTop: '5%',
    marginLeft: '2%',
  },
  DownText: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
    marginBottom: 10,
  },
  Name: {
    fontFamily: 'Avenir-Book',
    marginBottom: 10,
    fontSize: 11,
  },
  description: {
    padding: 30,
  },
  descriptionHeading: {
    fontFamily: 'Avenir-Book',
    fontWeight: '600',
    fontSize: 18,
  },
  descriptionPara: {
    fontSize: 10,
    fontFamily: 'Avenir-Book',
    marginTop: 20,
    color: '#0000004D',
  },
  centeredView: {
    flex: 1,
    margin: 0,
    minHeight: '100%',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 35,
    flex: 1,
    borderRadius: 20,
  },
  modalText: {
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
    fontSize: 25,
    marginTop: '5%',
    textAlign: 'center',
    alignItems: 'center',
  },
  modalPara: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
    marginTop: '3%',
    marginBottom: '4%',
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
  border: {
    borderBottomColor: '#F5F5F5',
    borderWidth: 0.5,
    marginLeft: 7,
  },
  removeView: {
    marginBottom: 40,
    marginTop: '25%',
    alignItems: 'center',
  },
  cartImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
export default ItemsDelete;
