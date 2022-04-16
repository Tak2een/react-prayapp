import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const Main = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default Main;
