import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.videoContainer}
        source={require('../../assets/test_video.png')}
      />
      <View style={styles.timeInfo}>
        <Text style={styles.timeInfo.text}>6AM 시작예정</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  videoContainer: {},
  timeInfo: {
    width: 120,
    height: 45,
    backgroundColor: '#000000',
    position: 'absolute',
    top: 10,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    text: {
      color: '#FFDB66',
      fontWeight: '500',
      fontSize: 18,
    },
  },
});

export default VideoPlayer;
