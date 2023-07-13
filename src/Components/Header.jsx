import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Global/Colors';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>The Gamer Nest</Text>
      <Text style={styles.text2}>Elija un género:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: 
  {
    height: '10%',
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: 
  {
    fontSize: 25,
    fontFamily: 'Josefin',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  text2:
  {
    fontSize: 20,
    fontFamily: 'Josefin',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    margin:5,
  }
});

export default Header;
