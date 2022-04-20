import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Header = () => {
  const [text, setText] = useState("");
  const onChangeText = useCallback(
    (value) => {
      console.log(value);
      setText(value);
    },
    [text]
  );
  const onClickSearchButton = useCallback(() => {
    console.log(`CLICKED SEARCH_BTN RESULT :: ${text}`);
  }, [text]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder="글 제목, 본문, 작성자명으로 검색"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onClickSearchButton}
        activeOpacity={1}
      >
        <View>
          <Image
            style={styles.searchButton}
            source={require("../../../assets/Search/search.png")}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: 84,
    backgroundColor: "#FFF5D4",
    flexDirection: "row",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    marginLeft: 25,
  },
  textInput: {
    height: 47,
    borderWidth: 1,
    borderColor: "#FFBD00",
    borderRadius: 15,
    paddingLeft: 26.67,
    paddingTop: 15,
    paddingBottom: 14,
    fontSize: 15,
  },
  buttonContainer: {
    flexBasis: 47,
    marginLeft: 6,
    backgroundColor: "white",
    justifyContent: "center",
    marginRight: 30,
    height: 47,
    borderColor: "#FFBD00",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  searchButton: {},
});

export default Header;
