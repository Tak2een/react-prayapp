import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OpenPreyList from '../components/OpenPreyList';
import roomDataMock from '../mocks/roomDataMock';

const OpenPreyView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <OpenPreyList roomData={roomDataMock} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenPreyView;
