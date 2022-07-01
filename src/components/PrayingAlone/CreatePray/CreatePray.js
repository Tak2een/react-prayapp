import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Title from '../common/Title/Title';
import prayAloneBook from '../assets/img/prayAloneBook.png';
import check from '../assets/img/check.png';

const Styles = StyleSheet.create({
  Container: {
    width: '90%',
    marginLeft: '5%',
    display: 'flex',
  },
  FlexView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ColumnView: {
    display: 'flex',
    flexDirection: 'column',
  },
  BookImage: {
    width: 41,
    height: 41,
    marginRight: 10,
  },
  TitleText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 18,
  },
  MainText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
  },
  Input: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  AlramText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#747474',
  },
  styleText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
  },
  Btn: {
    backgroundColor: '#CCCCCC',
    borderRadius: 33,
    width: '100%',
    height: 66,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  BtnText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#ffffff',
  },
  checkBox: {
    width: 25,
    height: 25,
    borderColor: '#ffd866',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginRight: 6,
  },
  onOffBox: {
    width: 40,
    height: 20,
    backgroundColor: '#cccccc',
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
  },
  onOffBtn: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 9,
  },
});

const CreatePray = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [isOn, setIsOn] = useState(false);
  return (
    <View>
      <Title text="혼자 기도" width={95} />
      <View style={Styles.Container}>
        <View
          style={[
            Styles.FlexView,
            {marginTop: 10, justifyContent: 'flex-start'},
          ]}>
          <View>
            <Image source={prayAloneBook} style={Styles.BookImage} />
          </View>
          <View>
            <Text style={Styles.TitleText}>9일 기도</Text>
          </View>
        </View>
        <View style={[Styles.ColumnView, {marginTop: 15}]}>
          <Text style={[Styles.MainText, {marginBottom: 5}]}>기도방 명</Text>
          <View>
            <TextInput
              placeholder="[9일기도/기도 구분]"
              style={[Styles.Input, {borderBottomColor: '#949494'}]}
            />
          </View>
        </View>
        <View style={[Styles.ColumnView, {marginTop: 15}]}>
          <Text style={[Styles.MainText, {marginBottom: 5}]}>방 설명</Text>
          <View>
            <TextInput
              style={[
                Styles.Input,
                {borderBottomColor: '#000000', borderBottomWidth: 0.5},
              ]}
            />
          </View>
        </View>
        <View>
          <Text style={[Styles.MainText, {marginBottom: 5, marginTop: 25}]}>
            알림 기능 설정
          </Text>
        </View>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
          <Text style={Styles.AlramText}>알림 ON/OFF</Text>
          <TouchableOpacity
            style={[
              Styles.onOffBox,
              isOn ? {backgroundColor: '#FFBD00', alignItems: 'flex-end'} : {},
            ]}
            onPress={() => {
              setIsOn(!isOn);
            }}>
            <View style={Styles.onOffBtn}></View>
          </TouchableOpacity>
        </View>
        <View style={[Styles.FlexView, {marginTop: 20}]}>
          <Text style={Styles.AlramText}>알림 시간</Text>
          <View style={Styles.FlexView}>
            <Text style={[Styles.styleText, {marginRight: 5}]}>매일</Text>
            <View
              style={{
                backgroundColor: '#F1F3F5',
                width: 77,
                height: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Text
                style={[
                  Styles.styleText,
                  {
                    fontWeight: '400',
                  },
                ]}>
                12:50PM
              </Text>
            </View>
          </View>
        </View>
        <View style={[Styles.FlexView, {marginTop: 20}]}>
          <Text style={Styles.MainText}>기도 구분</Text>
          <View>
            <Text>매일</Text>
            <View></View>
          </View>
        </View>
        <View style={[Styles.FlexView, {marginTop: 20}]}>
          <Text style={Styles.MainText}>레지오단원 전용 여부</Text>
          <View style={Styles.FlexView}>
            <TouchableOpacity
              onPress={() => {
                setIsCheck(!isCheck);
              }}
              style={[
                Styles.checkBox,
                isCheck ? {backgroundColor: '#ffd866'} : {},
              ]}>
              <Image source={check} style={{width: 15, height: 15}} />
            </TouchableOpacity>
            <Text>선택</Text>
          </View>
        </View>
        <View style={Styles.Btn}>
          <Text style={Styles.BtnText}>혼자기도 생성하기</Text>
        </View>
      </View>
    </View>
  );
};

export default CreatePray;
