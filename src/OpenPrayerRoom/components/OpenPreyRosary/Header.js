import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({stop, setStop, mute, setMute, navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.out} onPress={() => navigation.goBack()}>
          &#60;
        </Text>
        <Text style={styles.title}>열린 기도방 이름</Text>

        <Text style={styles.status}>Live</Text>
        <Text style={styles.personnel}>15명</Text>
      </View>
      <View style={styles.preyRoomConfigureSubHeader}>
        <Text
          style={styles.preyRoomConfigureSubHeader.stopBtn}
          onTouchStart={() => setStop(prev => !prev)}>
          {stop ? '정지' : '시작'}
        </Text>
        <Text style={styles.preyRoomConfigureSubHeader.title}>기도문 제목</Text>
        <Text
          style={styles.preyRoomConfigureSubHeader.sound}
          onTouchStart={() => setMute(prev => !prev)}>
          {mute ? '소리모드' : '음소거'}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  out: {
    color: '#474747',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 15,
    marginRight: 'auto',
    color: '#474747',
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#FFDB66',
    fontSize: 14,
    color: '#474747',
  },
  personnel: {
    color: '#474747',
  },
  preyRoomConfigureSubHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    stopBtn: {
      paddingHorizontal: 10,
      fontSize: 18,
    },
    title: {
      fontSize: 18,
    },
    sound: {
      fontSize: 18,
      marginLeft: 'auto',
    },
  },
});

export default Header;
