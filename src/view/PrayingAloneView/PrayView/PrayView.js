import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Header from '../../../components/PrayingAlone/common/Header/Header';
import Pray from '../../../components/PrayingAlone/Pray/Pray';

const styles = StyleSheet.create({});

const PrayView = () => {
  return (
    <SafeAreaView>
      <Pray />
    </SafeAreaView>
  );
};

export default PrayView;
