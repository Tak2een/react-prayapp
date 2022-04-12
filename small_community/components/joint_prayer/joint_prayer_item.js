import React from 'react';

import {Text, Button, View, StyleSheet} from 'react-native';

const JointPrayerItem = () => {
  return (
    <View style={styles.header}>
      <View style={styles.columnView}>
        <View style={{marginBottom: '7%'}}>
          <Text style={styles.title}>기도명</Text>
          <Text style={styles.time}>00:00AM ~ 00:00AM</Text>
        </View>
        <Text style={styles.location}>성당/지역/주체자명</Text>
      </View>
      <View style={styles.columnView}>
        <Text>N일기도(감사기도)</Text>

        <View style={styles.rowView}>
          <View style={styles.rowEllipseView}>
            <View style={styles.circle}></View>
            <Text style={styles.peopleCount}>N명</Text>
          </View>

          <View style={styles.buttonJoin}>
            <Text style={styles.buttonText}>참여하기</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: '4%',
    marginHorizontal: '4%',
    borderWidth: 1,
    borderColor: '#FFBD00',
    borderRadius: 8,
    backgroundColor: 'white',
  },

  columnView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontWeight: '600',
    fontSize: 25,
  },
  time: {
    fontWeight: '300',
    lineHeight: 18,
    fontSize: 15,
    letterSpacing: -0.3,
  },
  location: {
    fontWeight: '300',
    lineHeight: 17.5,
    fontSize: 14.5,
    letterSpacing: -0.3,
  },

  rowView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonJoin: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    borderRadius: 6,

    backgroundColor: '#FFBD00',
  },

  buttonText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  circle: {
    backgroundColor: 'green',
    height: 10,
    width: 10,
    borderRadius: 15,
  },
  peopleCount: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
  },
  rowEllipseView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#FFEBAA',
  },
});

export default JointPrayerItem;
