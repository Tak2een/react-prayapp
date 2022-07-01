import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Footer from '../../../components/PrayingAlone/common/Footer/Footer';
import Header from '../../../components/PrayingAlone/common/Header/Header';
import TodayExplanation from '../../../components/PrayingAlone/TodayExplanation/TodayExplanation';

const styles = StyleSheet.create({});

const TodayExplanationView = () => {
  return (
    <SafeAreaView>
      <Header />
      <TodayExplanation />
      <Footer />
    </SafeAreaView>
  );
};

export default TodayExplanationView;
