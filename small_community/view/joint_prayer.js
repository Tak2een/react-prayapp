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
import JoinPrayerHeader from '../components/joint_prayer_header';
const JointPrayer = () => {
  return (
    <SafeAreaView>
      {/* 헤더 부분 */}
      <JoinPrayerHeader />
      {/* 리스트 부분 */}
      {/* 바텀 부분 */}
    </SafeAreaView>
  );
};

export default JointPrayer;
