import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/OpenPreyRoom/Header';

const OpenPreyView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* VideoPlayer */}

      {/* Chat */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OpenPreyView;
