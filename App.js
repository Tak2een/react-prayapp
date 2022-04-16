/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Community from './components/Community';
import Search from './components/Search';
import Post from './components/Post';
import Comment from './components/Post/Comment';

import Write from './components/Write';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Community /> */}
      {/* <Search /> */}
      {/* <Post /> */}
      {/* <Comment /> */}
      <Write />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
