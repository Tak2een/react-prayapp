import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const OpenPreyItem = ({roomData}) => {
  if (!roomData) {
    return <Text>방 정보 없음.</Text>;
  }

  const {title, subtitle, startTime, endTime, position} = roomData;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Text>
        {startTime} ~ {endTime}
      </Text>
      <Text>{position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default OpenPreyItem;
