import {SafeAreaView} from 'react-native';
import React from 'react';
import TodayList from '../../../components/PrayingAlone/TodayList/TodayList';

const MainView = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <TodayList />
      {/* footer */}
    </SafeAreaView>
  );
};

export default MainView;
