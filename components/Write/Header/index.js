import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable style={styles.btn} onPress={() => Alert.alert('취소')}>
          <Text style={styles.text}>취소</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}>게시물 작성</Text>
      </View>
      <View>
        <Pressable style={styles.btn} onPress={() => Alert.alert('게시')}>
          <Text style={[styles.text, {color: '#CCCCCC'}]}>게시</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 18},
  container: {
    flexBasis: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  title: {fontSize: 20},
  btn: {fontSize: 18, backgroundColor: 'white', color: 'black', fontSize: 18},
});

export default Header;
