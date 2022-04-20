import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Explanation from '../assets/img/explanation.png';
import Title from '../common/Title/Title';

const Styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
  },
  Container: {
    alignItems: 'center',
    width: '100%',
    marginTop: 17,
  },
  Image: {
    resizeMode: 'contain',
    width: null,
    height: 499,
  },
  Wrapper: {
    width: '90%',
  },
  Btn: {
    backgroundColor: '#FFEBAA',
    borderRadius: 6,
    width: 179,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  BtnText: {
    color: '#474747',
    fontSize: 18,
    fontWeight: '600',
  },
});

const TodayExplanation = () => {
  return (
    <View style={Styles.MainContainer}>
      <Title text="묵주기도 설명서" width={146} />
      <View style={Styles.Container}>
        <View style={Styles.Wrapper}>
          <Image source={Explanation} style={Styles.Image} />
        </View>
        <View style={Styles.Btn}>
          <Text style={Styles.BtnText}>혼자기도 시작하기</Text>
        </View>
      </View>
    </View>
  );
};

export default TodayExplanation;
