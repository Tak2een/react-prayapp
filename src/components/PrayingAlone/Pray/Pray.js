import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Title from '../common/Title/Title';
import stop from '../assets/img/Stop.png';
import play from '../assets/img/play.png';
import bracelet from '../assets/img/bracelet.png';
import man from '../assets/img/man.png';
import next from '../assets/img/next.png';
import voice from '../assets/img/voice.png';
import xvoice from '../assets/img/XVoice.png';
import Previous from '../assets/img/Previous.png';
import mainNext from '../assets/img/mainNext.png';

const styles = width =>
  StyleSheet.create({
    Wrapper: {
      height: '100%',
    },
    mainImg: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 30,
    },
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    PrayTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: '#474747',
    },
    PrayContent: {
      fontSize: 18,
      fontWeight: '400',
    },
    prayTitleView: {
      width: '90%',
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    StopPlayImg: {
      width: 14,
      height: 14,
      marginRight: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    voiceImg: {
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stopTitleView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    manImg: {
      width: '100%',
      height: 700,
      zIndex: -1,
      display: 'flex',
      justifyContent: 'space-between',
    },
    braceletImg: {
      width: '100%',
      height: 80,
      marginTop: 25,
    },
    braceletImgView: {
      width: '100%',
      height: 150,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    PrayContentView: {
      width: '60%',
      marginTop: 70,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    nextView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      marginTop: 'auto',
    },
    nextText: {
      fontSize: 15,
      fontWeight: '400',
      color: '#000000',
      marginLeft: 15,
    },
    nextText1: {
      fontSize: 15,
      fontWeight: '400',
      color: '#949494',
      marginRight: 15,
    },
    nextBtnImg: {
      width: 12,
      height: 12,
    },
    ProgressBar: {
      marginTop: 15,
    },
    ProgressBarMain: {
      backgroundColor: '#FFBD00',
      height: 4,
      width: width,
      zIndex: 1,
    },
    ProgressBarSub: {
      backgroundColor: '#FFDB66',
      height: 4,
      width: '100%',
      position: 'absolute',
    },
    mainNext: {
      width: 10,
      height: 18,
      marginRight: 15,
    },
    titleView: {
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'row',
      marginTop: 25,
      marginBottom: 15,
    },
    titleText: {
      fontSize: 18,
      fontWeight: '500',
    },
  });

const Pray = ({navigation}) => {
  console.log(navigation.navigate.number);
  const getWidthSize = (main, sub) => {
    const width = (main / sub) * 100;
    return width + '%';
  };
  return (
    <View style={styles().Wrapper}>
      <View style={styles().titleView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={mainNext} style={styles().mainNext}></Image>
        </TouchableOpacity>
        <Text style={styles().titleText}>혼자 기도</Text>
      </View>
      <View>
        <View style={styles().prayTitleView}>
          <View style={styles().stopTitleView}>
            <Image source={stop} style={styles().StopPlayImg}></Image>
            <Text style={styles().PrayTitle}>기도문 제목</Text>
          </View>
          <Image source={voice} style={styles().voiceImg}></Image>
        </View>
        <View>
          <ImageBackground source={man} style={styles().manImg}>
            <View style={styles().PrayContentView}>
              <Text style={styles().PrayContent}>
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
                기도문 본문 기도문 본문 기도문 본문 기도문 본문 기도문 본문
              </Text>
            </View>
            <View style={styles().nextView}>
              <Image source={Previous} style={styles().nextBtnImg}></Image>
              <Text style={styles().nextText}>4</Text>
              <Text style={styles().nextText1}>/9</Text>
              <Image source={next} style={styles().nextBtnImg}></Image>
            </View>
            <View style={styles().ProgressBar}>
              <View style={styles(getWidthSize(4, 9)).ProgressBarMain}></View>
              <View style={styles().ProgressBarSub}></View>
            </View>
            <View style={styles().braceletImgView}>
              <Image source={bracelet} style={styles().braceletImg}></Image>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default Pray;
