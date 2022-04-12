import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Alarm from '../../assets/img/Alarm.png';

const Styles = width =>
  StyleSheet.create({
    Container: {
      width: '90%',
      height: 101,
      borderColor: '#FFBD00',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 7,
      padding: 15,
      marginBottom: 10,
    },
    Title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
      width: '70%',
    },
    Warrper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '50%',
      justifyContent: 'space-between',
    },
    AlarmText: {
      fontSize: 13,
      fontWeight: '500',
      color: '#000000',
    },
    AlarmImg: {
      width: 20,
      height: 20,
    },
    AlarmView: {
      width: '27%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Progress: {
      width: '70%',
      display: 'flex',
    },
    ProgressTitle: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      width: '30%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ProgressMain: {
      fontSize: 18,
      fontWeight: '700',
      color: '#000000',
    },
    ProgressSub: {
      fontSize: 14,
      fontWeight: '400',
      color: '#000000',
    },
    ProgressBar: {},
    ProgressBarMain: {
      backgroundColor: '#FFBD00',
      height: 4,
      width: width,
      zIndex: 1,
    },
    ProgressBarSub: {
      backgroundColor: '#FFDB66',
      height: 4,
      width: '100%',
      position: 'absolute',
    },
    Button: {
      backgroundColor: '#FFBD00',
      borderRadius: 5,
      height: '100%',
      width: '27%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ButtonText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#000000',
    },
  });

const ListCard = ({main, sub}) => {
  const getWidthSize = (main, sub) => {
    const width = (main / sub) * 100;
    return width + '%';
  };

  return (
    <View style={Styles().Container}>
      <View style={Styles().Warrper}>
        <Text style={Styles().Title}>[N일기도/기도구분] 기도명</Text>
        <View style={Styles().AlarmView}>
          <Text style={Styles().AlarmText}>알림 ON</Text>
          <TouchableOpacity>
            <Image style={Styles().AlarmImg} source={Alarm} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles().Warrper}>
        <View style={Styles().Progress}>
          <View style={Styles().ProgressTitle}>
            <Text style={Styles().ProgressMain}>{main}일</Text>
            <Text>/ {sub}일</Text>
          </View>
          <View style={Styles().ProgressBar}>
            <View
              style={Styles(getWidthSize(main, sub)).ProgressBarMain}></View>
            <View style={Styles().ProgressBarSub}></View>
          </View>
        </View>
        <View style={Styles().Button}>
          <Text style={Styles().ButtonText}>신비명</Text>
        </View>
      </View>
    </View>
  );
};

export default ListCard;
