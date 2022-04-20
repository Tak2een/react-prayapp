import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const OpenPreyItem = ({roomData, touchCallback}) => {
  if (!roomData) {
    return <Text>방 정보 없음.</Text>;
  }

  const {room_type} = roomData;

  switch (room_type) {
    case 'any_time': {
      const {title, subtitle, personnel} = roomData;

      return (
        <TouchableNativeFeedback onPress={touchCallback}>
          <View style={styles.anyType.container}>
            <Text style={styles.anyType.title}>{title}</Text>
            <Text style={styles.anyType.subTitle}>{subtitle}</Text>
            <Text style={styles.anyType.personnel}>
              현재 {personnel}명 참여중
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    }
    case 'normal':
      const {title, subtitle, startTime, endTime, position, personnel} =
        roomData;

      return (
        <TouchableNativeFeedback onPress={touchCallback}>
          <View style={styles.normalType.container}>
            <Text style={styles.normalType.title}>{title}</Text>
            <Text style={styles.normalType.time}>
              {startTime} ~ {endTime}
            </Text>
            <Text>{position}</Text>
            <View style={styles.normalType.personnel}>
              <View />
              <Text>{personnel}명</Text>
            </View>

            <Text style={styles.normalType.subTitle}>{subtitle}</Text>
            <TouchableOpacity style={styles.normalType.button}>
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </TouchableNativeFeedback>
      );
    default:
      throw new Error('Unhandled room type');
  }
};

const styles = StyleSheet.create({
  anyType: {
    container: {
      height: 135,
      marginVertical: 7,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#FFBD00',
      backgroundColor: '#FFF5D4',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 22,
    },
    subTitle: {
      fontWeight: '500',
      fontSize: 15,
      color: '#FFA800',
      marginTop: 5,
    },
    personnel: {
      position: 'absolute',
      right: 20,
      bottom: 15,
    },
  },
  normalType: {
    container: {
      height: 135,
      marginVertical: 7,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#FFBD00',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 15,
      fontWeight: '300',
      position: 'absolute',
      right: 20,
      top: 15,
    },
    time: {
      fontWeight: '200',
      marginTop: 5,
    },
    personnel: {
      width: 60,
      height: 25,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#FFBD00',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      position: 'absolute',
      right: 110,
      bottom: 18,
    },
    button: {
      position: 'absolute',
      right: 20,
      bottom: 15,
      backgroundColor: '#FFBD00',
      width: 82,
      height: 34,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#fff',
    },
  },
});

export default OpenPreyItem;
