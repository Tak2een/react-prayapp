import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import mainImg from '../assets/img/prayAloneBook.png';
import Button from '../common/Button/Button';
import Title from '../common/Title/Title';

const styles = StyleSheet.create({
  mainImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main = () => {
  return (
    <View>
      <Title text="혼자 기도" width={95} />
      <View style={styles.Container}>
        <Image source={mainImg} style={styles.mainImg} />
        <Button type="true" text="오늘의 기도 시작" />
        <Button type="false" text="9일 기도" />
        <Button type="false" text="54일 기도" />
        <Button type="false" text="100일 기도" />
        <Button type="true" text="나의 기도목록 보기" />
      </View>
    </View>
  );
};

export default Main;
