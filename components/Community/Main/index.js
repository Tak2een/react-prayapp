import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  // Picker,
} from 'react-native';
// import RNPickerSelect from "react-native-picker-select";

const Item = ({title, description, onPress}) => {
  return (
    <TouchableOpacity style={[styles.itemContainer]} onPress={onPress}>
      <Text style={[styles.itemTitle]}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

const Main = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <Item
          title={item.title}
          description={item.description}
          onPress={() => {
            console.log(item.id);
            setSelectedId(item.id);
          }}
        />
      );
    },
    [selectedId],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>본당 게시판</Text>
          <Text
            style={[
              styles.headerTitleText,
              {color: '#cccccc', marginLeft: 15},
            ]}>
            교구 게시판
          </Text>
        </View>
        <View style={styles.headerChart}>
          <Image source={require('../../../assets/chart.png')} />
        </View>
      </View>
      <View style={styles.pickerContainer}>
        {/* <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue="최신순"
          onValueChange={(itemValue, itemIndex) =>
            console.log(itemValue, itemIndex)
          }
        >
          <Picker.Item label="최신순" value="lastest" />
          <Picker.Item label="댓글순" value="comment" />
          <Picker.Item label="좋아요 수" value="good" />
        </Picker> */}
      </View>
      <View style={styles.article}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF5D4',
  },
  headerTitle: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  headerTitleText: {
    fontSize: 18,
    // fontFamily: "Pretendard",
  },

  headerChart: {
    marginRight: 17,
  },
  article: {flex: 1},
  itemContainer: {
    borderRadius: 7,
    backgroundColor: 'white',
    borderColor: '#FFBD00',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 15,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    // height: 89,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 14,
  },
  pickerContainer: {
    flexBasis: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  picker: {
    width: 130,
    height: 30,
    fontSize: 15,
    color: 'black',
    backgroundColor: '#F1F3F5',
  },
});

const DATA = [
  {
    id: '1',
    title: '성당 정보 공유',
    description: '명동성당 업데이트 된 정보 공유합니다.',
  },
  {
    id: '2',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '3',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '4',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '5',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '6',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '7',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '8',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '9',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
  {
    id: '10',
    title: '질문제목질문제목',
    description:
      '글 본문은 두 중리 초과되면 ...으로 표시 됩니다. 글 본문은 두 줄이 초과되면...으로 표시됩니다.',
  },
];

export default Main;
