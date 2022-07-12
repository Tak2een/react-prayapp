import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import home from '../../assets/img/home.png';
import yellowHand from '../../assets/img/yellowHand.png';
import footerPeople from '../../assets/img/FooterPeople.png';
import cross from '../../assets/img/cross.png';
import chat from '../../assets/img/chat.png';

const styles = StyleSheet.create({
  FooterView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 105,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  ItemView: {
    display: 'flex',
    flexDirection: 'column',
  },
  ImgView: {
    width: 32,
    height: 32,
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    width: '100%',
    height: '100%',
  },
  Text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E0E0E0',
  },
  YText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFBD00',
  },
});

const Footer = () => {
  return (
    <View style={styles.FooterView}>
      <View style={styles.ItemView}>
        <View style={styles.ImgView}>
          <Image style={styles.Img} source={home}></Image>
        </View>
        <Text style={styles.Text}>메인 화면</Text>
      </View>
      <View style={styles.ItemView}>
        <View style={styles.ImgView}>
          <Image style={styles.Img} source={yellowHand}></Image>
        </View>
        <Text style={styles.YText}>혼자 기도</Text>
      </View>
      <View style={styles.ItemView}>
        <View style={styles.ImgView}>
          <Image style={styles.Img} source={footerPeople}></Image>
        </View>
        <Text style={styles.Text}>소공동체 기도</Text>
      </View>
      <View style={styles.ItemView}>
        <View style={styles.ImgView}>
          <Image style={styles.Img} source={cross}></Image>
        </View>
        <Text style={styles.Text}>열린 기도</Text>
      </View>
      <View style={styles.ItemView}>
        <View style={styles.ImgView}>
          <Image style={styles.Img} source={chat}></Image>
        </View>
        <Text style={styles.Text}>커뮤니티</Text>
      </View>
    </View>
  );
};

export default Footer;
