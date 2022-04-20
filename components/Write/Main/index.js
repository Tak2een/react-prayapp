import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const Main = () => {
  const [title, setTitle] = useState('');
  const onChangeTitle = useCallback(
    value => {
      console.log('TITLE ::', value);
      setTitle(value);
    },
    [title],
  );
  const [description, setDescription] = useState('');
  const onChangeDescription = useCallback(
    value => {
      console.log('DESCRIPTION ::', value);
      setDescription(value);
    },
    [description],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.titleInput}
          onChangeText={onChangeTitle}
          placeholder="제목 입력"
          value={title}
        />
      </View>
      <View style={styles.descriptionInputContainer}>
        <TextInput
          style={styles.descriptionInput}
          multiline={true}
          numberOfLines={10}
          onChangeText={onChangeDescription}
          placeholder="내용을 입력하세요"
          value={description}
        />
      </View>
      <View style={styles.attachInputContainer}>
        <Text style={styles.attachInput}>첨부하기</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  titleInput: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    paddingVertical: 10,
    fontSize: 18,
  },
  descriptionInputContainer: {
    flex: 1,
  },
  descriptionInput: {
    padding: 10,
    fontSize: 18,
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    marginTop: 10,
    height: 400,
    borderRadius: 7,
  },
  attachInputContainer: {},
  attachInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 7,
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 10,
    fontSize: 15,
  },
});

export default Main;
