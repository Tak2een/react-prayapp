import {SafeAreaView} from 'react-native';
import React from 'react';
import TodayList from '../../../components/PrayingAlone/TodayList/TodayList';
import Footer from '../../../components/PrayingAlone/common/Footer/Footer';
import Header from '../../../components/PrayingAlone/common/Header/Header';

const MainView = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <TodayList navigation={navigation} />
      <Footer />
    </SafeAreaView>
  );
};

export default MainView;
