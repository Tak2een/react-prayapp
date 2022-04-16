import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const Item = ({name, comment, profileSrc, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.item]} onPress={onPress}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg} source={{uri: JISU_IMG_SRC}} />
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentName}>{name}</Text>
        <Text style={styles.commentContent}>{comment}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Comment = () => {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <Item
          name={item.name}
          comment={item.comment}
          profileSrc={item.profileSrc}
          onPress={() => {
            console.log(item.id);
            setSelectedId(item.id);
          }}
        />
      );
    },
    [selectedId],
  );
  const onChangeText = useCallback(
    value => {
      console.log(value);
      setText(value);
    },
    [text],
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <View style={styles.commentBar}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImg} source={{uri: JISU_IMG_SRC}} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            placeholder="댓글 달기"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  item: {flexDirection: 'row', backgroundColor: 'white', marginTop: 20},

  profileContainer: {flexBasis: 45, height: 45, marginRight: 10},
  profileImg: {resizeMode: 'cover', width: 45, height: 45, borderRadius: 22.5},
  commentContainer: {flex: 1},
  commentName: {fontSize: 13, color: '#999999', marginBottom: 10},
  commentContent: {fontSize: 16},
  commentBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
  textInputContainer: {flex: 1},
  textInput: {
    backgroundColor: '#F1F3F5',
    borderRadius: 22.5,
    fontSize: 13,
    color: '#CCCCCC',
    paddingBottom: 9,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default Comment;
const DATA = [
  {
    id: '1',
    name: '류수아(foxboxr)',
    comment: '좋네요',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '2',
    name: '이기수(foxboxr)',
    comment: '인정합니다.',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '3',
    name: '김가다(foxboxr)',
    comment: '안좋은데요?',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '1',
    name: '류수아(foxboxr)',
    comment: '좋네요',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '2',
    name: '이기수(foxboxr)',
    comment: '인정합니다.',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '3',
    name: '김가다(foxboxr)',
    comment: '안좋은데요?',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '1',
    name: '류수아(foxboxr)',
    comment: '좋네요',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '2',
    name: '이기수(foxboxr)',
    comment: '인정합니다.',
    profileSrc: JISU_IMG_SRC,
  },
  {
    id: '3',
    name: '김가다(foxboxr)',
    comment: '안좋은데요?',
    profileSrc: JISU_IMG_SRC,
  },
];
const JISU_IMG_SRC =
  'https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDlfMjk5/MDAxNjI4NDk0MjIxMTQ3.qcHkwxU8dtVwZ9SNW9lLmafvqSz8ppEjNEHGHJ4EY9Mg.wb59cCXBTTRNXcAc74BSZb5TWb2clZMtgLNkPLLajeEg.PNG.hwoarangx2/3F3F3F3F_3F3F_The_Album_3F3F_3F3F_1.png?type=w800';
