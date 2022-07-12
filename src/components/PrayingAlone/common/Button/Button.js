import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Vector from '../../assets/img/Vector.png';
import {NavigateContext} from '../../../../view/PrayingAloneView/MainView/MainView';

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

const CustomButton = ({type, text, navigation, number}) => {
  console.log(navigation);
  return type === 'true' ? (
    number ? (
      <View style={styles.Container}>
        <Button
          color="#474747"
          title={text}
          onPress={() => navigation.navigate('Today')}
        />
      </View>
    ) : (
      <View style={styles.Container}>
        <Button
          color="#474747"
          title={text}
          onPress={() => navigation.navigate('List')}
        />
      </View>
    )
  ) : (
    <View style={styles.DayContainer}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Image source={Vector} style={styles.Vector} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
