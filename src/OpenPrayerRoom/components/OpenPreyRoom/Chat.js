import React from 'react';
import {View, ScrollView, StyleSheet, TextInput, Button} from 'react-native';
import ChatItem from './ChatItem';

const Chat = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatListContainer}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputContainer.input}
          value={text}
          onChange={onChangeText}
          placeholder="댓글 달기"
        />
        <Button title="전송" style={styles.inputContainer.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: 350,
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  chatListContainer: {},
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 37,
    input: {
      width: '90%',
      height: 30,
      borderRadius: 3,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      backgroundColor: '#FFBD00',
      borderRadius: 3,
      width: 40,
      height: 30,
    },
  },
});

export default Chat;
