import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/OpenPreyRosary/Header.js';
import VideoPlayer from '../components/OpenPreyRosary/VideoPlayer.js';
import Footer from '../components/OpenPreyRosary/Footer';

const OpenPreyerRosaryView = ({navigation}) => {
  const [stop, setStop] = useState(false);
  const [mute, setMute] = useState(false);

  const store = {
    stop,
    setStop,
    mute,
    setMute,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header {...store} navigation={navigation} />
      <VideoPlayer {...store} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenPreyerRosaryView;
