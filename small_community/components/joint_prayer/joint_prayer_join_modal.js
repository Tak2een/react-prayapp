import React from 'react';

import {Text, Button, View, StyleSheet} from 'react-native';

const JointPrayerJoinModal = props => {
  return (
    <View style={styles.mainFrame}>
      <View style={styles.rowView}>
        <Text style={styles.title}>기도방 제목</Text>
        <Text style={styles.text}>주최자명</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.text}>신비의 종류:</Text>
        <Text style={styles.text}>환희의 신비</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.grayText}>기도구분:</Text>
        <Text style={styles.grayText}>청원</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.grayText}>참가자 수:</Text>
        <Text style={styles.grayText}>15</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.grayText}>진행여부:</Text>
        <Text style={styles.grayText}>진행중</Text>
      </View>
      <Text style={styles.endText}>참가하시겠습니까?</Text>

      <View style={styles.buttonRow}>
        <View style={styles.cancle}>
          <Text style={styles.title}>취소</Text>
        </View>
        <View style={styles.join}>
          <Text style={styles.title}>참가하기</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFrame: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
  },
  rowView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
  },
  grayText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#949494',
  },
  endText: {
    marginTop: 20,
    marginBottom: 10,
  },

  buttonRow: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 60,
    width: '50%',
    backgroundColor: '#F3F3F3',
    borderBottomLeftRadius: 10,
  },

  join: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 60,
    width: '50%',
    backgroundColor: '#FFEBAA',
    borderBottomRightRadius: 10,
  },
});

export default JointPrayerJoinModal;
