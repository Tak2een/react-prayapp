import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../Header';
import Footer from '../../Community/Footer';
import Main from './Main';

const Comment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="댓글" />
      <Main />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
  },
});

export default Comment;
