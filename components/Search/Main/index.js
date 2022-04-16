import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Item = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.itemContainer]} onPress={onPress}>
      <Text style={[styles.itemTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const Main = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = useCallback(
    ({ item }) => {
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
    [selectedId]
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    backgroundColor: "#FFF5D4",
    borderColor: "#FFA800",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 15,
    marginLeft: 27,
    marginRight: 28,
  },
  itemTitle: { fontSize: 15 },
});

export default Main;
const DATA = [
  {
    id: "1",
    title: "목주기도",
  },
  {
    id: "2",
    title: "검색 제목..",
  },
  {
    id: "3",
    title: "검색 제목..",
  },
  {
    id: "4",
    title: "검색 제목..",
  },
  {
    id: "5",
    title: "검색 제목..",
  },
  {
    id: "6",
    title: "검색 제목..",
  },
  {
    id: "7",
    title: "검색 제목..",
  },
  {
    id: "8",
    title: "검색 제목..",
  },
  {
    id: "9",
    title: "검색 제목..",
  },
  {
    id: "10",
    title: "검색 제목..",
  },
];
