import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ChatItem = () => {
  return (
    <View styles={styles.container}>
      <Image
        source={require('../../assets/test_profile.png')}
        style={styles.profile}
      />
      <View style={styles.content}>
        <Text>신지수(에블린)</Text>
        <Text>안녕하세요.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 60,
  },
  content: {},
});

export default ChatItem;
