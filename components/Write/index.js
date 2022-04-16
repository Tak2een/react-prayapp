import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Header';
import Main from './Main';

const Write = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default Write;
