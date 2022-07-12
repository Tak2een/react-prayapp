import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Footer from '../../../components/PrayingAlone/common/Footer/Footer';
import Header from '../../../components/PrayingAlone/common/Header/Header';
import CreatePray from '../../../components/PrayingAlone/CreatePray/CreatePray';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

const CreatePrayView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <CreatePray />
      <Footer />
    </SafeAreaView>
  );
};

export default CreatePrayView;
