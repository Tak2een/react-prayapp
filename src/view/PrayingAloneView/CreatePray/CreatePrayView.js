import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CreatePray from '../../../components/PrayingAlone/CreatePray/CreatePray';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

const CreatePrayView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CreatePray />
    </SafeAreaView>
  );
};

export default CreatePrayView;
