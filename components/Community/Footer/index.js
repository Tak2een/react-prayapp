import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>footer</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexBasis: 105,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
