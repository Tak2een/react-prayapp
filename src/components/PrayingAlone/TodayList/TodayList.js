import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Title from '../common/Title/Title';
import TodayCard from '../common/TodayCard/TodayCard';

const Styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  SubTitle: {
    marginTop: 33,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    marginRight: 20,
    height: 20,
  },
  SubTitleText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
  },
  ListContainer: {
    alignItems: 'center',
    // backgroundColor: 'black',
    // height: 160,
  },
  ScrollView: {
    height: 560,
  },
});

const TodayList = () => {
  return (
    <View>
      <View style={Styles.Container}>
        <Title text="[100일기도/청원] 친구 건강" width={241} />
        <View style={Styles.SubTitle}>
          <Text style={Styles.SubTitleText}>묵주기도 설명서</Text>
        </View>
      </View>
      <ScrollView style={Styles.ScrollView}>
        <View style={Styles.ListContainer}>
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
          <TodayCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default TodayList;
