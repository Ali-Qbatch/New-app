import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Row, Column as Col, Grid} from 'react-native-responsive-grid';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toll from '../Assets/Icon/toll.svg';
Icon.loadFont();
function Reservation() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.heading}>My Reserved Items</Text>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.listRow}>
            <View style={styles.innerListView}>
              <View style={styles.ListView}>
                <Text style={styles.item}>5 Items Reserved</Text>
                <Text style={styles.item}>$200</Text>
              </View>
              <Text style={styles.text}>Items Included</Text>
            </View>
            <View style={styles.border} />
            <View style={styles.expireView}>
              <View style={styles.history}>
                <Text style={styles.textColor}>
                  <Icon name="history"></Icon> Expire on
                  <Text style={styles.expireDate}>31 july,2020</Text>
                </Text>
              </View>
              <View style={styles.priceConnect}>
                <Text style={styles.item}>$ 70</Text>
                {/* <View style={{ width: 20, fontSize: 10 }}>
                  <Toll style={{ width: 20, fontSize: 10 }} />
                </View> */}
                <Text style={styles.connect}>Connect</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
  },
  listRow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    margin: 10,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  history: {
    backgroundColor: '#098DCD',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#098DCD',
    overflow: 'hidden',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 8,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Avenir-Book',
  },
  SafeAreaView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  innerListView: {
    padding: 16,
  },
  ListView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 10,
    color: '#5B5B5A',
    fontFamily: 'Avenir-Book',
  },
  border: {
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
  },
  expireView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  textColor: {
    color: '#fff',
  },
  expireDate: {
    fontWeight: '800',
  },
  priceConnect: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  connect: {
    marginLeft: 5,
    marginTop: 2,
  },
});
export default Reservation;
