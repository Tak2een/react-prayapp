import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import TodayImg from '../../assets/img/TodayImg.png';

const Styles = StyleSheet.create({
  Container: {
    width: '90%',
    borderRadius: 7,
    borderColor: '#FFBD00',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 10,
  },
  DayView: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
  },
  LeftDay: {
    width: 20,
    height: 20,
    backgroundColor: '#FFBD00',
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RightDay: {
    width: 100,
    height: 35,
    backgroundColor: '#FFBD00',
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DayText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '500',
  },
  DayImg: {
    width: 70,
    height: 70,
  },
  Item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  ItemTextView: {
    height: 70,
    marginLeft: 20,
    width: '70%',
  },
  PrayerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    width: '60%',
  },
  PrayerExplanation: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
  },
  PrayerExplanationView: {
    width: '100%',
    marginTop: 5,
  },
  HiddenBtn: {
    height: 53,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#FFBD00',
    borderTopWidth: 1,
  },
  Btn: {
    backgroundColor: '#FFBD00',
    borderRadius: 7,
    width: 160,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
  },
});

const TodayCard = () => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <TouchableOpacity
      style={Styles.Container}
      onPress={() => setShowBtn(!showBtn)}>
      <View style={Styles.DayView}>
        <View style={Styles.LeftDay}>
          <Text style={Styles.DayText}>N</Text>
        </View>
        <View style={Styles.RightDay}>
          <Text style={Styles.DayText}>N/N</Text>
        </View>
      </View>
      <View style={Styles.Item}>
        <TouchableOpacity>
          <Image source={TodayImg} style={Styles.DayImg} />
        </TouchableOpacity>
        <View style={Styles.ItemTextView}>
          <Text style={Styles.PrayerName}>기도명 입력</Text>
          <View style={Styles.PrayerExplanationView}>
            <Text
              style={Styles.PrayerExplanation}
              numberOfLines={2}
              ellipsizeMode="tail">
              기도문 설명 기도문 설명 기도문 설명 기도문 설명 기도문 설명 기도문
              설명 기도문 설명 기도문 설명 기도문 설명 기도문 설명기도문 설명
            </Text>
          </View>
        </View>
      </View>
      {showBtn && (
        <View style={Styles.HiddenBtn}>
          <TouchableOpacity style={Styles.Btn}>
            <Text style={Styles.BtnText}>처음부터 시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.Btn}>
            <Text style={Styles.BtnText}>이어서 하기</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TodayCard;
