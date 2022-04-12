import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Vector from '../../assets/img/Vector.png';

const styles = StyleSheet.create({
  DayContainer: {
    width: 182,
    height: 50,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FFBD00',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#474747',
  },
  Vector: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  Container: {
    width: 182,
    height: 50,
    backgroundColor: '#FFD866',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
});

const Button = ({type, text}) => {
  return type === 'true' ? (
    <View style={styles.Container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  ) : (
    <View style={styles.DayContainer}>
      <Text style={styles.text}>{text}</Text>
      <Image source={Vector} style={styles.Vector} />
    </View>
  );
};

export default Button;
