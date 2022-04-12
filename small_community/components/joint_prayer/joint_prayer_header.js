import React from 'react';

import {Text, Button, View, StyleSheet} from 'react-native';

const JoinPrayerHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonMake}>
        <Text style={styles.text}> 방만들기</Text>
      </View>
      <View style={styles.buttonGo}>
        <Text style={styles.text}>바로 입장하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingHorizontal: '5%',
  },
  buttonMake: {
    width: '46%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 4},
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
  },
  buttonGo: {
    width: '46%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 4},
    borderRadius: 6,
    backgroundColor: '#FFEBAA',
  },
});

export default JoinPrayerHeader;
