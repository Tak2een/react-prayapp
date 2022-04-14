import React from 'react';
import {SafeAreaView} from 'react-native';
import OpenPreyList from '../components/OpenPreyList';
import roomDataMock from '../mocks/roomDataMock';

const OpenPreyView = () => {
  return (
    <SafeAreaView>
      <OpenPreyList roomData={roomDataMock} />
    </SafeAreaView>
  );
};

export default OpenPreyView;
