import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          style={styles.btn}
          title="취소"
          onPress={() => Alert.alert('취소')}
        />
      </View>
      <View>
        <Text style={styles.title}>게시물 작성</Text>
      </View>
      <View>
        <Button
          style={styles.btn}
          title="게시"
          onPress={() => Alert.alert('게시')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {fontSize: 20},
  btn: {fontSize: 18, backgroundColor: 'white'},
});

export default Header;
