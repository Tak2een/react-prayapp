import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Footer from "../Community/Footer";
import Header from "./Header";
import Main from "./Main";
const Post = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="게시글" />
      <Main />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Post;
