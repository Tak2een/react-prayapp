import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Commnuity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Commnuity;
