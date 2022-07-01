import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Footer from '../../../components/PrayingAlone/common/Footer/Footer';
import Header from '../../../components/PrayingAlone/common/Header/Header';
import List from '../../../components/PrayingAlone/List/List';

const styles = StyleSheet.create({});

const ListView = () => {
  return (
    <SafeAreaView>
      <Header />
      <List />
      <Footer />
    </SafeAreaView>
  );
};

export default ListView;
