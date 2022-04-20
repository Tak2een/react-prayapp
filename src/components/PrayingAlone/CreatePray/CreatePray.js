import React from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import Title from '../common/Title/Title';
import prayAloneBook from '../assets/img/prayAloneBook.png';

const Styles = StyleSheet.create({
  Container: {
    width: '90%',
    marginLeft: '5%',
  },
  FlexView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
});

const CreatePray = () => {
  return (
    <View>
      <Title text="혼자 기도" width={95} />
      <View style={Styles.Container}>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
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
          <Text style={[Styles.MainText, {marginBottom: 5}]}>
            알림 기능 설정
          </Text>
        </View>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
          <Text>알림 ON/OFF</Text>
          <View></View>
        </View>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
          <Text>알림 시간</Text>
          <View>
            <Text>매일</Text>
            <Text>12:50PM</Text>
          </View>
        </View>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
          <Text style={Styles.MainText}>기도 구분</Text>
          <View>
            <Text>매일</Text>
            <View></View>
          </View>
        </View>
        <View style={[Styles.FlexView, {marginTop: 10}]}>
          <Text style={Styles.MainText}>레지오단원 전용 여부</Text>
          <View>
            <View></View>
            <Text>선택</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreatePray;
