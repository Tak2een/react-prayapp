import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import JoinPrayerHeader from '../components/joint_prayer/joint_prayer_header';
import JointPrayerItemList from '../components/joint_prayer/joint_prayer_item_list';
const JointPrayer = () => {
  return (
    <SafeAreaView>
      {/* 헤더 부분 */}
      <JoinPrayerHeader />
      {/* 리스트 부분 */}
      <JointPrayerItemList itemList={[1, 2]} />
      {/* 바텀 부분 */}
    </SafeAreaView>
  );
};

export default JointPrayer;
