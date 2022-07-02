import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const VideoPlayer = ({stop, setStop, mute, setMute}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.videoContainer}
        source={require('../../assets/test_video.png')}
      />
      <View style={styles.videoContainer}>
        <Text style={styles.videoContainer.preyLine}>
          기도문 내용 기도문 내용 기도문 내용
        </Text>
        <Text style={styles.videoContainer.preyLine}>
          기도문 내용 기도문 내용 기도문 내용
        </Text>
        <Text style={styles.videoContainer.preyLine}>
          기도문 내용 기도문 내용 기도문 내용
        </Text>
        <Text style={styles.videoContainer.preyLine}>
          기도문 내용 기도문 내용 기도문 내용
        </Text>
        <Text style={styles.videoContainer.preyLine}>
          기도문 내용 기도문 내용 기도문 내용
        </Text>
      </View>
      <View style={styles.speakerContainer}>
        <Text style={styles.speakerContainer.speaker}>방수혁(베드로)</Text>
        <Text style={styles.speakerContainer.sound}>
          {mute ? '소리모드' : '음소거'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
    preyLine: {
      lineHeight: 20,
    },
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 10,
    left: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    speaker: {
      color: 'white',
      fontWeight: '500',
      fontSize: 15,
    },
    sound: {
      color: 'white',
      fontWeight: '500',
      fontSize: 15,
    },
  },
});

export default VideoPlayer;
