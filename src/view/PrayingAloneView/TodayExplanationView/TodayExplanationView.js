import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import TodayExplanation from '../../../components/PrayingAlone/TodayExplanation/TodayExplanation';

const styles = StyleSheet.create({});

const TodayExplanationView = () => {
  return (
    <SafeAreaView>
      {/* header */}
      <TodayExplanation />
      {/* footer */}
    </SafeAreaView>
  );
};

export default TodayExplanationView;
