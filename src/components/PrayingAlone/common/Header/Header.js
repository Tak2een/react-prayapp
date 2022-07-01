import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import people from '../../assets/img/people.png';
import search from '../../assets/img/search.png';
import hand from '../../assets/img/hand.png';
import bell from '../../assets/img/bell.png';

const styles = StyleSheet.create({
  HeaderView: {
    height: 50,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  TitleView: {
    display: 'flex',
    flexDirection: 'row',
  },
  TitleImgView: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  TitleImg: {
    width: '100%',
    height: '100%',
  },
  Title: {
    fontSize: 19,
    fontWeight: 500,
  },
  SubView: {
    display: 'flex',
    flexDirection: 'row',
  },
  subImgView: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  subImg: {
    width: '100%',
    height: '100%',
  },
  subImgView2: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  subImg2: {
    width: '100%',
    height: '100%',
  },
});

const Header = () => {
  return (
    <View style={styles.HeaderView}>
      <View style={styles.TitleView}>
        <View style={styles.TitleImgView}>
          <Image style={styles.TitleImg} source={hand}></Image>
        </View>
        <Text style={styles.Title}>혼자 기도</Text>
      </View>
      <View style={styles.SubView}>
        <View style={styles.subImgView}>
          <Image style={styles.subImg} source={search}></Image>
        </View>
        <View style={styles.subImgView}>
          <Image style={styles.subImg} source={bell}></Image>
        </View>
        <View style={styles.subImgView2}>
          <Image style={styles.subImg2} source={people}></Image>
        </View>
      </View>
    </View>
  );
};

export default Header;
