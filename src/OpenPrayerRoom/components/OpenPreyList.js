import React from 'react';
import {StyleSheet, View} from 'react-native';
import OpenPreyItem from './OpenPreyItem';

const OpenPreyList = ({roomData}) => {
  const mapRoomList = roomData.map(data => <OpenPreyItem roomData={data} />);

  return <View>{mapRoomList}</View>;
};

const styles = StyleSheet.create({});

export default OpenPreyList;
