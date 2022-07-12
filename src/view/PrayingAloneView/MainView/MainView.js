import Main from '../../../components/PrayingAlone/Main/Main.js';
import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../../components/PrayingAlone/common/Header/Header.js';
import Footer from '../../../components/PrayingAlone/common/Footer/Footer.js';

const MainView = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <Main navigation={navigation} />
      <Footer />
    </SafeAreaView>
  );
};

export default MainView;
