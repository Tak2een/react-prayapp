import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/OpenPreyRoom/Header';
import VideoPlayer from '../components/OpenPreyRoom/VideoPlayer';
import Chat from '../components/OpenPreyRoom/Chat';

const OpenPreyRoomView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <VideoPlayer />
      <Chat />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenPreyRoomView;
