import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  const [mode, setMode] = useState('VOICE');
  const speakers = [
    {name: '김희선', nickname: '이사벨라'},
    {name: '신지수', nickname: '이사벨라'},
    {name: '김희선', nickname: '이사벨라'},
    {name: '신지수', nickname: '이사벨라'},
    {name: '김희선', nickname: '이사벨라'},
    {name: '신지수', nickname: '이사벨라'},
    {name: '김희선', nickname: '이사벨라'},
    {name: '신지수', nickname: '이사벨라'},
  ];

  return (
    <View style={styles.container}>
      <View
        style={styles.container.toggleBtn}
        onTouchStart={() =>
          setMode(prev => (prev === 'VOICE' ? 'SPEAKERS' : 'VOICE'))
        }>
        {mode === 'VOICE' ? (
          <Image source={require('../../assets/Group_Speaker.png')} />
        ) : (
          <Image source={require('../../assets/Group_Prey.png')} />
        )}
      </View>

      <View>
        {mode === 'VOICE' ? (
          <ScrollView horizontal style={styles.container.speakerContainer}>
            {speakers.map((speaker, index) => {
              return (
                <View key={index} style={styles.container.speakerContainer.box}>
                  <Text>{speaker.name}</Text>
                  <Text>({speaker.name})</Text>
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <Image
            source={require('../../assets/favpng_pearl-necklace-pearl-necklace.png')}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    toggleBtn: {
      marginLeft: 'auto',
    },
    necklace: {
      marginTop: 'auto',
    },
    speakerContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 15,
      box: {
        width: 100,
        marginRight: 15,
        height: 100,

        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
      },
    },
  },
});

export default Footer;
